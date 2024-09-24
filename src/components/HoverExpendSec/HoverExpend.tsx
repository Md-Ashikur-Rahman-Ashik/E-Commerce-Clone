import Image from "next/image";
import React from "react";

function HoverExpend() {
  return (
    <>
      <section className=" py-8 lg:overflow-hidden  overflow-x-scroll w-full ">
        <div
          className=" w-full mx-auto px-4   flex gap-2 lg:justify-center justify-start"
          style={{ height: "60vh" }}
        >
          {/* Athleisure */}
          <div className="relative group transition-all duration-500 ease-in-out">
            <div className=" h-full w-48 group-hover:w-64 transition-all duration-500 ease-in-out">
              <Image
                src="/images/Kurta.png"
                width={200}
                height={200}
                alt="Athleisure"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col justify-end p-4">
                <h3 className="text-white text-2xl">Athleisure</h3>
                <button className="text-white bg-transparent hover:underline">
                  Know More
                </button>
              </div>
            </div>
          </div>

          {/* Fragrances */}
          <div className="relative group transition-all duration-500 ease-in-out">
            <div className=" h-full w-48 group-hover:w-64 transition-all duration-500 ease-in-out">
              <Image
                src="/images/Womens-Shirt-White.png"
                alt="Fragrances"
                width={200}
                height={200}
                className="w-full h-full group-hover:grayscale-0 object-cover grayscale transition-all duration-500"
              />
              <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col justify-end p-4">
                <h3 className="text-white text-2xl">Fragrances</h3>
                <button className="text-white bg-transparent hover:underline">
                  Know More
                </button>
              </div>
            </div>
          </div>

          {/* Innerwear */}
          <div className="relative group transition-all duration-500 ease-in-out">
            <div className=" h-full w-48 group-hover:w-64 transition-all duration-500 ease-in-out">
              <Image
                width={200}
                height={200}
                src="/images/Kurta-Blue.png"
                alt="Innerwear"
                className="w-full h-full group-hover:grayscale-0 object-cover grayscale transition-all duration-500"
              />
              <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col justify-end p-4">
                <h3 className="text-white text-2xl">Innerwear</h3>
                <button className="text-white bg-transparent hover:underline">
                  Know More
                </button>
              </div>
            </div>
          </div>

          {/* Cafes */}
          <div className="relative group transition-all duration-500 ease-in-out">
            <div className=" h-full w-48 group-hover:w-64 transition-all duration-500 ease-in-out">
              <Image
                src="/images/FourthShirt.png"
                alt="Cafes"
                width={200}
                height={200}
                className="w-full h-full group-hover:grayscale-0 object-cover grayscale transition-all duration-500"
              />
              <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col justify-end p-4">
                <h3 className="text-white text-2xl">Cafes</h3>
                <button className="text-white bg-transparent hover:underline">
                  Know More
                </button>
              </div>
            </div>
          </div>

          {/* Footwear */}
          <div className="relative group transition-all duration-500 ease-in-out">
            <div className=" h-full w-48 group-hover:w-64 transition-all duration-500 ease-in-out">
              <Image
                src="/images/FifthShirt.png"
                alt="Footwear"
                width={200}
                height={200}
                className="w-full h-full group-hover:grayscale-0 object-cover grayscale transition-all duration-500"
              />
              <div className="absolute inset-0 bg-opacity-50 bg-black flex flex-col justify-end p-4">
                <h3 className="text-white text-2xl">Footwear</h3>
                <button className="text-white bg-transparent hover:underline">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HoverExpend;
