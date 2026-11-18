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
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <Mail size={24} />
          </div>
          <div className="py-8 px-4">
            <p>Accueil</p>
            <p>Notre histoire</p>
            <p>Notre carte</p>
            <p>Points de vente</p>
            <p>Événements</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}
