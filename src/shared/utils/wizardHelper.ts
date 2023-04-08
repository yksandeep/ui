export const moveWidget = function (elementId, instructionsModal) {
  //  to move modal to the same position
  const element = document.getElementById(elementId) as HTMLElement;
  const {
    x: elementPositionLeft,
    y: elementPositionTop,
    width: getElement_width,
    height: getElementHeight,
  } = element.getBoundingClientRect();

  const triangleDown = document.querySelector(".triangle-down") as HTMLElement;
  const triangleUp = document.querySelector(".triangle-up") as HTMLElement;
  const triangleLeft = document.querySelector(".triangle-left") as HTMLElement;
  const triangleRight = document.querySelector(
    ".triangle-right"
  ) as HTMLElement;

  const windowWidth = window.screen.width;
  const instructionsModalWidth = instructionsModal.offsetWidth;
  const windowHight = document.body.clientHeight;
  const imgInput = document.querySelector(
    ".instructionImg"
  ) as HTMLImageElement;

  setTimeout(() => {
    if (
      // widget can not be placed right or left
      windowWidth - (elementPositionLeft + getElement_width) <
        instructionsModalWidth && // widget can not be placed on the right
      elementPositionLeft - instructionsModalWidth < 0
    ) {
      triangleUp.classList.remove("hide");
      triangleLeft.classList.add("hide");
      triangleDown.classList.add("hide");
      triangleRight.classList.add("hide");
      if (imgInput.style.display === "block") {
        imgInput.addEventListener("load", () => {
          if (
            windowHight <
            getElementHeight +
              elementPositionTop +
              instructionsModal.offsetHeight // but after img load can not be placed below the elment
          ) {
            instructionsModal.style.top =
              String(
                Number(elementPositionTop - instructionsModal.offsetHeight - 20)
              ) + "px";
            triangleDown.classList.remove("hide");
            triangleDown.style.position = "absolute";
            triangleDown.style.bottom = `-15px`;
            triangleDown.style.left = "45%";
            triangleUp.classList.add("hide");
          }
        });
      }
      if (
        windowHight <
        getElementHeight + elementPositionTop + instructionsModal.offsetHeight //can not be placed below the element
      ) {
        instructionsModal.style.top =
          String(
            Number(elementPositionTop - instructionsModal.offsetHeight - 20)
          ) + "px";
        triangleDown.classList.remove("hide");
        triangleDown.style.position = "absolute";
        triangleDown.style.bottom = `-15px`;
        triangleDown.style.left = "45%";
        triangleUp.classList.add("hide");
      } else {
        instructionsModal.style.top = String(
          Number(elementPositionTop + getElementHeight + 25) + "px"
        );
        triangleUp.style.top = `-15px`;
      }
      instructionsModal.style.left = 0;
      instructionsModal.style.right = 0;
      instructionsModal.style.marginLeft = "auto";
      instructionsModal.style.marginRight = "auto";
    } else if (
      // widget can be placed right but not on the left
      windowWidth - (elementPositionLeft + getElement_width) >
        instructionsModalWidth && // widget can  be placed on the right
      elementPositionLeft - instructionsModalWidth < windowWidth // widget can not be placed on the left
    ) {
      triangleUp.classList.add("hide");
      triangleLeft.classList.remove("hide");
      triangleRight.classList.add("hide");
      triangleDown.classList.add("hide");
      triangleLeft.style.top = "25px";

      if (imgInput.style.display === "block") {
        // if there is img src as we checked while giving instruction

        imgInput.addEventListener("load", () => {
          if (
            windowHight <
            getElementHeight +
              elementPositionTop +
              instructionsModal.offsetHeight // but after img load can not be placed below the elment
          ) {
            instructionsModal.style.top =
              String(
                Number(elementPositionTop + 70 - instructionsModal.offsetHeight)
              ) + "px";
            triangleLeft.style.top = "";
            triangleLeft.style.bottom = "30px";
            triangleLeft.style.right = "100%";
          }
        });
      }
      if (
        windowHight <
        getElementHeight + elementPositionTop + instructionsModal.offsetHeight
      ) {
        instructionsModal.style.top =
          String(
            Number(elementPositionTop + 70 - instructionsModal.offsetHeight)
          ) + "px";
        triangleLeft.style.top = "";
        triangleLeft.style.bottom = "30px";
        triangleLeft.style.right = "100%";
      } else {
        instructionsModal.style.top =
          String(Number(elementPositionTop - 15)) + "px";
      }
      instructionsModal.style.left =
        String(Number(elementPositionLeft + getElement_width) + 20) + "px";
    } else if (
      // widget can not be placed right but can be on left
      windowWidth - (elementPositionLeft + getElement_width) <
        instructionsModalWidth && // widget can not  be placed on the right
      elementPositionLeft - instructionsModalWidth < windowWidth // widget can  be placed on the left
    ) {
      triangleUp.classList.add("hide");
      triangleLeft.classList.add("hide");
      triangleRight.classList.remove("hide");
      triangleDown.classList.add("hide");
      triangleRight.style.top = "25px";
      if (imgInput.style.display === "block") {
        // if there is img src as we checked while giving instruction
        imgInput.addEventListener("load", () => {
          if (
            windowHight <
            getElementHeight +
              elementPositionTop +
              instructionsModal.offsetHeight // but after img load can not be placed below the elment
          ) {
            instructionsModal.style.top =
              String(
                Number(elementPositionTop - instructionsModal.offsetHeight + 70)
              ) + "px";
            triangleRight.style.top = "";
            triangleRight.style.bottom = "30px";
            triangleRight.style.left = "100%";
          }
        });
      }
      if (
        windowHight <
        getElementHeight + elementPositionTop + instructionsModal.offsetHeight
      ) {
        instructionsModal.style.top =
          String(
            Number(elementPositionTop - instructionsModal.offsetHeight + 70)
          ) + "px";
        triangleRight.style.top = "";
        triangleRight.style.bottom = "30px";
        triangleRight.style.right = "100%";
      } else {
        instructionsModal.style.top =
          String(Number(elementPositionTop - 20)) + "px";
      }
      instructionsModal.style.left =
        String(Number(elementPositionLeft - instructionsModalWidth) - 20) +
        "px";
    }
    instructionsModal.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    instructionsModal.style.animation = "slide-up 0.5s ease";
  }, 0);
};
