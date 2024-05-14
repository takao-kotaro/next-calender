"use client";
import { Event, Prisma } from "@prisma/client";
import { useState } from "react";
import { Modal } from "@/components/modal/modal";
import { useUpdateEvent } from "@/lib/hooks";
import { EditForm } from "./form/edit-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./schema/update-schema";

type Props = {
  title: string;
  description: string;
  data: Event;
  isOpen: boolean;
  onClose: () => void;
};

export const Edit = (props: Props) => {
  const { title, description, data, isOpen, onClose } = props;
  const { trigger: updateEvent } = useUpdateEvent();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data,
    mode: "onChange",
  });

  const onUpdateEvent = async (event: z.infer<typeof schema>) => {
    const editEvent = event;
    await updateEvent({ where: { id: event.id }, data: editEvent });
  };
  const onSubmit = (values: z.infer<typeof schema>) => {
    onUpdateEvent(values);
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
        <EditForm form={form} onSubmit={onSubmit} />
      </Modal>
    </>
  );
};
