'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    // Navigate to the card opened page
    router.push('/cardopened', { scroll: false })
  };


  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="relative box-border h-full w-full sm:h-4/5 sm:w-5/12 p-4 sm:rounded-3xl">
        <Image
          src="/images/cardfirstpage.jpg"
          alt="Father's Day"
          layout="fill"
          objectFit="fill"
          className="sm:rounded-3xl"
          draggable="false"
          style={{ userSelect: 'none' }} 
        />
      </div>
      <button
        type="button"
          className="absolute bottom-4 right-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
          onClick={handleClick}
      >
        Open Card
      </button>
    </div>
  );
}
