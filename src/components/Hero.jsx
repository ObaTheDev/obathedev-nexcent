import "../index.css";
import { Link } from "react-router-dom";
import system from "../assets/img/system.png"
import windows from "../assets/img/windows.png"
import settings from "../assets/img/setttings.png"
import settingsShadow from "../assets/img/settingsShadow.png"
import Character from "../assets/img/Character.png"
import { motion } from "framer-motion";
import Clients from "./Clients";

const Hero = () => {
    return(
        <div>
        <div className="px-[8%] pt-[6%] pb-[1%] bg-black" >
        <div className="grid grid-cols-3">


            <div className="grid-cols-2 col-span-2">
                <h1 className="text-[4em] font-bold  tracking-wide text-silver mt-10">Lessons and insights <span className="text-themeGreen">from 8 years</span></h1>
                <p className="text-gray-400">Where to grow your business as a photographer: site or social media?</p>
                <button type="button" className="px-7 py-2  rounded-[3px] bottom-2 bg-themeGreen text-white hover:text-themeGreen hover:bg-black mt-[15px] border-[1px] border-black hover:border-themeGreen">
                    <Link to= "/"> Register </Link>
                </button>
                {/* <motion.div initial = {{x:0}} whileInView={{ x: 350}} transition= {{duration: 2, repeat: Infinity, repeatDelay:0, repeatType: "reverse"}} >
                <div  className="bg-themeGreen p-[2px] rounded-lg mt-3 w-[50%]"></div>
                </motion.div> */}

            </div>

            <div className="grid-cols-1 col-span-1 relative ml-6">
            <motion.div initial = {{y: -100}} whileInView={{y: 0}} transition={{ duration: 2 }}>
                <img src={system} className="absolute top-20 left-0 z-10" alt="" />
                <img src={windows} className="absolute top-10 left-4 z-20" alt="" />
                <img src={settings} className="absolute top-56 left-32 z-20" alt="" />

            </motion.div>
            <motion.div animate= {{rotateY : 360}} initial =  {{x: -100}} whileInView={{x:0}} transition={{ duration: 2}} className="z-8">
                <img src={Character} className="absolute top-20 left-44 z-8" alt="" />
                <img src={settingsShadow} className="absolute top-52 z-8" alt="" />
            </motion.div>

            </div>

            </div>
            <div className="flex mt-[16.5%] gap-2 items-center justify-center" >
            <div className="  w-[0.4em] bg-themeGreen py-[3px] "></div>
            <div className="  w-[0.4em] bg-silver py-[3px]"></div>
            <div className=" w-[0.4em] bg-silver py-[3px] "></div>
            <div className="  w-[0.4em] bg-silver py-[3px] "></div>
            </div>
    </div>
    <Clients/>
    </div>
    )
}

export default Hero;