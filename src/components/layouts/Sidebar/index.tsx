"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import {
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { CiLogout, CiSettings } from "react-icons/ci";
import { FaRegBuilding, FaRegMessage } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const { push } = useRouter();
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => push("/")}
            >
              <AiOutlineHome className="mr-2 text-lg" />
              Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <FaRegMessage className="mr-2 text-lg" />
              Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <FaRegBuilding className="mr-2 text-lg" />
              Company Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineUsergroupAdd className="mr-2 text-lg" />
              All Applicants
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => push("/job-listings")}
            >
              <IoDocumentTextOutline className="mr-2 text-lg" />
              Job Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineSchedule className="mr-2 text-lg" />
              My Schedule
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
          <Button
            variant={"ghost"}
            className="w-full justify-start rounded-none hover:text-primary"
          >
            <CiSettings className="mr-2 text-lg" />
            Settings
          </Button>
          <Button
            variant={"ghost"}
            className="w-full text-red-500 hover:bg-red-200 justify-start rounded-none hover:text-red-500"
          >
            <CiLogout className="mr-2 text-lg" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
