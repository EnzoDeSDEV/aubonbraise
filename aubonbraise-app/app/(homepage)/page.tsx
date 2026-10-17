import Section from "../components/Section";
import Button from "../components/Button";
import Image from "next/image"
import AzulejosSeparator from "../components/AzulejosSeparator";

const article = [
  {
    id: 1,
    name: "Vente 1",
    description: "Description de la vente 1"
  },
  {
    id: 2,
    name: "Vente 2",
    description: "Description de la vente 2"
  }
];

const horaires = [
  {
    jour: "Lundi",
    matin: "8h - 12h",
    apres_midi: "14h - 18h",
    lieux: "123 Rue de la Paix, 75000 Paris"
  },
  {
    jour: "Mardi",
    matin: "8h - 12h",
    apres_midi: "14h - 18h",
    lieux: "456 Avenue des Champs-Élysées, 75008 Paris"
  }
]; 

const evenements = [
  {
    id: 1,
    title: "Événement 1",
    description: "Description de l'événement 1"
}
];

export default function Homepage(){
  return(
<>
    <Section
     id="accueil"
     className="bg-[#F7F3E8] ">
      <div className="flex  space-y-4 ml-auto mr-auto w-[90%]">
        <div className="flex flex-col justify-center space-y-4 gap-2">
          <div>
           <h1 className="text-7xl font-bold mb-4">
            Le goût du Portugal,
          </h1>
          <h1 className="text-7xl font-bold mb-4 text-[#214F7C]">
            à partager !
          </h1> 
          </div>
          
          <div className="flex flex-col gap-4">
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

    <Section
     id="histoire"
     className=""
    >
      <h1 className="text-center text-4xl font-bold mb-4">
        Içi, découvrez des produits français cuisinés à la portugaise, ainsi que des spécialités venues du Portugal !
      </h1>
      <h2 className="text-center text-2xl font-bold mb-4">
        Notre Histoire
      </h2>
      <div className="flex space-y-6">
        <div className="flex flex-col justify-center space-y-4 gap-2 ml-auto mr-auto w-[50%]"> 
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
          <Image
            src="/histoire_image.png"
            alt="Image de présentation"
            width={600}
            height={400}
            className="justify-end ml-auto"
          />
      </div>
    </Section>
    <AzulejosSeparator />
    <Section
    id="carte"
    className="bg-[#F7F3E8]"
    >
      <h1 className="text-center text-4xl font-bold mb-4">
        Découvrez notre carte
      </h1>
      <div className=" space-y-6">
        <div className="flex flex-col justify-center space-y-4 gap-2 ml-auto mr-auto w-[50%]"> 
          <p>
            Nous proposons une cuisine généreuse et authentique, avec des produits locaux et des spécialités portugaises. Notre carte est composée de plats traditionnels, tels que le poulet braisé à la crapaudine, ainsi que des accompagnements savoureux.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 ml-auto mr-auto w-[50%]">
          <p className="bg-[#DD5A2D] text-white p-4 rounded-4xl text-center">
            photo 1
          </p>
          <p className="bg-[#DD5A2D] text-white p-4 rounded-4xl text-center">
            photo 2
          </p>
          <p className="bg-[#DD5A2D] text-white p-4 rounded-4xl text-center">
            photo 3
          </p>
        </div>
      </div>
    </Section>
    <Section
    id="point_vente"
    className="">
      <h1 className="text-center text-4xl font-bold mb-4">
        Nos points de vente
      </h1>
      <div className=" flex gap-4 text-center">
        <div className="flex flex-col ml-auto mr-auto w-[50%]"> 
          <h1 className="text-3xl font-bold mb-2">
            Matin
          </h1>
          {horaires.map((vente) => (
            <li key={vente.jour} className="mb-4 list-none">
              <h3 className="text-2xl font-bold">{vente.jour}</h3>
              <p>{vente.matin}</p>
              <p>{vente.lieux}</p>
            </li>
          ))}
        </div> 
        <div className="flex flex-col ml-auto mr-auto w-[50%] "> 
          <h1 className="text-3xl font-bold mb-2">
            Après-midi
          </h1>
            {horaires.map((vente) => (
            <li key={vente.jour} className="mb-4 list-none">
              <h3 className="text-2xl font-bold">{vente.jour}</h3>
              <p>{vente.apres_midi}</p>
              <p>{vente.lieux}</p>
            </li>
          ))}
        </div> 
      </div>
    </Section>

    <Section
    id="evenement"
    className="bg-[#F7F3E8]"
    >
      <h1 className="text-3xl font-bold mb-2">
        Événement
      </h1>
      <div className="flex flex-col ml-auto mr-auto w-[50%]">
        {(evenements.length === 0) ? (
            <p>Aucun événement à venir pour le moment.</p>
        ) : (
          <>
            <h3 className="">{evenements[0].title}</h3>
            <p className="">{evenements[0].description}</p>
          </>
        )}
        
      </div>
    </Section>
</>
  )
}
