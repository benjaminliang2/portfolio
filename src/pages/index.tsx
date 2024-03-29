import Head from "next/head";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../../public/profilepic.png";
import roadtrip from "../../public/web1.png";
import caloriepages from "../../public/caloriepages.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Benjamin Liang</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* ---------------------ABOUT ME ------------------------ */}

        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">bl</h1>
            <ul className="flex items-center">
              {/* <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li> */}
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://benjaminliang2.github.io/resume/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Benjamin Liang
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              My name is Ben. I am a Mechanical Engineer pursuing a new career
              in Software Engineering. Please check out my projects below and
              see if I could fill any positions you have. Thank you :&#41;
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/benjaminliang2"
                rel="noreferrer noopener"
                target="_blank"
              >
                <AiFillGithub className="text-gray-800 dark:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/benjaminwliang/"
                rel="noreferrer noopener"
                target="_blank"
              >
                {" "}
                <AiFillLinkedin color="#0072b1" />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={deved}
                fill
                style={{ objectFit: "cover" }}
                alt="Profile Picture"
              />
            </div>
          </div>
        </section>
        {/* ---------------------PORTFOLIO------------------------ */}
        <section className="py-5 max-w-xl mx-auto md:text-xl">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10  lg:flex-wrap">
            <div className="bg-teal-50 dark:bg-gray-700 rounded-lg">
              <Image
                className="rounded-lg object-cover"
                src={roadtrip}
                alt='RoadExplorer Screenshot'
              />
              <h3 className="text-teal-500 py-2">
                <a
                  href="https://roadexplorer.herokuapp.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  RoadExplorer
                </a>
              </h3>

              <p className="text-base">
                RoadExplorer helps users plan a road trip by giving them
                directions, suggested points of interests, and more. Users can
                sign up to save multiple trips and access them anywhere. This
                app is deployed on&nbsp;
                <a
                  className="text-decoration-line: underline text-[#0000EE]"
                  href="https://roadexplorer.herokuapp.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Heroku
                </a>
                .&nbsp;It may take a few seconds to load as I am using
                Heroku&apos;s Eco Plan for it.{" "}
              </p>
            </div>

            <div className="bg-teal-50 dark:bg-gray-700 rounded-lg">
              <Image
                className="rounded-lg object-cover"
                src={caloriepages}
                alt="test"
              />
              <h3 className="text-teal-500 py-2">Nutrition Tracker</h3>

              <p className="text-base">
                Nutrition Tracker is a mobile application that allows users to
                log their daily nutritional intake. I developed it with React
                Native and AWS serverless architecture. Users can currently
                authenticate themselves and save their data with AWS Cognito and
                AWS DynamoDB. I plan on implementing a third party APIs so the
                application can pre-fill nutritional facts based on the food
                item.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------EDUCATION------------------------ */}
        <section className="py-5 max-w-xl mx-auto md:text-xl">
          <h3 className="text-3xl py-1 dark:text-white ">Education</h3>
          <h3 className="text-base py-5 dark:text-white ">School</h3>
          <div className="flex flex-col gap-3 pl-10 lg:flex-wrap">
            <p className="text-base">University of Hawaii at Manoa</p>
            <p className="text-base">
              Bachelor of Science, Mechanical Engineering
            </p>
          </div>

          <h3 className="text-base py-5 dark:text-white ">Relevant Courses</h3>

          <div className="flex flex-col gap-3 pl-10 lg:flex-wrap">
            <p className="text-base">CS50 Intro to Comp Sci, edX by Harvard</p>
            <p className="text-base">
              COMPSCI X404.1 Data Structures and Algorithms, UC Berkeley
              Extension
            </p>
            <p className="text-base">
              ME360 Computer Methods, Univeristy of Hawaii
            </p>
            <p className="text-base">
              EE160 Programming for Engineers, Univeristy of Hawaii
            </p>
            <p className="text-base">
              Google IT Automation with Python, Coursera
            </p>
            <p className="text-base">
              Data Science and Machine Learning Bootcamp, Udemy{" "}
            </p>
            <p className="text-base">Web Development Bootcamp, Udemy </p>
          </div>
        </section>
      </main>
    </div>
  );
}
