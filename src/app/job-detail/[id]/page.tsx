import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Applicants from "@/components/organisms/Applicants";

interface JobDetailPageProps {}

const JobDetailPage: FunctionComponent<JobDetailPageProps> = () => {
  return (
    <div>
      <div className="inline-flex items-center gap-5 mb-5">
        <div>
          <Link href={"/job-listings"}>
            <ArrowLeft className="w-9 h-9" />
          </Link>
        </div>
        <div>
          <div className="font-semibold mb-1 text-2xl">Brand Designer</div>
          <div>Design . Full-Time . 1/10 Hired</div>
        </div>
      </div>
      <Tabs defaultValue="applicants">
        <TabsList className="mb-8">
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobDetails">job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants />
        </TabsContent>
        <TabsContent value="jobDetails">
          Change your job Details here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JobDetailPage;
