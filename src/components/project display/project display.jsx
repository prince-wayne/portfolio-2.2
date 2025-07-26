// we gotta load in the projects, our old portfolio should have the data file.
import { useState, useEffect, useRef } from "react";
import "../Styles/project display.css";
import { click } from "@testing-library/user-event/dist/click";

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
  const [selection, setSelection] = useState(0);
  const [dots, setDots] = useState([
    "active",
    "inactive",
    "inactive",
    "inactive",
  ]);
  let dottracker = useRef(0); // this is used to track the current dot status, we can use it to set the dots in relation to the selection.
  const clicks = useRef(0); // this is used to track the number of clicks, we can use it to set the dots in relation to the selection.
  let dataLength = useRef(null); // later assign the length of data once we get it;
  const [size, setSize] = useState(Math.floor(window.innerWidth / 350)); // this is used to set the size of the project display, we can use it to set the dots in relation to the selection.
  let list = []; // this is used to handle the number of projects displayed at once.
  let once = useRef(true); // use to set the clicks once the data loads, without rendering andseting clicks every time. aka, sets clicks once.
  
   
  // This is for our data loading. we want to keep this at the top of our file so it can load as son as possible.
  useEffect(() => {
    loadDataFile("/data/projects.json").then((res) => {
      projectData.current = res;
      dataLength.current = projectData.current.length - 1;
      setSelection(0);
      setStatus(true);
      if (Array.isArray(res) && res.length === 0) {
        setDataInvalid(true);
        console.error("data invalidated");
      }
    });
  }, []);
  
  if (list.length === 0 && status && !dataInvalid) {
    for (let i = 0; i < size; i++) {
      list[i] = projectData.current[size * (selection + i)];
    }
  } // check during refactoring, we might need this anymore. 

  if (dataLength.current > 0 && once.current) {
    // once the length is over zero, out data is valid. (should be)
    clicks.current = Math.floor(dataLength.current / size) + (dataLength.current % size > 0 ? 1 : 0);
    once.current = false; // we only want to set the clicks once.
  }

  // Handles the resizing the screen
  useEffect(() => {
  const handleResize = () => {
    const checkSize = Math.floor(window.innerWidth / 350) > 5 ? 5 : Math.floor(window.innerWidth / 350);
    setSize(checkSize); // Update size based on window width limiting to a maximum of 5

    clicks.current = Math.floor(dataLength.current / size) + (dataLength.current % size > 0 ? 1 : 0); // updates the clicks based on the new size

    console.log(`Window resized\n`);
  };

  window.addEventListener("resize", handleResize);

  // Cleanup to prevent memory leaks
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

console.log(`Current size: ${size}, Clicks: ${clicks.current}`);

 

  // sets the  dot status in relation to the project selection

  // useEffect(() => {
  //   let carry = []; // carries the incoming value
  //   if (dottracker.current >= 0 && dottracker.current < dataLength.current/4) {
  //     carry = ["active", "inactive", "inactive", "inactive"];
  //   } else if ( dottracker.current >= dataLength.current/4 && dottracker.current < dataLength.current/2) {
  //     carry = ["inactive", "active", "inactive", "inactive"];
  //   } else if (dottracker.current >= dataLength.current/2 && dottracker.current < (dataLength.current * 3)/4) {
  //     carry = ["inactive", "inactive", "active", "inactive"];
  //   } else if (dottracker.current >= (dataLength.current * 3)/4 && dottracker.current <= dataLength.current) {
  //     carry = ["inactive", "inactive", "inactive", "active"];
  //   }
    
  //   setDots(carry);
  // }, [selection]);

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
      return <h4 className="wait-message">Please Wait</h4>;
    } else if (status && !dataInvalid) {
      if (group) {
        projectData.current = projectData.current.filter(
          (project) => project.sections.includes(group) === group
        );
        dataLength.current = projectData.current.length - 1;
      } else {
        // line below should handle removing any data used for test, might not be the best practice, noting now

        projectData.current = projectData.current.filter(
          (project) => project.sections.includes("test-data") === false
        );

        dataLength.current = projectData.current.length - 1;
      }

      for (let i = 0; i < list.length; i++) {
        let value = size * selection + i;

        if (value < -dataLength.current) {
          value = Math.abs(value) % dataLength.current;
        } else if (value < 0) {
          value = projectData.current.length + value;
        } else if (value < dataLength.current) {
          // value = value; // no change needed but keeping for clarity
        } else if (value >= dataLength.current) {
          value = value % dataLength.current;
        }
        if (i === Math.floor(list.length / 2)) {
          dottracker.current = value; // this is used to track the current dot status, we can use it to set the dots in relation to the selection.
        }
        list[i] = projectData.current[value];
      }
      return (
        <div className="card-container">
          {/* We want to map the selections to handle the code of each card */}
          {list.map((ele, index) => {
            if (!ele) {
              console.warn(`No data found for index ${index}.`);
              return null;
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
                  <button> View Project </button>
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
      setSelection((c) => c - 1);
    } else if (btn === "next") {
      setSelection((c) => c + 1);
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
        {/* <div
          data-testid="dot dot-0"
          id="dot-0"
          className={`dot dot-inditicator ${dots[0]}`}
        ></div>
        <div
          data-testid="dot dot-1"
          id="dot-1"
          className={`dot dot-inditicator ${dots[1]}`}
        ></div>
        <div
          data-testid="dot dot-2"
          id="dot-2"
          className={`dot dot-inditicator ${dots[2]}`}
        ></div>
        <div
          data-testid="dot dot-3"
          id="dot-3"
          className={`dot dot-inditicator ${dots[3]}`}
        ></div> */}
      </div>
    </section>
  );
}
