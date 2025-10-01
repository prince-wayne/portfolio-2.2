import React from "react";
import "./social icons static.css"
// This File.

// This is the static version of our social icons. Once we hit production we will revisit and make this a dynamic component which can be used for other icons as well. (in this case it will be used along side two others)

export default function Socials(props) {


  const icons = [
    {
      name: "instagram",
      link: "https://www.instagram.com/the_quiet_artist007/", // done
      image:
        "https://img.icons8.com/?size=50&id=32323&format=png&color=000000",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/tyshawn-a-119bb924a", // done
      image: "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
    },
    {
      name: "GitHub",
      link: "https://github.com/prince-wayne", // done
      image: "https://img.icons8.com/ios-filled/50/000000/github.png",
    },
  ];
  console.info("link-image rendered");

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
