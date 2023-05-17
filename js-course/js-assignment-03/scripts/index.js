// carousel-image-wrapper.style.transform = 'translateX(-' + currentImageIndex * 400 + 'px)';

const carouselContainer =
  document.getElementsByClassName("carousel-container")[0];
const imageWrapper = document.getElementsByClassName(
  "carousel-image-wrapper"
)[0];

let imageCollection = imageWrapper.getElementsByTagName("img");
let numberOfImages = imageCollection.length;
let imageArray = Array.from(imageCollection);
let direction=-1;


let imageReel = imageWrapper.getElementsByTagName("img");

// console.log(imageReel);

imageArray.map((item) => {
  let cssStyleObj = window.getComputedStyle(item);
  let imgWidth = cssStyleObj.getPropertyValue("width");
});

//* FUNCTION TO GET COMPUTED WIDTH OF AN ELEMENT
function calcWidthOf(element) {
  let cssStyleObj = window.getComputedStyle(element);
  return cssStyleObj.getPropertyValue("width").split("px")[0];
}

let indicatorsEl = createChildOf(carouselContainer, {
  tagName: "div",
  classes: "indicators",
});

for (let i = 0; i < 4; i++) {
  createChildOf(indicatorsEl, {
    tagName: "div",
    classes: "indicator",
    text: ".",
  });
}

let nextButton = createChildOf(carouselContainer, {
  tagName: "img",
  classes: "nav-button next",
  src: "./images/next.png",
  text: "NEXT",
});
let prevButton = createChildOf(carouselContainer, {
  tagName: "img",
  classes: "nav-button prev",
  src: "./images/prev.png",
  text: "PREV",
});


//* SCRIPTS FOR CAROUSEL STARTS HERE **
let currentImageIndex = 0;
let currentImage = imageArray[Math.abs(currentImageIndex)];
console.log(currentImage);
//numberOFImages = 3 so index= 0, 1, 2
let indicatorCollection = document.getElementsByClassName("indicator");
let indicatorArray = Array.from(indicatorCollection);

highlightCurrentIndicator();

// function for translating image wrapper
function translateImageWrapper() {
  imageWrapper.style.transform =
    "translateX(-" +
    calcWidthOf(currentImage) * Math.abs(currentImageIndex) +
    "px)";
}

















function translateImageWrapperLeft() {
  if (direction === 1) {
    imageWrapper.prepend(imageWrapper.lastElementChild);
    direction = -1;
  }
  direction = -1;
 
  imageWrapper.style.justifyContent = "flex-start";
  imageWrapper.style.transform = "translateX(-800px)";
}

function translateImageWrapperRight() {
  if (direction === -1) {
    // imageWrapper.prepend(imageWrapper.lastElementChild);
    imageWrapper.appendChild(imageWrapper.firstElementChild);

    direction = 1;
  }
 
  imageWrapper.style.justifyContent = "flex-end";
  imageWrapper.style.transform = "translateX(800px)";
}

const slider = function () {
  if (direction === -1) {
    imageWrapper.appendChild(imageWrapper.firstElementChild);
  } else if (direction === 1) {
    imageWrapper.prepend(imageWrapper.lastElementChild);
  }
  imageWrapper.style.transition = "none";

  imageWrapper.style.transform = "translateX(0)";
  setTimeout(function () {
    imageWrapper.style.transition = "all ease 0.5s";
  });
};
imageWrapper.addEventListener("transitionend", slider);

// function to add 'active-indicator' class to current indicator
function highlightCurrentIndicator() {
  indicatorArray.forEach((indicator) =>
    indicator.classList.remove("active-indicator")
  );
  indicatorArray[currentImageIndex].classList.add("active-indicator");
}

//* adding translations on indicator click
for (let i = 0; i < indicatorArray.length; i++) {
  indicatorArray[i].addEventListener("click", () => {
    currentImageIndex = i;

    highlightCurrentIndicator();

    // translating imagewrapper
    translateImageWrapper();
  });
}

//* NEXT BUTTON EVENT
nextButton.addEventListener("click", () => {
  // first change the currentImageIndex to next index
  currentImageIndex++;

  if (currentImageIndex >= numberOfImages)
    currentImageIndex = currentImageIndex % numberOfImages;

  highlightCurrentIndicator();

  // offset X coordinate with respect to currentImageIndex
  // translateImageWrapper();
  translateImageWrapperLeft();
});

//* PREV BUTTON EVENT
prevButton.addEventListener("click", () => {
  // first change the currentImageIndex to previous index
  currentImageIndex--;

  // if decreased currentImageIndex becomes negative change currentImageIndex to last possible index
  if (currentImageIndex < 0) currentImageIndex = numberOfImages - 1;

  highlightCurrentIndicator();

  // offset X coordinate with respect to currentImageIndex
  translateImageWrapperRight();
});

//* FUNCTIONS TO CREATE SIBLINGS
function createSiblingAfter(e, passedObject) {
  const {
    tagName,
    classes,
    onclick,
    text,
    id,
    href,
    target,
    alt,
    placeholder,
  } = passedObject;

  let newElement = document.createElement(tagName);

  if (classes) newElement.setAttribute("class", classes);

  if (onclick) newElement.setAttribute("onclick", onclick);
  if (id) newElement.setAttribute("id", id);
  if (href) newElement.setAttribute("href", href);
  if (target) newElement.setAttribute("target", target);
  if (alt) newElement.setAttribute("alt", alt);
  if (placeholder) newElement.setAttribute("placeholder", placeholder);

  e.insertAdjacentElement("afterend", newElement);
  if (text) {
    const textNode = document.createTextNode(text);
    newElement.appendChild(textNode);
  }

  return newElement;
}

function createChildOf(e, passedObject) {
  const { tagName, classes, onclick, text, id, href, target, src, alt } =
    passedObject;

  // creating a new element object
  let newElement = document.createElement(tagName);

  // appending attributes on newly created element
  if (classes) newElement.setAttribute("class", classes);
  if (onclick) newElement.setAttribute("onclick", onclick);
  if (id) newElement.setAttribute("id", id);
  if (href) newElement.setAttribute("href", href);
  if (target) newElement.setAttribute("target", target);
  if (src) newElement.setAttribute("src", src);
  if (alt) newElement.setAttribute("alt", alt);

  // inserting new element on DOM as last child
  e.insertAdjacentElement("beforeend", newElement);
  if (text) {
    const textNode = document.createTextNode(text);
    newElement.appendChild(textNode);
  }

  // returning created child element
  return newElement;
}
