/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import "./About.css";

import profile from "../../assets/profile.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
    "@media (max-width: 1024px)": {},
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = `Hello, je suis ${FirstName}.${LastName},développeuse full stack freelance.`;
  const aboutme =
    "Passionnée par le développement web. Spécialisée dans la création d'applications robustes et modernes avec Vue.js et Node.js, mon objectif est de fournir des solutions efficaces et personnalisées qui répondent aux besoins uniques de chaque projet.";
  const about = useState({
    id: 1,
    skills: [
      "VueJs",
      "ReactJs",
      "ViteJs",
      "Typescript",
      "Docker",
      "Postgres",
      "TypeORM",
      "NodeJS",
      "Jest",
    ],
  });
  return (
    <section id="about">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
          <span className="w-fit text-black p-2 px-5 text-xl rounded-md dark:bg-transparent dark:text-white">
            <h1>A Propos</h1>
          </span>
          <span className="w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
        </div>
      </div>
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div
            className="_img"
            style={{
              background: "url(" + profile + ")",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="_content_wrapper">
            <Typography
              component="h2"
              variant="h5"
              className="dark:text-[#ec704c]"
            >
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">{aboutme}</p>
          </div>
        </div>
        <Container component="main" className={classes.main} maxWidth="md">
          <div className="flex flex-col gap-6">
            <div className="sticky-card w-full mx-auto max-w-2xl sticky top-20 z-10">
              <div className="relative box-border flex items-center justify-center rounded-lg shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500 bg-white bg-opacity-80 dark:bg-gradient-to-r dark:from-[#111111] dark:to-[#42bcbc]">
                <div className="w-full">
                  <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                    <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#42bcbc]"></div>
                      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#ec704c]"></div>
                      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-slate-300"></div>
                    </div>
                    <p className="text-center ml-3 text-transparent text-base lg:text-xl">
                      A Propos
                    </p>
                  </div>

                  {/* Séparation sous le titre */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#42bcbc] to-transparent"></div>

                  {/* Contenu de la carte */}
                  <div className="overflow-hidden border-t-[2px] border-[#42bcbc] px-4 lg:px-8 py-4 lg:py-8">
                    <code className="font-mono text-xs md:text-sm lg:text-base text-[#111111] dark:text-[#fafafa]">
                      <div className="blink">
                        <span className="mr-2 text-[#ec704c]">const</span>
                        <span className="mr-2 text-black dark:text-[#42bcbc]">
                          coder
                        </span>
                        <span className="mr-2 text-[#ec704c]">=</span>
                        <span className="text-gray-400 dark:text-[#ec704c]">
                          {"{"}
                        </span>
                      </div>
                      <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-black dark:text-[#42bcbc]">
                          name
                          <span className="text-black dark:text-[#ec704c]">
                            {":"}
                          </span>
                        </span>
                        <span className="text-gray-400 dark:text-[#ec704c]">{`'`}</span>
                        <span className="text-[#42bcbc] dark:text-white">
                          Emeline D.
                        </span>
                        <span className="text-gray-400 dark:text-[#ec704c]">{`',`}</span>
                      </div>
                      <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-black dark:text-[#42bcbc]">
                          skills
                          <span className="text-black dark:text-[#ec704c]">
                            {":"}
                          </span>
                        </span>
                        <span className="text-gray-400 dark:text-[#ec704c]">{` ['`}</span>
                        {about[0].skills.map((skill, i) => (
                          <React.Fragment key={i}>
                            <span className="text-[#42bcbc] dark:text-white">
                              {skill}
                            </span>
                            {about[0].skills.length - 1 !== i && (
                              <span className="text-gray-400 dark:text-[#ec704c]">{`', '`}</span>
                            )}
                          </React.Fragment>
                        ))}
                        <span className="text-gray-400 dark:text-[#ec704c]">{`'],`}</span>
                      </div>

                      <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-black dark:text-[#42bcbc]">
                          hardWorker
                          <span className="text-black dark:text-[#ec704c]">
                            {":"}
                          </span>
                        </span>
                        <span className="text-[#ec704c] dark:text-white">
                          true
                        </span>
                        <span className="text-gray-400 dark:text-[#ec704c]">
                          ,
                        </span>
                      </div>
                      <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-black dark:text-[#42bcbc]">
                          quickLearner
                          <span className="text-black dark:text-[#ec704c]">
                            {":"}
                          </span>
                        </span>
                        <span className="text-[#ec704c] dark:text-white">
                          true
                        </span>
                        <span className="text-gray-400 dark:text-[#ec704c]">
                          ,
                        </span>
                      </div>
                      <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-black dark:text-[#42bcbc]">
                          problemSolver
                          <span className="text-black dark:text-[#ec704c]">
                            {":"}
                          </span>
                        </span>
                        <span className="text-[#ec704c] dark:text-white">
                          true
                        </span>
                        <span className="text-gray-400 dark:text-[#ec704c]">
                          ,
                        </span>
                      </div>
                      <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-[#42bcbc]">
                          hireable:
                        </span>
                        <span className="text-[#ec704c]">function</span>
                        <span className="text-gray-400 dark:text-[#ec704c]">
                          {"() {"}
                        </span>
                      </div>
                      <div>
                        <span className="ml-8 lg:ml-16 mr-2 text-[#ec704c]">
                          return
                        </span>
                        <span className="text-gray-400 dark:text-[#ec704c]">{`(`}</span>
                      </div>
                      <div>
                        <span className="ml-12 lg:ml-24 text-[#42bcbc]">
                          this.
                        </span>
                        <span className="mr-2 text-black dark:text-white">
                          hardWorker
                        </span>
                        <span className="text-[#42bcbc]">&amp;&amp;</span>
                      </div>
                      <div>
                        <span className="ml-12 lg:ml-24 text-[#42bcbc]">
                          this.
                        </span>
                        <span className="mr-2 text-black dark:text-white">
                          problemSolver
                        </span>
                        <span className="text-[#42bcbc]">&amp;&amp;</span>
                      </div>
                      <div>
                        <span className="ml-12 lg:ml-24 text-[#42bcbc]">
                          this.
                        </span>
                        <span className="mr-2 text-black dark:text-white">
                          skills.length
                        </span>
                        <span className="mr-2 text-[#42bcbc]">&gt;=</span>
                        <span className="text-[#ec704c]">5</span>
                      </div>
                      <div>
                        <span className="ml-8 lg:ml-16 mr-2 text-gray-400 dark:text-[#ec704c]">{`);`}</span>
                      </div>
                      <div>
                        <span className="ml-4 lg:ml-8 text-gray-400 dark:text-[#ec704c]">{`};`}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 dark:text-[#ec704c]">{`};`}</span>
                      </div>
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
};
