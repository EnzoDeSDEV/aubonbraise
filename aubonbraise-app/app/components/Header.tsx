import "tailwindcss";
import Image from "next/image"

export default function Header(){
    return(
        <div className="sticky w-full top-0 z-50">
            <div className="flex justify-around bg-[#214F7C] text-white p-3">
                <p>Rotisserie Portugaise - Marchés événement</p>
            </div>
            <div className="flex gap-8 items-center bg-[#FFFDF7] p-4 rounded-lg shadow-md">
                <Image
                src="/logo.png"
                alt="Logo Au Bon Braisé du Portugal"
                width={100}
                height={100}
                className="ml-10"
                />
                <div className="flex flex-col gap-2 justify-center">
                    <p className="ml-4 font-bold">Au Bon Braisé du Portugal</p>
                    <p className="ml-4">Rotisserie Portugaise</p>
                </div>
                <div className="flex items-center ml-auto gap-8 ">
                    <a href="carte" className=" p-2 hover:underline">Notre carte</a>
                    <a href="point_vente" className=" p-2 hover:underline">Nos points de vente</a>
                    <a href="#histoire" className=" p-2 hover:underline">Notre histoire</a>
                     <a href="contact" className="bg-[#DD5A2D] text-white hover:underline  p-4 rounded-4xl ">
                        Nous contacter
                    </a>
                </div>
                {/*}
                <div className="flex justify-end">
                    <a href="contact" className="bg-[#DD5A2D] text-white hover:underline  p-4 rounded-4xl ">
                        Nous contacter
                    </a>
                </div>*/}
            </div>
        </div>
    )
}