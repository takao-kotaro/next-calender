"use client";
import { Player, Prisma } from "@prisma/client";
import { useState } from "react";
import { Modal } from "@/components/modal/modal";
import { useUpdatePlayer } from "@/lib/hooks";
import { EditForm } from "./form/edit-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./schema/update-schema";

type Props = {
  title: string;
  description: string;
  data: Player;
  isOpen: boolean;
  onClose: () => void;
};

export const Edit = (props: Props) => {
  const { title, description, data, isOpen, onClose } = props;
  const { trigger: updatePlayer } = useUpdatePlayer();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: data,
    mode: "onChange",
  });

  const onUpdatePlayer = async (player: z.infer<typeof schema>) => {
    const editPlayer = player;
    await updatePlayer({ where: { id: player.id }, data: editPlayer });
  };
  const onSubmit = (values: z.infer<typeof schema>) => {
    onUpdatePlayer(values);
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
