
import SideNavigation from "../__components/sideNavigation";

 export default function Layout({children}){
    return(
        <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
            <div><SideNavigation></SideNavigation></div>
            <div className="py-2">{children}</div>
        </div>
    )
 }