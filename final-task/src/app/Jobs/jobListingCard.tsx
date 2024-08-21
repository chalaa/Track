import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

import BookmarkButton from "../components/BookmarkButton";
interface JobListingCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  categories: string[];
  image: string;
  opType: string;
  isbookmarked:boolean;
  access_token: string|undefined
}

const JobListingCard = async ({
  id,
  title,
  company,
  location,
  description,
  categories,
  image,
  opType,
  isbookmarked,
  access_token
}: JobListingCardProps) => {

  

  

  return (
    <div className="flex bg-white text-black px-9 py-6 gap-6 rounded-lg border-solid border-2 shadow-lg font-sans mb-9">
      <Link href={`/Jobs/${id}`}>
        <button className="flex h-fit min-w-16">
          {image ? (
            <img src={image} alt="" className="rounded-full w-14" />
          ) : (
            <Image
              src={"/Images/next.jpeg"}
              alt="company logo"
              width={56}
              height={56}
              className="rounded-full"
            />
          )}
        </button>
      </Link>
      <div className="">
        <div className="flex flex-row gap-4  justify-between">
          <Link href={`/Jobs/${id}`}>
            <h1 className="font-bold text-3xl">{title}</h1>
            <div className="flex gap-3 text-bold text-gray-500 mb-2">
              <p>{company}</p>
              <p>{location}</p>
            </div>
          </Link>
          <BookmarkButton id= {id} isbookmarked={isbookmarked} access_token={access_token}/>
        </div>
        <p>{description}</p>
        <div className="flex gap-4 mt-3">
          <div>
            {
              <Button
                text={opType}
                color="border-green-600"
                background=" bg-green-200"
              ></Button>
            }
          </div>
          <div className=" w-[2px] bg-gray-600"></div>
          <div className="flex gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                text={category}
                color="border-green-600"
                background=""
              ></Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingCard;
