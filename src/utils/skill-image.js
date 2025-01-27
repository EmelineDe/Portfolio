import * as adobeXd from "../assets/svg/skills/adobe-xd.svg";
import adobeaudition from "../assets/svg/skills/adobeaudition.svg";
import azure from "../assets/svg/skills/azure.svg";
import blender from "../assets/svg/skills/blender.svg";
import c from "../assets/svg/skills/c.svg";
import canva from "../assets/svg/skills/canva.svg";
import capacitorjs from "../assets/svg/skills/capacitorjs.svg";
import coffeescript from "../assets/svg/skills/coffeescript.svg";
import cplusplus from "../assets/svg/skills/cplusplus.svg";
import csharp from "../assets/svg/skills/csharp.svg";
import css from "../assets/svg/skills/css.svg";
import dart from "../assets/svg/skills/dart.svg";
import django from "../assets/svg/skills/django.svg";
import docker from "../assets/svg/skills/docker.svg";
import express from "../assets/svg/skills/express.svg";
import fastify from "../assets/svg/skills/fastify.svg";
import figma from "../assets/svg/skills/figma.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import flutter from "../assets/svg/skills/flutter.svg";
import gimp from "../assets/svg/skills/gimp.svg";
import git from "../assets/svg/skills/git.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import haxe from "../assets/svg/skills/haxe.svg";
import html from "../assets/svg/skills/html.svg";
import ionic from "../assets/svg/skills/ionic.svg";
import java from "../assets/svg/skills/java.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import jest from "../assets/svg/skills/jest.svg";
import julia from "../assets/svg/skills/julia.svg";
import junit from "../assets/svg/skills/junit.svg";
import kotlin from "../assets/svg/skills/kotlin.svg";
import lightroom from "../assets/svg/skills/lightroom.svg";
import markdown from "../assets/svg/skills/markdown.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import matlab from "../assets/svg/skills/matlab.svg";
import microsoftoffice from "../assets/svg/skills/microsoftoffice.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import nestjs from "../assets/svg/skills/nestjs.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import nginx from "../assets/svg/skills/nginx.svg";
import nodeJS from "../assets/svg/skills/nodejs.svg";
import numpy from "../assets/svg/skills/numpy.svg";
import nuxtJS from "../assets/svg/skills/nuxtJS.svg";
import opencv from "../assets/svg/skills/opencv.svg";
import photoshop from "../assets/svg/skills/photoshop.svg";
import php from "../assets/svg/skills/php.svg";
import pinia from "../assets/svg/skills/pinia.svg";
import picsart from "../assets/svg/skills/picsart.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import postman from "../assets/svg/skills/postman.svg";
import premierepro from "../assets/svg/skills/premierepro.svg";
import python from "../assets/svg/skills/python.svg";
import pytorch from "../assets/svg/skills/pytorch.svg";
import react from "../assets/svg/skills/react.svg";
import ruby from "../assets/svg/skills/ruby.svg";
import selenium from "../assets/svg/skills/selenium.svg";
import sequelize from "../assets/svg/skills/sequelize.svg";
import sketch from "../assets/svg/skills/sketch.svg";
import strapi from "../assets/svg/skills/strapi.svg";
import springboot from "../assets/svg/skills/springboot.svg";
import swift from "../assets/svg/skills/swift.svg";
import swagger from "../assets/svg/skills/swagger.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import tensorflow from "../assets/svg/skills/tensorflow.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import typeorm from "../assets/svg/skills/typeorm.svg";
import unity from "../assets/svg/skills/unity.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";
import vitest from "../assets/svg/skills/vitest.svg";
import vue from "../assets/svg/skills/vue.svg";
import vuetifyjs from "../assets/svg/skills/vuetifyjs.svg";
import webix from "../assets/svg/skills/webix.svg";
import wolframalpha from "../assets/svg/skills/wolframalpha.svg";
import wordpress from "../assets/svg/skills/wordpress.svg";
import zod from "../assets/svg/skills/zod.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "zod":
      return { src: zod };
    case "html":
      return { src: html };
    case "photoshop":
      return { src: photoshop };
    case "docker":
      return { src: docker };
    case "typeorm":
      return { src: typeorm };
    case "adobe xd":
      return adobeXd;
    case "node js":
      return { src: nodeJS };
    case "css":
      return { src: css };
    case "sequelize":
      return { src: sequelize };
    case "javascript":
      return { src: javascript };
    case "next js":
      return { src: nextJS };
    case "nuxt js":
      return { src: nuxtJS };
    case "react":
      return { src: react };
    case "express":
      return { src: express };
    case "typescript":
      return { src: typescript };
    case "vue":
      return { src: vue };
    case "pinia":
      return { src: pinia };
    case "nest js":
      return { src: nestjs };
    case "capacitorjs":
      return { src: capacitorjs };
    case "coffeescript":
      return { src: coffeescript };
    case "junit":
      return { src: junit };
    case "mongodb":
      return { src: mongoDB };
    case "mysql":
      return { src: mysql };
    case "postgresql":
      return { src: postgresql };
    case "tailwind":
      return { src: tailwind };
    case "vitejs":
      return { src: vitejs };
    case "vuetifyjs":
      return { src: vuetifyjs };
    case "c":
      return { src: c };
    case "c++":
      return { src: cplusplus };
    case "c#":
      return { src: csharp };
    case "dart":
      return { src: dart };
    case "jest":
      return { src: jest };
    case "java":
      return { src: java };
    case "kotlin":
      return { src: kotlin };
    case "julia":
      return { src: julia };
    case "matlab":
      return { src: matlab };
    case "php":
      return { src: php };
    case "python":
      return { src: python };
    case "ruby":
      return { src: ruby };
    case "swift":
      return { src: swift };
    case "adobe audition":
      return { src: adobeaudition };
    case "postman":
      return { src: postman };
    case "swagger":
      return { src: swagger };
    case "django":
      return { src: django };
    case "firebase":
      return { src: firebase };
    case "gimp":
      return { src: gimp };
    case "git":
      return { src: git };
    case "graphql":
      return { src: graphql };
    case "lightroom":
      return { src: lightroom };
    case "materialui":
      return { src: materialui };
    case "nginx":
      return { src: nginx };
    case "numpy":
      return { src: numpy };
    case "opencv":
      return { src: opencv };
    case "premiere pro":
      return { src: premierepro };
    case "pytorch":
      return { src: pytorch };
    case "selenium":
      return { src: selenium };
    case "strapi":
      return { src: strapi };
    case "tensorflow":
      return { src: tensorflow };
    case "webix":
      return { src: webix };
    case "wordpress":
      return { src: wordpress };
    case "azure":
      return { src: azure };
    case "blender":
      return { src: blender };
    case "fastify":
      return { src: fastify };
    case "figma":
      return { src: figma };
    case "flutter":
      return { src: flutter };
    case "haxe":
      return { src: haxe };
    case "ionic":
      return { src: ionic };
    case "markdown":
      return { src: markdown };
    case "microsoft office":
      return { src: microsoftoffice };
    case "picsart":
      return { src: picsart };
    case "sketch":
      return { src: sketch };
    case "unity":
      return { src: unity };
    case "wolframalpha":
      return { src: wolframalpha };
    case "canva":
      return { src: canva };
    case "spring boot":
      return { src: springboot };
    case "vitest":
      return { src: vitest };
    default:
      break;
  }
};
