"use client";
import { User, Prisma } from "@prisma/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Modal } from "@/components/ui/modal";
import { useDeleteUser, useUpdateUser } from "@/lib/hooks";

type Props = {
  title: string;
  description: string;
  data: User;
  isOpen: boolean;
  onClose: () => void;
};

export const Delete = (props: Props) => {
  const { title, description, data, isOpen, onClose } = props;
  const { trigger: deleteUser } = useDeleteUser();
  const [user, setUser] = useState<Prisma.UserUpdateInput>({});
  const onDeleteUser = async () => {
    await deleteUser({ where: { id: data.id as string } });
    onClose();
  };

  return (
    <>
      <Modal
        title={title}
        description={description}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DialogFooter>
          <Button variant="destructive" onClick={() => onDeleteUser()}>
            Delete
          </Button>
        </DialogFooter>
      </Modal>
    </>
  );
};
