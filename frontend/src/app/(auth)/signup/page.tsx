'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema, type SignupType } from '@/validators';
import { authClient } from '@/lib/client';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors }
  } = useForm<SignupType>({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange'
  });

  const router = useRouter();

  const [isDisabled, setDisabled] = useState(false);

  const password = watch('password');

  const getPasswordStrength = (password: string | undefined) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    return strength;
  };

  const strength = getPasswordStrength(password);

  const strengthColor = () => {
    switch (strength) {
      case 0:
        return '';
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-orange-500';
      case 3:
        return 'bg-yellow-500';
      case 4:
        return 'bg-green-500';
      default:
        return '';
    }
  };

  const onFormSubmit = async (data: SignupType) => {
    console.log(data);
    await authClient.signUp.email(
      {
        email: data.email,
        name: data.fullName,
        password: data.password,
        image: 'https://avatar.iran.liara.run/public/boy'
      },
      {
        onRequest: () => {
          setDisabled(true);
          toast.loading('Creating Account....', { id: 'sign_up' });
        },
        onSuccess: () => {
          setDisabled(false);
          toast.success('Account Created');
          toast.dismiss('sign_up');
          router.push('/login');
        }
      }
    );
  };

  const handleGoogleSignup = () => {
    // TODO: Implement Google signup
    console.log('Google signup');
  };

  return (
    <div className="flex min-h-full mt-10 items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Sign up to get started with AI Recruitment Copilot
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full" onClick={handleGoogleSignup}>
            <FaGoogle></FaGoogle>
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...register('fullName')}
              />
              <p className="text-xs">{errors.fullName && errors.fullName.message}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
              <p className="text-xs">{errors.email && errors.email.message}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                {...register('password')}
              />
              {password && (
                <div className="mt-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className={`h-2 rounded-full ${strengthColor()}`}
                    style={{ width: `${(strength / 4) * 100}%` }}
                  />
                </div>
              )}
              <p className=" text-xs">{errors.password && errors.password.message}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                {...register('confirmPassword')}
              />
              <p className="text-xs">{errors.confirmPassword && errors.confirmPassword.message}</p>
            </div>
            <Button type="submit" disabled={isDisabled} className="w-full">
              Create Account
            </Button>
          </form>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
