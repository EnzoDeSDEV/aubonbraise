import Section from "../components/Section";
import Button from "../components/Button";
import Image from "next/image"

export default function Homepage(){
  return(
<>
    <Section className="bg-[#F7F3E8] ">
      <div className="flex  space-y-4 ml-auto mr-auto w-[90%]">
        <div className="flex flex-col justify-center space-y-4 gap-10">
          <div>
           <h1 className="text-7xl font-bold mb-4">
            Le goût du Portugal,
          </h1>
          <h1 className="text-7xl font-bold mb-4 text-[#214F7C]">
            à partager !
          </h1> 
          </div>
          
          <div className="flex flex-col">
            <p className="text-lg mb-4">
              Une rotisserie portugaise placée sous le signe de la braise, des saveurs généreuses et des bons moments autour de la table.
            </p>
            <div className="flex gap-4 items-start" >
              <Button as="a" href="/carte" text="Notre carte" className="bg-[#DD5A2D] text-white hover:underline  p-4 rounded-4xl" />
              <Button as="a" href="/point_vente" text="Nos points de vente" className="bg-[#FFFFF] border border-[#214F7C] text-[#214F7C] hover:underline  p-4 rounded-4xl" />
          </div>
        </div>
      </div>
        
        <Image
          src="/homepage_image.png"
          alt="Image de présentation"
          width={600}
          height={400}
          className="justify-end ml-auto"
        />
      </div>

    </Section>

    <Section className="">
      <h1 className="text-center text-4xl font-bold mb-4">
        Içi, découvrez des produits français cuisinés à la portugaise, ainsi que des spécialités venues du Portugal !
      </h1>
      <h2 className="text-center text-2xl font-bold mb-4">
        Notre Histoire
      </h2>
      <div className="ml-auto mr-auto w-[60%] text-center space-y-6">
        <p>
          L’histoire d’Au Bon Braisé du Portugal commence au Portugal, dans les souvenirs d’enfance du patron, autour d’une vieille cheminée. C’est dans cette ambiance rustique qu’est née sa passion pour la cuisine traditionnelle et les préparations d’autrefois.
        </p>
        <p>
          Cette passion s’est ensuite prolongée lors des barbecues partagés entre amis, où le poulet braisé est devenu la spécialité des moments conviviaux. Après plusieurs années de réflexion, le projet a pris vie il y a un an et demi.
        </p>
        <p>
          Aujourd’hui, la rôtisserie vous retrouve sur les marchés et participe à vos événements familiaux, comme les mariages, les baptêmes et les communions, ainsi qu’à des événements d’entreprise ou associatifs. Les poulets sont marinés puis braisés à la crapaudine, avec des produits locaux, pour proposer une cuisine généreuse et authentique.
        </p>
      </div>
    </Section>
</>
  )
}
