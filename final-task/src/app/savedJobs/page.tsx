import React from "react";
import JobListingCard from "../Jobs/jobListingCard";
import { get_all_opportunities, get_user_session } from "../action/action";
import Header from "../components/Header";

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
  whenAndWhere: string;
  orgId: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string | null;
}
const JobListing = async () => {
  const session = await get_user_session();

  const url = "https://akil-backend.onrender.com/opportunities/search";

  const access_token = session?.accessToken


  const result = await get_all_opportunities(url, access_token);

  const datas: Jobs[] = result.data;

  const jobs = datas.filter((job)=>{
    if(job.isBookmarked) return job
  })

  return (
   <>
    <div className="bg-white pt-16 pl-32 pr-64">
      <Header />
    </div>
    <div className="flex gap-4 bg-white min-h-screen py-16 pl-32 pr-64">
      <div>
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="font-bold text-3xl text-black mb-1">
              opportunities
            </h1>
            <p className="text-sm text-gray-600">showing {jobs.length} result</p>
          </div>
          <div className="my-5 text-gray-800 pr-5 flex gap-2">
            <p>sort by: </p>
            <select name="" id="" className="bg-inherit">
              <option value="">Most relevant</option>
              <option value="">Most recent</option>
            </select>
          </div>
        </div>

        {jobs.map((data: Jobs) => (
          <JobListingCard
            key={data.id}
            id={data.id}
            title={data.title}
            company={data.orgName}
            location={data.location[0]}
            description={data.description}
            image={data.logoUrl}
            categories={data.categories}
            opType={data.opType}
            isbookmarked={data.isBookmarked}
            access_token={session?.accessToken}
          />
        ))}
      </div>
      
    </div>
   </>
  );
};

export default JobListing;
