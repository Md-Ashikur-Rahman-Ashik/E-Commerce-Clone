import React from "react";
import HoverExpend from "@/components/HoverExpendSec/HoverExpend";
import Image from "next/image";
import { motion } from "framer-motion";

const OneWorld = () => {
  const hoverExpendVariants = {
    hidden: { opacity: 0, y: 100 }, // Start below the viewport
    visible: {
      opacity: 1,
      y: 0, // Translate upward
      transition: { duration: 0.8 }, // Control the speed of animation
    },
  };
  return (
    <>
      <section className="container">
        <div
          style={{ height: "max-content" }}
          className="flex-col justify-start items-center h-screen "
        >
          <div className="text-start">
            <Image
              alt=""
              src={"/images/logo-yellow.png"}
              height={500}
              width={500}
            />
            <p className="lg:text-[12rem] md:text-7xl text-9xl font-bold outline-yellow">
              World
            </p>
          </div>
        </div>
      </section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={hoverExpendVariants}
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of it is in view
      >
        <HoverExpend />
      </motion.div>
    </>
  );
};

export default OneWorld;
