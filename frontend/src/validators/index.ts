import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.email({ error: 'enter a valid email' }),
  password: z.string().min(4, { error: 'password length should be min 4' })
});

export type LoginType = z.infer<typeof LoginSchema>;

export const SignupSchema = z
  .object({
    fullName: z.string().min(5, {
      error: 'username length invalid . should contain min of 5 characters'
    }),
    email: z.email({ error: 'enter a valid email' }),
    password: z
      .string()
      .refine((password) => /[a-z]/.test(password), {
        message: 'Password must contain at least one lowercase letter'
      })
      .refine((password) => /[A-Z]/.test(password), {
        message: 'Password must contain at least one uppercase letter'
      })
      .refine((password) => /[0-9]/.test(password), {
        message: 'Password must contain at least one number'
      }),
    confirmPassword: z.string().min(6)
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'password do not match',
    path: ['confirmPassword']
  });

export type SignupType = z.infer<typeof SignupSchema>;

export type SignupData = {
  fullName: string;
  email: string;
  password: string;
};
