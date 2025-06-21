// for our socals and such... look at the name. why does it look weird reguardless?

import IconGroup from "./icon group";

// same basic code as skill group just with the other data filled in. (icons)

export default function SocialIcons() {
  const icons = [
    {
      name : "instagram",
      link : "https://www.instagram.com/",
      image : "https://img.icons8.com/windows-11-filled/50/000000/instagram-new.png",
    },
    {
      name: "LinkedIn",
      link : "https://www.linkedin.com/",
        image : "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
    },
    {
      name : "GitHub",
      link: "",
      image : "https://img.icons8.com/material-rounded/50/000000/github.png", 
    },
  ];
// these images are temporiary, we will need to replace them with the actual images. Windows 11 is what we were intenting.

// why the autofill seem to want something other than the windows 11 icon? LOL like sign after sign not to use them. 

  return <IconGroup isGrid={true} skills={icons} />;
}
