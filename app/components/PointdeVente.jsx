import { pointsDeVente } from '../data/pointdevente.ts'

export default function PointdeVente() {
    return (
        <div className='grid grid-cols-3'>
            {pointsDeVente.map((jour) => (
                <div className='bg-[#DD5A2D] m-4 p-4 text-white border rounded-xl'>
                    <h1 key={jour.jour}>{jour.jour}</h1>

                    {jour.ventes.map((ventes) => (
                        <div >
                            <p key={ventes.lieu}>{ventes.lieu}</p>
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