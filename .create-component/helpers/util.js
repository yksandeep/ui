import fs, { existsSync, mkdir, promises as fsPromise } from "fs";
import fse from "fs-extra";
import path, { join } from "path";
import { fileURLToPath } from "url";
import { logger } from "./loger.js";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const COMPONENT_BASE_DIR = join(__dirname, "../", "src", "components");
const DEFAULT_STORIES_TITLE = "Shared/Templates/Base";
const DEFAULT_CONST = "BaseTemplate";

// Base Template for the new component folder
export const origin = join(
  __dirname,
  "../",
  "src",
  "shared",
  "templates",
  "base"
);

export function replaceAllSubstring(str, find, replace) {
  return str.replaceAll(find, replace);
}

export function makeChangesToNewComponent(Base, Component) {
  return new Promise(async (resolve, reject) => {
    try {
      let dirFiles = await fsPromise.readdir(join(Base, Component));
      if (dirFiles) {
        dirFiles.forEach(async (item, idx) => {
          const data = await fsPromise.readFile(
            join(Base, Component, item),
            "utf8"
          );
          let result = replaceAllSubstring(data, DEFAULT_CONST, Component);
          let storiesTitle_ = Base.split(`${COMPONENT_BASE_DIR}/`)[1];
          storiesTitle_ = makeFirstCharCapital(storiesTitle_);
          console.log({ result, DEFAULT_CONST, storiesTitle_ });
          if (item.includes("stories.tsx")) {
            result = replaceAllSubstring(
              result,
              DEFAULT_STORIES_TITLE,
              `Components/${storiesTitle_}/${Component}`
            );
          }
          await fsPromise.writeFile(
            join(Base, Component, item),
            result,
            "utf8"
          );
          resolve(true);
        });
      }
    } catch (err) {
      reject(false);
    }
  });
}

export function createFolder(path, mask, cb) {
  return new Promise((resolve, reject) => {
    if (typeof mask == "function") {
      // Allow the `mask` parameter to be optional
      cb = mask;
      mask = 0o744;
    }
    mkdir(path, mask, function (err) {
      if (err) {
        if (err.code == "EEXIST")
          resolve(cb({ message: "Alread exist", created: false }));
        // Ignore the error if the folder already exists
        else resolve(cb({ err, created: false })); // Something else went wrong
      } else resolve(cb({ message: "Created Folder", created: true })); // Successfully created folder
    });
  });
}

function writeExportsCallback(err, filePath) {
  if (err !== undefined) {
    let errMsg = `error while appending export in ${filePath}`;
    logging("info", errMsg);
    logging("info", err.toString());
    // throw err.toString();
  }
  logging("info", `Export Succes! ${filePath}`);
}

export function ensureExport(parentIndexTS, createdDir) {
  logging("warn", JSON.stringify({ parentIndexTS, createdDir }));
  return new Promise(async (resolve, reject) => {
    try {
      let newExport = `export * from "./${createdDir}";\n`;
      let result = newExport;

      try {
        await fsPromise.writeFile(parentIndexTS, result, "utf8");
        resolve(writeExportsCallback(undefined, parentIndexTS));
      } catch (error) {
        resolve(writeExportsCallback(error, parentIndexTS));
        // throw error;
      }
    } catch (error) {
      resolve(writeExportsCallback(error, parentIndexTS));
      // throw error;
    }
  });
}
export function ensureExportV2(parentIndexTS, toExport) {
  console.log(`appending ${toExport} in ${parentIndexTS}`);
  return new Promise(async (resolve, reject) => {
    try {
      let newExport = toExport;
      let result = newExport;
      try {
        let ensured = await fse.ensureFile(parentIndexTS);
        console.log(ensured);
        const data = await fsPromise.readFile(parentIndexTS, "utf8");
        result = replaceAllSubstring(data, newExport, "") + newExport;
      } catch (err) {
        console.log({ err });
        logging("error", err);
      }

      try {
        await fsPromise.writeFile(parentIndexTS, result, "utf8");
        resolve(writeExportsCallback(undefined, parentIndexTS));
      } catch (error) {
        resolve(writeExportsCallback(error, parentIndexTS));
      }
    } catch (error) {
      resolve(writeExportsCallback(error, parentIndexTS));
    }
  });
}

export function makeFirstCharCapital(item) {
  let text = item.split(" ");
  // Making first char Capital
  for (let i = 0; i < text.length; i++) {
    text[i] = text[i][0].toUpperCase() + text[i].substr(1);
  }
  text = text.join(" ");
  return text;
}

export function makeBase(args, parent, currentBase) {
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < args.length; i++) {
      parent = args[i];
      let prevBase = JSON.parse(JSON.stringify(currentBase));
      currentBase = join(currentBase, args[i]);
      let parentNotExist = !existsSync(currentBase);
      if (parentNotExist) {
        // item on index 0 is the type of component
        logging(
          "info",
          `${parent} not exist, creating ${parent} before continuing`
        );
        let { err, created } = await createFolder(
          currentBase,
          ({ err, message, created }) => {
            return { err, message, created };
          }
        );

        if (err) {
          logging(
            "error",
            `Error while creating folder ${currentBase} ${err.toString()}`
          );
          resolve({ done: false, err, toDelete: currentBase });
          return;
          // throw err;
        } // Handle folder creation error
        else {
          if (created) {
            console.log("created bro", `${prevBase}/index.ts`, args[i]);
            await ensureExport(`${prevBase}/index.ts`, args[i]);
            let parentIndexNotExist = !existsSync(`${prevBase}/index.ts`);
            console.log({ parentIndexNotExist });
          }
          // if (i === 0) {
          //   console.log({ currentBase });
          //   await ensureExport(`${currentBase}/index.ts`, args[i]);
          //   console.l;
          // }
        }

        logging("info", "continue....");
      } else {
        logging(
          "info",
          `${parent} already exists, No need to create new ${parent}.`
        );
        logging("info", "continue....");
      }
      if (args.length - 1 === i) {
        resolve({ done: true, parent });
      }
    }
  });
}

export function logging(level, msg) {
  logger.log({
    level: level,
    message: msg,
  });
}

export function mkDirByPathSync(
  targetDir,
  { isRelativeToScript = false } = {}
) {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : "";
  const baseDir = isRelativeToScript ? __dirname : ".";

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code === "EEXIST") {
        // curDir already exists!
        return curDir;
      }

      // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      if (err.code === "ENOENT") {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
      }

      const caughtErr = ["EACCES", "EPERM", "EISDIR"].indexOf(err.code) > -1;
      if (!caughtErr || (caughtErr && curDir === path.resolve(targetDir))) {
        throw err; // Throw if it's just the last created dir.
      }
    }

    return curDir;
  }, initDir);
}

export default {
  createFolder,
  makeBase,
  makeFirstCharCapital,
  ensureExport,
  makeChangesToNewComponent,
  logging,
  COMPONENT_BASE_DIR,
  replaceAllSubstring,
  mkDirByPathSync,
};
