"use client";
import { Prisma } from "@prisma/client";
import { Modal } from "@/components/modal/modal";
import { NewForm } from "./form/new-form";
import { z } from "zod";
import { useCreateEvent } from "@/lib/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./schema/create-schema";

type Props = {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
};

export const New = (props: Props) => {
  const { title, description, isOpen, onClose } = props;
  const { trigger: createEvent } = useCreateEvent();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });
  const onReset = form.reset;

  const onCreateEvent = async (event: z.infer<typeof schema>) => {
    const newEvent: Prisma.EventCreateInput = {
      ...event,
    };
    await createEvent({ data: newEvent as Prisma.EventCreateInput });
  };
  const onSubmit = (values: z.infer<typeof schema>) => {
    onClose();
    onCreateEvent(values);
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
