"use client";

import { useEffect, useState } from "react";

export default function Countdown() {

  const target = new Date("2026-08-09T18:00:00+07:00").getTime();

  const [time, setTime] = useState(target - Date.now());

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(target - Date.now());

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  const days=Math.max(0,Math.floor(time/86400000));

  const hours=Math.max(0,Math.floor(time%86400000/3600000));

  const minutes=Math.max(0,Math.floor(time%3600000/60000));

  const seconds=Math.max(0,Math.floor(time%60000/1000));

  return(

<div className="mt-14">

<p className="mb-5 uppercase tracking-[0.3em] text-[#7298C7] text-sm">

Mở sau

</p>

<div className="flex flex-wrap gap-5">

{[
["Ngày",days],
["Giờ",hours],
["Phút",minutes],
["Giây",seconds],
].map(([label,value])=>(

<div

key={label}

className="paper w-24 py-6 text-center"

>

<h2 className="text-3xl font-semibold">

{String(value).padStart(2,"0")}

</h2>

<p className="mt-2 text-xs uppercase tracking-[0.2em]">

{label}

</p>

</div>

))}

</div>

</div>

)

}