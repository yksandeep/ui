## <b>React Component Library</b>

<br/>

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

docker is required to perform next step

### <b>For storybook and jsDoc documentation</b>

```
docker-compose up
```

<br/>

### <b>Run the below CMD to build JSDoc on save changes</b>

```
yarn run watch:jsDoc
```

<br/>

### <b>To test your Component in the playground</b>

```
yarn run storybook
```

<br/>

### <b>To Add new component in this run cmd and follow the steps</b>

```
yarn run create-component
```

<br/>

#### Note for devlopment(using: <i><b>yalc</b></i>)

When using yalc, Add "postyalc" into package.json.
To avoid module not found (it will not add anything
inside the package.json file if the yalc project
( < my-package > ) has dependencies)

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
yalc add < my-package >

When using yalc link in consumer/other project folder it will
not touch package.json file and node_modules folder. You will have
to import the local package installed with yalc from .yalc in the
root_dir. And there will be no effect postyalc script

<br/>

<b>Husky is used for git commitlint</b>

If you want you can put pre-commit and pre-push actions in their respective files to trigger.

### <b>To Commit to git we have to follow a convention</b>

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
      ],

To know more about prefix checkout commitlint.config.js
```

WORKING ON README file
