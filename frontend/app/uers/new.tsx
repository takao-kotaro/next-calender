"use client";
import { Prisma } from "@prisma/client";
import { Modal } from "@/components/modal/modal";
import { NewForm } from "./form/new-form";
import { z } from "zod";
import { useCreatePlayer } from "@/lib/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./schema/create-schema";
import { useParams } from "next/navigation";

type Props = {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
};

export const New = (props: Props) => {
  const { title, description, isOpen, onClose } = props;
  const { trigger: createPlayer } = useCreatePlayer();
  const params = useParams();
  const projectId = params?.project_id;
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });
  const onReset = form.reset;

  const onCreatePlayer = async (player: z.infer<typeof schema>) => {
    const newPlayer: Prisma.PlayerCreateInput = {
      ...player,
      project: { connect: { id: projectId as string } },
      playerStatuses: {
        create: [
          { status: "Free", project: { connect: { id: projectId as string } } },
        ],
      },
    };
    await createPlayer({ data: newPlayer as Prisma.PlayerCreateInput });
  };
  const onSubmit = (values: z.infer<typeof schema>) => {
    onClose();
    onCreatePlayer(values);
    onReset();
  };

  return (
    <Modal
      title={title}
      description={description}
      isOpen={isOpen}
      onClose={onClose}
    >
      <NewForm form={form} onSubmit={onSubmit} />
    </Modal>
  );
};
