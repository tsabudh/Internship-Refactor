"use strict";
//* CHANGE ASSIGNMENT NUMBERS FOR EACH NEW ASSIGNMENTS
const cssAssignmentNumber = 19;
const htmlAssignmentNumber = 1;
const jsAssignmentNumber = 7;
const reactAssignmentNumber = 5;
const phpAssignmentNumber = 4;
const databaseAssignmentNumber = 2;
const finalAssignmentNumber = 2;

let courseItems = ["html", "css", "js", "react", "php", "database", "final"];

const mainContainer = document.getElementsByClassName("main-container")[0];

const details = {
  html: ["HTML Page"],
  css: [
    "Selectors",
    "Padding",
    "Box-sizing property",
    "Inline,Block Elements",
    "Display Inline-Block",
    "Flexbox",
    "Grid",
    "Problem with 'clear'",
    "Pseudo Elements/Classes",
    "min(),max() and clamp()",
    "CSS Animation",
    "CSS Tooltip",
    "BEM Methodology",
    "Cards",
    "Profile Card",
    "Responsive Design",
    "Design to HTML",
    "Bootstrap",
    "Final CSS Project",
  ],
  js: [
    "Profile",
    "Clock & Password Generator",
    "Image Slider",
    "Box Collision",
    "Car Lane Game",
    "Flappy Bird",
    "Mars Mars",
  ],
  react: [
    "Components and Props",
    "useState",
    "Login & Signup",
    "Routing",
    "Add Tickets",
  ],
  database: ["Blog Database", "Twitter Database"],
};

//* PROFILE
{
  createChildOf(mainContainer, {
    tagName: "div",
    classes: "toggle-profile",
    onclick: "toggleProfile()",
  });

  createChildOf(mainContainer, {
    tagName: "div",
    classes: "profile",
  });
  const profile = document.getElementsByClassName("profile")[0];

  createChildOf(profile, {
    tagName: "div",
    classes: "profile_pic",
  });
  const profilePic = document.getElementsByClassName("profile_pic")[0];

  createChildOf(profilePic, {
    tagName: "figure",
    classes: "profile_frame",
  });
  const profileFrame = document.getElementsByClassName("profile_frame")[0];
  createChildOf(profileFrame, {
    tagName: "img",
    src: "/portfolio-image.JPG",
    alt: "Sabudh Bahadur Thapa",
  });
  createChildOf(profile, {
    tagName: "div",
    classes: "profile_name",
  });
  const profileName = document.getElementsByClassName("profile_name")[0];
  createChildOf(profileName, {
    tagName: "h3",
    text: "Sabudh Bahadur Thapa",
  });
  createChildOf(profile, {
    tagName: "div",
    classes: "profile_bio",
  });
  const profileBio = document.getElementsByClassName("profile_bio")[0];
  createChildOf(profileBio, {
    tagName: "p",
    text: "Hi, I am originally from Baglung. My interest lies in learning programming and expanding its limits.",
  });
}

//* COURSE TAB
createChildOf(mainContainer, {
  tagName: "div",
  classes: "course-tab-container",
});
const courseTabContainer = document.getElementsByClassName(
  "course-tab-container"
)[0];

createChildOf(courseTabContainer, {
  tagName: "div",
  classes: "course-tab",
});
const courseTab = document.getElementsByClassName("course-tab")[0];
createSiblingAfter(courseTabContainer, {
  tagName: "div",
  classes: "assignment-tab",
});

const assignmentTab = document.getElementsByClassName("assignment-tab")[0];

//* CREATING COURSE-ITEMS INSIDE COURSE-TAB
for (let i = 0; i < courseItems.length; i++) {
  //i for course tab
  // creating course-item for each course tab
  createChildOf(courseTab, {
    tagName: "div",
    classes: "course-item",
    onclick: `openAssignment(this,'${courseItems[i]}')`,
    // onclick: `openAssignment('` + courseItems[i] + `',${i})`,
  });

  // creating course-item-text inside each course-item
  let courseItemIndex = document.getElementsByClassName("course-item")[i];
  createChildOf(courseItemIndex, {
    tagName: "div",
    classes: "course-item-text",
    text: `${courseItems[i]}`,
  });

  //* creating assignment-tab-content for each courseItems
  createChildOf(assignmentTab, {
    tagName: "div",
    classes: `assignment-tab-content assignment-tab-content--${courseItems[i]}`,
    id: `${courseItems[i]}`,
  });

  //*CREATING ASSIGNMENT CARDS FOR EACH ASSIGNMENT TAB CONTENT
  let assignmentTabContent = document.getElementsByClassName(
    "assignment-tab-content"
  )[i];

  //* creating assignment-item inside each assignment-tab-content
  let numberOfAssignmentItems;
  if (courseItems[i] == "html") numberOfAssignmentItems = htmlAssignmentNumber;
  else if (courseItems[i] == "css")
    numberOfAssignmentItems = cssAssignmentNumber;
  else if (courseItems[i] == "js") numberOfAssignmentItems = jsAssignmentNumber;
  else if (courseItems[i] == "react")
    numberOfAssignmentItems = reactAssignmentNumber;
  else if (courseItems[i] == "php")
    numberOfAssignmentItems = phpAssignmentNumber;
  else if (courseItems[i] == "database")
    numberOfAssignmentItems = databaseAssignmentNumber;
  else if (courseItems[i] == "final")
    numberOfAssignmentItems = finalAssignmentNumber;

  for (let j = 1; j <= numberOfAssignmentItems; j++) {
    createChildOf(assignmentTabContent, {
      tagName: "div",
      classes: `assignment-item assignment-item--${courseItems[i]}`,
      onclick: `openAssignmentDetails('${courseItems[i]}',${j})`,
    });

    let assignmentItem = document.getElementsByClassName(
      `assignment-item--${courseItems[i]}`
    )[j - 1];

    createChildOf(assignmentItem, {
      tagName: "div",
      classes: "assignment-item_number",
      text: `${j}`,
    });
    createChildOf(assignmentItem, {
      tagName: "div",
      classes: "assignment-detail",
      text: getDetail(courseItems[i], j),
    });

    createChildOf(assignmentItem, {
      tagName: "a",
      classes: "assignment-item_demo",
      text: "Demo",
      href: demoRoute(courseItems[i], j - 1),
      target: "_blank",
    });
    createChildOf(assignmentItem, {
      tagName: "a",
      classes: "assignment-item_repo",
      text: "Repo",
      href: repoRoute(courseItems[i], j - 1),
      target: "_blank",
    });
  }
}

//*ASSIGNMENT NUMBER STARTS FROM ZERO AND IS LESS THAN SHOWN

function repoRoute(courseName, assignmentNumber) {
  if (courseName == "js" && assignmentNumber == "0") {
    return `https://github.com/tsabudh/internship`;
  } else if (courseName == "js" && assignmentNumber == "06") {
    return `https://github.com/tsabudh/internship/tree/master/js-course/js-final`;
  } else if (courseName == "css" && assignmentNumber == "18") {
    return `https://github.com/tsabudh/internship/tree/master/css-course/css-assignment-final`;
  } else if (
    courseName == "react" ||
    courseName == "php" ||
    courseName == "database"
  ) {
    return `https://github.com/tsabudh/internship/tree/master/${courseName}-course/session-${
      assignmentNumber + 1
    }/`;
  } else if (courseName == "final" && assignmentNumber == 0) {
    return `https://github.com/tsabudh/internship/tree/master/planning-poker/`;
  } else if (courseName == "final" && assignmentNumber == 1) {
    return `https://github.com/tsabudh/internship/tree/master/planning-poker-server/`;
  } else {
    return `https://github.com/tsabudh/internship/tree/master/${courseName}-course/${courseName}-assignment-${makeIndexOf(
      assignmentNumber
    )}`;
  }
}
//*ASSIGNMENT NUMBER STARTS FROM ZERO AND IS LESS THAN SHOWN
function demoRoute(courseName, assignmentNumber) {
  if (courseName == "css" && assignmentNumber == "18") {
    return `https://tsabudh.github.io/internship/css-course/css-assignment-final/dist/`;
  } else if (courseName == "js" && assignmentNumber == "06") {
    return `https://tsabudh.github.io/internship/js-course/js-final/`;
  } else if (
    courseName == "react" ||
    courseName == "php" ||
    courseName == "database"
  ) {
    return `https://tsabudh.github.io/internship/${courseName}-course/session-${
      assignmentNumber + 1
    }/`;
  } else if (courseName == "final" && assignmentNumber == 0) {
    return `https://tsabudh.github.io/internship/planning-poker/`;
  } else if (courseName == "final" && assignmentNumber == 1) {
    return `https://tsabudh.github.io/internship/planning-poker-server/`;
  } else {
    return `https://tsabudh.github.io/internship/${courseName}-course/${courseName}-assignment-${makeIndexOf(
      assignmentNumber
    )}/`;
  }
}

//* CREATING DETAILS TAB
createSiblingAfter(assignmentTab, {
  tagName: "div",
  classes: "details-tab",
});
const detailsTab = document.getElementsByClassName("details-tab")[0];

createChildOf(detailsTab, {
  tagName: "div",
  classes: "assignment-item-details",
  id: "details",
});
const assignmentItemDetails = document.getElementsByClassName(
  "assignment-item-details"
)[0];
createChildOf(assignmentItemDetails, {
  tagName: "iframe",
  src: "https://tsabudh.github.io/internship/html-course/html-assignment-01/",
  id: "details-iframe",
});

function createSiblingAfter(e, passedObject) {
  const { tagName, classes, onclick, text, id, href, target, alt } =
    passedObject;

  let newElement = document.createElement(tagName);

  if (classes) newElement.setAttribute("class", classes);

  if (onclick) newElement.setAttribute("onclick", onclick);
  if (id) newElement.setAttribute("id", id);
  if (href) newElement.setAttribute("href", href);
  if (target) newElement.setAttribute("target", target);
  if (alt) newElement.setAttribute("alt", alt);

  e.insertAdjacentElement("afterend", newElement);
  if (text) {
    const textNode = document.createTextNode(text);
    newElement.appendChild(textNode);
  }
}

function createChildOf(e, passedObject) {
  const { tagName, classes, onclick, text, id, href, target, src, alt } =
    passedObject;

  let newElement = document.createElement(tagName);

  if (classes) newElement.setAttribute("class", classes);

  if (onclick) newElement.setAttribute("onclick", onclick);
  if (id) newElement.setAttribute("id", id);
  if (href) newElement.setAttribute("href", href);
  if (target) newElement.setAttribute("target", target);
  if (src) newElement.setAttribute("src", src);
  if (alt) newElement.setAttribute("alt", alt);

  e.appendChild(newElement);
  if (text) {
    const textNode = document.createTextNode(text);
    newElement.appendChild(textNode);
  }
}

function openAssignment(element, assignmentId) {
  let courseItemDivArray = document.getElementsByClassName("course-item");

  let i, tabcontent, tablinks, neededContent;
  for (i = 0; i < courseItemDivArray.length; i++) {
    courseItemDivArray[i].className = courseItemDivArray[i].className.replace(
      " active",
      ""
    );
  }

  element.classList.add("active");

  tabcontent = document.getElementsByClassName("assignment-tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
  }

  neededContent = document.getElementById(assignmentId);
  neededContent.classList.add("active");
  tablinks = document.getElementsByClassName("course-item");
}

function openAssignmentDetails(course, assignmentId) {
  console.log(course, assignmentId);
  let demoLink = demoRoute(course, assignmentId-1);
  console.log(demoLink);
  let frame = document.getElementById("details-iframe");
  frame.setAttribute("src", demoLink);

  let i, tabcontent, tablinks, neededContent;
  // debugger;

  // tabcontent = document.getElementsByClassName("assignment-item-details");
  // for (i = 0; i < tabcontent.length; i++) {
  //   tabcontent[i].className = tabcontent[i].className.replace(" active", "");
  // }
  // neededContent = document.getElementById(assignmentDetailsId);
  // neededContent.classList.add("active");
  // tablinks = document.getElementsByClassName("course-item");
}

function toggleProfile() {
  const profile = document.getElementsByClassName("profile")[0];
  profile.classList.toggle("active-flex");
}

function makeIndexOf(number) {
  return (parseInt(number, 10) + 101).toString().substr(1);
}

function getDetail(course, number) {
  if (details[course] && details[course][number - 1])
    return details[course][number - 1];
  else return "undefined";
}
