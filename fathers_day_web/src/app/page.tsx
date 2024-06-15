import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="relative box-border h-full w-full sm:h-4/5 sm:w-5/12 p-4 sm:rounded-3xl">
        <Image 
          src="/images/cardfirstpage.jpg"
          alt="Father's Day"
          layout="fill"
          objectFit="fill"
          className="sm:rounded-3xl"
        />
      </div>
    </div>
  );
}
