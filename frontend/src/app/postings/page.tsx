import Head from '@/components/JobPostings/Head';
import CreateDescription from '@/components/JobPostings/CreateDescription';
import ListedJobs from '@/components/JobPostings/ListedJobs';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function postings() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session) {
    redirect('/login');
  }
  return (
    <div className="px-20 py-10 flex-1 max-w-5xl mx-auto">
      <Head></Head>
      <CreateDescription></CreateDescription>
      <ListedJobs></ListedJobs>
    </div>
  );
}
