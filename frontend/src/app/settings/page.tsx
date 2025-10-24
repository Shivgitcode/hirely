import Head from '@/components/Settings/Head';
import ProfileForm from '@/components/Settings/ProfileForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
export default async function page() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/login');
  }
  return (
    <div className="flex-1 px-10 py-8 mx-auto max-w-5xl">
      <Head></Head>
      <ProfileForm></ProfileForm>
    </div>
  );
}
