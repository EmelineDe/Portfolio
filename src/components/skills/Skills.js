// @flow strict

import { skillsData } from "../../utils/data/skills";
import { skillsImage } from "../../utils/skill-image";

import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50  my-12 lg:my-24 pl-[9rem] pr-[9rem]"
    >
      {/* <div className="w-[100px] h-[100px] bg-[#42bcbc] rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div> */}

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
          <span className=" w-fit text-Black p-2 px-5 text-xl rounded-md dark:bg-transparent dark:text-white">
            <h1>Compétences</h1>
          </span>
          <span className="w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg  transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full " />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6 ">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-black text-sm sm:text-lg dark:text-white">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
