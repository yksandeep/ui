import { useCallback, useEffect, useRef } from "react";

interface IInstructionItemExample {
  placeholder?: string;
  text?: string;
  imageUrl?: string;
  audioUrl?: string;
}
interface IPrepareWizard {
  example: IInstructionItemExample;
  forElement: string;
  typeWriterSpeed?: number;
}
interface IPlaceWizard {
  nextToId: string;
}

export interface IInstructionItem {
  id: number;
  title: string;
  elementId: string;
  example?: IInstructionItemExample;
}

export interface IInstructions {
  title: string;
  instruction: IInstructionItem[];
}

export interface IuseHelperWizard {
  autoplay?: boolean;
  interval?: number;
  navigation?: boolean;
}

export const useHelperWizard = ({ ...props }: IuseHelperWizard) => {
  const helperRef = useRef<HTMLDivElement>(null);
  const instructions = useRef<IInstructions>();
  const navigation = useRef<boolean | undefined>(props.navigation || true);
  const timeout = useRef(props.interval || 5000);
  const step = useRef(0);
  const autoplay = useRef(props.autoplay || false);
  const text = useRef("");
  // const [text,setText] = useState("")
  const closed = useRef(false);
  const takeInput = useRef(false);

  const afterResize = () => {
    if (instructions.current) {
      placeWizard({
        nextToId: instructions.current.instruction[step.current].elementId,
      });
    }
  };

  const prepareWizard = useCallback(
    ({ example, forElement, typeWriterSpeed = 100 }: IPrepareWizard) => {
      const wizardBody: HTMLParagraphElement | null = document.querySelector(
        ".instructionTextExample"
      );
      const wizardBodyImage: HTMLImageElement | null =
        document.querySelector(".instructionImg");
      const wizardBodyAudio: HTMLAudioElement | null = document.querySelector(
        ".instructionAudioExample"
      );
      if (wizardBody && example.text) {
        wizardBody.style.display = "block";
        wizardBody.innerHTML = example.text;
      } else if (wizardBody && !example.text) {
        wizardBody.innerHTML = "";
        wizardBody.style.display = "none";
      }
      // plcaeholder typewriter
      let atChar = 0;
      function typeWriter(id: string) {
        if (example.placeholder) {
          if (atChar < example.placeholder.length) {
            const holder = document.querySelector(id) as HTMLInputElement;
            holder.placeholder += example.placeholder.charAt(atChar);
            atChar++;
            setTimeout(typeWriter, typeWriterSpeed);
          }
        }
      }
      function setImage() {
        if (wizardBodyImage && example.imageUrl) {
          wizardBodyImage.src = "";
          wizardBodyImage.src = example.imageUrl;
        }
      }
      function setAudio() {
        if (wizardBodyAudio && example.audioUrl) {
          wizardBodyAudio.src = "";
          wizardBodyAudio.src = example.audioUrl;
          wizardBodyAudio.addEventListener("ended", function () {
            setTimeout(() => {
              const nextBtn = document.getElementById(
                "nextStep"
              ) as HTMLButtonElement;
              nextBtn.click();
            }, 1500);
          });
        }
      }
      if (example.placeholder) {
        typeWriter(forElement);
      }
      if (wizardBodyImage && example.imageUrl) {
        wizardBodyImage.style.display = "block";
        setImage();
      } else if (wizardBodyImage && !example.imageUrl) {
        wizardBodyImage.style.display = "none";
      }
      if (example.audioUrl) {
        setAudio();
      }
    },
    []
  );

  useEffect(() => {
    navigation.current = props.navigation;
  }, [props.navigation]);

  useEffect(() => {
    const wizardBodyImage: HTMLImageElement | null =
      document.querySelector(".instructionImg");
    const afterLoadingImage = () => {
      // console.log("After Image loaded");
      if (instructions.current) {
        placeWizard({
          nextToId: instructions.current.instruction[step.current].elementId,
        });
      }
    };
    if (wizardBodyImage) {
      wizardBodyImage.addEventListener("load", afterLoadingImage);
    }

    return () => {
      if (wizardBodyImage) {
        wizardBodyImage.removeEventListener("load", afterLoadingImage);
      }
      window.removeEventListener("resize", afterResize);
    };
  }, []);

  const setUp = (
    instructionStep,
    takeInput: boolean,
    getElement: HTMLInputElement
  ) => {
    if (!instructions.current) return;
    const imgInput: HTMLImageElement | null =
      document.querySelector(".instructionImg");
    const elemId = instructionStep.elementId;
    const theNxtBtnElem: HTMLButtonElement | null =
      document.querySelector("#nextStep");
    for (let j = 0; j < instructionStep.length; j++) {
      const elemid = instructionStep[j].elementId;
      const theElem = document.querySelector(elemid) as HTMLInputElement;
      if (theElem) {
        theElem.placeholder = "";
      } else {
        if (theNxtBtnElem) {
          theNxtBtnElem.click();
        }
      }
    }
    if (
      (takeInput == true && getElement.tagName === "INPUT") ||
      getElement.tagName === "TEXTAREA" ||
      getElement.tagName === "SELECT"
    ) {
      getElement.focus();
      getElement.setAttribute("autocomplete", "on");
    }
    text.current = instructionStep.title;
    const instructionText = document.querySelector(
      ".instructionText"
    ) as HTMLParagraphElement;
    const instructionCurrentStep = document.querySelector(".currentStep");
    const instructionTotalSteps = document.querySelector(".totalSteps");
    if (instructionText && instructionCurrentStep && instructionTotalSteps) {
      instructionText.innerHTML = instructionStep.title;
      instructionCurrentStep.innerHTML = `${step.current + 1}`;
      instructionTotalSteps.innerHTML = String(
        instructions.current.instruction.length
      );
    }
    const example = instructionStep.example;

    getElement.placeholder = "";

    const getEleToSetAudioSrc: HTMLAudioElement | null = document.querySelector(
      ".instructionAudioExample"
    );
    if (imgInput) {
      imgInput.src = "";
    }
    if (getEleToSetAudioSrc) {
      getEleToSetAudioSrc.src = "";
    }
    if (theNxtBtnElem) {
      if (instructions.current.instruction.length - 1 == step.current) {
        theNxtBtnElem.innerHTML = "Got it";
      } else {
        theNxtBtnElem.innerHTML = "Next";
      }
    }
    prepareWizard({ example, forElement: elemId });
    placeWizard({ nextToId: elemId });
    // moveWidget(elemId, helperRef.current);
  };

  const checkPositionToPlace = (nextToId: HTMLElement) => {
    return new Promise<{ indicator: { [key: string]: string } }>(
      (resolve, reject) => {
        const nextTo: HTMLElement = nextToId;
        if (!nextTo || !helperRef.current) {
          reject("!nextTo and !helperRef.current");
          return;
        }

        if (!helperRef.current) return;

        function getOffset(el: any): { x: number; y: number } {
          let _x = 0;
          let _y = 0;
          while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
          }
          return { y: _y, x: _x };
        }

        const { width, height } = nextTo.getBoundingClientRect();
        const { x, y } = getOffset(nextTo);
        const toReturn = {
          indicator: {},
        };
        // const bodyHeight = document.body.clientHeight;
        const bodyWidth = document.body.clientWidth;

        if (x - helperRef.current.offsetWidth - 16 > 0) {
          // Enough space to the left
          toReturn["top"] = `${y}px`;
          toReturn["left"] = `${x - helperRef.current.offsetWidth - 16}px`;
          toReturn["indicator"]["top"] = `${height / 2}px`;
          toReturn["indicator"]["left"] = `${
            helperRef.current.offsetWidth - 32
          }px`;
          toReturn["POS"] = "LEFT";
        } else if (x + width + helperRef.current.offsetWidth + 16 < bodyWidth) {
          // Enough space to the right
          toReturn["top"] = `${y}px`;
          toReturn["left"] = `${x + width + 16}px`;
          toReturn["indicator"]["top"] = `${height / 2}px`;
          toReturn["indicator"]["right"] = `${
            helperRef.current.offsetWidth - 32
          }px`;
          toReturn["POS"] = "RIGHT";
        } else if (y - helperRef.current.offsetHeight - 16 > 0) {
          // Enough space at the top
          toReturn["top"] = `${y - helperRef.current.offsetHeight - 16}px`;
          if (x + helperRef.current.offsetWidth > bodyWidth) {
            toReturn["left"] = `${
              x - (helperRef.current.offsetWidth - width) + 8
            }px`;
            toReturn["indicator"]["bottom"] = "-8px";
            toReturn["indicator"]["left"] = `${
              helperRef.current.offsetWidth - 32
            }px`;
          } else {
            toReturn["left"] = `${x - 8}px`;
            toReturn["indicator"]["bottom"] = "-8px";
            toReturn["indicator"]["left"] = "8px";
          }
          toReturn["POS"] = "TOP";
        } else {
          // No space available, place it at the bottom (default)
          toReturn["top"] =
            String(Number(y - helperRef.current.offsetHeight - 16)) + "px";
          if (x + helperRef.current.offsetWidth > bodyWidth) {
            toReturn["left"] = String(
              Number(x - (helperRef.current.offsetWidth - width) + 8) + "px"
            );
            toReturn["indicator"]["bottom"] = String(0 - 8) + "px";
            toReturn["indicator"]["left"] =
              String(Number(helperRef.current.offsetWidth - 32)) + "px";
          } else {
            toReturn["left"] = String(Number(x - 8)) + "px";
            toReturn["indicator"]["bottom"] = String(0 - 8) + "px";
            toReturn["indicator"]["left"] = String(Number(8)) + "px";
          }
          toReturn["POS"] = "BOTTOM";
        }

        resolve(toReturn);
      }
    );
  };

  const placeWizard = async ({ nextToId = "" }: IPlaceWizard) => {
    if (!helperRef.current || !instructions.current) return;
    const nextTo: HTMLElement | null = document.querySelector(
      instructions.current.instruction[step.current].elementId
    );
    if (nextTo) {
      const res = await checkPositionToPlace(nextTo);
      const triangleDown = document.querySelector(
        ".triangle-down"
      ) as HTMLElement;
      const triangleUp = document.querySelector(".triangle-up") as HTMLElement;
      const triangleLeft = document.querySelector(
        ".triangle-left"
      ) as HTMLElement;
      const triangleRight = document.querySelector(
        ".triangle-right"
      ) as HTMLElement;
      // triangleUp.classList.add("hide");
      // triangleLeft.classList.add("hide");
      // triangleDown.classList.add("hide");
      // triangleRight.classList.add("hide");

      Object.keys(res).map((key) => {
        if (key !== "indicator" && key !== "POS") {
          if (helperRef.current) {
            helperRef.current.style[key] = res[key];
          }
        }
      });
      Object.keys(res.indicator).map((indicatorKey) => {
        console.log({ res: res["POS"] });
        if (res["POS"] == "BOTTOM") {
          triangleUp.classList.add("hide");
          triangleLeft.classList.add("hide");
          triangleRight.classList.add("hide");
          triangleDown.classList.remove("hide");
          if (indicatorKey == "top") {
            triangleDown.style.bottom = res.indicator["bottom"];
          } else {
            triangleDown.style[indicatorKey] = res.indicator[indicatorKey];
          }
        } else if (res["POS"] == "TOP") {
          triangleLeft.classList.add("hide");
          triangleDown.classList.add("hide");
          triangleRight.classList.add("hide");
          triangleUp.classList.remove("hide");
          triangleUp.style[indicatorKey] = res.indicator[indicatorKey];
        } else if (res["POS"] === "LEFT") {
          triangleUp.classList.add("hide");
          triangleDown.classList.add("hide");
          triangleRight.classList.remove("hide");
          triangleLeft.classList.add("hide");
          triangleDown.style[indicatorKey] = res.indicator[indicatorKey];
        } else if (res["POS"] === "RIGHT") {
          triangleUp.classList.add("hide");
          triangleDown.classList.add("hide");
          triangleRight.classList.add("hide");
          triangleLeft.classList.remove("hide");
          triangleDown.style[indicatorKey] = res.indicator[indicatorKey];
        }
      });
      // if (res["POS"] === "TOP") {
      //   triangleDown.classList.add("hide");
      //   triangleUp.classList.remove("hide");
      //   Object.keys(res.indicator).map((indicatorKey) => {
      //     triangleUp.style[indicatorKey] = res.indicator[indicatorKey];
      //   });
      // } else if (res["POS"] === "BOTTOM") {
      //   triangleDown.classList.remove("hide");
      //   triangleUp.classList.add("hide");
      //   Object.keys(res.indicator).map((indicatorKey) => {
      //     if (indicatorKey === "top") {
      //       triangleDown.style.bottom = res.indicator["bottom"];
      //     } else {
      //       triangleDown.style[indicatorKey] = res.indicator[indicatorKey];
      //     }
      //   });
      // } else if (res["POS"] === "LEFT") {
      // triangleRight.classList.add("hide");
      // triangleLeft.classList.remove("hide");
      //   Object.keys(res.indicator).map((indicatorKey) => {
      //     triangleLeft.style[indicatorKey] = res.indicator[indicatorKey];
      //   });
      // } else if (res["POS"] === "RIGHT") {
      //   triangleRight.classList.remove("hide");
      //   triangleLeft.classList.add("hide");
      //   Object.keys(res.indicator).map((indicatorKey) => {
      //     if (indicatorKey === "left") {
      //       triangleRight.style.right = res.indicator["right"];
      //     } else {
      //       triangleRight.style[indicatorKey] = res.indicator[indicatorKey];
      //     }
      //   });
      // }
      nextTo.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      window.addEventListener("resize", afterResize);
    } else {
      console.log("Unable to find the element to be placed to next");
      // Unable to find the element to be placed to next
      // TODO
    }
  };

  // for closing the instruction window
  const handelClose = useCallback(() => {
    if (!instructions.current) return;
    // for (var j = 0; j < instructions.current.instruction.length; j++) {
    //     var eleid = instructions.current.instruction[j].elementId;
    //     var elem = document.getElementById(eleid)  as HTMLInputElement;
    //     if (elem != null) {
    //         elem.placeholder = "";
    //     }
    // }
    if (helperRef.current) {
      helperRef.current.style.display = "none";
      closed.current = true;
      document
        .getElementById("closeInstWindow")
        ?.removeEventListener("click", handelClose);
      document
        .getElementById("backStep")
        ?.removeEventListener("click", handelBack);
      document
        .getElementById("nextStep")
        ?.removeEventListener("click", handelNext);
    }
  }, []);

  const handelBack = () => {
    if (!instructions.current) return;
    if (closed.current) return;

    // decrease a step
    // checking if the step is not less then 0 (the first instruction )
    if (step.current - 1 >= 0) {
      step.current = step.current - 1;
      const instructionStep = instructions.current.instruction[step.current];
      const getElement = document.querySelector(
        instructionStep.elementId
      ) as HTMLInputElement;
      if (getElement == null) {
        document.getElementById("backStep")?.click();
      } else {
        setUp(instructionStep, takeInput.current, getElement);
      }
    }
  };

  const handelNext = () => {
    if (!instructions.current) return;
    if (closed.current) return;
    // checking if it is not 0 or less
    if (step.current > 0) {
      // checking if it is the last
      if (
        step.current >= instructions.current.instruction.length - 1 &&
        helperRef.current
      ) {
        // helperRef.current?.parentNode?.removeChild(helperRef.current);
        helperRef.current.style.display = "none";
      } else {
        step.current = step.current + 1;
        const instructionStep = instructions.current.instruction[step.current];
        const getElement = document.querySelector(
          instructionStep.elementId
        ) as HTMLInputElement;
        // if the element is nowhere to be found
        if (getElement == null) {
          document.getElementById("nextStep")?.click();
        } else {
          setUp(instructionStep, takeInput.current, getElement);
        }
      }
    } else {
      step.current = step.current + 1;
      if (
        step.current >= instructions.current.instruction.length &&
        helperRef.current
      ) {
        // if there is no step
        helperRef.current.style.display = "none";

        // helperRef.current?.parentNode?.removeChild(helperRef.current);
      } else {
        const instructionStep = instructions.current.instruction[step.current];
        if (!instructionStep && helperRef.current) {
          helperRef.current.style.display = "none";
        } else {
          const getElement = document.querySelector(
            instructionStep.elementId
          ) as HTMLInputElement;
          if (getElement == null) {
            document.getElementById("nextStep")?.click();
          } else {
            setUp(instructionStep, takeInput.current, getElement);
          }
        }
      }
    }
  };

  // remove eventListeners while unmounting
  useEffect(() => {
    return () => {
      document
        .getElementById("closeInstWindow")
        ?.removeEventListener("click", handelClose);
      document
        .getElementById("backStep")
        ?.removeEventListener("click", handelBack);
      document
        .getElementById("nextStep")
        ?.removeEventListener("click", handelNext);
    };
  }, []);

  const play = (instruct: IInstructions) => {
    instructions.current = instruct;
    step.current = 0;
    closed.current = false;
    document
      .getElementById("closeInstWindow")
      ?.addEventListener("click", handelClose);
    document.getElementById("backStep")?.addEventListener("click", handelBack);
    document.getElementById("nextStep")?.addEventListener("click", handelNext);
    if (!helperRef.current) {
      //   console.error("Model ref not provided");
      return;
    }
    if (!instructions.current) {
      //   console.error("instructions not provided");
      return;
    }
    helperRef.current.style.display = "grid";
    // checking if the user want navigation
    const helperNav: HTMLElement | null =
      document.querySelector(".wiz-navigation");
    const instructionImg: HTMLElement | null =
      document.querySelector(".instructionImg");
    const instructionTextExample: HTMLElement | null = document.querySelector(
      ".instructionTextExample"
    );
    if (navigation.current) {
      if (helperNav) {
        helperNav.style.display = "flex";
      }
    } else {
      if (helperNav) {
        helperNav.style.display = "none";
        if (instructionImg) {
          instructionImg.style.marginBottom = "1.5rem";
        }
        if (instructionTextExample) {
          instructionTextExample.style.marginBottom = "1.5rem";
        }
      }
    }
    //checking if user want autoplay and gave timeOut
    if (autoplay.current && timeout.current != undefined) {
      let k = 0;
      const audioPlace = document.querySelectorAll(".instructionAudioExample");
      if (audioPlace.length != 0) {
        let a = audioPlace.length;
        while (a--) {
          audioPlace[a].removeEventListener("ended", () => {});
        }
      }
      function autoplay(timeout: number) {
        k++;
        setTimeout(() => {
          const next = document.getElementById("nextStep");
          if (next) {
            next.click();
          }
        }, timeout * k);
      }
      for (let l = 0; l < instructions.current.instruction.length; l++) {
        if (l < instructions.current.instruction.length) {
          autoplay(timeout.current);
        }
      }
    } else {
      //   console.error({ autoplay: autoplay.current, timeout: timeout.current });
      // return
    }
    const elementId = instructions.current.instruction[step.current].elementId;
    const getElement = document.querySelector(elementId) as HTMLInputElement;
    const li = instructions.current.instruction;
    setUp(li[step.current], takeInput.current, getElement);
  };

  return {
    play,
    handelBack,
    handelClose,
    handelNext,
    helperRef,
  };
};

export default useHelperWizard;
