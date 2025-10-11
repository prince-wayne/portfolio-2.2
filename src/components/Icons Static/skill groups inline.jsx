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
        name: "html",
        image: "",
        level: "lv-3", // new(0), beginner(1), intermediate(2), advanced(3)
      },
      css: {
        name: "css",
        image: "",
        level: "lv-3",
      },
      javascript: {
        name: "javascript",
        image: "",
        level: "lv-3",
      },
      react: {
        name: "react",
        image: "",
        level: "lv-1",
      },
      // etc
    },

    backend: {
      nodejs: {
        name: "nodejs",
        image: "",
        level: "lv-1",
      },
      mondodb: {
        name: "mongodb",
        image: "",
        level: "lv-1",
      },
    },
    tools: {
      git: {
        name: "git",
        image: "",
        level: "lv-2",
      },
      bash: {
        name: "bash",
        image: "",
        level: "lv-2",
      },
      powershell: {
        name: "powershell",
        image: "",
        level: "lv-1",
      },
      docker: {
        name: "docker",
        image: "",
        level: 0,
      },
      // etc
    },
  };

  return (
    <>
      <div className="skill-group-inline__container">
        <div className="frontend-section" style={{ display: "flex" }}>
          {/* We will have to itterate through an object instead of an array, using for in/ for of */}

          <img src={PLACEHOLDERIMAGE} alt="" style={{width: "100px", height: "100px", padding: "5px", margin: "5px", backgroundColor: "blue"} }/>
            Frontend Skills {/* replace with header / img */}
          <div className="frontend-section__skills">
            {Object.keys(SKILLGROUPS.frontend).map((ele, index) => {
              const { NAME, IMAGE, LEVEL } = SKILLGROUPS.frontend[ele];
              return (
                <div
                  className="skill-icon__box"
                  key={index}
                  style={{ display: "inline-block" }}
                >
                  <div className={`${LEVEL} skill-icon__level-dot`} />
                  {/* our 0-3 level indictor */}
                  <img
                    src={IMAGE ?? PLACEHOLDERIMAGE}
                    className={`skill ${NAME}`}
                    alt={NAME}
                    style={{
                      width: SIZE,
                      height: SIZE,
                      margin: "10px",
                      padding: "5px",
                      backgroundColor: "black",
                    }} // temp inline style
                  />
                </div>
              );
            })}
          </div>

        </div>

        <div className="backend-skills">
          {Object.keys(SKILLGROUPS.backend).map((ele, index) => {
            const { NAME, IMAGE, LEVEL } = SKILLGROUPS.backend[ele];
            return (
              <img
                src={IMAGE ?? PLACEHOLDERIMAGE}
                className={`skill ${NAME} ${LEVEL}`}
                alt={NAME}
                key={index}
                style={{
                  width: SIZE,
                  height: SIZE,
                  margin: "10px",
                  padding: "5px",
                  backgroundColor: "red",
                }} // temp inline style
              />
            );
          })}
        </div>

        <div className="tools">
          {Object.keys(SKILLGROUPS.tools).map((ele, index) => {
            const { NAME, IMAGE, LEVEL } = SKILLGROUPS.tools[ele];
            return (
              <img
                src={IMAGE ?? PLACEHOLDERIMAGE}
                className={`skill ${NAME} ${LEVEL}`}
                alt={NAME}
                key={index}
                style={{
                  width: SIZE,
                  height: SIZE,
                  margin: "10px",
                  padding: "5px",
                  backgroundColor: "red",
                }} // temp inline style
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
