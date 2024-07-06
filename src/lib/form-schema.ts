"use client";

import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({
      required_error: "Job title is required",
    })
    .min(3, { message: "Job title must be at least 3 characters" }),
  jobType: z.enum(JOBTYPES, { required_error: "You must select a job type" }),
  salaryFrom: z.string({
    required_error: "Salary From is required",
  }),
  salaryTo: z.string({
    required_error: "Salary To is required",
  }),
  categoryId: z.string({ required_error: "Category is required selected" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required skills must be 1 selected" }),
  jobDescription: z
    .string({ required_error: "Job Description is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
  responsibility: z
    .string({ required_error: "Job Description is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
  whoYouAre: z
    .string({ required_error: "Job Description is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
  niceToHaves: z
    .string({ required_error: "Job Description is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
  benefits: z
    .object({
      Benefit: z.string(),
      description: z.string(),
    })
    .array()
    .nonempty({ message: "Benefits must be 1 selected" }),
});
