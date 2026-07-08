"use client";

import { motion } from "framer-motion";


export default function ScrollButton() {

  const handleClick = () => {

    const section = document.getElementById("memory-wall");

    if (!section) return;


    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      40;


    window.scrollTo({
      top,
      behavior: "smooth",
    });

  };


  return (

    <motion.button
      type="button"

      onClick={handleClick}

      aria-label="Cuộn tới Memory Wall"

      animate={{
        y: [0, 8, 0],
      }}

      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      className="
        group

        inline-flex

        items-center

        gap-3


        rounded-full

        bg-[#272727]


        px-8

        py-5


        text-white

        font-medium


        shadow-lg


        transition-all

        duration-700


        hover:-translate-y-1

        hover:bg-[#7298C7]

        hover:shadow-2xl


        active:scale-[0.98]
      "
    >

      <span>
        Đi tới món quà
      </span>


      <span
        className="
          text-lg

          transition-transform

          duration-700

          group-hover:translate-y-1
        "
      >
        ↓
      </span>


    </motion.button>

  );
}