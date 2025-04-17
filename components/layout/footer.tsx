import Logo from "./logo";
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto flex max-w-5xl justify-between">
        <div className="max-w-sm">
          <Logo bg={"dark"} />
          <p className="mt-2 text-sm font-extralight">
            O CodanteVagas conecta candidatos a empregos ideais, oferecendo
            funcionalidades intuitivas para busca e gerenciamento de vagas.
          </p>
        </div>
        <div className="flex gap-3">
          <FaInstagram className="size-5 transition-colors hover:cursor-pointer hover:text-blue-400" />
          <LuGithub className="size-5 transition-colors hover:cursor-pointer hover:text-blue-400" />
          <IoMailOutline className="size-5 transition-colors hover:cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </footer>
  );
}
