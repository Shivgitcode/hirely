import Dropbox from '@/components/Resumes/Dropbox';
import Head from '@/components/Resumes/Head';
import UploadedResumes from '@/components/Resumes/UploadedResumes';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Resumes() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/login');
  }
  return (
    <div className="flex-1 px-10 py-8 mx-auto max-w-5xl">
      <Head></Head>
      <Dropbox></Dropbox>
      <UploadedResumes></UploadedResumes>
    </div>
  );
}
