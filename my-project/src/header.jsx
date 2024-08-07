import React  from "react";

const Header=()=>{
    return(
        <div className="w-full h-[7rem]  flex">
            <div className="w-[20rem] flex justify-center items-center">
                <h1 className="text-[#952A2A] text-[2.4rem] top-[2.9rem] font-semibold">HelpemOÜT</h1>
            </div>
            <div className="w-[46em]  flex items-center justify-evenly">
                <a href="#" className="text-[1.2rem] font-semibold text-[#404040]">Home</a>
                <a href="#" className="text-[1.2rem] font-semibold text-[#404040]">About Us</a>
                <a href="#" className="text-[1.2rem] font-semibold text-[#404040]">Institutions</a>
                <a href="#" className="text-[1.2rem] font-semibold text-[#404040]">Library</a>
                <a href="#" className="text-[1.2rem] font-semibold text-[#404040]">Projects</a>
                <a href="#" className="text-[1.2rem] font-semibold text-[#404040]">Contact Us</a>
            </div>
            <div className="flex justify-center items-center">
                <button className="h-[3.6rem] w-[7.5rem] top-[3.2rem] text-[1.4rem] font-semibold text-[#952A2A]">Login</button>
                <button className="h-[3.4rem] w-[9.4rem] rounded-[5px] bg-[#952A2A] gap-[1rem] text-[1.3rem] text-[white]"> Register</button>
            </div>
        </div>
    );
}

export default Header