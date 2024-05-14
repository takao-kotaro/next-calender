"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Project } from "@prisma/client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";

interface ProductsClientProps {
  data: Project[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Projects (${data.length})`}
          description="Manage projects (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/user/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
