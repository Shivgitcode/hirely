import MatchBoard from '@/components/MatchPosting/MatchBoard';
import MatchNav from '@/components/MatchPosting/MatchNav';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Match() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session) {
    redirect('/login');
  }
  return (
    <div className="flex-1 px-10 py-8 mx-auto max-w-5xl">
      <MatchNav></MatchNav>
      <MatchBoard></MatchBoard>
    </div>
  );
}
