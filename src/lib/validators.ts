import { z } from "zod";

export const contactSchema = z.object({
  kind: z.enum(["contact", "expertise"]),
  fullName: z.string().trim().min(2).max(140),
  email: z.email().max(254),
  organization: z.string().trim().max(180).optional().default(""),
  phone: z.string().trim().max(60).optional().default(""),
  country: z.string().trim().max(100).optional().default(""),
  subject: z.string().trim().min(3).max(200),
  message: z.string().trim().min(15).max(6000),
  website: z.string().optional().default(""),
  turnstileToken: z.string().optional().default("")
});

export const quoteSchema = z.object({
  kind: z.literal("quotation"),
  fullName: z.string().trim().min(2).max(140),
  email: z.email().max(254),
  organization: z.string().trim().min(2).max(180),
  phone: z.string().trim().min(5).max(60),
  country: z.string().trim().min(2).max(100),
  message: z.string().trim().max(3000).optional().default(""),
  items: z.array(z.object({ slug: z.string(), quantity: z.number().int().min(1).max(99) })).min(1).max(25),
  website: z.string().optional().default(""),
  turnstileToken: z.string().optional().default("")
});

export type ContactPayload = z.infer<typeof contactSchema>;
export type QuotePayload = z.infer<typeof quoteSchema>;
