// static skill group icons
// inline version, ABC top to bottom.

import React from "react";
import "./skill groups inline.css"; // create the css file later.

export default function SkillGroupsInline() {
  // container, three divs inside, each representing a skill group.
  const PLACEHOLDERIMAGE =
    "https://i.etsystatic.com/27443014/r/il/f4638a/4421758331/il_1080xN.4421758331_9bwu.jpg";
  const SIZE = 75; // temp size
  const SKILLGROUPS = {
    frontend: {
      html: {
        NAME: "html",
        IMAGE: "@images/Icons/icons8-html-5-100.png",
        LEVEL: "lv-3", // new(0), beginner(1), intermediate(2), advanced(3)
      },
      css: {
        NAME: "css",
        IMAGE: "@public/Images/Icons/icons8-css3-100.png",
        LEVEL: "lv-3",
      },
      javascript: {
        NAME: "javascript",
        IMAGE: "../../../public/Images/Icons/icons8-javascript-100.png",
        LEVEL: "lv-3",
      },
      react: {
        NAME: "react",
        IMAGE: null,
        LEVEL: "lv-1",
      },
      // etc
    },

    backend: {
      nodejs: {
        NAME: "nodejs",
        IMAGE: null,
        LEVEL: "lv-1",
      },
      mondodb: {
        NAME: "mongodb",
        IMAGE: null,
        LEVEL: "lv-1",
      },
    },
    tools: {
      git: {
        NAME: "git",
        IMAGE: null,
        LEVEL: "lv-2",
      },
      bash: {
        NAME: "bash",
        IMAGE: null,
        LEVEL: "lv-2",
      },
      powershell: {
        NAME: "powershell",
        IMAGE: null,
        LEVEL: "lv-1",
      },
      docker: {
        NAME: "docker",
        IMAGE: null,
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
            src={null ?? PLACEHOLDERIMAGE}
            className="skill-group-inline__group-icon"
            alt="" // temp group icon placeholder
            // style={{width: "100px", height: "100px", padding: "5px", margin: "5px", backgroundColor: "blue"}}
          />

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

          {/* Temp group icon placeholder */}
          <img
            src={PLACEHOLDERIMAGE}
            className="skill-group-inline__group-icon"
            alt=""
            // style={{
            //   width: "100px",
            //   height: "100px",
            //   padding: "5px",
            //   margin: "5px",
            //   backgroundColor: "blue",
            // }}
          />
        </div>
        <div
          className="tools-section"
          // style={{ display: "flex" }}
        >
          {/* temp group icon placeholder */}
          <img
            src={PLACEHOLDERIMAGE}
            alt=""
            style={{
              width: "100px",
              height: "100px",
              padding: "5px",
              margin: "5px",
              backgroundColor: "blue",
            }}
          />

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