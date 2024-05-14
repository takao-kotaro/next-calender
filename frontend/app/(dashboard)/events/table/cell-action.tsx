"use client";
import { FormModal } from "@/components/modal/formModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Event } from "@prisma/client";
import { MoreHorizontal, Trash, Edit as EditIcon } from "lucide-react";
import { Edit } from "../edit";
import { Delete } from "../delete";
import { useState } from "react";

interface CellActionProps {
  data: Event;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  return (
    <>
      <Edit
        title="Update Project"
        description="aaaa"
        data={data}
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
      />
      <Delete
        title="Delete Project"
        description="aaaa"
        data={data}
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setEditModalOpen(true)}>
            <EditIcon className="mr-2 h-4 w-4" /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setDeleteModalOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
