"use client";
import { Prisma } from "@prisma/client";
import { Modal } from "@/components/modal/modal";
import { NewForm } from "./form/new-form";
import { z } from "zod";
import { useCreateUser } from "@/lib/hooks";
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
  const { trigger: createUser } = useCreateUser();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
    mode: "onChange",
  });
  const onReset = form.reset;

  const onCreateUser = async (user: z.infer<typeof schema>) => {
    const newUser: Prisma.UserCreateInput = {
      ...user,
    };
    await createUser({ data: newUser as Prisma.UserCreateInput });
  };
  const onSubmit = (values: z.infer<typeof schema>) => {
    onClose();
    onCreateUser(values);
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
