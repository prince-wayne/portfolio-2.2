// static skill group icons
// inline version, ABC top to bottom.

import React, { useRef } from "react";
import "./skill groups inline.css";
import loadDataFile from "../../Supporting Files/loadfile.js";
import { useEffect, useState } from "react";

export default function SkillGroupsInline() {
  const PLACEHOLDERIMAGE =
    "https://i.etsystatic.com/27443014/r/il/f4638a/4421758331/il_1080xN.4421758331_9bwu.jpg";

  const [SkillGroups, setSkillGroups] = useState({});
  const [mounted, setMounted] = useState(true); 

  // ====== LOADS DATA FROM EXTERNAL JSON ======
  useEffect(() => {
    setMounted(true);
    (async () => {
      const data = await loadDataFile("/data/Skills.json"); // relative to public/
      if (mounted) setSkillGroups(data);
    })();
    return () => {
      setMounted(false);
    };
  }, []);

  // ====== END LOAD DATA ======


  return (
    <>
      {mounted && Object.keys(SkillGroups).length !== 0 ? (
        <div className="skill-group-inline__container">
          <div className="frontend-section">
            <img
              src={SkillGroups.GroupImages.frontend ?? PLACEHOLDERIMAGE}
              className="skill-group-inline__group-icon"
              alt="frontend skills group icon - a desktop monitor."
            />
            <h3 className="frontend-section__header skill-group-section__header">
              Frontend Development
            </h3>

            <div className="frontend-section__skills">
              {Object.keys(SkillGroups.frontend).map((ele, index) => {
                const { NAME, IMAGE, LEVEL, TOOLTIP } =
                  SkillGroups.frontend[ele];
                return (
                  <div className="skill-icon__box tooltip__box" key={index}>
                    <img
                      src={IMAGE ?? PLACEHOLDERIMAGE}
                      className="skill"
                      alt={NAME}
                    />
                    <div className={`${LEVEL} skill-icon__level-dot`} />
                    <div className="tooltip__text">{TOOLTIP ?? "tooltip"}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="backend-section">
            <img
              src={SkillGroups.GroupImages.backend ?? PLACEHOLDERIMAGE}
              className="skill-group-inline__group-icon"
              alt="backend skills group icon - a server cluster"
            />

            <h3 className="backend-section__5eader skill-group-section__header">
              Backend Development
            </h3>
            <div className="backend-section__skills">
              {Object.keys(SkillGroups.backend).map((ele, index) => {
                const { NAME, IMAGE, LEVEL, TOOLTIP } =
                  SkillGroups.backend[ele];
                return (
                  <div className="skill-icon__box tooltip__box" key={index}>
                    <img
                      src={IMAGE ?? PLACEHOLDERIMAGE}
                      className="skill"
                      alt={NAME}
                    />
                    <div className={`${LEVEL} skill-icon__level-dot`} />
                    <div className="tooltip__text">{TOOLTIP ?? "tooltip"}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tools-section">
            <img
              src={SkillGroups.GroupImages.tools ?? PLACEHOLDERIMAGE}
              className={"skill-group-inline__group-icon"}
              alt="Tools section/skill Group Icon - a toolbox"
            />

            <h3 className="tools-section__header skill-group-section__header">
              {" "}
              Supporting Tools
            </h3>
            <div className="tools-section__skills">
              {Object.keys(SkillGroups.tools).map((ele, index) => {
                const { NAME, IMAGE, LEVEL, TOOLTIP } = SkillGroups.tools[ele];
                return (
                  <div className="skill-icon__box tooltip__box" key={index}>
                    <img
                      src={IMAGE ?? PLACEHOLDERIMAGE}
                      className={`skill`}
                      alt={NAME}
                    />
                    <div className="tooltip__text">
                      {TOOLTIP ?? `${NAME} ${LEVEL}/5`}
                    </div>
                    <div className={`${LEVEL} skill-icon__level-dot`} />
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
