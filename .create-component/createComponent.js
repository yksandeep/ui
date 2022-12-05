"use strict";

import { promises as fsPromise } from "fs";
import fse from "fs-extra";
import { join } from "path";
import {
  COMPONENT_BASE_DIR,
  ensureExport,
  logging,
  makeBase,
  makeChangesToNewComponent,
  replaceAllSubstring,
} from "./util.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Base Template for the new component folder
export const origin = join(
  __dirname,
  "../",
  "src",
  "shared",
  "templates",
  "base"
);

// Always Refers to the parent Dir to init Component
let parent = "components";

export function createComponent({ Base, BaseArgs, Component }) {
  return new Promise(async (resolve, reject) => {
    const BaseComponent = join(COMPONENT_BASE_DIR, ...BaseArgs, Component);
    const baseCreated = await makeBase(BaseArgs, parent, COMPONENT_BASE_DIR);
    parent = baseCreated.parent;
    if (baseCreated.done) {
      let parentOfEmptyComponentFolder = Base.split(
        `${COMPONENT_BASE_DIR}/`
      )[1];
      parentOfEmptyComponentFolder = `${COMPONENT_BASE_DIR}/${
        parentOfEmptyComponentFolder.split("/")[0]
      }/index.ts`;
      try {
        // copy Base template
        let copied = fse.copySync(origin, BaseComponent, {
          overwrite: false,
        });
        console.log(copied);
        // Change "BaseTemplate" from the file content of newly created component to its name
        let madeChanges = await makeChangesToNewComponent(Base, Component);
        if (madeChanges) {
          logging("info", "Component Created");
        } else {
          logging("error", "Error while making changes for Component");
        }
        if (BaseArgs.length >= 2) {
          logging(
            "warn",
            `Initialized new Component:${Component} nested inside another Component:${parent} with no content in it`
          );

          const data = await fsPromise.readFile(
            parentOfEmptyComponentFolder,
            "utf8"
          );

          let toReplace = `export * from "./${parent}";`;
          let result = replaceAllSubstring(data, toReplace, "");
          await fsPromise.writeFile(
            parentOfEmptyComponentFolder,
            result,
            "utf8"
          );
          logging(
            "warn",
            `Removing export for the Newly Created parent folder of the component`
          );
          resolve({ done: true });
          return;
        }
        logging("info", `Exporting the component form ${parent} folder`);
        await ensureExport(`${Base}/index.ts`, Component);
        logging("info", `Exporting Done for ${Component} in ${Base}/index.ts`);
        resolve({ done: true });
      } catch (error) {
        logging("error", `Error while trying ${error}`);
        resolve({
          done: false,
          err: `Error while trying ${error}`,
          initializedIn: parentOfEmptyComponentFolder,
        });
      }
    } else {
      const errMsg = "Unable to create Base for the component";
      logging("error", errMsg);
      resolve({
        done: false,
        err: errMsg,
        initializedIn: parentOfEmptyComponentFolder,
      });
    }
  });
}
