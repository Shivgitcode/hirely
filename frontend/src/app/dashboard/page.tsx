import Details from '@/components/Dashboard/Details';
import Head from '@/components/Dashboard/Head';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session) {
    redirect('/login');
  }
  return (
    <div className="flex-1 px-10 py-8 mx-auto max-w-5xl">
      <Head></Head>
      <Details></Details>
    </div>
  );
}
