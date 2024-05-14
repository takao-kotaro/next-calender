"use client";
import { User, Prisma } from "@prisma/client";
import { useState } from "react";
import { Modal } from "@/components/modal/modal";
import { useUpdateUser } from "@/lib/hooks";
import { EditForm } from "./form/edit-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./schema/update-schema";

type Props = {
  title: string;
  description: string;
  data: User;
  isOpen: boolean;
  onClose: () => void;
};

export const Edit = (props: Props) => {
  const { title, description, data, isOpen, onClose } = props;
  const { trigger: updateUser } = useUpdateUser();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data,
    mode: "onChange",
  });

  const onUpdateUser = async (user: z.infer<typeof schema>) => {
    const editUser = user;
    await updateUser({ where: { id: user.id }, data: editUser });
  };
  const onSubmit = (values: z.infer<typeof schema>) => {
    onUpdateUser(values);
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
