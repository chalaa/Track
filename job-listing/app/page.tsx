import React from "react";
import JobListingCard from "./Jobs/jobListingCard";
import Data from "./data";
import Link from "next/link";
const JobListing = () => {
  const data = Data.job_postings;

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
        {data.map((job) => (
          <Link href={`/Jobs/${job.id}`}>
            <JobListingCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.about.location}
              description={job.description}
              image=""
              categories={job.about.categories}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
