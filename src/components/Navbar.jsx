import "../index.css";
import { NavLink } from "react-router-dom";
import logo  from "../assets/img/logo.png"


const Navbar = () => {
    return(
        <div className="bg-black grid grid-cols-3 py-4 px-[5%]">
            <div className="logoDiv grid-cols-1 flex gap-2">
            <img src= {logo} alt="Logo" className="w-auto h-[26px]"/>  
            <h1 className="text-white text-xl font-bold">
            <NavLink to = "/home">Nexcent</NavLink>  
            </h1>
            </div>
            <div className="grid-cols-2  flex  gap-12">
                <ul className=" text-silver flex  gap-14 font-semibold ">
                    <li className="hover:text-themeGreen cursor-pointer">
                    <NavLink to ="/home" className={({isActive}) => `${isActive ? "text-themeGreen" : "text-silver"}`}> Home</NavLink> 
                    </li>
                    <li className="hover:text-green-600 cursor-pointer">
                    <NavLink to="/features" className={({isActive}) => `${isActive ? "text-themeGreen" : "text-silver"}`}>Features</NavLink>
                    </li>
                    <li className="hover:text-green-600 cursor-pointer">
                    <NavLink to="/community" className={({isActive}) => `${isActive ? "text-themeGreen" : "text-silver"}`}>Community</NavLink>

                        </li>
                    <li className="hover:text-green-600 cursor-pointer">
                    <NavLink  to="blog" className={({isActive}) => `${isActive ? "text-themeGreen" : "text-silver"}`}>Blog</NavLink>

                    </li>

                    <NavLink to= "pricing" className={({isActive}) => `${isActive ? "text-themeGreen" : "text-silver"}`}>
                    <li className="hover:text-green-600 cursor-pointer">Pricing
                    </li>
                    </NavLink>


                </ul>
                <button type="button" className="px-7 py-2 rounded-[5px] bottom-2 bg-themeGreen text-white hover:text-themeGreen hover:bg-black mt-[-3px] border-[1px] border-black hover:border-themeGreen">
                    <NavLink to= "/"> Register </NavLink> 
                    </button>
            </div>
        </div>
    )
}

export default Navbar;