import "../index.css"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import rafiki from "../assets/img/rafiki.png"
import { Link } from "react-router-dom"

const Register = ()=> {
    return (
        <div className="bg-black  rounded-xl items-center justify-center text-center  w-[60%] h-[75%] mt-[3%] mx-[20%] py-[2%] px-[2%] grid grid-cols-2">
            <div className="grid-cols-1 col-span-1 rounded-2xl items-center text-center justify-center  bg-silver px-[2%] py-[4%]">
            <form action="submit" method="post" className=" bg-silver items-center justify-center text-center">
                <div className="mb-4">
                <label className="text-black mr-2" htmlFor="text">Firstname:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="text" required  placeholder="John"/>
                </div>

                <div className="mb-4">
                <label className="text-black mr-2" htmlFor="text">Lastname:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="text" required  placeholder="Doe"/>
                </div>

                <div className="mb-4">
                <label className="text-black mr-2" htmlFor="text">Username:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="text" required  placeholder="Johnny"/>
                </div>

                <div className="mb-4">
                <label className="text-black mr-2" htmlFor="email">Email:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="email" required  placeholder="johndoe@gmail.com"/>
                </div>

                <div className="mb-4">
                <label className="text-black mr-2" htmlFor="phone">Mobile No:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="phone" required  placeholder="+234800000000"/>
                </div>

                <div className="mb-4">
                <label className="text-black mr-2" htmlFor="password">Password:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="password" required  placeholder="......"/>
                </div>
                <Link to= "/home">
                <input className="text-white bg-themeGreen border-2 ml-5 rounded-[5px] py-2 px-8 border-themeGreen text-center mt-2"  type="submit" value="Register" />
                </Link>
            </form>


            <h2 className="text-lightGrey mt-5">
            <NavLink to = "/Login">Have an account? Login</NavLink>   
            </h2>
            </div>
            <motion.div initial= {{x: 200, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}}>
            <div className="col-span-1 grid-cols-1 ml-4">
                <img className="w-[100%] h-[120%]" src={rafiki} alt="" />
            </div>
            </motion.div>

        </div>
    )
}
export default Register;