import "tailwindcss";
import Image from "next/image"

export default function Header(){
    return(
        <div>
            <div className="flex justify-around bg-[#214F7C] text-white p-3">
                <p>Rotisserie Portugaise - Marchés événement</p>
            </div>
            <div className="flex gap-8 items-center mr-10 bg-[#FFFDF7] p-4 rounded-lg shadow-md">
                <Image
                src="/logo.png"
                alt="Logo Au Bon Braisé du Portugal"
                width={100}
                height={100}
                className="ml-10"
                />
                <div className="flex flex-col gap-2">
                    <p className="ml-4">Au Bon Braisé du Portugal</p>
                    <p className="ml-4">Rotisserie Portugaise</p>
                </div>
                <div className="flex gap-8 ml-auto mr-10">
                    <a href="carte" className="m-4 p-2 hover:underline">Notre carte</a>
                    <a href="point_vente" className="m-4 p-2 hover:underline">Nos point de vente</a>
                    <a href="histoire" className="m-4 p-2 hover:underline">Notre histoire</a>
                    <a href="contact" className="bg-[#DD5A2D] text-white hover:underline m-4 p-2 rounded-lg">
                        Nous contacter
                    </a>
                </div>
            </div>
        </div>
    )
}
