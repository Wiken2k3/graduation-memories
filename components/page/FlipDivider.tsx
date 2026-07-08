export default function FlipDivider(){

return(

<div
className="
relative
h-20
overflow-hidden
"
>

<div
className="
absolute
left-1/2
top-1/2
h-px
w-[80%]
-maxtranslate-x-1/2
bg-[#E8E1D4]
"
/>

<div
className="
absolute
left-1/2
top-1/2
h-10
w-10
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-[#F5F1E6]
border
border-[#E8E1D4]
"
/>

</div>

)

}