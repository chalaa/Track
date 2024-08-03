import React from "react";
import Button from "../Button";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Data from "../../data";
interface JobDetailProps {
  params: {
    id: string;
  };
}
const JobsDetail = ({ params }: JobDetailProps) => {
  const data = Data.job_postings.find((job) => job.id === Number(params.id));

  return (
    <div className="flex gap-[3.875rem] p-8 bg-white text-black min-h-screen">
      <div className="flex flex-col gap-14 py-[3rem]">
        <div className="flex flex-col gap-4">
          <h1>Description</h1>
          <p>{data?.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1>Resposibilities</h1>
          <div className="flex flex-col gap-2">
            {data?.responsibilities.map((task) => (
              <div className="flex gap-[6px]" key={task}>
                <Image src="/icons/Icon.png" alt="" width={25} height={20} />
                <p>{task}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1>Ideal Candidate</h1>
          <div className="flex flex-col">
            <div className="flex gap-1">
              <div className="pt-[6px]">
                <GoDotFill size={10} />
              </div>
              <p>
                <span className="font-Poppins font-bold">Age : </span>
                {data?.ideal_candidate.age}
              </p>
            </div>
            <div className="flex gap-1">
              <div className="pt-[6px]">
                <GoDotFill size={10} />
              </div>
              <p>
                <span className="font-Poppins font-bold">Gender : </span>
                {data?.ideal_candidate.gender}
              </p>
            </div>
            {data?.ideal_candidate.traits.map((task) => (
              <div className="flex gap-1" key={task}>
                <div className="pt-[6px]">
                  <GoDotFill size={10} />
                </div>
                <p>{task}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-header-color">When & Where</h1>
          <div className="flex gap-4">
            <div className="h-fit">
              <Image
                src={"/icons/Location.png"}
                alt=""
                width={20}
                height={20}
              />
            </div>
            <p>{data?.when_where}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 min-w-[19rem]">
        <h1>About</h1>
        <div className="flex flex-col gap-5 font-Epilogue">
          <div className="flex gap-4">
            <div className="h-fit">
              <Image src={"/icons/Vector.png"} alt="" width={25} height={25} />
            </div>
            <div>
              <p>Posted On</p>
              <p className="font-bold">{data?.about.posted_on}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-fit">
              <Image src={"/icons/icon2.png"} alt="" width={25} height={25} />
            </div>
            <div>
              <p>Deadline</p>
              <p className="font-bold">{data?.about.deadline}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-fit">
              <Image
                src={"/icons/Location.png"}
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div>
              <p>Location</p>
              <p className="font-bold">{data?.about.location}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-fit">
              <Image
                src={"/icons/startcalendar.png"}
                alt=""
                width={25}
                height={25}
              />
            </div>
            <div>
              <p>Start Date</p>
              <p className="font-bold">{data?.about.start_date}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-fit">
              <Image
                src={"/icons/calendar.png"}
                alt=""
                width={25}
                height={25}
              />
            </div>
            <div>
              <p>End Date</p>
              <p className="font-bold">{data?.about.end_date}</p>
            </div>
          </div>
        </div>
        <div className="py-5 border-b border-t">
          <div className="flex flex-col gap-6">
            <h1>Categories</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {data?.about.categories.map((category) => (
                <Button
                  text={category}
                  color="text-green-600"
                  background="bg-green-100"
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h1>Requiered skill</h1>
            <div className="flex flex-row flex-wrap gap-2">
              {
                data?.about.required_skills.map((skill) => (
                  <p className="text-[#4640DE] bg-[#F8F8FD] px-3 py-[6px]">{skill}</p>
                  ))
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsDetail;
