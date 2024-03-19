import { FaMap } from "react-icons/fa";
import logo from "../assets/footer2.svg"
import logoText from "../assets/footer1.svg"
import youtube from "../assets/youtube.svg"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"

const Footer = () => {
    return (
        <footer className=" px-4 divide-y bg-[#006CE4] text-white pb-10">
            <div className="w-[60%] mx-auto overflow-hidden">
                <div className="flex justify-between text-sm gap-x-3 gap-y-8 mt-10">
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">Address</h3>
                        <p className="space-y-1">
                            House- 75 Ka,
                            Main <br /> Rd, Dhaka 1216 <br />
                            <div className="flex items-center gap-1">
                                <FaMap></FaMap>
                                <p>View on Maps</p>
                            </div>
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">About us</h3>
                        <ul className="space-y-3">
                            <li>
                                <a rel="noopener noreferrer" href="#">Stories</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Blogs</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Airlines</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">Join Us</h3>
                        <ul className="space-y-3">
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-medium">Contact</h3>
                        <p className="space-y-1.5">
                            +880 1234562890 <br />
                            +880 1345628980 <br />
                            +880 1234562890 <br />
                            info@airbook.com
                        </p>
                    </div>
                </div>
                <hr className="w-full border border-white my-10"></hr>
                <div className="flex items-center justify-between">
                    <div className="flex flex-row gap-2">
                        <img className="w-10" src={logo} />
                        <img src={logoText} />
                    </div>
                    <p className="text-xs font-semibold">© Copyright  AIRBOOK</p>
                    <div className="flex items-center gap-7">
                        <img src={youtube} />
                        <img src={facebook} />
                        <img src={linkedin} />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;