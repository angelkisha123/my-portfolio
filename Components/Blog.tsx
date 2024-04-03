import React from "react";
import Image from "next/image";
import {
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
const Blog = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]">
      <h1 className="heading">
        MY <span className="text-yellow-400">BLOG</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto">
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/blog3.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              January 22, 2024
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white text-[15px]">By Michelle</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white text-[15px]">Comments(2)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Next js Development
            </p>
          </div>
        </div>
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/blog2.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              March 14, 2024
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white text-[15px]">By Adam</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white text-[15px]">Comments(4)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              React Development
            </p>
          </div>
        </div>
        <div>
          <div className="w-[100%] relative h-[400px]">
            <Image
              src="/images/blog1.jpg"
              alt="blog"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]">
            <div className="w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              April 01, 2024
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <UserCircleIcon className="w-[2rem] mx-auto h-[2rem] text-[#55e6a5]" />
                <p className="text-white text-[15px]">By Angel</p>
              </div>
              <div className="flex items-center space-x-3">
                <ChatBubbleLeftRightIcon className="w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]" />
                <p className="text-white text-[15px]">Comments(5)</p>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font-semibold">
              Next js New Features
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
