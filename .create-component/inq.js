"use strict";
import { promises as fsPromise } from "fs";
import fse from "fs-extra";
import inquirer from "inquirer";
import path from "path";

import {
  COMPONENT_BASE_DIR,
  logging,
  makeChangesToNewComponent,
  makeFirstCharCapital,
  mkDirByPathSync,
  origin,
  replaceAllSubstring,
} from "./util.js";

(async () => {
  let propmt = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: "Type of Component ?",
      choices: ["atoms", "molecules", "organism"],
    },
    {
      name: "name",
      message:
        "Name of the Component (Put spaces in between if nested)\n Component:",
    },
  ]);
  console.log({ propmt });
  let Components = makeFirstCharCapital(propmt.name);
  // all the args in list
  let BaseArgs = Components.split(" ");
  // get component folder name
  let Component = Components.split(" ").pop();
  // removing component name
  BaseArgs.length = BaseArgs.length - 1;
  // adding type to BaseArgs
  BaseArgs = [propmt.type, ...BaseArgs];
  // if (BaseArgs.length <= 2) {
  if (true) {
    // making Base to ensure export for the new Component
    let Base = path.join(COMPONENT_BASE_DIR, ...BaseArgs);
    let allFolderPresentInComponentBaseDir = false;
    let dirFiles = await fsPromise.readdir(COMPONENT_BASE_DIR);
    dirFiles.forEach((item, idx) => {
      if (item !== "index.ts") {
        if (["atoms", "molecules", "organism"].includes(item)) {
          allFolderPresentInComponentBaseDir = true;
        } else {
          allFolderPresentInComponentBaseDir = false;
        }
      }
    });
    if (!allFolderPresentInComponentBaseDir) {
      logging(
        "error",
        `Check if folder (atoms,molecules,organism) with index.ts in each folder and in ${COMPONENT_BASE_DIR} is present in ${COMPONENT_BASE_DIR} `
      );
      return;
    }

    let folderToExportFrom = getPathToExportComponent({
      Base,
      COMPONENT_BASE_DIR,
      Component,
    });
    mkDirByPathSync(`${Base}/${Component}`);
    // copy Base template
    let copied = fse.copySync(origin, `${Base}/${Component}`, {
      overwrite: false,
    });
    console.log({ copied });
    // Change "BaseTemplate" from the file content of newly created component to its name
    let madeChanges = await makeChangesToNewComponent(Base, Component);
    if (madeChanges) {
      logging("info", "Component Created");
    } else {
      logging("error", "Error while making changes for Component");
    }
    logging("info", "Preparing Index to export component");
    let indexExported = folderToExportFrom.exportsFrom.map(
      async (item, idx) => {
        let indexPrepared = await prepareIndex(item);
        return indexPrepared;
        // console.log(existsSync(item.indexPath), item, indexPath);
      }
    );
    Promise.all(indexExported).then((values) => {
      console.log({ values });
    });
    logging("info", "Done : Preparing Index to export component");

    logging(
      `info`,
      `Preparing src/components index to export ${propmt.type} if not already done`
    );

    let newExport = `export * from "./${propmt.type}"\n`;
    let result = newExport;
    const data = await fsPromise.readFile(
      COMPONENT_BASE_DIR + "/" + "index.ts",
      "utf8"
    );
    result = replaceAllSubstring(data, newExport, "") + newExport;
    try {
      await fsPromise.writeFile(
        COMPONENT_BASE_DIR + "/" + "index.ts",
        result,
        "utf8"
      );
    } catch (error) {
      console.error(error);
    }

    // ensure exports of each folder in BaseArgs

    // else{
    //   const created = await createComponent({
    //     Base,
    //     BaseArgs,
    //     Component,
    //   });
    //   if (created.done) {
    //     logging("info", "Finished..");
    //     return;
    //   }
    //   // logging("error", "Rolling back all the changes..");
    //   // if ("toDelete" in created) {
    //   //   fs.rmSync(created.toDelete, { recursive: true, force: true });
    //   // } else if ("initializedIn" in created) {
    //   //   fs.rmSync(created.initializedIn.split("/index.ts")[0], {
    //   //     recursive: true,
    //   //     force: true,
    //   //   });
    //   // }
    //   console.log({ created });
    //   return;
    // }
  }
  // console.log("Making Nested Component is Only allowed for ");
})();

function getPathToExportComponent({ Base, COMPONENT_BASE_DIR, Component }) {
  let getListOfFolders = Base.replace(`${COMPONENT_BASE_DIR}/`, "").split("/");
  let toAddExportfrom = getListOfFolders.reduce(
    (acc, item, idx) => {
      if (idx === 0) {
        // if idx===0 add Base to make valid and correct filePath for the Component
        acc.prev = path.join(
          COMPONENT_BASE_DIR,
          acc.prev ? acc.prev : "",
          item
        );
      } else {
        acc.prev = path.join(acc.prev ? acc.prev : "", item);
      }
      let indexPath = path.join(acc.prev, "index.ts");
      let exportFrom =
        getListOfFolders[
          idx + 1 > getListOfFolders.length ? undefined : idx + 1
        ];
      exportFrom = exportFrom !== undefined ? exportFrom : Component;
      let toExport = `export * from "./${exportFrom}"\n`;
      let toAdd = {
        indexPath,
        toExport,
      };
      acc.exportsFrom.push(toAdd);
      return acc;
    },
    { prev: "", exportsFrom: [] }
  );
  return toAddExportfrom;
}

// With async/await:
export async function createIndexFile(f) {
  try {
    await fse.ensureFile(f);
    logging("info", "success!");
    return { created: true };
  } catch (err) {
    logging("error", err);
    return { created: false };
  }
}

export async function prepareIndex({ indexPath, toExport }) {
  // return new Promise(async (resolve, reject) => {
  let indexFile = await createIndexFile(indexPath);
  if (indexFile.created) {
    let newExport = toExport;
    let result = newExport;
    const data = await fsPromise.readFile(indexPath, "utf8");
    result = replaceAllSubstring(data, newExport, "") + newExport;
    try {
      await fsPromise.writeFile(indexPath, result, "utf8");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  // });
}
