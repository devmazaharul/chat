"use client";
import axios from "axios";
import RoomsComponent from "./imbox/Rooms";
import { useEffect, useState } from "react";
import Createroom from "./imbox/Createroom";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWF6YWhhcnVsIGlzbGFtIiwiZW1haWwiOiJleEBnbWFpbC5jb20iLCJzdGF0dXMiOiJ1c2VyIiwiaWF0IjoxNzM3Mjg5Njc2fQ._iHwWR5H9HuJqmaZPue8w5Ur2r7DdGLqBYLMkB-rlIE";

export default function Sidebar() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    const getroom = async () => {
      const rooms = await axios.get(
        "https://backend-chat-gamma.vercel.app/api/inbox/rooms"
      );

     rooms.data.data.roomsList.reverse()

      setdata(rooms.data.data);
    };
    getroom();
  }, []);


  return (
    <div className="w-full py-3 px-2 md:h-[100vh] primary_bg">
      <div className="flex   items-center px-2 my-4 text-gray-400 justify-between">
      <h1 >Rooms</h1>
      <div>
        <Createroom/>
      </div>
      </div>
      <ul className="text-gray-200 my-3 ">
        {data && data?.roomsList?.reverse().map((item) => (
            <div key={item._id}>
              <RoomsComponent {...item} />
            </div>
          ))}
      </ul>
    </div>
  );
}
