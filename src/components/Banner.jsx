import BannerImage from "../assets/banner.png"
import { FaRegCircle, FaSearch } from "react-icons/fa";

const Banner = () => {
    const style = {
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        width: "99vw",
        backgroundAttachment: "fixed",
        overflow: "hidden"
    }
    return (
        <div style={style} className="overflow-hidden">
            <div className="pt-52 pl-60">
                <h2 className="text-[40px] text-white font-medium">
                    Welcome to <span className="text-[#006CE4]">AirBook</span>
                </h2>
                <div className="bg-white mt-5 p-20 w-5/6 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <button className="bg-gray-200 flex items-center gap-2 px-4 py-1.5 rounded-lg">
                                <FaRegCircle color="gray"></FaRegCircle>
                                <h2 className="text-sm font-medium">One Way</h2>
                            </button>
                            <button className="bg-[#006CE4] flex items-center gap-2 px-4 py-1.5 rounded-lg text-white">
                                <div className="size-[16px] m-1 rounded-full bg-gray-200">
                                </div>
                                <h2 className="text-sm font-medium">Round Trip</h2>
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="bg-[#EBF0F5] text-[#006CE4] flex items-center gap-2 px-4 py-1.5 rounded-lg">
                                1 Traveller
                            </button>
                            <button className="bg-[#EBF0F5] text-[#006CE4] flex items-center gap-2 px-4 py-1.5 rounded-lg text-white">
                                Economy
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 border border-gray-400 rounded-md px-4 py-2 w-full">
                            <p className="text-sm font-semibold border-r-2 border-gray-400">DAC</p>
                            <p className="text-sm font-medium flex flex-col">
                                <span>
                                    Dhaka
                                </span>
                                <span className="text-[10px]">
                                    Hazrat Shahjalal Internatio
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-400 rounded-md px-4 py-2 w-full">
                            <p className="text-sm font-semibold border-r-2 border-gray-400">DAC</p>
                            <p className="text-sm font-medium flex flex-col">
                                <span>
                                    Dhaka
                                </span>
                                <span className="text-[10px]">
                                    Hazrat Shahjalal Internatio
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-400 rounded-md px-4 py-2 w-full">
                            <p className="text-sm font-semibold border-r-2 border-gray-400">DAC</p>
                            <p className="text-sm font-medium flex flex-col">
                                <span>
                                    Dhaka
                                </span>
                                <span className="text-[10px]">
                                    Hazrat Shahjalal Internatio
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2 border border-gray-400 rounded-md px-4 py-2 w-full">
                            <p className="text-sm font-semibold border-r-2 border-gray-400">DAC</p>
                            <p className="text-sm font-medium flex flex-col">
                                <span>
                                    Dhaka
                                </span>
                                <span className="text-[10px]">
                                    Hazrat Shahjalal Internatio
                                </span>
                            </p>
                        </div>
                        <button className="bg-[#FFB700] px-8 py-5 rounded-md">
                            <FaSearch color="white"></FaSearch>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;