import React from "react";
import JobListingCard from "./jobListingCard";
import Link from "next/link";

export interface Jobs {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere : string;
  orgId: string;
  datePosted: string;
  status: string;
  applicantsCount:number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string|null;
}
const JobListing = async () => {

  const url = "https://akil-backend.onrender.com/opportunities/search"

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const result = await res.json();

  const datas = result.data;
  
  return (
    <div className="bg-white min-h-screen py-16 pl-32 pr-96">
      <div>
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="font-bold text-3xl text-black mb-1">
              opportunities
            </h1>
            <p className="text-sm text-gray-600">showing 73 result</p>
          </div>
          <div className="my-5 text-gray-800 pr-5 flex gap-2">
            <p>sort by: </p>
            <select name="" id="" className="bg-inherit">
                <option value="">Most relevant</option>
                <option value="">Most recent</option>
              </select>
          </div>
        </div>
        {datas.map((data:Jobs) => (
          <Link key={data.id} href={`/Jobs/${data.id}`}>
            <JobListingCard
              title={data.title}
              company={data.orgName}
              location={data.location[0]}
              description={data.description}
              image =  {data.logoUrl}
              categories={data.categories}
              opType={data.opType}
            />
          </Link>
        ))}
      </div>
    </div>

  );


};

export default JobListing;
