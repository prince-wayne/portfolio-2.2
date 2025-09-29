// static skill group icons
// inline version, ABC top to bottom.

import React from "react";
import "./skill groups inline.css";

export default function SkillGroupsInline(props) {
  // container, three divs inside, each representing a skill group.

  const skillGroups = {
    frontend: {
      html: {
        image: "",
        level: 3, // new(0), beginner(1), intermediate(2), advanced(3)
      },
      css: {
        image: "",
        level: 3,
      },
      javascript: {
        image: "",
        level: 3,
      },
      react: {
        image: "",
        level: 1,
      },
      // etc
    },
    backend: {},
    tools: {},
  };

  return (
    <>
      <div className="skill-groups-inline-container">
        <div className="skill-group-inline frontend-skills">
          {/* group icon,
                {
                    header,
                    {
                        {icon, level}
                        {icon, level}
                        {icon, level}
                    }
                }
            */}
          <img className="group-icon" src="" alt="" />
          <div className="skill-group-content">
            <h3>Frontend</h3>
            <div className="inline-wrapper">
                {/* map the icons here; this repeats for each level, not currently worth the dymanic in this verson to wrap all groups like this. */}
              <div className="skill-icon">
                <img className="skill" src="" alt="" />
                <div className="level" />
              </div>
            </div>
          </div>
        </div>

        <div className="skill-group-inline backend-skills"></div>
        
        <div className="skill-group-inline tools"></div>
      </div>
    </>
  );
}
