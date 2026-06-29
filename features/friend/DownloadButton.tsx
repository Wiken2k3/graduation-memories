interface Props{
    url:string;
}

export default function DownloadButton({
    url,
}:Props){

return(

<a
href={url}
download
target="_blank"
className="
inline-flex
items-center
justify-center

rounded-full

border
border-[#7298C7]

bg-[#7298C7]

px-6
py-3

text-sm
font-medium

text-white

transition-all

duration-300

hover:-translate-y-1

hover:bg-white

hover:text-[#7298C7]
"
>

Tải ảnh gốc

</a>

)

}