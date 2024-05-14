import { PlayerCreateSchema } from "@zenstackhq/runtime/zod/models";
export const schema = PlayerCreateSchema.omit({ projectId: true });
