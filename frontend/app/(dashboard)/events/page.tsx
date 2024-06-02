"use client";
import BreadCrumb from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { DataTable } from "./table/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { columns } from "./table/columns";
import { New } from "./new";
import { useState } from "react";
import { useFindManyEvent } from "@/lib/hooks";
import { TimePickerDemo } from "@/components/ui/time-picker-demo";

const breadcrumbItems = [{ title: "Event", link: "/event" }];
export default function page() {
  const { data: events, isLoading, error } = useFindManyEvent();
  const [open, setOpen] = useState(false);
  const today = new Date();
  const [date, setDate] = useState(today);
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error {error as string}</p>;
  return (
    <>
      <div className="h-full flex flex-col space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Events (${events?.length})`}
            description="Manage events (Client side table functionalities.)"
          />
          <Button className="text-xs md:text-sm" onClick={() => setOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
          <New
            title="Create Event"
            description="aaaa"
            onClose={() => setOpen(false)}
            isOpen={open}
          />
        </div>
        <Separator />
        <div className="flex-1">
          <DataTable columns={columns} data={events ?? []} />
        </div>
        <TimePickerDemo
          date={date}
          setDate={(value) => {
            if (value) {
              setDate(value);
            }
          }}
        />
      </div>
    </>
  );
}
