import { Link } from "react-router-dom";
import Logo1 from "../assets/img/Logo1.png"
import Logo2 from "../assets/img/Logo2.png"
import Logo3 from "../assets/img/Logo3.png"
import Logo4 from "../assets/img/Logo4.png"
import Logo5 from "../assets/img/Logo5.png"
import Logo6 from "../assets/img/Logo6.png"
import icon1 from "../assets/img/Icon1.png"
import icon2 from "../assets/img/Icon2.png"
import icon3 from "../assets/img/Icon3.png"
import rafiki from "../assets/img/rafiki.png"
import { motion } from "framer-motion"

const Clients = () => {
    return(
        <div className="bg-white items-center justify-center text-center px-[3%] lg:px-0 py-[3%]">
            <h1 className="text-themeGreen font-semibold text-3xl">Our Clients</h1>
            <p className="mt-2 text-gray-900">We have been working with some Fortune 500+ clients</p>

            <div className="grid gap-6 grid-cols-6 px-[15%] mt-[5%]">
                <div><img src={Logo1} alt="" /></div>
                <div><img src={Logo2} alt="" /></div>
                <div><img src={Logo3} alt="" /></div>
                <div><img src={Logo4} alt="" /></div>
                <div><img src={Logo5} alt="" /></div>
                <div className="flex justify-end items-end"><img src={Logo6} alt="" /></div>

            </div>

            <h1 className="text-themeGreen font-semibold mt-8 lg:ml-[35%] lg:w-[30%] text-center lg:text-2xl">Manage your entire community in a single system</h1>
            <p className="mt-2 text-gray-900">Who is Nextcent suitable for?</p>

            <div className="lg:grid lg:grid-cols-3 px-[10%] lg:gap-8 mt-[3%]">
            <motion.div
            initial={{x: -100, opacity: 0}} whileInView={{x:0, opacity: 1}} transition={{duration: 3}}  whileHover={{ y: [-5, 5, -5], transition: { duration: 2, repeat: Infinity } }}
                className="col-span-1 mb-8 lg:mb-0 flex flex-col justify-center items-center bg-silver w-[95%] shadow-gray-500 shadow-lg p-[10px] rounded-xl">
                    <img src={icon1} alt="" />
                    <h1 className= "text-themeGreen font-semibold lg:text-xl lg:w-[50%]">Membership Organizations</h1>
                    <p className="text-gray-500 mt-5  w-[80%]">Our membership management software provides full automation of membership renewals and payments</p>
            </motion.div>
            <motion.div
                            initial={{y: -200, opacity: 0}} whileInView={{y:0, opacity: 2}} whileHover={{ y: [-5, 5, -5], transition: { duration: 2, repeat: Infinity } }}
                className="col-span-1 mb-8 lg:mb-0 flex flex-col justify-center items-center bg-silver w-[95%] shadow-gray-500 shadow-lg p-[10px] rounded-xl">
                    <img src={icon2} alt="" />
                    <h1 className= "text-themeGreen font-semibold text-xl w-[50%]">National Association</h1>
                    <p className="text-gray-500 mt-5  w-[80%]">Our membership management software provides full automation of membership renewals and payments</p>
            </motion.div>
            <motion.div
                initial={{x: 100}}  whileInView={{x:0, opacity: 1}} transition={{duration: 3}} whileHover={{ y: [-5, 5, -5], transition: { duration: 2, repeat: Infinity } }}
                className="col-span-1 mb-8 lg:mb-0 flex flex-col justify-center items-center bg-silver w-[95%] shadow-gray-500 shadow-lg p-[10px] rounded-xl overflow-hidden">
                    <img src={icon3} alt="" />
                    <h1 className= "text-themeGreen font-semibold text-xl w-[50%]">Groups</h1>
                    <p className="text-gray-500 mt-5  w-[80%]">Our membership management software provides full automation of membership renewals and payments</p>
            </motion.div>
            </div>
            <div className="lg:grid lg:grid-cols-3 px-[5%] py-[6%] bg-black mt-[5%]">
                <div className="hidden lg:visible col-span-1">
                    <img className="h-[300px] w-[300px]" src={rafiki} alt="" />
                </div>

                <div className="grid text-left col-span-2">
                    <h1 className="text-themeGreen font-semibold w-[70%]  text-left  text-2xl lg:text-3xl">The unseen of spending three years at Pixelgrade</h1>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <Link to="/features">  <button type="button" className="bg-themeGreen rounded-sm text-white mt-8 lg:mt-8 py-3 px-2">Learn More</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Clients;