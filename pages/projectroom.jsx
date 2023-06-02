import React, { useState } from "react";
import Image from "next/image";
import {
    AiOutlineLeft,
} from "react-icons/ai";
import { BsThreeDotsVertical , BsArrowRightSquareFill , BsPlusCircleFill } from "react-icons/bs";

const projectRoom = () => {
    const [showYours, setShowYours] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    const [phonenav, setPhonenav] = useState(false);
    const [option,setOption] = useState("tasks");
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

        <div className="roomDesktopView hidden md:flex flex-row w-[90%] m-auto justify-around">
          <div className="taskPortion w-[50%] flex-[0.6]">
            <div className="headingTasks flex justify-between text-[#fff]">
              <div className="heading1 w-[25%]">Todo</div>
              <div className="heading2 w-[25%]">In Progress</div>
              <div className="heading3 w-[25%]">Completed</div>
              <div className="heading4 w-[25%]">Abondoned</div>
            </div>
            <hr style={{ color: "white", backgroundColor: "white",height: "5"}}/>
            <div className="tasksBox">
              
            </div>
          </div>
          <div className="proposalPortion flex-[0.3] bg-[#01002A] p-6">
          <div className="heading4 text-[#06dbee] text-2xl font-semibold">All Proposals</div>
          <div className="proposal border-solid border-2 border-white mt-4">
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
          <div className="proposal border-solid border-2 border-white mt-4">
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
          <div className="proposal border-solid border-2 border-white mt-4">
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
        </div>

        <div className="roomOptions flex m-auto w-[90%] text-[#fff] justify-around md:hidden">
            <div className="option1 pt-3 pb-3 pl-7 pr-7 hover:bg-[#0c0634]"
                onClick={()=>{setOption("tasks")}}>
                Tasks
            </div>
            <div className="option2 pt-3 pb-3 pl-7 pr-7 hover:bg-[#0c0634]"
                onClick={()=>{setOption("proposal")}}>
                All Proposals
            </div>
        </div>
        <div className="mobileViewRoom md:hidden">
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

      <div className="newProposal p-6 m-auto bg-[rgba(0,0,0,0.67)] backdrop-blur-md flex md:p-10">
        <div className="projectIdeaDetails md:w-[20%]">
        <div className="heading4 text-[#06dbee] text-xl font-semibold">Project Idea Name</div>
        <div className="projectIdeaText text-[#fff] text-sm">
          <p className="mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
      <div className="contributorsBox border-solid border-[1px] border-white p-4 mt-3">
        <div className="heading4 text-[#06dbee] text-xl font-semibold">Contributors</div>
         <div className="contributorsList mt-3">
          <div className="contributor flex justify-between mt-3">
              <div className="contributorDetails flex">
                <div className="contributorImage w-[20%]">
                 <Image
                        height={48}
                        width={48}
                        src="/images/avatar.png"
                        alt="avatar"
                        className=""
                    />  
                </div> 
              <div className="contributorName text-[#fff] pl-3">
                <p>Jack Sparrow</p>
              </div> 
              </div>
              <div className="threeDotIcon">
              <BsThreeDotsVertical color="white" size={30} />
              </div>        
          </div>
          <div className="contributor flex justify-between mt-3">
              <div className="contributorDetails flex">
              <div className="contributorImage w-[20%]">
              <Image
                        height={48}
                        width={48}
                        src="/images/avatar.png"
                        alt="avatar"
                        className=""
                    />  
              </div> 
              <div className="contributorName text-[#fff] pl-3">
                <p>Jack Sparrow</p>
              </div> 
              </div>
              <div className="threeDotIcon">
              <BsThreeDotsVertical color="white" size={30} />
              </div>        
          </div>
          <div className="contributor flex justify-between mt-3">
              <div className="contributorDetails flex">
              <div className="contributorImage w-[20%]">
              <Image
                        height={48}
                        width={48}
                        src="/images/avatar.png"
                        alt="avatar"
                        className=""
                    />  
              </div> 
              <div className="contributorName text-[#fff] pl-3">
                <p>Jack Sparrow</p>
              </div> 
              </div>
              <div className="threeDotIcon">
              <BsThreeDotsVertical color="white" size={30} />
              </div>        
          </div>
        </div>
      </div>
      <div className="contibutorBoxPlusIcon absolute right-4 mt-[-10px] md:hidden">
        <BsPlusCircleFill color="white" size="50" />
      </div>

      <div className="leaveAndComplete mt-20">
        <div className="leaveButtonContainer text-center bg-[#fff]">
        <div className="leaveRoomButton flex bg-[#fff] p-2 w-[45%] m-auto">
          <div className="leaveText font-bold">Leave Room</div>
          <div className="leaveIcon">
            <BsArrowRightSquareFill size={30} className=" pl-3"/>
          </div>  
        </div>
        </div>
        <div className="completeButtonContainer mt-3 text-center border-solid border-[1px] border-[#05ff00]">
        <div className="leaveRoomButton p-2 m-auto">
          <div className="leaveText font-semibold text-[#05ff00]">Mark Project as Completed</div>  
        </div>
        </div>
      </div>

      </div>
      <div className="newProposalBox">
        <div className="createProposalOption p-6 hidden md:flex justify-between absolute right-3 bottom-4 ">
          <div className="createProposalText text-[#fff] text-2xl p-2">
            <p>Create New Proposal</p>
          </div>
          <div className="contibutorBoxPlusIcon">
            <BsPlusCircleFill color="white" size="50" />
          </div>
        </div>
      </div>
      </div>
</div>
  )
}

export default projectRoom