export default function IconGroup(props) {
  // Check Props
  if (!props) {
    console.error("No props passed down");
    throw new Error("No props passed down");
  }

  const { icon, skills } = props;
  
  // check icon
  if (!icon && isGrid) { // there's no icon if the grid element is present, also some of the icon groups are different from the skills 
    console.error("Icon, not in given props or addressed incorrectly");
    throw new Error(
      "icon not defined within given props, or addressed incorrectly"
    );
  }
  // Check skills.
  if (!skills || !Array.isArray(skills) || skills.length === 0) {
    console.error("missing skills prop, not an array or empty");
    throw new Error("skills prop is missing, not an array, or empty");
  }

  if (!link) {
    // this isn't a error check, just something to allow conditional render
  }
  return (
    <>
      {/* 
        we likely will need to remove the parent to ensure we get all the children pair as slibings instead of cousins. however that approach may not work with* how react works.
        solution a) raise children, no black jokes please. 
        solution b) use parent to wrap all the icons into a single compondent. 
      */}


      {!isGrid && <img src={icon}  /* the link is something  */alt="" />}

      <div
        className={
          "skill-icons-container" + isGrid
            ? "section-grid"
            : "section-rows inline-icons"
        }
      >

        {/* note that our input would be an array or an object,  */}
      !link ? 
        {skills.map((ele, index) => (
          <img className="skill-icon " src={ele} key={index}/>
        ))} :
        {skills.map((ele, index) => (
          <a href={ele.link} key={index}>
            <img className="skill-icon " src={ele.pic} />
          </a>
        ))}
      </div>
    </>
  );
}
