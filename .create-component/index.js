"use strict";
import path from "path";
import { createComponent } from "./createComponent.js";
import {
  COMPONENT_BASE_DIR,
  logging,
  makeFirstCharCapital,
} from "./helpers/util.js";

// Base :src/components is added before path/to/create
// CLI : node index.js <componentName> <path/to/create>
const BaseArgs = process.argv.slice(3).reduce((acc, item, idx) => {
  // first item is subfolder inside components folder and is not in capital
  if (idx == 0) {
    acc.push(item);
    return acc;
  }
  // Making first char Capital
  acc.push(makeFirstCharCapital(item));
  return acc;
}, []);

const Component = makeFirstCharCapital(process.argv.slice(2)[0]);
const Base = path.join(COMPONENT_BASE_DIR, ...BaseArgs);

(async () => {
  console.log({
    Base,
    BaseArgs,
    Component,
  });
  const created = await createComponent({
    Base,
    BaseArgs,
    Component,
  });
  if (created.done) {
    logging("info", "Finished..");
    return;
  }
  logging("error", "Rolling back all the changes..");
  if ("toDelete" in created) {
    fs.rmSync(created.toDelete, { recursive: true, force: true });
  } else if ("initializedIn" in created) {
    fs.rmSync(created.initializedIn.split("/index.ts")[0], {
      recursive: true,
      force: true,
    });
  }
  console.log({ created });
})();
