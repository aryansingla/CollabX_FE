import React, { useState } from "react";
import Image from "next/image";
import {
  AiOutlineWallet,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineRight,
} from "react-icons/ai";
import {
  TbTriangleFilled,
  TbTriangleInvertedFilled,
  TbSearch,
} from "react-icons/tb";
const listView = () => {
  return (
    <div className="container1">
      <div
        className="listViewUpperSection bg-gradient-to-r from-[#36094e] to-[#280e55] pb-8 
        sm:pb-[4rem] rounded-b-[1rem] sm:rounded-b-[4rem]"
      >
        <div className="listViewMobile flex justify-around pt-[1rem] pl-[1.5rem] pr-[1.5rem] pb-[1rem]">
          <div>
          <Image
            src="/images/CollabXLogo.png"
            width="150"
            height="150"
            alt="CollabXLogo"
            className="hidden sm:block "
          />
          </div>
          <div>
          <Image
            src="/images/CollabX.png"
            width="30"
            height="10"
            alt="CollabXLogo"
            className="block sm:invisible"
          />
          </div>
          {/* make a search bar here */}
          <div className="hidden w-[45%] sm:flex sm:items-center sm:justify-center m-auto">
            <input
              type="text"
              className=" w-full py-2.5 pl-4 pr-4 text-md font-semibold placeholder-gray-500  bg-white-100 rounded-xl focus:outline-none focus:bg-white"
              placeholder="Search User"
            />

              <TbSearch
                style={{ color: "black" }}
                className="relative right-[5%]"
              />
          </div>
          <div className=" flex sm:hidden w-[45%]   items-center justify-center m-auto">
            <input
              type="text"
              className=" w-full py-1.5 pl-3 pr-4 text-sm font-semibold placeholder-gray-500 bg-white rounded-xl focus:outline-none focus:bg-white"
              placeholder="Search"
            />
              <TbSearch
                style={{ color: "black" }}
                className="relative right-[20%]"
              />
          </div>
          <div className="w-[15%] sm:w-[5%]">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="ml-auto mr-0 "
            />
          </div>
        </div>
      </div>
      <div className="profileCards pt-[10px] pb-[10px] pl-[10px] pr-[10px] sm:p-5 flex-col sm:flex sm:flex-row justify-around">
        <div
          className="profileCard w-[100%] sm:w-[30%] mt-[1rem] mb-4rem pb-rem pt-[1rem] text-sm
          "
          style={{
            background: "linear-gradient(180deg, #23094E 0%, #000000 100%)" 
          }}
        >
          <div className="profileCardUpperSection flex justify-around">
            <div className="w-[20%]">
              <img src="/images/avatar.png" alt="avatar" />
            </div>
            <div className="h-12 socialIcons">
              <h3 className="text-[#fff] ">Vansh Verma</h3>
              <div className="flex justify-center socialIcons2 sm:justify-between ">
                <AiOutlineMail className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
                <AiFillLinkedin className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-3" />
                <AiFillTwitterSquare className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
              </div>
            </div>
            <div
              className="upVoteCount bg-[#01002a] text-[#fff] rounded-full text-center
                 w-[25%] sm:w-[20%] flex-col sm:text-2xl"
            >
              <TbTriangleFilled className="text-[#e40e82] m-auto" />
              <h3 className="">120</h3>
              <TbTriangleInvertedFilled className="m-auto" />
            </div>
          </div>
          <div className="profileCardLowerSection m-auto">
            <div className="personDetails flex-col pl-[1rem] pr-[1rem]">
              <div className="about  bg-[#01002A] p-5 mt-2 rounded-[1rem]">
                <h3 className="text-lg text-[#05eafa]">About</h3>
                <p className="text-[#fff]">
                  Amet minim mollit non deserunt ullamco est sit aliqua non
                  deserunt ullamco est sit aliqua{" "}
                </p>
              </div>
              <div className="skills  bg-[#01002A] p-5 mt-2 rounded-[1rem]">
                <h3 className="text-lg text-[#05eafa]">Skills</h3>
                <p className="text-[#fff]">
                  Amet minim mollit non deserunt ullamco est sit aliqua non
                  deserunt ullamco est sit aliqua{" "}
                </p>
              </div>
            </div>
            <div className="viewProfile bg-[#01002A] ml-[1.25rem] mr-[1.25rem] mt-2 p-5 rounded-[1rem] flex justify-between">
              <h3 className="text-lg text-[#05eafa]">View Profile</h3>
              <AiOutlineRight className="text-[#05eafa] mt-2" />
            </div>
          </div>
        </div>
        <div
          className="profileCard w-[100%] sm:w-[30%] mt-[1rem] mb-4rem pb-rem pt-[1rem] text-sm
          hover:shadow-[2px_2px_20px_10px_#521734]"
          style={{
            background: "linear-gradient(180deg, #23094E 0%, #000000 100%)",
          }}
        >
          <div className="profileCardUpperSection flex justify-around">
            <div className="w-[20%]">
              <img src="/images/avatar.png" alt="avatar" />
            </div>
            <div className="h-12 socialIcons">
              <h3 className="text-[#fff] ">Vansh Verma</h3>
              <div className="flex justify-center socialIcons2 sm:justify-between ">
                <AiOutlineMail className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
                <AiFillLinkedin className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-3" />
                <AiFillTwitterSquare className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
              </div>
            </div>
            <div
              className="upVoteCount bg-[#01002a] text-[#fff] rounded-full text-center
                 w-[25%] sm:w-[20%] flex-col sm:text-2xl"
            >
              <TbTriangleFilled className="text-[#e40e82] m-auto" />
              <h3 className="">120</h3>
              <TbTriangleInvertedFilled className="m-auto" />
            </div>
          </div>
          <div className="profileCardLowerSection m-auto">
            <div className="personDetails flex-col pl-[1rem] pr-[1rem]">
              <div className="about  bg-[#01002A] p-5 mt-2 rounded-[1rem]">
                <h3 className="text-lg text-[#05eafa]">About</h3>
                <p className="text-[#fff]">
                  Amet minim mollit non deserunt ullamco est sit aliqua non
                  deserunt ullamco est sit aliqua{" "}
                </p>
              </div>
              <div className="skills  bg-[#01002A] p-5 mt-2 rounded-[1rem]">
                <h3 className="text-lg text-[#05eafa]">Skills</h3>
                <div className='mt-[1rem] grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                        <div className='w-full p-1 px-2 border-2 border-white rounded-3xl'>#C++</div>
                        <div className='w-full p-1 px-2 border-2 border-white rounded-3xl '>#JavaScript</div>
                        <div className='w-full p-1 px-2 border-2 border-white rounded-3xl'>#MongoDB</div>
                        <div className='w-full p-1 px-2 border-2 border-white rounded-3xl'>#Docker</div>
                    </div>
              </div>
            </div>
            <div className="viewProfile bg-[#01002A] ml-[1.25rem] mr-[1.25rem] mt-2 p-5 rounded-[1rem] flex justify-between">
              <h3 className="text-lg text-[#05eafa]">View Profile</h3>
              <AiOutlineRight className="text-[#05eafa] mt-2" />
            </div>
          </div>
        </div>
        <div
          className="profileCard w-[100%] sm:w-[30%] mt-[1rem] mb-4rem pb-rem pt-[1rem] text-sm
          hover:shadow-[2px_2px_20px_10px_#521734]"
          style={{
            background: "linear-gradient(180deg, #23094E 0%, #000000 100%)",
          }}
        >
          <div className="profileCardUpperSection flex justify-around">
            <div className="w-[20%]">
              <img src="/images/avatar.png" alt="avatar" />
            </div>
            <div className="h-12 socialIcons">
              <h3 className="text-[#fff] ">Vansh Verma</h3>
              <div className="flex justify-center socialIcons2 sm:justify-between ">
                <AiOutlineMail className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
                <AiFillLinkedin className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-3" />
                <AiFillTwitterSquare className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
              </div>
            </div>
            <div
              className="upVoteCount bg-[#01002a] text-[#fff] rounded-full text-center
                 w-[25%] sm:w-[20%] flex-col sm:text-2xl"
            >
              <TbTriangleFilled className="text-[#e40e82] m-auto" />
              <h3 className="">120</h3>
              <TbTriangleInvertedFilled className="m-auto" />
            </div>
          </div>
          <div className="profileCardLowerSection m-auto">
            <div className="personDetails flex-col pl-[1rem] pr-[1rem]">
              <div className="about  bg-[#01002A] p-5 mt-2 rounded-[1rem]">
                <h3 className="text-lg text-[#05eafa]">About</h3>
                <p className="text-[#fff]">
                  Amet minim mollit non deserunt ullamco est sit aliqua non
                  deserunt ullamco est sit aliqua{" "}
                </p>
              </div>
              <div className="skills  bg-[#01002A] p-5 mt-2 rounded-[1rem]">
                <h3 className="text-lg text-[#05eafa]">Skills</h3>
                <p className="text-[#fff]">
                  Amet minim mollit non deserunt ullamco est sit aliqua non
                  deserunt ullamco est sit aliqua{" "}
                </p>
              </div>
            </div>
            <div className="viewProfile bg-[#01002A] ml-[1.25rem] mr-[1.25rem] mt-2 p-5 rounded-[1rem] flex justify-between">
              <h3 className="text-lg text-[#05eafa]">View Profile</h3>
              <AiOutlineRight className="text-[#05eafa] mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default listView;

// hover:border-solid hover:border-[10px] hover:border-[#472027]
// hover:shadow-shadow-[10px_10px_10px_#472027]
