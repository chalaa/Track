import { getServerSession } from "next-auth/next";
import {option} from "../api/auth/[...nextauth]/options";


export const register_user = async (data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const res = await fetch("https://akil-backend.onrender.com/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      role: "user",
    }),
  });

  return res
};

export const verify_user = async (email:string,otp:string) => {
    const res = await fetch("https://akil-backend.onrender.com/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email: email,
          otp: otp
        })
      });

      return res.json();
}


export const get_user_session = async () => {
  const session = await getServerSession(option);
  return session;
};

export const bookmark_job = async (jobId:string,access_token:string) => {
  console.log("boo_marked",jobId,access_token)
    const res = await fetch(`https://akil-backend.onrender.com/bookmarks/${jobId}`, {
        method: "POST",
        headers: {
          Authorization: `bearer ${access_token}`,
        },
      });
    
      return res.json();
    console.log("the bookmarked res===>",res)
}

export const delete_bookmark = async (jobId:string, access_token:string) => {
  const res = await fetch(`https://akil-backend.onrender.com/bookmarks/${jobId}`, {
    method: "DELETE",
    headers: {
      Authorization: `bearer ${access_token}`,
    },
  });

    return res.json();
}

export const get_all_opportunities = async (url:string,access_token:string|undefined)=> {
  if (access_token) {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    });

    return res.json();
  }
  else{
    const res = await fetch("https://akil-backend.onrender.com/opportunities/search", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.json();
  }
}


