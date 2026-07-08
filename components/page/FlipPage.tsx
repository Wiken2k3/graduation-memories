"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props{
    children:ReactNode;
    bg?:string;
}

export default function FlipPage({
    children,
    bg="#FFFDF8"
}:Props){

return(

<motion.section

style={{
background:bg,
transformOrigin:"top center"
}}

initial={{
rotateX:-80,
opacity:0,
y:120
}}

whileInView={{
rotateX:0,
opacity:1,
y:0
}}

viewport={{
once:true,
amount:.25
}}

transition={{
duration:1,
ease:[0.22,1,0.36,1]
}}

className="relative"

>

{children}

</motion.section>

)

}