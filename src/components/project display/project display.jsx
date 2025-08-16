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
  let dataLength = useRef(null); // later assign the length of data once we get it;

  const [selection, setSelection] = useState(0);
  const [size, setSize] = useState(Math.floor(window.innerWidth / 350)); // this is used to set the size of the project display, we can use it to set the dots in relation to the selection.

  let dottracker = useRef(0); // this is used to track the current dot status, we can use it to set the dots in relation to the selection.
  let [dotLogicArray, setDotLogicArray] = useState([]); // this is used to handle the dots, we can use it to set the dots in relation to the selection.
  let initalLoadDotOnly = true; // this is used to handle the initial load of the dots, we can use it to set the dots in relation to the selection.
  const dotArrayLogicMinValue = useRef(0); // this is used to handle the dots, we can use it to set the dots in relation to the selection.

  const clicks = useRef(); // this is used to track the number of clicks, we can use it to set the dots in relation to the selection.
  const resize = useRef(false); // tracks if a resize has happened. triggers a recalculation of clicks.
  let list = []; // this is used to handle the number of projects displayed at once.

  if (resize.current) {
    clicks.current =
      Math.floor(dataLength.current / size) +
      (dataLength.current % size > 0 ? 1 : 0); // updates the clicks based on the new size
    resize.current = false; // reset the resize to false so we don't infinity render this value. (calulate every rerender)
  } // sets the clicks only on rerender when the clicks are changed... we

  // This is for our data loading.
  useEffect(() => {
    loadDataFile("/data/projects.json").then((res) => {
      projectData.current = res;
      dataLength.current = projectData.current.length - 1;
      clicks.current =
        Math.floor(dataLength.current / size) +
        (dataLength.current % size > 0 ? 1 : 0);
      setSelection(0);
      setStatus(true);
      if (Array.isArray(res) && res.length === 0) {
        setDataInvalid(true);
        console.error("data invalidated");
      }
    });
  }, []);

  // Handles the resizing the screen
  useEffect(() => {
    const handleResize = () => {
      const checkSize =
        Math.floor(window.innerWidth / 350) > 5
          ? 5
          : Math.floor(window.innerWidth / 350);
      setSize(checkSize); // Update size based on window width limiting to a maximum of 5
      resize.current = true; // set the resize to true so we can update the clicks.
      console.log(`Window resized\n`);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // if the useEffect doesn't initalially run based on the selection we might have to put it into a different section of the code. Or initentally change the selection within initally ran code.
  useEffect(() => {
    // console.clear();
    const dots = clicks.current > 5 ? 5 : clicks.current;
    let transfer = new Array(dots).fill(false);
    let DLAMinValue = 0;
    let value = dottracker.current; // this is used to track the current dot status, we can use it to set the dots in relation to the selection.
    // for (let i = 0; i < dots; i++) {

    //   const condition1 = DLAMinValue < value; // 0 < 1 -> true, 1 < 1 -> false, etc.
    //   DLAMinValue = Math.floor(clicks.current * (i + 1 / dots));
    //   const condition2 = value <= DLAMinValue; // 1 <= 1 -> true, 1 <= 2 -> true, etc.

    //   if (condition1 && condition2) {
    //     transfer[i] = true;
    //   } else {
    //     transfer[i] = false;
    //   }
    // }
    for (let i = 0; i < dots; i++) {
      // dataLength.current
      const lowerBound = Math.floor(dataLength.current * (i / dots));
      const upperBound = Math.floor(dataLength.current * ((i + 1) / dots));
      console.log(`Dot ${i}: ${lowerBound} < x: ${value} <= ${upperBound}`);
      console.log('lowerBound:', lowerBound, 'upperBound:', upperBound);
      console.log(`lower`, lowerBound < value, `upper`, value <= upperBound);

      transfer[i] = lowerBound < value && value <= upperBound;
    }

    setDotLogicArray(transfer);
  }, [selection, status, dataInvalid]);

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

  if (list.length === 0 && status && !dataInvalid) {
    for (let i = 0; i < size; i++) {
      list[i] = projectData.current[size * (selection + i)];
    }
  } // check during refactoring, we might need this anymore.

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

        {dotLogicArray.map((ele, index) => {
          if (ele) {
            return (
              <div
                className="dot active"
                id={`dot-${index}`}
                key={index}
                data-testid={`dot-${index}`}
              ></div>
            );
          } else {
            return (
              <div
                className="dot inactive"
                key={index}
                data-testid={`dot-${index}`}
              ></div>
            );
          }
        })}
      </div>
    </section>
  );
}
