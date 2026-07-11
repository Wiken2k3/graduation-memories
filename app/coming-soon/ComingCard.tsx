import Image from "next/image";

export default function ComingCard(){

return(

<div className="flex justify-center">

<div
className="
paper

max-w-[380px]

rotate-[-5deg]

p-5

shadow-[0_25px_70px_rgba(0,0,0,.12)]
"
>

<div
className="
relative

aspect-[4/5]

overflow-hidden

rounded-3xl
"
>

<Image

src="/images/hero/pre4.webp"

alt=""

fill

priority

sizes="380px"

className="
object-cover

blur-[3px]

scale-105
"
/>

</div>

<div className="pt-6">

<p
className="
text-xs

uppercase

tracking-[0.3em]

text-[#7298C7]
"
>

Preparing...

</p>

<h3 className="mt-3 text-2xl font-semibold">

Memory Capsule

</h3>

<p className="mt-3 text-neutral-500">

Opening after Graduation

</p>

</div>

</div>

</div>

)
}