"use client";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface ButtonActionTableProps {
  url: string;
}

const ButtonActionTable: FunctionComponent<ButtonActionTableProps> = ({
  url,
}) => {
  const { push } = useRouter();
  return (
    <Button onClick={() => push(url)} variant={"outline"} size={"icon"}>
      <MoreVertical className="h-4 w-4" />
    </Button>
  );
};

export default ButtonActionTable;
