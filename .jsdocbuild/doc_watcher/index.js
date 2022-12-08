//requiring path and fs modules
const path = require("path");
const fs = require("fs");
const hound = require("hound");
const { exec } = require("child_process");

//joining path of directory
const directoryPath = path.join(__dirname, "../", "../", "src");

// Create a directory tree watcher.
const watcher = hound.watch(directoryPath);
console.log("Watcher initialized...");

// Add callbacks for file and directory events.  The change event only applies
// to files.

const CREATE = "create";
const CHANGE = "change";
const DELETE = "delete";

const onChange = (file, stats, type) => {
  console.log(`File ${type} in ${file} : \n Running CMD: yarn run build:doc`);
  exec(`yarn run build:doc`, (error, stdout, stderr) => {
    console.log(" ---------- Building jsDoc ---------- \n", stdout);
    console.log(" ---------- Building END --------");
    console.log("Watcher watching for file changes .....");
    if (error !== null) {
      console.log(
        " ---------- Error while building jsDoc ---------- \n",
        stderr
      );
      console.log(`exec error:\n ${error}`);
      console.log(" ---------- Error END ---------- \n", stderr);
    }
  });
};

const delay = 500; // anti-rebound for 500ms
let lastExecution = 0;

// if (lastExecution + delay < Date.now()) {
//   // execute my lines
//   console.log(CREATE);
//   // onChange(file, stats, CREATE);
//   lastExecution = Date.now();
// }

watcher.on(CREATE, function (file, stats) {
  if (lastExecution + delay < Date.now()) {
    // execute my lines
    console.log(CREATE);
    onChange(file, stats, CREATE);
    lastExecution = Date.now();
  }
});
console.log(`Watcher on ${CREATE} mounted`);

watcher.on(CHANGE, function (file, stats) {
  if (lastExecution + delay < Date.now()) {
    // execute my lines
    console.log(CHANGE);
    onChange(file, stats, CHANGE);
    lastExecution = Date.now();
  }
});
console.log(`Watcher on ${CHANGE} mounted`);

watcher.on(DELETE, function (file) {
  if (lastExecution + delay < Date.now()) {
    // execute my lines
    console.log(DELETE);
    onChange(file, stats, DELETE);
    lastExecution = Date.now();
  }
});
console.log(`Watcher on ${DELETE} mounted`);
console.log("Watcher watching for file changes .....");

// // Unwatch all watched files and directories.
// watcher.clear()
