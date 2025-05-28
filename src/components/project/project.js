import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { TextDecrypt } from "../content/TextDecrypt";

import "../course/Courses.css";
import "../contact/Contact.css";

export const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: `Ln Coiff’ à domicile`,
      image: require("../../assets/projects/ln-coiff.png"),
      url: "https://emelinede.github.io/Ln-coiff-a-domicile/",
      description: "SPA HTML/CSS/JS pour un service de coiffure à domicile.",
    },
  ]);

  return (
    <section id="works">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-8 sm:w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
          <span className="w-fit text-black p-2 px-5 text-xl rounded-md dark:bg-transparent dark:text-white">
            <h1>Mes Projets</h1>
          </span>
          <span className="w-8 sm:w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
        </div>
      </div>

      <Container component="main" className="max-w-6xl mx-auto">
        <div className="ml-0 lg:ml-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <figure
              key={project.id}
              class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden box-border shadow-[0_0_30px_0_rgba(0,0,0,0.3)] bg-white bg-opacity-0 dark:bg-opacity-5"
              >
                <div className="h-48 bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl text-[#42bcbc] dark:text-[#ec704c] mb-2 text-center">
                    <TextDecrypt text={project.title} />
                  </h3>
                  <p className="text-black dark:text-white">
                    {project.description}
                  </p>
                </div>
                <div className="flex justify-center mb-4">
                  <button
                    type="button"
                    className="project-btn p-1.5 bg-[#42bcbc] dark:bg-[#ec704c] text-center inline-flex items-center"
                  >
                    Voir le projet
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </a>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
};
