import React from "react";
import Button from "./Button";
import Image from "next/image";
import path from "../../public/Images/next.jpeg";

interface JobListingCardProps {
  title: string;
  company: string;
  location: string;
  description: string;
  categories: string[];
  image: string;
  opType: string;
}

const JobListingCard = ({title, company, location, description, categories,image,opType}:JobListingCardProps) => {
  return (
    <div className="flex bg-white text-black px-9 py-6 gap-6 rounded-lg border-solid border-2 shadow-lg font-sans mb-9">
      <div className="flex h-fit min-w-16">

        {image ? <img src={image} alt="" className="rounded-full w-14"/> : <Image
          src={"/Images/next.jpeg"}
          alt="company logo"
          width={56}
          height={56}
          className="rounded-full"
        />}        
      </div>
      <div>
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="flex gap-3 text-bold text-gray-500 mb-2">
          <p>{company}</p>
          <p>{location}</p>
        </div>
        <p>{description}</p>
        <div className="flex gap-4 mt-3">
          <div>
          {
              <Button text={opType} color="border-green-600" background=" bg-green-200"></Button>
          }
          </div>
          <div className=" w-[2px] bg-gray-600">
            
          </div>
          <div className="flex gap-4">
            {
                categories.map((category)=>(
                    <Button key = {category} text={category} color="border-green-600" background=""></Button>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingCard;
