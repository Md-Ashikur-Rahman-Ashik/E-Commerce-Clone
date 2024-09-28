import Image from "next/image";
import React, { useState } from "react";

interface Card {
  id: number;
  image: string;
  label: string;
}

function HoverExpend() {
  // State to keep track of the currently hovered card
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Card data (image src and label) to map through
  const cards: Card[] = [
    { id: 1, image: "/images/Kurta.png", label: "Athleisure" },
    { id: 2, image: "/images/Womens-Shirt-White.png", label: "Fragrances" },
    { id: 3, image: "/images/Kurta-Blue.png", label: "Innerwear" },
    { id: 4, image: "/images/FourthShirt.png", label: "Cafes" },
    { id: 5, image: "/images/FifthShirt.png", label: "Footwear" },
    { id: 6, image: "/images/FifthShirt.png", label: "Footwear" },
  ];

  return (
    <>
      <section className="py-8 lg:overflow-hidden overflow-x-scroll w-full">
        <div
          className="w-full mx-auto px-4 flex gap-2 lg:justify-center justify-start"
          style={{ height: "60vh" }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group transition-all duration-500 ease-in-out"
            >
              <div
                className={`h-full ${
                  hoveredCard === card.id ? "w-[3rem]" : "w-[12rem]"
                } group-hover:w-[30rem] transition-all duration-500 ease-in-out`}
              >
                <Image
                  src={card.image}
                  alt={card.label}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col justify-end p-4">
                  <h3 className="text-white text-2xl">{card.label}</h3>
                  <button className="text-white bg-transparent hover:underline">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#ffc20e] hidden lg:block mt-2 p-3 text-center">
          <p className="text-black text-3xl" style={{ fontWeight: "bold" }}>
            Launching soon <span>Eyewear Hair</span> Care Fitness Equipments
          </p>
        </div>
      </section>
    </>
  );
}

export default HoverExpend;
