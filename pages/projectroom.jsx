import React, { useState } from "react";
import Image from "next/image";
import {
    AiOutlineLeft,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const projectRoom = () => {
    const [showYours, setShowYours] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    const [phonenav, setPhonenav] = useState(false);
    const [option,setOption] = useState("proposal");
    const[taskOption,setTaskOption] = useState("To Do")
    const changeYours = () => {
      setShowYours(!showYours);
    };
    const changeOthers = () => {
      setShowOthers(!showOthers);
    };
    const openNav = () => {
      setPhonenav(!phonenav);
    };
  return (
    <div class="container1">
        <div className="navbar">
        <div className="mt-10 mb-8 hidden sm:flex flex-row justify-between items-center w-[90%] m-auto rounded-full p-2 pl-3">
          <div className="ml-3 -mt-2 img sm:flex justify-between sm:w-[15%]">
                <AiOutlineLeft className="text-[#fff] mt-2 text-2xl cursor-pointer"/>
                <p className="text-[#fff] text-2xl">Project Idea Name</p>
          </div>
          <div className="flex items-center">
            <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-7">
              <Image
                height={20}
                width={20}
                src="/images/symbol.png"
                alt="chain"
                className="mr-2 "
              />
              <p>120.00 CX</p>
            </div>
            <Image
              height={40}
              width={40}
              src="/images/avatar.png"
              alt="avatar"
              className="ml-auto mr-0 "
            />
          </div>
        </div>

        {/* mobile */}
        {/* nav */}
        <div className="flex flex-row items-center justify-between m-5 sm:hidden">
          <div>
            <Image
              height={48}
              width={48}
              src="/images/avatar.png"
              alt="avatar"
              className=""
            />
          </div>
          <div className="w-[30%] hidden">
            <ul className="flex justify-between font-medium text-white ">
              <li>Profiles</li>
              <li>Ideas</li>
              <li>Showcases</li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="text-[#E40E82] bg-[#1C0041] flex items-center p-2 rounded-xl mr-2">
              <Image
                height={26}
                width={26}
                src="/images/symbol.png"
                alt="chain"
                className="mr-2 "
              />
              <p>120.00 CX</p>
            </div>

            <button onClick={openNav}>
              {" "}
              <BsThreeDotsVertical color="white" size={30} />
            </button>
          </div>
        </div>
      </div>

        <div className="roomOptions flex m-auto w-[90%] text-[#fff] justify-around">
            <div className="option1 pt-3 pb-3 pl-7 pr-7 hover:bg-[#0c0634]"
                onClick={()=>{setOption("tasks")}}>
                Tasks
            </div>
            <div className="option2 pt-3 pb-3 pl-7 pr-7 hover:bg-[#0c0634]"
                onClick={()=>{setOption("proposal")}}>
                All Proposals
            </div>
        </div>
        {
            option==='tasks' ? 
            <>
            <div className="optionName text-[#fff]  text-center">
                {taskOption}
            </div>
            <div className="tasksOptions flex flex-col mt-5">
                <div className="taskOption flex flex-row justify-between">
                    <div className="colorBox bg-[#fff] text-[#fff] w-[5%] rounded-r-lg"
                        onClick={()=>{setTaskOption("To Do")}}>
                        jl
                    </div>
                    <div className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)" >
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="taskOption flex flex-row justify-between mt-3"
                onClick={()=>{setTaskOption("In Progress")}}>
                    <div className="colorBox bg-[#6ab6fc] text-[#6ab6fc] w-[5%] rounded-r-lg">
                        jl
                    </div>
                    <div className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="taskOption flex flex-row justify-between mt-3"
                onClick={()=>{setTaskOption("Completed")}}>
                    <div className="colorBox bg-[#94ffac] text-[#94ffac] w-[5%] rounded-r-lg">
                        jl
                    </div>
                    <div className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="taskOption flex flex-row justify-between mt-3"
                onClick={()=>{setTaskOption("Abondoned")}}>
                    <div className="colorBox bg-[#fe7575] text-[#fe7575] w-[5%] rounded-r-lg">
                        jl
                    </div>
                    <div className="textArea text-[#fff] w-[90%] p-2 text-sm 
                    bg-[rgba(217, 217, 217, 0.13)">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
            </>
            :
            <>
            <div className="proposalList w-[90%] m-auto">
                <div className="proposal border-solid border-2 border-white">
                    <div className="proposalTop flex flex-row text-[#fff] p-3">
                    <div className="proposalLeft w-[20%] ">
                    <Image
                        height={48}
                        width={48}
                        src="/images/avatar.png"
                        alt="avatar"
                        className=""
                    />
                    </div>
                    <div className="proposalRight pl-3">
                        <div className="proposalRightTop">
                           Rajib Mondal 
                        </div>
                        <div className="proposalRightBottom">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit offic Amet minim mollit non deserunt ullamco est sit aliqua </p>
                        </div>
                    </div>
                    </div>
                    <div className="proposalOptions flex flex-row border-solid border-2 border-white text-[#fff] ">
                        <div className="option1 border-solid border-[1px] border-white w-[33%] text-center">Yes</div>
                        <div className="option2 border-solid border-[1px] border-white w-[33%]
                        text-center">No</div>
                        <div className="option3 border-solid border-[1px] border-white w-[34%]
                        text-center">Abstain</div>
                    </div>
                </div>
            </div>
            </>
        }

</div>
  )
}

export default projectRoom