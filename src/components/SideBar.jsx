import { NavLink } from "react-router-dom";

const SideBar = () => {

    const activities = ["home", "services", "About", "Gallery", "Blog", "Contact"]

    return ( 
        <div className="h-full flex flex-col items-end mr-4 justify-center space-y-3">
            {
                activities.map((activity, index)=>{
                    return(
                        <NavLink key={index} className="text-[24px] font-mono hover:text-pink-500 cursor-pointer focus:text-pink-500 focus:border-r-[#ffff] focus:border-r-[2px]  rounded-r-[5px] rounded-l-[5px] ">{activity}</NavLink>
                    )
                })
            }
        </div>
     );
}
 
export default SideBar;