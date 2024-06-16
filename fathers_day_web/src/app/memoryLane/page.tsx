"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../css/Page.module.css"; // Import CSS module for custom styles

function Page() {
  const router = useRouter();
  const [fadeIn, setFadeIn] = useState(false); // State to manage animation

  useEffect(() => {
    // Trigger fade-in animation after 100ms delay (adjust as needed)
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const handleBackClick = () => {
    router.push("/cardopened");
  };

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={`flex justify-center items-center sm:h-screen ${fadeIn ? styles.fadeIn : ""}`}>
      <div className={`sm:m-20 shadow-2xl box-border h-full w-full sm:h-fit sm:w-5/12 p-4 bg-custom-gradient sm:rounded-3xl justify-center items-center ${styles.content}`}>
        <Image
          src="/images/bicycle.jpeg"
          alt="Picture of Father"
          height={200}
          width={500}
          className="rounded-3xl sm:mx-auto"
          draggable="false"
          style={{ userSelect: "none" }}
        />
        <div className="p-4">
          <p className="text-2xl text-amber-50">
            From humble beginnings, a father&apos;s guidance shaped his son&apos;s path to success. Starting with simple lessons, like teaching him to ride a bicycle with training wheels, the father instilled patience and determination. As the son grew, so did his skills and confidence. With each push forward and gentle correction, the father imparted valuable life lessons: resilience in the face of challenges, the importance of balance, and the joy of progress. This early guidance laid the foundation for the son&apos;s journey from uncertainty to achievement, a testament to the enduring influence of a father&apos;s love and wisdom.
          </p>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="bottom-4 right-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
            onClick={handleBackClick}
          >
            Back
          </button>
          <button
            type="button"
            className="bottom-4 right-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
            onClick={handleClick}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
