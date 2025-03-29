import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "../../../../../lib/prisma";

type paramsType = {
  id: string;
};

interface JobDetailPageProps {
  params: paramsType;
}

const getDetailJob = async (id: string) => {
  const job = await prisma.job.findFirst({
    where: {
      id: id,
    },
    include: {
      applicant: {
        include: {
          user: true,
        },
      },
      CategoryJob: true,
    },
  });

  return job;
};

const JobDetailPage: FunctionComponent<JobDetailPageProps> = async ({
  params,
}) => {
  const job = await getDetailJob(params.id);
  return (
    <div>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href={"/job-listings"}>
            <ArrowLeft className="w-9 h-9" />
          </Link>
        </div>
        <div>
          <div className="font-semibold mb-1 text-2xl">{job?.roles}</div>
          <div>
            {job?.CategoryJob?.name} . {job?.jobType} . {job?.applicants}/
            {job?.needs} Hired
          </div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants applicants={job?.applicant} />
        </TabsContent>
        <TabsContent value="jobDetails">
          <JobDetail detail={job!!} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobDetailPage;
