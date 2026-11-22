import { Mail } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-[#DD5A2D] p-8 text-sm">
        <div
          className="w-full max-w-[900px]
                mx-auto text-white
                grid grid-cols-2
                justify-items-center"
        >
          <div className="flex flex-col text-center gap-3">
            <h1 className="text-3xl text-center font-bold">
              Au Bon Braisé du Portugal
            </h1>
            <p>La tradition portugaise, le goût de la braise.</p>
            <p>Retrouvez-nous sur les marchés des Hauts-de-France.</p>
            <div className="flex justify-center gap-4 mt-3">
              <a
                href="https://www.facebook.com/aubonbraiseduportugal"
                target="_blank"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/aubonbraise.duportugal?jplx=YmQ0dnEzbGxwcm5h"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>
              <a href="mailto:aubonbraise@gmail.com" target="_blank">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="grid text-center gap-1">
            <h2 className="text-3xl font-bold">Navigation</h2>
            <a href="#accueil">Accueil</a>
            <a href="#histoire">Notre histoire</a>
            <a href="#carte">Notre carte</a>
            <a href="#point_vente">Points de vente</a>
            <a href="#evenement">Événements</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div
          className="w-full max-w-[1100px]
                mx-auto text-white flex items-center justify-center mt-10 grid text-center border-t"
        >
          <p className="mt-4">
            © {new Date().getFullYear()} Au Bon Braisé du Portugal | Tous droits
            réservés.
          </p>
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-de-confidentialite">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </>
  );
}
