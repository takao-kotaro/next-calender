"use client";
import { Player, Prisma } from "@prisma/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Modal } from "@/components/ui/modal";
import { useDeletePlayer, useUpdatePlayer } from "@/lib/hooks";

type Props = {
  title: string;
  description: string;
  data: Player;
  isOpen: boolean;
  onClose: () => void;
};

export const Delete = (props: Props) => {
  const { title, description, data, isOpen, onClose } = props;
  const { trigger: deletePlayer } = useDeletePlayer();
  const [player, setPlayer] = useState<Prisma.PlayerUpdateInput>({});
  const onDeletePlayer = async () => {
    await deletePlayer({ where: { id: data.id as string } });
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
          <Button variant="destructive" onClick={() => onDeletePlayer()}>
            Delete
          </Button>
        </DialogFooter>
      </Modal>
    </>
  );
};
