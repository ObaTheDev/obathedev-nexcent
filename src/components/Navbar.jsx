import "../index.css";
import { NavLink } from "react-router-dom";
import logo  from "../assets/img/logo.png"
import { useState } from "react";
import { Menu, X } from "lucide-react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="bg-black grid grid-cols-3 gap-[90%] md:gap-8 lg:gap-20 py-4 px-[5%]">
            <div className="logoDiv grid-cols-1 flex gap-2">
            <img src= {logo} alt="Logo" className="w-[30px] h-[26px]"/>  
            <h1 className="text-white text-xl font-bold">
            <NavLink to = "/home">Nexcent</NavLink>  
            </h1>
            </div>
            <div className="grid-cols-2 flex  gap-10">
            <button onClick={() => setIsOpen(!isOpen)} className="block lg:hidden md:hidden focus:outline-none text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        {/* Navbar Links (Hidden on Mobile) */}
            <ul className={`sm:flex sm:space-x-6 lg:hidden  xl:hidden text-center absolute sm:static bg-black w-full sm:w-auto left-0 top-16 sm:top-0 transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>

                <li className="hover:text-themeGreen cursor-pointer p-4">
                    <NavLink to ="/home" className={({isActive}) => `${isActive ? "text-themeGreen" : "text-silver"}`}> Home</NavLink> 
                    </li>
                    <li className="hover:text-green-600 cursor-pointer p-4">
                    <NavLink to="/features" className={({isActive}) => `${isActive ? "text-themeGreen" : "text-silver"}`}>Features</NavLink>
                    </li>
                    <li className="hover:text-green-600 cursor-pointer p-4">
                    <NavLink to="/community" className={({isActive}) => `${isActive ? "text-themeGreen" : "text-silver"}`}>Community</NavLink>

                        </li>
                    <li className="hover:text-green-600 cursor-pointer p-4">
                    <NavLink  to="blog" className={({isActive}) => `${isActive ? "text-themeGreen" : "text-silver"}`}>Blog</NavLink>

                    </li>

                    <NavLink to= "pricing" className={({isActive}) => `${isActive ? "text-themeGreen" : "text-silver"}`}>
                    <li className="hover:text-green-600 cursor-pointer p-4">Pricing
                    </li>
                    </NavLink>
        </ul>
                <ul className=" text-silver hidden  lg:flex lg:visible gap-12 font-semibold ">
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
                <button type="button" className="px-7 py-2 hidden lg:block rounded-[5px] bottom-2 bg-themeGreen text-white hover:text-themeGreen hover:bg-black mt-[-3px] border-[1px] border-black hover:border-themeGreen">
                    <NavLink to= "/"> Register </NavLink> 
                    </button>
            </div>
        </div>
    )
}

export default Navbar;