import Image from "next/image";
import  bg  from "@/public/bg.png"
export default function Home() {
  return (
    <div className="mt-24">
      <Image src={bg} fill  quality={80} className="object-cover object-top" alt="mountains and forest"/>

     <div className="relative z-10 text-center">
      <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal"> Welcome to Paradise</h1>

      <a href="/cabins" className=" bg-amber-300 px-8 py-6 text-slate-950 font-semibold hover:bg-amber-400 transition-all">Explore Luxury Cabins</a>
     </div>

    </div>
  );
}
