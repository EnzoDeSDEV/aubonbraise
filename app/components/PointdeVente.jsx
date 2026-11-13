import { pointsDeVente } from '../data/pointdevente.ts'

export default function PointdeVente() {
    return (
        <div className='grid grid-cols-3 gap-6 justify-center'>
            {pointsDeVente.map((jour) => (
                <div className='bg-[#FFFDF7] border border-[#214F7C]/15 rounded-2xl shadow-md p-6 text-center '>
                    <h1 key={jour.jour} className='inline-block bg-[#214F7C] text-white rounded-full px-4 py-2 font-bold text-3xl mb-4'>{jour.jour}</h1>

                    {jour.ventes.map((ventes) => (
                        <div >
                            <p key={ventes.lieu} className='text-[#214F7C] font-bold text-3xl bold'>{ventes.lieu}</p>
                            <p key={ventes.horaire}>{ventes.horaire}</p>
                            <br/>
                        </div>
                    ))}
                </div>
            ))
            }
        </div >
    )

}