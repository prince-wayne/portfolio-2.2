// static skill group icons
// inline version, ABC top to bottom.

import React, { useRef } from "react";
import "./skill groups inline.css"; // create the css file later.
import loadDataFile from "../../Supporting Files/loadfile.js";
import { useEffect, useState } from "react";

export default function SkillGroupsInline() {
  // container, three divs inside, each representing a skill group.
  const PLACEHOLDERIMAGE =
    "https://i.etsystatic.com/27443014/r/il/f4638a/4421758331/il_1080xN.4421758331_9bwu.jpg";

  const [SkillGroups, setSkillGroups] = useState({});
  const [mounted, setMounted] = useState(true); // 

  const SIZE = 75; // temp size
  

  // ====== LOADS DATA FROM EXTERNAL JSON ======
  useEffect(() => {
    setMounted(true);
    (async () => {
      const data = await loadDataFile("/data/Skills.json"); // relative to public/ if using CRA
      if (mounted) setSkillGroups(data);
    })();
    return () => {
      setMounted(false);
    };
  }, []);

  let fail = useRef(true);
  fail.current = false; // on/off control for testing unmount useEffect cleanup
  // line above cancels line below;
  if (fail.current) {
    setMounted(false); // to intentionally trigger unmount for testing
    fail.current = false;
  }

  return (
    <>
      {mounted && Object.keys(SkillGroups).length !== 0
        ? console.log(" 🟩 SkillGroups loaded successfully", SkillGroups)
        : console.log(" 🟥 SkillGroups not loaded")}
        {/* temp usage - debubbing */}
      {
      mounted && Object.keys(SkillGroups).length !== 0 ? (
        <div className="skill-group-inline__container">
          <div
            className="frontend-section"
            // style={{ display: "flex" }}
          >
            <img
              src={SkillGroups.GroupImages.frontend ?? PLACEHOLDERIMAGE}
              className="skill-group-inline__group-icon"
              alt="frontend skills group icon - a desktop monitor." // temp group icon placeholder
              // style={{width: "100px", height: "100px", padding: "5px", margin: "5px", backgroundColor: "blue"}}
            />
            <h3 className="frontend-section__header skill-group-section__header">
              Frontend Development
            </h3>

            <div className="frontend-section__skills">
              {Object.keys(SkillGroups.frontend).map((ele, index) => {
                const { NAME, IMAGE, LEVEL, TOOLTIP } = SkillGroups.frontend[ele];
                return (
                  <div
                    className="skill-icon__box tooltip__box"
                    key={index}
                    // style={{ display: "inline-block" }}
                  >
                    <div className="tooltip__text">{TOOLTIP ?? "tooltip"}</div>
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
              src={SkillGroups.GroupImages.backend ?? PLACEHOLDERIMAGE}
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
            <h3 className="backend-section__header skill-group-section__header">
              Backend Development
            </h3>
            <div className="backend-section__skills">
              {Object.keys(SkillGroups.backend).map((ele, index) => {
                const { NAME, IMAGE, LEVEL } = SkillGroups.backend[ele];
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
              src={SkillGroups.GroupImages.tools ?? PLACEHOLDERIMAGE}
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

            <h3 className="tools-section__header skill-group-section__header">
              {" "}
              Supporting Tools
            </h3>
            <div className="tools-section__skills">
              {Object.keys(SkillGroups.tools).map((ele, index) => {
                const { NAME, IMAGE, LEVEL } = SkillGroups.tools[ele];
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
      ) : null}
    </>
  );
}
