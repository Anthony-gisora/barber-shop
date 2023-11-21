import Card from "../components/Card";
import SideBar from "../components/SideBar";

const Homepage = () => {
    return ( 
        <div className="flex items-center justify-evenly h-[100%] bg-general bg-no-repeat bg-cover">
            <div className="w-[20%] h-[90%] bg-[#181717b4] ">
                <SideBar />
            </div>
            <div className="w-[70%] h-[90%] bg-[#181717b4] overflow-y-auto">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
     );
}
 
export default Homepage;