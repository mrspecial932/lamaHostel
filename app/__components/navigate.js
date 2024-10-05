
import Link from "next/link"

export default function Navigation (){
    return (
        <nav className="text-xl z-10">
        <ul className="flex gap-16 items-center">
        
        <li> <Link  className="hover:text-amber-400 transition-colors"  href="/cabins">Cabins</Link></li>
        <li> <Link  className="hover:text-amber-400 transition-colors" href="/about">About</Link></li>
        <li> <Link className="hover:text-amber-400 transition-colors" href="/account">Your Account</Link></li>
        </ul>
    </nav>
    )
}