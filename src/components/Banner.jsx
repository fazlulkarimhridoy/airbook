import BannerImage from "../assets/banner.png"
const Banner = () => {
    const style = {
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "fit",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
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
                    <div>
                        <div className="flex items-center gap-3">
                            <button className="bg-gray-200 flex items-center gap-2 px-4 py-1.5 rounded-lg">
                                <div className="size-[20px] border border-gray-600 rounded-full bg-gray-200"></div>
                                <h2 className="text-sm font-medium">One Way</h2>
                            </button>
                            <button className="bg-[#006CE4] flex items-center gap-2 px-4 py-1.5 rounded-lg text-white">
                                <div className="size-[20px] border border-gray-600 rounded-full bg-gray-200"></div>
                                <h2 className="text-sm font-medium">Round Trip</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;