"use client";

import { useState } from "react";
import Image from "next/image";
import { pointsDeVente } from "../data/pointdevente";

export default function PointdeVente() {
  const [pointSelect, setPointSelect] = useState(null);

  return (
    <div
      className={`mx-auto flex w-full flex-col items-center justify-center transition-[gap] duration-500 ease-in-out lg:flex-row ${
        pointSelect ? "gap-6" : "gap-0"
      }`}
    >
      <div className="relative w-full max-w-xl shrink-0">
        <Image
          src="/carte_hdf.png"
          alt="Carte des Hauts-de-France"
          width={500}
          height={500}
          className="h-auto w-full"
        />

        {pointsDeVente.map((jour) =>
          jour.ventes.map((vente) => {
            const id = `${jour.jour}-${vente.lieu}`;
            const estSelectionne = pointSelect?.id === id;

            return (
              <button
                key={id}
                type="button"
                aria-label={`Afficher le point de vente à ${vente.lieu}`}
                aria-expanded={estSelectionne}
                onClick={() =>
                  setPointSelect(
                    estSelectionne ? null : { id, jour: jour.jour, vente }
                  )
                }
                className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg_orange shadow-md transition-transform hover:scale-125"
                style={{
                  left: `${vente.x}%`,
                  top: `${vente.y}%`,
                }}
              />
            );
          })
        )}
      </div>
      <aside
        aria-hidden={!pointSelect}
        className={`shrink-0 overflow-hidden transition-[width,opacity,transform] duration-500 ease-in-out ${
          pointSelect
            ? "w-full max-w-xl translate-x-0 opacity-100 lg:w-80"
            : "pointer-events-none w-0 translate-x-8 opacity-0"
        }`}
      >
        <div className="w-full rounded-2xl border border-[#214F7C]/15 bg_beige p-6 shadow-3xl lg:w-80">
          {pointSelect && (
            <>
              <button
                type="button"
                aria-label="Fermer les détails"
                onClick={() => setPointSelect(null)}
                className="float-right txt_bleu"
              >
                ✕
              </button>

              <p className="mb-2 font-semibold txt_orange">
                {pointSelect.jour}
              </p>
              <h2 className="text-2xl font-bold txt_bleu">
                {pointSelect.vente.lieu}
              </h2>
              <p className="mt-2 txt_bleu">{pointSelect.vente.horaire}</p>
            </>
          )}
        </div>
      </aside>

    </div>
  );
}