import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaRe } from "react-icons/fa";
import image from '../../assets/image.png'
import imageCal from '../../assets/imageCal.png'
import imagePhoto from '../../assets/imagePhoto.png'
import {
  SiChakraui,
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiRedux
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">


        {/* 1 project */}
        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={ image}
                    alt="Fitness App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Fitness Application</h2>
                <p>
                  Fitness application offer's to choose exercise categories and specific muscle groups,
                  browse more than one thousand
                  exercises with practical examples
                </p>
                <div>
                  <FaReact />
                  {/* <SiRedux /> */}
                  <IoLogoJavascript />
                  {/* <SiChakraui/> */}
                  {/* <SiExpress /> */}
                  {/* <SiMongodb /> */}
                </div>
                <div>
                  <a
                    href="https://magenta-peony-a82848.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mohdquadir45/exercisesApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        {/* 2 project */}
        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={imageCal}
                    alt="Lybrate.com"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Calculator Application</h2>
                <p>
                  Using calculator application we calculate the things
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  {/* <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb /> */}
                </div>
                <div>
                  <a
                    href="https://mohdquadir45.github.io/calculator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mohdquadir45/calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

         

          {/* 3 project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={imagePhoto}
                    alt="GearBest.com"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Photography Application</h2>
                <p>
                  Photography is a web application, where user can see immense photos.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://festive-swirles-9dbc10.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mohdquadir45/mohdquadir45.github.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
