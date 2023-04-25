import React from "react";
import Image from "next/image";
import {
  AiOutlineWallet,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillPlusCircle,
} from "react-icons/ai";
import { TbTriangleFilled , TbTriangleInvertedFilled } from "react-icons/tb"
const listView = () => {
  return (
    <div className="container1 h-[100vh] ">
      <div
        className="listViewUpperSection bg-gradient-to-r from-[#36094e] to-[#280e55] pb-8 
        sm:pb-[4rem] rounded-b-[1rem] sm:rounded-b-[4rem]"
      >
        <div className="listViewMobile flex justify-between pt-[1rem] pl-[1rem] pr-[1rem] pb-[1rem]">
          <Image
            src="/images/CollabXLogo.png"
            width="150"
            height="150"
            alt="CollabXLogo"
            className="hidden sm:block "
          />
          <Image
            src="/images/CollabX.png"
            width="30"
            height="30"
            alt="CollabXLogo"
            className="block sm:invisible"
          />
          {/* make a search bar here */}

          <div>
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="ml-auto mr-0 w-[30%]  sm:w-[50%]"
            />
          </div>
        </div>
      </div>
      <div className="profileCards">
          <div className="profileCard w-[100%] mt-[1rem]">
            <div className="profileCardUpperSection flex justify-around">
              <div className="w-[20%] sm:w-[50%]">
                <img
                  src="/images/avatar.png"
                  alt="avatar"
                 
                />
              </div>
              <div className="h-12 socialIcons">
                <h3 className="text-[#fff] ">Vansh Verma</h3>
                <div className="flex justify-center socialIcons2 sm:justify-between ">
                  <AiOutlineMail className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
                  <AiFillLinkedin className="text-[#fff]  text-lg sm:text-2xl mt-1 mr-3" />
                  <AiFillTwitterSquare className="text-[#fff] opacity-[52%] text-lg sm:text-2xl mt-1 mr-3" />
                </div>
              </div>
                <div className="upVoteCount bg-[#01002a] text-[#fff] rounded-full text-center
                 w-[20%] sm:w-[10%] flex-col">
                    <TbTriangleFilled className="text-[#e40e82] m-auto"/>
                    <h3 className="">120</h3>
                    <TbTriangleInvertedFilled className="m-auto"/>
                </div>
            </div>
            <div className="profileCardLowerSection m-auto">
                <div className="personDetails flex">
                    <div className="about w-[40%]">
                        <h3 className="text-lg text-[#05eafa]">About</h3>
                        <p className="text-[#fff]">Amet minim mollit non deserunt ullamco est sit aliqua non deserunt ullamco est sit aliqua </p>
                    </div>
                    <div className="skills w-[40%]">
                    <h3 className="text-lg text-[#05eafa]">About</h3>
                        <p className="text-[#fff]">Amet minim mollit non deserunt ullamco est sit aliqua non deserunt ullamco est sit aliqua </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default listView;
