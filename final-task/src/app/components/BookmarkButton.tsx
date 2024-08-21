"use client";
import React, { useState } from "react";
import Image from "next/image";
import { bookmark_job,delete_bookmark } from "../action/action";
import { signIn } from "next-auth/react";

interface BookmarkButtonProps {
  id: string;
  isbookmarked: boolean;
  access_token: string | undefined;
}

const BookmarkButton = ({
  isbookmarked,
  access_token,
  id,
}: BookmarkButtonProps) => {
    const [booked,setBooked] = useState(isbookmarked)
  const handleBookmark = async () => {
    if (access_token) {
        if (booked) {
           await delete_bookmark(id, access_token);
        }
        else{

            await bookmark_job(id, access_token);
        }
      setBooked(!booked)
    } else {
      signIn();
    }
  };
  return (
    <button onClick={handleBookmark}>
      {booked && (
        <Image src="/icons/bookmark.png" alt="" width={30} height={30} />
      )}
      {!booked && (
        <Image src="/icons/bookmark-1.png" alt="" width={30} height={30} />
      )}
    </button>
  );
};

export default BookmarkButton;
