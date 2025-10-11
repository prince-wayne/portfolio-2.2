// static skill group icons
// inline version, ABC top to bottom.

import React from "react";
import "./skill groups inline.css"; // create the css file later.

export default function SkillGroupsInline() {
  // container, three divs inside, each representing a skill group.
  const PLACEHOLDERIMAGE =
    "https://i.etsystatic.com/27443014/r/il/f4638a/4421758331/il_1080xN.4421758331_9bwu.jpg";
  const SIZE = 75; // temp size
  const SKILLGROUP_GROUP_ICON = {
    frontend: "Images/Icons/icons8-pro-display-xdr-96.png",
    backend: "Images/Icons/icons8-server-96 (1).png",
    tools: "Images/Icons/icons8-toolbox-100.png",
  };

  const SKILLGROUPS = {
    frontend: {
      html: {
        NAME: "html",
        IMAGE: "Images/Icons/icons8-html-5-100.png",
        LEVEL: "lv-3", // new(0), beginner(1), intermediate(2), advanced(3)
      },
      css: {
        NAME: "css",
        IMAGE: "Images/Icons/icons8-css3-100.png",
        LEVEL: "lv-3",
      },
      javascript: {
        NAME: "javascript",
        IMAGE: "Images/Icons/icons8-javascript-100.png",
        LEVEL: "lv-3",
      },
      react: {
        NAME: "react",
        IMAGE: "Images/Icons/icons8-react-native-100.png",
        LEVEL: "lv-1",
      },
      // etc
    },

    backend: {
      nodejs: {
        NAME: "nodejs",
        IMAGE: "Images/Icons/icons8-nodejs-96.png",
        LEVEL: "lv-1",
      },
      mondodb: {
        NAME: "mongodb",
        IMAGE: "Images/Icons/icons8-mongodb-100.png",
        LEVEL: "lv-1",
      },
    },
    tools: {
      git: {
        NAME: "git",
        IMAGE: "Images/Icons/icons8-git-100.png",
        LEVEL: "lv-2",
      },
      bash: {
        NAME: "bash",
        IMAGE: "Images/Icons/icons8-bash-100.png",
        LEVEL: "lv-2",
      },
      powershell: {
        NAME: "powershell",
        IMAGE: "Images/Icons/icons8-powershell-100.png",
        LEVEL: "lv-1",
      },
      docker: {
        NAME: "docker",
        IMAGE: "Images/Icons/icons8-docker-logo-96.png",
        LEVEL: "lv-0",
      },
      // etc
    },
  };

  return (
    <>
      <div className="skill-group-inline__container">
        <div
          className="frontend-section"
          // style={{ display: "flex" }}
        >
          <img
            src={SKILLGROUP_GROUP_ICON.frontend ?? PLACEHOLDERIMAGE}
            className="skill-group-inline__group-icon"
            alt="frontend skills group icon - a desktop monitor." // temp group icon placeholder
            // style={{width: "100px", height: "100px", padding: "5px", margin: "5px", backgroundColor: "blue"}}
          />
          <h3 className="frontend-section__header skill-group-section__header">Frontend Development</h3>

          <div className="frontend-section__skills">
            {Object.keys(SKILLGROUPS.frontend).map((ele, index) => {
              const { NAME, IMAGE, LEVEL } = SKILLGROUPS.frontend[ele];
              return (
                <div
                  className="skill-icon__box"
                  key={index}
                  // style={{ display: "inline-block" }}
                >
                  <div className={`${LEVEL} skill-icon__level-dot`} />
                  {/* our 0-3 level indictor */}
                  <img
                    src={IMAGE ?? PLACEHOLDERIMAGE}
                    className={`skill`}
                    alt={NAME}
                    /*
                    style={{
                      width: SIZE,
                      height: SIZE,
                      margin: "10px",
                      padding: "5px",
                      backgroundColor: "black",
                    }} // temp inline style 
                    */
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="backend-section"
          // style={{ display: "flex" }}
        >
          {/* Temp group icon placeholder */}
          <img
            src={SKILLGROUP_GROUP_ICON.backend ?? PLACEHOLDERIMAGE}
            className="skill-group-inline__group-icon"
            alt="backend skills group icon - a server cluster"
            // style={{
            //   width: "100px",
            //   height: "100px",
            //   padding: "5px",
            //   margin: "5px",
            //   backgroundColor: "blue",
            // }}
          />
          <h3 className="backend-section__header skill-group-section__header">Backend Development</h3>
          <div className="backend-section__skills">
            {Object.keys(SKILLGROUPS.backend).map((ele, index) => {
              const { NAME, IMAGE, LEVEL } = SKILLGROUPS.backend[ele];
              return (
                <div
                  className="skill-icon__box"
                  key={index}
                  // style={{ display: "inline-block" }}
                >
                  <div className={`${LEVEL} skill-icon__level-dot`} />
                  {/* our 0-3 level indictor */}
                  <img
                    src={IMAGE ?? PLACEHOLDERIMAGE}
                    className={`skill`}
                    alt={NAME}
                    /*
                    style={{
                      width: SIZE,
                      height: SIZE,
                      margin: "10px",
                      padding: "5px",
                      backgroundColor: "black",
                    }} // temp inline style 
                    */
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="tools-section"
          // style={{ display: "flex" }}
        >
          <img
            src={SKILLGROUP_GROUP_ICON.tools ?? PLACEHOLDERIMAGE}
            className={"skill-group-inline__group-icon"}
            alt="Tools section/skill Group Icon - a toolbox"
            // style={{
            //   width: "100px",
            //   height: "100px",
            //   padding: "5px",
            //   margin: "5px",
            //   backgroundColor: "blue",
            // }}
          />

          <h3 className="tools-section__header skill-group-section__header"> Supporting Tools</h3>
          <div className="tools-section__skills">
            {Object.keys(SKILLGROUPS.tools).map((ele, index) => {
              const { NAME, IMAGE, LEVEL } = SKILLGROUPS.tools[ele];
              return (
                <div
                  className="skill-icon__box"
                  key={index}
                  // style={{ display: "inline-block" }}
                >
                  <div className={`${LEVEL} skill-icon__level-dot`} />
                  {/* our 0-3 level indictor */}
                  <img
                    src={IMAGE ?? PLACEHOLDERIMAGE}
                    className={`skill`}
                    alt={NAME}
                    /*
                    style={{
                      width: SIZE,
                      height: SIZE,
                      margin: "10px",
                      padding: "5px",
                      backgroundColor: "black",
                    }} // temp inline style 
                    */
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
