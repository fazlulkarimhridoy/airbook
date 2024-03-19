import { FaAlignJustify } from "react-icons/fa";
import logo from "../assets/logo.svg"
import logoText from "../assets/logoText.svg"

const Navbar = () => {

    // shared links
    const links = <>
        <li >Blog</li>
        <li >Offer</li>
        <li >Airlines</li>
        <li >About</li>
    </>

    return (
        <header className="fixed z-10 bg-white opacity-[70%] navbar sm:px-52 sm:py-4 overflow-visible lg:overflow-hidden">
            <div className="navbar-start flex flex-row gap-2">
                <img className="w-10" src={logo} />
                <img src={logoText} />
            </div>
            <div className="hidden md:flex">
                <ul id="link2" className="flex flex-row items-center px-2 gap-6 text-black text-xl font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center md:hidden">
                        <button
                            className="rounded bg-none p-2 text-gray-200 transition hover:text-gray-600/75"
                        >
                            <FaAlignJustify size={25}></FaAlignJustify>
                        </button>
                        {/* <Drawer
                            closeIcon={false}
                            width={200}
                            placement={placement}
                            onClose={onClose}
                            open={open}
                            key={placement}
                            style={{ backgroundColor: "#1F2937" }}
                        >
                            <ul id="link2" className="flex flex-col items-center justify-center gap-4 text-xl">
                                {links}
                            </ul>
                        </Drawer> */}
                    </div>
                </div>

                <button className="text-white px-6 py-2 rounded-lg bg-gradient-to-r from-[#006CE4] to-[#4e91e2] hidden md:flex">
                    Sign in
                </button>
            </div>

        </header>

    );
};

export default Navbar;