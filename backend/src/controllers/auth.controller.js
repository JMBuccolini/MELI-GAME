import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { createAccessToken } from "../libs/jwt.js";

dotenv.config()

export const register = async (req, res) => {
  const { email, password, username, img } = req.body;

  try {


    const userFound = await User.findOne({
      $or: [{ email: email }, { username: username }]
    });
    if(userFound) return res.status(400).json(['the email or username are already in use'])
    const passwordHash = await bcrypt.hash(password, 10); //hasheamos el pass
    const newUser = new User({ username, email, password: passwordHash, img }); //instanciamos los datos con el pass hasheado
    const userSaved = await newUser.save(); //guardamos los datos
 
    const token = await createAccessToken({
      id: userSaved._id,
    }); //creamos el token con la función que está en libs para determinar si el usuario se logueó o no

    res.cookie("token", token); //guardamos en cookies del navegador el token

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      image: userSaved.img,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    }); //respondemos al frontend con la info del usuario logueado
  } catch (error) {
    console.log("error en el registro",error)
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email }); //buscamos si el usuario existe
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password); //en caso de existir en nuestra DB comparamos el pass

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    const token = await createAccessToken({
      id: userFound._id,
    }); //creamos el token con la función que está en libs para determinar si el usuario se logueó o no

    res.cookie("token", token); //guardamos en cookies del navegador el token

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      image:userFound.img,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    }); //respondemos al frontend con la info del usuario logueado
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expired: new Date(0),
  });

  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    image:userFound.img,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });

};

export const verifyToken = async (req,res)=>{
  const {token} = req.cookies
  if(!token) return res.status(401).json({message: "Unauthorized"})

  jwt.verify(token, process.env.TOKEN_SECRET, async (err,user)=>{
    if(err) return res.status(401).json({message:"Unauthorized"})
    const userFound = await User.findById(user.id)

      if(!userFound) return res.status(401).json({message: "Unauthorized"})

    return res.json({
      id: userFound._id,
      username: userFound.username,
      image:userFound.img,
      email: userFound.email
    })
  })
}