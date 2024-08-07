import React from "react";
import people from './people.png'

const Footer=()=>{
    return(
        < >
        <div className="w-full h-[10rem] my-[2.5rem] m-[1rem]  flex justify-evenly">
            <div className="h-[5rem] w-[15.6rem] p-[10px, 17px, 10px, 17px] flex gap-[1.2rem] bg-[#EEDDDD] ">
                <div className="flex-1  flex mx-[1rem] items-center">
                <div className="h-[3.5rem] w-[3.5rem] rounded-[50px] bg-[#952A2A] flex justify-center items-center">
                    <img src={people} className="h-[1.4rem]"/>
                </div>
                </div>
                <div className="w-[60%] bg flex items-center">
                <p className="text-[1.4rem] text-[#952A2A] font-medium "> Orphans</p>
                </div>
             
            </div>
            <div className="h-[5rem] w-[23.6rem] p-[10px, 17px, 10px, 17px] flex gap-[1.2rem] bg-[#EEDDDD] ">
                <div className="flex-1  flex mx-[1rem] items-center">
                <div className="h-[3.5rem] w-[3.5rem] rounded-[50px] bg-[#952A2A] flex justify-center items-center">
                    <img src={people} className="h-[1.4rem]"/>
                </div>
                </div>
                <div className="w-[90%] bg flex items-center">
                <p className="text-[1.4rem] text-[#952A2A] font-medium "> Poverty Relieved Childen</p>
                </div>
             
            </div>
            <div className="h-[5rem] w-[25.6rem] p-[10px, 17px, 10px, 17px] flex gap-[1.2rem] bg-[#EEDDDD] ">
                <div className="flex-1  flex mx-[1rem] items-center">
                <div className="h-[3.5rem] w-[3.5rem] rounded-[50px] bg-[#952A2A] flex justify-center items-center">
                    <img src={people} className="h-[1.4rem]"/>
                </div>
                </div>
                <div className="w-[90%] bg flex items-center">
                <p className="text-[1.4rem] text-[#952A2A] font-medium "> Scholarship Based Students</p>
                </div>
             
            </div>
        </div>
        </>
    )
}

export default Footer
{/*  */}