import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

// Variants for the Media Vault title animation
const titleVariants = {
  hidden: { opacity: 0, x: -100 }, // Start from left
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Animate to center
};

// Variants for the content (images and text) animation
const contentVariants = {
  hidden: { opacity: 0, y: 100 }, // Start from below
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.3 }, // Stagger animation
  }),
};

const MediaVaultSec: React.FC = () => {
  return (
    <div className="h-screen bg-black" style={{ height: "max-content" }}>
      {/* Media Vault Title */}
      <motion.div
        className="m-12"
        initial="hidden"
        whileInView="visible"
        variants={titleVariants}
        viewport={{ once: true }} // Trigger only once when in view
      >
        <h2
          className="md:text-9xl text-bold-900 text-6xl"
          style={{ color: "#ffc20e", fontWeight: "bolder" }}
        >
          MEDIA VAULT
        </h2>
      </motion.div>

      {/* Grid layout with images and paragraphs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {[
          {
            date: "26th March, 2023",
            title: "Virat Kohli flagged off the first ever one8 Run",
          },
          {
            date: "26th March, 2023",
            title: "Another event description here",
          },
          {
            date: "26th March, 2023",
            title: "More content or event details for this section",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            custom={index} // Pass the index for staggered animation
            initial="hidden"
            whileInView="visible"
            variants={contentVariants}
            viewport={{ once: true }} // Trigger once per item
            className="text-white text-start justify-self-center max-w-xs"
          >
            <Image
              alt="Event Image"
              width={240}
              height={240}
              src={"/images/womansShirts.jpg"}
            />
            <p className="mt-2 text-gray-500">
              <i>{item.date}</i>
            </p>
            <p className="mt-2 text-2xl">{item.title}</p>
            <Link
              href={"#"}
              className="mt-2 flex items-center gap-2 text-1.3xl text-yellow-200"
            >
              Explore <FaPlus />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MediaVaultSec;
