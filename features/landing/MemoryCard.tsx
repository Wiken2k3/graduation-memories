import Image from "next/image";
import Link from "next/link";

import { Friend } from "@/data/friends";


interface Props {
  friend: Friend;
}


export default function MemoryCard({
  friend,
}: Props) {


return (

<Link
  href={`/friend/${friend.slug}`}
  className="block"
>


<article
className="
group

relative

overflow-hidden

rounded-[22px]

border
border-[#E7DFD1]

bg-[#FFFDF8]

p-5

sm:p-6

shadow-[0_20px_60px_rgba(0,0,0,.08)]

transition-all

duration-500

hover:-translate-y-3

hover:rotate-[1deg]

hover:shadow-[0_30px_80px_rgba(0,0,0,.12)]
"
>


<div
className="
relative

aspect-[3/4]

overflow-hidden

rounded-xl

border

border-[#EFE7DA]
"
>

<Image
src={friend.image}

alt={friend.name}

fill

sizes="
(max-width:640px) 100vw,
(max-width:1024px) 50vw,
(max-width:1536px) 33vw,
25vw
"

className="
object-cover

transition-transform

duration-700

group-hover:scale-105
"
/>


</div>


<div className="mt-6">

<h3
className="
text-xl

font-medium

tracking-tight

text-[#272727]
"
>
{friend.name}
</h3>


<p
className="
mt-2

text-xs

font-medium

uppercase

tracking-[0.35em]

text-[#7298C7]
"
>
GRADUATION OF 2026
</p>


<p
className="
mt-5

text-center

text-xs

tracking-[0.25em]

text-[#7298C7]

opacity-0

transition

duration-300

group-hover:opacity-100
"
>
Nhấn để mở kỷ niệm
</p>


</div>


</article>


</Link>

);

}