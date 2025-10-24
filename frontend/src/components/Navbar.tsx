'use client';
import { navbar } from '@/constants/constant';
import { authClient } from '@/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

function Navbar() {
  const router = useRouter();
  const { data } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login');
          toast.success('Logged Out successfully');
        }
      }
    });
  };

  return (
    <div className=" w-full flex flex-row justify-between px-20 items-baseline py-5">
      <div
        className=" flex justify-between items-end w-fit gap-1 cursor-pointer"
        onClick={() => router.push('/')}
      >
        <div className="relative size-8">
          <Image src={'/ai-copilot.svg'} fill alt="hello"></Image>
        </div>
        <h1 className=" text-2xl font-bold tracking-tight">Hirely</h1>
      </div>

      <ul className=" flex gap-8 text-gray-600 text-[1rem] font-bold justify-between items-center">
        {navbar.map((el) => (
          <Link key={el.id} href={el.path}>
            <li className=" cursor-pointer hover:text-gray-900 transition-all" key={el.id}>
              {el.name}
            </li>
          </Link>
        ))}
        {!data?.session ? (
          <button
            type="submit"
            className="btn-primary cursor-pointer flex items-center justify-center rounded-lg bg-red-500 text-white h-10 px-5 text-sm font-bold shadow-sm"
            onClick={() => router.push('/login')}
          >
            Get Started
          </button>
        ) : (
          <button
            type="button"
            className=" border-[1px] border-white px-3 py-2 bg-gray-500 text-white rounded-sm hover:bg-white hover:border-gray-600 hover:text-gray-600 transition-all "
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
