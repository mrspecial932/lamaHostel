import CabinCard from "./CabinCard"
import { getCabins } from "../__lib/data-service";
import { unstable_noStore as noStore } from "next/cache"; 


async function CabinList() {
  
    const cabins = await getCabins();
  if(!cabins.length) return null
   
    return (

   
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
    {cabins.map((cabin) => (
      <CabinCard cabin={cabin} key={cabin.id} />
    ))}
  </div>    
   
)}

export default CabinList