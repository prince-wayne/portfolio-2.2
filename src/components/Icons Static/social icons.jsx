import React from "react";
import "./social icons static.css"
// This File.

// This is the static version of our social icons. Once we hit production we will revisit and make this a dynamic component which can be used for other icons as well. (in this case it will be used along side two others)

// Finished - it should've been the last push. 

export default function Socials(props) {


  const icons = [
    {
      name: "instagram",
      link: "https://www.instagram.com/the_quiet_artist007/", // done
      image:
        "Images/Social Icons/icons8-instagram-48.png",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/tyshawn-a-119bb924a", // done
      image: "Images/Social Icons/icons8-linkedin-48.png",
    },
    {
      name: "GitHub",
      link: "https://github.com/prince-wayne", // done
      image: "Images/Social Icons/icons8-github-48.png",
    },
  ];

  return (
    <>
      <div className="social-icons-container">
        {icons.map((ele, index) => (
          <a
            href={ele.link}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon "
              src={ele.image}
              alt={ele.name + " icon"}
            />
          </a>
        ))}
      </div>
    </>
  );
}
