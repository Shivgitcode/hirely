'use client';
import { useRouter } from 'next/navigation';
const Hero = () => {
  const router = useRouter();
  return (
    <div className=" w-[80%] mx-auto py-20 px-6">
      <main className="w-full flex-col items-center justify-center">
        <h1 className=" text-5xl text-center font-bold tracking-tighter leading-tight mb-6">
          Find the best candidates faster with AI.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 text-center">
          Streamline your hiring process with our AI-powered recruitment copilot. Quickly identify
          top talent, manage applications efficiently, and make informed hiring decisions.
        </p>
        <button
          type="button"
          className=" cursor-pointer bg-red-500 text-white flex mx-auto items-center justify-center rounded-lg h-10 px-5 text-sm font-bold shadow-lg transform hover:scale-105 transition-transform"
          onClick={() => router.push('/login')}
        >
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Hero;
