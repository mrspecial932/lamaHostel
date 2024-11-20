import { Suspense } from "react";
import CabinList from "../__components/cabinList";
import Spinner from "../__components/spinner";
import { getCabins } from "../__lib/data-service";

export const metadata ={
  title: {
    template : "%s / The Wild Oasis ",
    default : "Welcome / The wild Oasis",
  },
  description: "Luxurious cabin hotel , located in the heart of the Italian Dolomites, surrounded by the beautful mountains and dark forests" 
}

export const revalidate =3600;

export default async function Page() {
    const cabins = await getCabins()
  
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>


      <Suspense fallback={<Spinner/>}>
      <CabinList/>
      </Suspense>
     
      
     
    </div>
  );
}