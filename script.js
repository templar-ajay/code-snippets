// trim text of elements
function trimText(selector, size) {
  const allTitles = document.querySelectorAll(selector);

  allTitles.forEach((x) => {
    if (x.innerText.length > size) {
      x.innerText = x.innerText.slice(0, size) + "...";
    }
  });
}

// change background image when hovering on elements or links

/**
 *
 * @param {object} bgImages // object that contains image keys and image urls
 * @param {String} hoverInputElementsSelector // elements which will change background of another parent element when hovered upon depending upon the bg-image attribute
 * @param {String} parentElementWhichHasBackgroundSelector // the element which has background that will be changed when each hoverInputElement is hovered
 */
function changeBackgroundImageOnLinksHover({
  bgImages,
  hoverInputElementsSelector,
  parentElementWhichHasBackgroundSelector,
}) {
  const bgImages = {
    home: "home bg image",
    about: "about bg image",
    "our-team": "our team bg image",
  };

  // const _allLIs = document.querySelectorAll(".sub-child li");
  const hoverInputElements = document.querySelectorAll(
    hoverInputElementsSelector
  );

  hoverInputElements.forEach((li) => {
    for (key in bgImages) {
      if (li.classList.contains(key) || li.classList.contains(`${key}`))
        li.setAttribute("bg-image", bgImages[key]);
    }
  });

  const parentElementWhichHasBackground = document.querySelector(
    parentElementWhichHasBackgroundSelector
  );

  hoverInputElements.forEach((li) => {
    li.addEventListener("mouseover", () => {
      parentElementWhichHasBackground.style.background = `url(${li.getAttribute(
        "bg-image"
      )})`;
    });
  });
}
