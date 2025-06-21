import IconGroup from "./icon group.jsx";

export default function SkillGroups(props) {
  if (!props) {
    console.error("Skill group has no props passed down.");
    throw new Error("Skill group, no props");
  }

  // placeholder values
  const icons = {
    frontend: {
      skills: ["React", "JavaScript", "HTML", "CSS"],
      sectionIcon: "/images/frontend.svg",
    },
    backend: {
      skills: ["Node.js", "Python", "Java", "Go"],
      sectionIcon: "/images/backend.svg",
    },
    tools: {
      skills: ["Git", "Docker", "AWS", "Azure"],
      sectionIcon: "/images/tools.svg",
    },
  };

  const {isGrid} = props;

  // will generate an array from the object keys.
  if (isGrid) {
    let result = [];
    Object.keys(icons).forEach((ele) => {
      icons[ele].skills.forEach((skill) => {
        result.push(skill);
      });
    });
  }

  return (
    <div>
      {/* will render a grid of icons or three rows of icons. */}
      {isGrid ? (
        <>
          <IconGroup
            isGrid={true}
            /* map function to get every skill icon without the section icons */
            skills={result}
          ></IconGroup>
        </>
      ) : (
        <>
          <IconGroup
            isGrid={false}
            icon={icons.frontend.sectionIcon}
            skills={icons.frontend.skills}
          />
          <IconGroup
            isGrid={false}
            icon={icons.backend.sectionIcon}
            skills={icons.backend.skills}
          />
          <IconGroup
            isGrid={false}
            icon={icons.tools.sectionIcon}
            skills={icons.tools.skills}
          />
        </>
      )}
    </div>
  );
}

// style is something i almost always do last, but I always structure with the intention of future styles.
// this compondent will have two styles, one grid, and one with three seperate rows, the section icon won't remain in the gird
