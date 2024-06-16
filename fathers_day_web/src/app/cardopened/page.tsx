"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../css/CardOpenedPage.module.css";
import { useRouter } from "next/navigation";

function CardOpenedPagePC() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<number | null>(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleBackClick = () => {
    router.push("/");
  };

  const handleClick = () => {
    router.push("/memoryLane");
  };

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    // Initial screen size
    updateScreenSize();

    // Add resize event listener
    window.addEventListener("resize", updateScreenSize);

    // Clean up listener
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);
  if (screenSize && screenSize > 768) {
    return (
      <div
        className={`flex justify-center items-center h-screen w-full ${
          styles.cardContainer
        } ${isOpen ? styles.open : ""}`}
      >
        <div
          className={`shadow-2xl relative box-border h-full w-full sm:h-4/5 sm:w-5/12 p-4 bg-white rounded-tl-3xl rounded-bl-3xl ${styles.card}`}
        >
          <Image
            src="/images/cardfirstpage.jpg"
            alt="Picture of Father"
            height={200}
            width={500}
            className="m-24 rounded-3xl shadow-2xl"
            draggable="false"
            style={{ userSelect: "none" }}
          />
          <a href="https://www.freepik.com/free-vector/father-s-day-greeting-card-design-with-i-love-you-dad-checkered-lettering-mustache-heart_27500602.htm#query=fathers%20day%203d&position=31&from_view=keyword&track=ais_user&uuid=1f2b013c-4a1b-4776-97e8-968b227633af">
            Image by articular on Freepik
          </a>
        </div>
        <div
          className={`shadow-2xl relative box-border h-full w-full sm:h-4/5 sm:w-5/12 p-4 bg-slate-300  rounded-r-3xl ${styles.message}`}
        >
          <div className="mt-40">
            <p className="text-5xl text-slate-950">Dear Dad,</p>
            <p className="text-2xl mt-10 text-slate-950">
              Happy Father&apos;s Day! Thank you for all the love and support
              you have given me. I hope you have a great day! Love you! 🎉🎉🎉
            </p>
            <p className="text-2xl ml-60 text-slate-950">
              From your loving child (Name)
            </p>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="absolute bottom-4 left-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
              onClick={handleBackClick}
            >
              Back
            </button>
            <button
              type="button"
              className="absolute bottom-4 right-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
              onClick={handleClick}
            >
              Memory Lane
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`flex justify-center items-center  h-full ${
          styles.cardContainer
        } ${isOpen ? styles.open : ""}`}
      >
        <div
          className={` sm:m-20  box-border h-full w-full sm:h-fit sm:w-5/12 p-4  sm:rounded-3xl justify-center items-center `}
        >
          <Image
            src="/images/cardfirstpage.jpg"
            alt="Picture of Father"
            height={200}
            width={500}
            className="rounded-3xl sm:mx-auto"
            draggable="false"
            style={{ userSelect: "none" }}
          />
          <a
            className="text-transparent"
            href="https://www.freepik.com/free-vector/father-s-day-greeting-card-design-with-i-love-you-dad-checkered-lettering-mustache-heart_27500602.htm#query=fathers%20day%203d&position=31&from_view=keyword&track=ais_user&uuid=1f2b013c-4a1b-4776-97e8-968b227633af"
          >
            Image by articular on Freepik
          </a>
          <div className="p-4">
            <p className="text-3xl text-amber-50">Dear Dad,</p>
            <p className="text-2xl text-amber-50 mt-4">
              Happy Father&apos;s Day! Thank you for all the love and support
              you have given me. I hope you have a great day! Love you! 🎉🎉🎉
            </p>
            <p className="text-2xl sm:ml-60 ml-20 mt-4 text-amber-50">
              From your loving child (Name)
            </p>
          </div>
          <div className="flex justify-between w-full mb-4 px-4">
            <button
              type="button"
              className=" left-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
              onClick={handleBackClick}
            >
              Back
            </button>
            <button
              type="button"
              className=" right-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
              onClick={handleClick}
            >
              Memory Lane
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardOpenedPagePC;
