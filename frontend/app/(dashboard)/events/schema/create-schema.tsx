import {
  EventCreateSchema,
  UserCreateSchema,
  ScheduleCreateSchema,
} from "@zenstackhq/runtime/zod/models";
import { z } from "zod";

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

ScheduleCreateSchema.extend({ userIds: z.array(optionSchema) });

export const schema = EventCreateSchema.extend({
  schedules: z.array(ScheduleCreateSchema),
});
