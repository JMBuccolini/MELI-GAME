import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export default function ContactMe() {
  return (
    <div className="mt-24 flex items-center gap-x-8">
      <div className="overflow-hidden inline-block rounded-3xl w-full h-full">
        <img width={100} src="/imgs/foto-primerplano.jpeg" className="transition-all ease-in-out duration-500 hover:scale-150  "/>
      </div>
      <div className="flex gap-x-8">
        <a
        className="hover:scale-125 transition-all duration-500 ease-in-out"
          href="https://www.linkedin.com/in/juan-mateo-buccolini/"
          target="_blank"
        >
          <FiLinkedin size={40} title="Linkedin" stroke="white" />
        </a>
        <a
        className="hover:scale-125 transition-all duration-500 ease-in-out" href="https://github.com/JMBuccolini" target="_blank">
          <FiGithub size={40} stroke="white" />
        </a>
        <a
        className="hover:scale-125 transition-all duration-500 ease-in-out" href="mailto:juanmateobuccolini@gmail.com" target="_blank">
          <MdOutlineMailOutline size={40} className="text-white" />
        </a>
      </div>
    </div>
  );
}
