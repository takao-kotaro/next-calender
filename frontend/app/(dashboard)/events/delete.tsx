"use client";
import { Event, Prisma } from "@prisma/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Modal } from "@/components/ui/modal";
import { useDeleteEvent, useUpdateEvent } from "@/lib/hooks";

type Props = {
  title: string;
  description: string;
  data: Event;
  isOpen: boolean;
  onClose: () => void;
};

export const Delete = (props: Props) => {
  const { title, description, data, isOpen, onClose } = props;
  const { trigger: deleteEvent } = useDeleteEvent();
  const [event, setEvent] = useState<Prisma.EventUpdateInput>({});
  const onDeleteEvent = async () => {
    await deleteEvent({ where: { id: data.id as string } });
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
          <Button variant="destructive" onClick={() => onDeleteEvent()}>
            Delete
          </Button>
        </DialogFooter>
      </Modal>
    </>
  );
};
