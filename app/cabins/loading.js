import Spinner from "@/app/__components/spinner";

export default function Loading(){
    return<div className=" grid items-center justify-center"> 
         <Spinner/>
         <p className="text-2xl  text-slate-200">loading cabin data.....</p>
    </div>
}