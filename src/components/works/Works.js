/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects] = useState([
    // {
    //   id: 1,
    //   title: "REACT PORTFOLIO",
    //   description: `Conception et développement d'un portfolio en ReactJS`,
    //   alter: "React Portfolio",
    //   tools: ["ReactJS", "Three.js", "CSS", "TailwindCss"],
    //   role: "DÉVELOPPEUSE FULL-STACK",
    // },
    {
      id: 2,
      title: "PROXIAD",
      description: `Développement d'une application Web 
      pour moderniser les outils des gestionnaires mutualistes dans le cadre 
      d'un projet pour une mutuelle. L'application, conçue en marque blanche, 
      inclut une interface administrateur et vise à simplifier la gestion 
      quotidienne tout en permettant une future commercialisation. 
      Mon rôle a consisté à développer les fonctionnalités front et back-end, 
      à réaliser des tests unitaires et à participer aux revues de code. 
      J'ai également pris part aux cérémonies Agile Scrum,
      contribuant à l'amélioration continue du projet`,
      alter: "Proxiad",
      tools: [
        "VueJS 3 (API composition)",
        "Vuetify",
        "TailwindCss",
        "Pinia",
        "Axios",
        "Vitest",
        "NodeJS",
        "NestJs",
        "TypeORM",
        "Jest",
        "TypeScript",
        "PostgreSQL",
        "Zod",
        "Docker",
        "Swagger",
        "Postman",
        "Agile (SCRUM)",
        "Jira",
        "GitLab",
        "DBeaver",
      ],
      role: "Software Engineer",
    },

    {
      id: 3,
      title: "CAPGEMINI",
      description: `Tierce Maintenance Applicative dans le système de collecte de consommation et de production d'énergie pour le marché d'affaires entreprise et particulier d'Enedis, afin d'assurer une amélioration continue du portail de raccordement des réseaux`,
      alter: "Capgemini",
      tools: [
        "WebMethod",
        "Java 8",
        "SpringBoot",
        "JSP",
        "SQL",
        "Agile (SCRUM)",
        "SVN",
        "Git",
        "SoapUI",
        "DBeaver",
        "Eclipse",
        "Jira",
        "Confluence",
      ],
      role: "Consultante d'application",
    },
    {
      id: 4,
      title: "SOCIÉTÉ GÉNÉRALE",
      description: `Avec l’équipe de développement, j’ai participé à la création d’une application Web (NuxtJs) permettant aux collaborateurs de renseigner des incidents, de les lister, de les qualifier et de générer des statistiques en temps réel. J’ai participé à l’élaboration et la création de l’API Rest (Nodejs) et de sa base de données pour supporter l’application front-end`,
      alter: "SOCIÉTÉ GÉNÉRALE",
      tools: [
        "NuxtJS",
        "Tailwind CSS",
        "VueJS 3 (API options)",
        "Node JS",
        "Express",
        "MySQL",
        "GitHub",
      ],
      role: "DÉVELOPPEUSE FULL-STACK",
    },
    {
      id: 5,
      title: "Blog de voyage",
      description: `Développement d'un blog de voyage avec une interface administrateur. Les utilisateurs peuvent consulter des articles classés par pays et accéder à une galerie d'images. Après inscription et authentification, ils peuvent également ajouter des commentaires sous chaque article. L'interface administrateur offre la possibilité d'ajouter, modifier ou supprimer des articles et des images, ainsi que de gérer les commentaires des utilisateurs`,
      tools: [
        "HTML5",
        "CSS3",
        "PHP7",
        "Jquery",
        "Ajax",
        "mySQL",
        "SASS",
        "Bootstrap",
      ],
      role: "DÉVELOPPEUSE FULL-STACK",
    },
    {
      id: 6,
      title: "LN coiff’à Domicile",
      description: `Conception d'un site one page pour une coiffeuse indépendante, permettant de présenter ses tarifs et de faciliter la prise de contact pour les rendez-vous`,
      alter: "LN coiff’à Domicile",
      tools: ["HTML5", "CSS3", "Bootstrap4", "Javascript"],
      role: "DÉVELOPPEUSE FRONT-END",
    },
  ]);

  return (
    <section id="works">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
          <span className="w-fit text-black p-2 px-5 text-xl rounded-md dark:bg-transparent dark:text-white">
            Experiences & Projets
          </span>
          <span className="w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
        </div>
      </div>
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky-card w-full mx-auto max-w-2xl sticky top-20 z-10"
            >
              <div className="relative box-border flex items-center justify-center rounded-lg shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500 bg-white bg-opacity-80 dark:bg-gradient-to-r dark:from-[#111111] dark:to-[#42bcbc]">
                <div className="w-full">
                  {/* Titre et design autour du titre */}

                  <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                    <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#42bcbc]"></div>
                      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-[#ec704c]"></div>
                      <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-slate-300"></div>
                    </div>
                    <p className="text-center ml-3 text-[#111111] dark:text-white text-base lg:text-xl">
                      {project.title}
                    </p>
                  </div>

                  {/* Séparation sous le titre */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#42bcbc] to-transparent"></div>

                  {/* Contenu du projet */}
                  <div className="overflow-hidden border-t-[2px] border-[#42bcbc] px-4 lg:px-8 py-4 lg:py-8">
                    <code className="font-mono text-xs md:text-sm lg:text-base text-[#111111] dark:text-[#fafafa]">
                      <div className="blink">
                        <span className="mr-2 text-[#ec704c]">const</span>
                        <span className="mr-2 text-black dark:text-[#42bcbc]">
                          project
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
                          {project.title}
                        </span>
                        <span className="text-gray-400 dark:text-[#ec704c]">{`',`}</span>
                      </div>

                      <div className="ml-4 lg:ml-8 mr-2">
                        <span className=" text-black dark:text-[#42bcbc]">
                          tools
                          <span className="text-black dark:text-[#ec704c]">
                            {":"}
                          </span>
                        </span>
                        <span className="text-gray-400 dark:text-[#ec704c]">{` ['`}</span>
                        {project.tools.map((tag, i) => (
                          <React.Fragment key={i}>
                            <span className="text-[#42bcbc] dark:text-white">
                              {tag}
                            </span>
                            {project.tools.length - 1 !== i && (
                              <span className="text-gray-400 dark:text-[#ec704c]">{`', '`}</span>
                            )}
                          </React.Fragment>
                        ))}
                        <span className="text-gray-400 dark:text-[#ec704c]">
                          {"'],"}
                        </span>
                      </div>
                      <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-black dark:text-[#42bcbc]">
                          myRole
                          <span className="text-black dark:text-[#ec704c]">
                            {":"}
                          </span>
                        </span>
                        <span className="text-[#ec704c]">{project.role}</span>
                        <span className="text-gray-400 dark:text-[#ec704c]">
                          ,
                        </span>
                      </div>
                      <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-black dark:text-[#42bcbc]">
                          Description
                          <span className="text-black dark:text-[#ec704c]">
                            {":"}
                          </span>
                        </span>
                        <span className="text-[#42bcbc] dark:text-white">
                          <span className="text-gray-400 dark:text-[#ec704c]">{` '`}</span>
                          {project.description}
                          <span className="text-gray-400 dark:text-[#ec704c]">{`'`}</span>
                        </span>
                        <span className="text-gray-400 dark:text-[#ec704c]">
                          ,
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 dark:text-[#ec704c]">{`};`}</span>
                      </div>
                    </code>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
