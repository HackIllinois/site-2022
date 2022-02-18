import * as z from 'zod';

export const registrationSchema = z.object({
  name: z.string().nonempty().regex(/^[^ ]+ +[^ ]+.*$/, 'Please enter your first and last name.'),
  email: z.string().nonempty().email(),
  location: z.string().nonempty(),
  timezone: z.string().nonempty(),
  gender: z.string().optional(),
  race: z.string().array(),
  degreePursued: z.enum(['ASSOCIATES', 'BACHELORS', 'MASTERS', 'PHD', 'GRADUATED', 'OTHER']),
  graduationYear: z.number().int(),
  school: z.string().nonempty(),
  major: z.string().nonempty(),
  programmingYears: z.number().int().min(0).max(10),
  programmingAbility: z.number().int().min(1).max(5),
  // hasInternship: z.enum(['YES', 'NO']).optional(),
  resumeFilename: z.string().optional(),
  interests: z.string().array(),
  outreachSurvey: z.string(),
  // terms: z.boolean().refine((val: boolean) => val),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;

export const errorMap: z.ZodErrorMap = (error, ctx) => {
  if (error.message) return { message: error.message };

  if (error.code === z.ZodErrorCode.too_small && error.type === 'string') {
    return { message: 'Required' };
  }

  if (error.code === z.ZodErrorCode.invalid_enum_value) {
    return { message: 'Required' };
  }

  return { message: ctx.defaultError };
};

export const defaultValues = {
  race: [],
  interests: [],
};
