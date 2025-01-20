import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Roomfriends({name,email,roomImage}) {
  return (
    <>
      <Link href={"/"}>
        <li className="w-full hover:bg-gray-700   flex gap-2 items-center  p-2 my-2 rounded-md ">
          <div>
            <Image
              alt="friend_img"
              width={400}
              height={400}
              className="w-[50px] h-[50px] rounded-full p-1"
              src={
                "https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg"
              }
            />
          </div>
          <div>
            <p className="text-gray-200">{name || "Hellow world"}</p>
            <small className="text-gray-400">Hlw mazaharul</small>
          </div>
        </li>
      </Link>
    </>
  );
}
