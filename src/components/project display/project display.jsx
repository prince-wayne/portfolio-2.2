// we gotta load in the projects, our old portfolio should have the data file.
import { useState, useEffect, useRef } from "react";
import "../Styles/project display.css";

async function loadDataFile(path) {
  // If I used random number I could easily have log infomation every 1/10 runs.
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading data: ", error);
    return []; // an empty array isn't acceptable in this moment. but it's how we'll use it as a check
  }
  // function from older project, nearly no changes.
}

export default function ProjectDisplay(props) {
  const { children } = props;
  const [status, setStatus] = useState(false); // checks once our file has loaded
  const projectData = useRef(null);
  const [dataInvalid, setDataInvalid] = useState(false);
  const [selection, setSelction] = useState(0);
  const [dots, setDots] = useState([
    "active",
    "inactive",
    "inactive",
    "inactive",
  ]);
  let dataLength = useRef(null); // later assign the length of data once we get it;
  let size = Math.floor(window.innerWidth / 400);
  let list = []; // this is used to handle the number of projects displayed at once.

  if (list.length === 0 && status && !dataInvalid) {
    for (let i = 0; i < size; i++) {
      list[i] = projectData.current[size * (selection + i)];
    }
  }

  useEffect(() => {
    loadDataFile("/data/projects.json").then((res) => {
      projectData.current = res;
      dataLength.current = projectData.current.length;
      setSelction(0);
      setStatus(true);
      if (Array.isArray(res) && res.length === 0) {
        setDataInvalid(true);
        console.error("data invalidated");
      }
    });
  }, []);

  // sets the  dot status in relation to the project selection

  useEffect(() => {
    let carry = [1, 2, 3, 4]; // carries the incoming value
    carry.fill("inactive", 0, 4); // in order for it to work we need a current length of four, we'll look closer during day hours with internt access.
    let length = 0;
    let relation = [];
    if (projectData.current) {
      length = projectData.current.length - 1; // readability
      relation = [
        selection === 0,
        selection === 1,
        (selection <= length - 1) * (selection > 1),
        selection === length - 2,
      ];
    }

    if (relation.every((ele) => ele === false)) {
      relation[2] = true;
    }
    let transfer = relation.indexOf(true);
    carry[transfer] = "active";
    setDots(carry);
  }, [selection]);

  function handleLoad() {
    const { group } = props;
    if (dataInvalid && status) {
      return (
        <div className="invalid-data">
          <h3>
            Sorry there seems to be an issue with our data processing, try
            refreshing your page please.
          </h3>
          <p> If this continues please let us know and we'll fix it soon.</p>
        </div>
      );
    } else if (!status && !dataInvalid) {
      return <h4 className="wait">Please Wait</h4>;
    } else if (status && !dataInvalid) {
      if (group) {
        projectData.current.filter(
          (project) => project.sections.includes(group) === group
        );
      } else {
        // line below should handle removing any data used for test, might not be the best practice, noting now
        projectData.current.filter(
          (project) => project.sections.includes(group) !== "test-data"
        );
      }

      for (let i = 0; i < list.length; i++) {
        let value = size * selection + i;
        console.log("selection: ", selection);
        console.log("size", size);
        console.log("i", i);
        console.log("value", value);
        console.log("data length", dataLength.current);
        console.log("\n");

        if (value < dataLength.current) {
          list[i] = projectData.current[value];
        } else {
          list[i] = projectData.current[value % dataLength.current];
        }
      }

      
      return (
        <div className="card-container">
          {/* We want to map the selections to handle the code of each card */}
          {list.map((ele, index) => {
            if (!ele) {
              return;
            }
            let { title, tags, link, description } = ele;
            let image = ele.image || null; // if no image is provided, use a placeholder
            let project;
            let codebase;
            if (link) {
              project = link.project;
              codebase = link.codebase;
            }

            if (!image || !title || !tags || !link || !description) {
              image = image || "https://via.placeholder.com/150";
              title = title || "No title available";
              description = description || {
                short: "No description available",
              };
              tags = tags || ["No tags available"];
              project = project || "#";
              codebase = codebase || "#";
            }
            return (
              <div className="card" key={index}>
                <img src={null} alt={description.short} />

                <h4>{title}</h4>
                <p>{description.long ? description.long : description.short}</p>

                <ul>
                  {tags.map((ele, index) => (
                    <li key={index}> {ele} </li>
                  ))}
                </ul>

                <a href={project}>
                  <button> Veiw Project </button>
                </a>

                <a href={codebase}>
                  <button> View Codebase </button>
                </a>
              </div>
            );
          })}
        </div>
      );
    }
  }

  function handleBtnLoad(btn) {
    if (status && !dataInvalid) {
      return (
        <>
          <img
            data-testid="Back-btn"
            src={null}
            alt={`${btn} button`}
            onClick={() => handleBtnClick(btn)}
          />
        </>
      );
    }
  }

  function handleBtnClick(btn) {
    if (projectData == null) {
      return;
    } else if (btn === "back") {
      setSelction((c) => c - 1);
    } else if (btn === "next") {
      setSelction((c) => c + 1);
    }
  }

  // we need to remove the reset part for our desired affect of looping / connecting the ends;

  return (
    <section className="projects-section">
      {/* left button */}
      {children}
      {/* This is meant to be for headers and possilbe sub headers. */}
      {handleBtnLoad("back")}
      {handleLoad()}
      {handleBtnLoad("next")}
      {/* right btn */}
      <div className="dot-inditicators">
        {/* stlyed by class conditional */}
        <div
          data-testid="dot dot-0"
          className={`dot dot-inditicator ${dots[0]}`}
        ></div>
        <div
          data-testid="dot dot-1"
          className={`dot dot-inditicator ${dots[1]}`}
        ></div>
        <div
          data-testid="fot dot-2"
          className={`dot-inditicator ${dots[2]}`}
        ></div>
        <div
          data-testid="dot dot-3"
          className={`dot-inditicator ${dots[3]}`}
        ></div>
      </div>
    </section>
  );
}
