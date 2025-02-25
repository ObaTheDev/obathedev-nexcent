import "../index.css"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import rafiki from "../assets/img/rafiki.png"
import { Link } from "react-router-dom"

const Register = ()=> {
    return (
        <div className="bg-black  rounded-xl items-center justify-center text-center w-[80%] lg:w-[60%] h-[75%] mt-[7.5%] lg:mt-[3%] mx-[10%] lg:mx-[20%] lg:py-[2%] lg:px-[2%] lg:grid lg:grid-cols-2">
            <div className="grid-cols-1 col-span-1 rounded-xl  lg:items-center :text-center lg:justify-center bg-black  lg:bg-silver px-[2%] py-[4%]">
            <form action="submit" method="post" className=" bg-black lg:bg-silver lg:items-center lg:justify-center lg:text-center ">
                <div className="mb-4">
                <label className="lg:text-black text-white mr-2" htmlFor="text">Firstname:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="text" required  placeholder="John"/>
                </div>

                <div className="mb-4">
                <label className="lg:text-black text-white mr-2" htmlFor="text">Lastname:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="text" required  placeholder="Doe"/>
                </div>

                <div className="mb-4">
                <label className="lg:text-black text-white mr-2" htmlFor="text">Username:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="text" required  placeholder="Johnny"/>
                </div>

                <div className="mb-4 w-[70%] ml-[10.5%] lg:ml-[0] lg:w-[auto]">
                <label className="lg:text-black text-white mr-2 lg:mr-0" htmlFor="email">User's Email: </label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="email" required  placeholder="johndoe@gmail.com"/>
                </div>

                <div className="mb-4">
                <label className="lg:text-black text-white mr-2" htmlFor="phone">Mobile No:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="phone" required  placeholder="+234800000000"/>
                </div>

                <div className="mb-4">
                <label className="lg:text-black text-white mr-2" htmlFor="password">Password:</label>
                <input className="bg-silver border-2 rounded-[5px] border-themeGreen text-center" type="password" required  placeholder="......"/>
                </div>
                <Link to= "/home">
                <input className="text-white bg-themeGreen border-2 lg:ml-5 rounded-[5px] py-2 px-8 border-themeGreen text-center mt-2"  type="submit" value="Register" />
                </Link>
            </form>


            <h2 className="text-lightGrey mt-5">
            <NavLink to = "/login">Have an account? Login</NavLink>   
            </h2>
            </div>
            <motion.div initial= {{x: 200, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 2}}>
            <div className="col-span-1 grid-cols-1 ml-4 hidden lg:visible lg:block">
                <img className="w-[100%] h-[120%]" src={rafiki} alt="" />
            </div>
            </motion.div>

        </div>
    )
}
export default Register;