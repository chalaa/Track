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
}

const JobListingCard = ({title, company, location, description, categories,image}:JobListingCardProps) => {
  return (
    <div className="flex bg-white text-black px-9 py-6 gap-6 rounded-lg border-solid border-2 shadow-lg font-sans mb-9">
      <div className="flex h-fit min-w-16">
        <Image
          src={"/Images/next.jpeg"}
          alt="company logo"
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>
      <div>
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="flex gap-3 text-bold text-gray-500 mb-2">
          <p>{company}</p>
          <p>{location}</p>
        </div>
        <p>{description}</p>
        <div className="flex gap-4 mt-3">
            {
                categories.map((category)=>(
                    <Button text={category} color="border-green-600" background=""></Button>
                ))
            }
          <Button text={"Education"} color="border-green-600" background=""></Button>
          <Button text={"IT"} color="border-green-600" background=""></Button>
        </div>
      </div>
    </div>
  );
};

export default JobListingCard;
