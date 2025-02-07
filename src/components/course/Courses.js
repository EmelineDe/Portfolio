/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Courses.css";
import Portfolio from "../../assets/recentprojects/react-portfolio.png";
// import Portfolio2 from "../../assets/recentprojects/react-portfolio_2.png";
// import Portfolio3 from "../../assets/recentprojects/react-portfolio_3.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Courses = () => {
  const classes = useStyles();
  const [courses, setCourses] = useState([
    {
      id: 1,
      date: "2021 - 2013",
      title: `Master Experte en informatique et Système d’information`,
      school: "EPSI",
    },
    {
      id: 2,
      date: "2020 - 2021",
      title: `Concepteur développement d'applications`,
      school: "EPSI",
    },
    {
      id: 3,
      date: "2019 - 2021",
      title: `Développeur web et web mobile`,
      school: "AFPA",
    },
  ]);

  return (
    <section id="courses">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-8 sm:w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
          <span className="w-fit text-black p-2 px-5 text-xl rounded-md dark:bg-transparent dark:text-white">
            <h1>Formations</h1>
          </span>
          <span className="w-8 sm:w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
        </div>
      </div>

      <Container component="main" className="max-w-6xl mx-auto ">
        <div className="about flex flex-col lg:flex-row items-center justify-center">
          <div
            className="_img_wrapper flex-1 lg:w-1/3"
            style={{
              backgroundImage: `url(${Portfolio})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "300px",
            }}
          ></div>

          <div className="flex-1 lg:w-2/3 lg:pl-10 space-y-6 text-center lg:text-left">
            {courses.map((course) => (
              <div
                className="course __content_wrapper_course flex flex-col "
                key={course.id}
              >
                <p className="date text-sm text-gray-500 ">{course.date}</p>
                <h3 className="title text-2xl font-bold">
                  <TextDecrypt text={course.title} />
                </h3>
                <p className="school text-lg text-gray-700 items-center">
                  {course.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
