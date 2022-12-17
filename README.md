<!--  Trying again to obtain the Pipeline script contents directly from the SCM without performing a full checkout -->

# <b>Create React component library using atomic design pattern</b>

<b>Create React component library using atomic design pattern for your Company with the power of <i>Typescript</i>, <i>Storybook</i> and <i>Github webhooks</i>. and document them with <i>jsDoc</i></b>. all in one place.

By default everthing is exported from `"src" as const`. Change the index.ts file for the exports according to your convenience.

This project uses yalc for testing in other local project and Husky for git commit linting. If you dont want commit liniting you can remove .husky folder and the below mentioned script from `package.json` file or you can configure according to your need, using `commitlint.config.js`

```json

...
"scripts":{
  "prepare": "husky install"
}
...

```

<b>To start Follow the Following steps </b>

### <b>Install yarn</b>

#### Install via npm

```
npm install --global yarn
```

<br/>

### Install yalc globaly

```
yarn global add yalc
```

<br/>

### Install all dependencies

```
yarn install
```

<br/>

### <b>To Add new component run the following cmd and follow the steps</b>

```
yarn run create-component
```

<br/>

<b>ATOMS</b>: Atoms are the smallest possible components, such as buttons, titles, inputs, text. Atoms of our interfaces serve as the foundational building blocks of our components and can’t be broken down any further without ceasing to be functional.

<b>Molecules</b>: Molecules as they are named consist of two or more atoms, molecules are relatively simple groups of UI elements functioning together as a unit. Examples are A Textfield comprising of an HTML textInput, a label, and an error message or a search Box comprising of an HTML TextInput and a Button.

<b>Organisms</b>: Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.

<br/>

### <b>For running storybook</b>

```
yarn run storybbok
```

<br/>

### <b>Run the below CMD to build JSDoc on save changes</b>

```
yarn run watch:jsDoc
```

<br/>

## Docker-compose(slow)

<br/>

For building storybook and jsdoc image we are using storyDockerfile and jsdocDockerfile.

### <b>For storybook and jsDoc documentation</b>

```
docker-compose up
```

<br/>

## Publishing

For Publishing using github webhooks we need NPM Automation token Access Token.

- To Generate NPM Access token.

- Change the name,homepage,author in `package.json`.

- Create a NPM Account and create a access token< Automation > (save the token somewhere for github actions secrets).

- Create a repo on github.

- Push to github.

  You can go to the actions tab inside the repo for git webhooks in action.

- Go to settings of the <i><b>Repo</b></i>.

- Under Security > Secrets click on Action and add a new repo secret `NPM_TOKEN`

Note: To trigger publish githook we need to create a new Release and publish it. As soon as you publish it will start doing all the steps mentioned in `.github/publish.yaml`

<br>

## Note for devlopment(using: <i><b>yalc</b></i>)

When using yalc, Add "postyalc" into package.json.
To avoid module not found (it will not add anything
inside the package.json file if the yalc project
( < my-package > ) has dependencies).

```json
...
  "scripts":{
    ...
    "postyalc": "yarn"
    ...
  }
...

```

To automatically install local pacakage dependencies as yalc
does not out of the box install or run yarn/npm install after
yalc add < my-package >.

When using yalc link in consumer/other project folder it will
not touch package.json file and node_modules folder. You will have
to import the local package installed with yalc from .yalc in the
root_dir. And there will be no effect postyalc script.

<br/>

If you want you can put pre-commit and pre-push actions in their respective files to trigger.

## <b>To Commit to git we have to follow a convention</b>

Note: No need to follow this if not using husky

```
git commit -m '<prefix>: implement commitlint'

Prefix:[
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "translation",
        "security",
        "changeset",
        "patch_version"
      ],

To know more about prefix checkout commitlint.config.js
```
