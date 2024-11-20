import { getCabin, getCabins } from "@/app/__lib/data-service";
import Image from "next/image";
import { EyeSlashIcon, MapIcon , MapPinIcon, UserIcon } from "@heroicons/react/24/solid";
import TextExpander from "@/app/__components/Text";


export async function  generateMetadata({params}){
     const {name} = await getCabin(params.cabinId)
     return {title: `Cabin ${name}` };
}

export async function generateStaticParams(params) {
  const cabin = await getCabins();
 const ids=  cabin.map(cabin=>({cabinId : String(cabin.id)}))

 return ids;
}
export default async function Page({ params }){

    const cabin = await getCabin(params.cabinId)
    const { id, name,image, maxCapacity, description, Italy, regularPrice, discount,  } = cabin;
    console.log(cabin.image);
    return (

        <div className='grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24'>
        <div className='relative scale-[1.15] -translate-x-3'>
          <Image
            src={image}
            fill
            className='object-cover'
            alt={`Cabin ${name}`}
          />
        </div>
  
        <div>
          <h3 className='text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]'>
            Cabin {name}
          </h3>
  
          <p className='text-lg text-primary-300 mb-10'>
            {/* TextExpander is now just a regular React component like all others */}
            <TextExpander>{description}</TextExpander>
          </p>
  
          <ul className='flex flex-col gap-4 mb-7'>
            <li className='flex gap-3 items-center'>
              <UserIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                For up to <span className='font-bold'>{maxCapacity}</span> guests
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              <MapPinIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                Located in the heart of the{' '}
                <span className='font-bold'>Dolomites</span> (Italy)
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              <EyeSlashIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                Privacy <span className='font-bold'>100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
}