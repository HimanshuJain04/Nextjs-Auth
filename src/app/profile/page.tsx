"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function profilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const logout = async () => {
    try {
      await axios.get("/api/user/logout");
      toast.success("Logout successfully");
      router.push("/login");
    } catch (err) {
      console.log(err);
      toast.error("Logout Failed");
    }
  };

  const getUserDeatils = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get("/api/user/me");
      setUserData(data.data);
      toast.success("Get User Data Successful");
    } catch (err: any) {
      toast.error("Get User Data Failed");
      console.log("Error : ", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div className="w-10/12 flex mt-10 py-20 bg-[white]/[0.1] flex-col gap-10 justify-start items-center">
          <p className="text-4xl font-semibold">Profile-Page</p>

          <button
            onClick={logout}
            className=" bg-blue-600 hover:font-semibold text-white rounded-md py-2 px-10"
          >
            Logout
          </button>

          {userData && (
            <div className="flex p-5 rounded-md text-white font-semibold text-xl bg-[white]/[0.2] flex-col gap-8 justify-center items-center">
              <p>{userData.username}</p>
              <p>{userData.email}</p>
            </div>
          )}

          <button
            className=" bg-blue-600 hover:font-semibold text-white rounded-md py-2 px-10"
            onClick={getUserDeatils}
          >
            Get User Data
          </button>
        </div>
      )}
    </div>
  );
}
