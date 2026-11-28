"use client";

import { useState } from "react";
import { product } from "../data/product";
import ProductCard from "./ProductCard";

export default function ProductCarrousel() {
  const [index, setIndex] = useState(product.length);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselProducts = [...product, ...product, ...product];

  function NextPreviousProduct() {
    if (isAnimating) return;

    setIsAnimating(true);
    setIndex((current) => current + 1);
  }

  function BeforePreviousProduct() {
    if (isAnimating) return;

    setIsAnimating(true);
    setIndex((current) => current - 1);
  }
  function handleTransitionEnd(event: React.TransitionEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform") return;

    setIsAnimating(false);

    if (index >= product.length * 2) {
      setIndex((current) => current - product.length);
    } else if (index < product.length) {
      setIndex((current) => current + product.length);
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button onClick={BeforePreviousProduct}>←</button>

      <div className="w-full min-w-0 overflow-hidden">
        <div
          className="flex w-full"
          style={{
            transform: `translateX(-${index * (100 / 3)}%)`,
            transition: isAnimating ? "transform 650ms ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselProducts.map((p, i) => {
            return (
              <div key={i} className="w-1/3 shrink-0 px-2">
                <ProductCard Name={p.Name} price={p.price} image={p.image} />
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={NextPreviousProduct}>→</button>
    </div>
  );
}
