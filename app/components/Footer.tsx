import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-[#DD5A2D] p-8">
        <div
          className="w-full max-w-[1100px]
          mx-auto text-white"
        >
          <h1 className="text-3xl ">Au Bon Braisé du Portugal</h1>
          <p>La tradition portugaise, le goût de la braise.</p>
          <div className="flex gap-3 mt-4">
            <FaFacebook size={24} href=""/>
            <FaInstagram size={24} href=""/>
            <Mail size={24} href=""/>
          </div>
          <div className="py-8 px-4 grid">
            <a href="#accueil">Accueil</a>
            <a href="#histoire">Notre histoire</a>
            <a href="#carte">Notre carte</a>
            <a href="#point_vente">Points de vente</a>
            <a href="#evenement">Événements</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}
