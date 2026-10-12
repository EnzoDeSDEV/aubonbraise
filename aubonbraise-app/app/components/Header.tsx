import "tailwindcss";
import Image from "next/image"

export default function Header(){
    return(
        <div>
            <div className="flex justify-around bg-[#214F7C] text-white p-3">
                <p>Rotisserie Portugaise - Marchés événement</p>
            </div>
            <div className="flex gap-8 items-center">
                <Image
                src="/logo.png"
                alt="Logo Au Bon Braisé du Portugal"
                width={80}
                height={80}
                />
                <div className="flex gap-8 ml-auto mr-10">
                <a href="carte">Notre carte</a>
                <a href="point_vente">Nos point de vente</a>
                <a href="histoire">Notre histoire</a>
                <a href="contact">Nous contacter</a>
                </div>
            </div>
        </div>
    )
}
