'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginSchema, type LoginType } from '@/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { authClient } from '@/lib/client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema)
  });

  const onSubmit = async (data: LoginType) => {
    setSubmitting(true);
    await authClient.signIn.email(
      {
        ...data
      },
      {
        onRequest: () => {
          toast.loading('Logging In', { id: 'log-in' });
        },
        onSuccess: () => {
          toast.success('Logged In successfully');
          toast.dismiss('log-in');
          router.push('/dashboard');
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
          toast.dismiss('log-in');
        }
      }
    );
    setSubmitting(false);
  };

  const onInvalid = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 300);
  };
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/dashboard'
    });
  };

  return (
    <div className="min-h-full mt-10 flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full" onClick={handleGoogleLogin}>
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

          <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="Enter your email"
                autoSave="false"
                {...register('email')}
              />
              {errors.email && (
                <p
                  className={`text-sm text-red-500 ${
                    isShaking ? ' animate-shake animate-duration-300' : ''
                  }`}
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                autoSave="false"
                {...register('password')}
              />
              {errors.password && (
                <p
                  className={`text-sm text-red-500 ${
                    isShaking ? 'animate-shake animate-duration-300' : ''
                  }`}
                >
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting ? true : false}>
              Sign In
            </Button>
          </form>

          <div className="text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
