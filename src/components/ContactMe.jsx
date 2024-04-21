import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export default function ContactMe(){
    return(
        <div className="mt-24 flex items-center gap-x-8">
            <img
            width={100}
            src="/imgs/fotopersonal.jpg"


            />
            <div className="flex gap-x-8">
                <a
                href="https://www.linkedin.com/in/juan-mateo-buccolini/"
                target="_blank"
                ><FiLinkedin size={40} title="Linkedin" stroke="white"/></a>
                <a
                href="https://github.com/JMBuccolini"
                target="_blank"
                ><FiGithub size={40} stroke="white"/></a>
                <a
                href="mailto:juanmateobuccolini@gmail.com"
                target="_blank"
                ><MdOutlineMailOutline size={40} className="text-white"  /></a>
            </div>
        </div>
    )
}