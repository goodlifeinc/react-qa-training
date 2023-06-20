# Running React in local env

## Table of contents

- [Prerequisites](#prerequisites)
  - [Visual Studio Code](#visual-studio-code)
  - [Node Version Manager](#node-version-manager)

## Prerequisites

There is some software needed to run React application.
The file editor of choice is the hackable vscode.
Node executable to run the application.

### Visual Studio Code

[Download from here](https://code.visualstudio.com/download)

- VS Code has
  - integrated terminal (Ctrl + J)
  - file explorer (Ctrl + B)
  - command pallette (F1)
  - many more commands and shortcuts described [@here](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)

There are hacky things you can do.

Themes, plugins.

### Node Version Manager

We use nvm(node version manager) to easily manage NodeJS versions on our PC

[Download from here](https://github.com/coreybutler/nvm-windows/releases)

Pick the latest release and `nvm-setup.exe`. Mine version is 1.1.9.

Download and install with next > next > next.

[NodeJS versions](https://nodejs.org/en)

Notable commands:

- `nvm list`
- `nvm install {nodejs version}` - `nvm install 18.16.0`
- `nvm use 18.16.0`

Verify nodejs and npm version by:

- `node -v`
- `npm -v`

===========

dom, shadow dom

functional components

components dom

https://vitejs.dev/guide/

vite new app

play around

build assets

there are so called "bundlers".
React is not something that is "static".
It cannot run if its not built - webpack, rollup, vite etc.

static bundled resources are used on our pages.

react dev tools / observe react dom

add router

==========

extract css into Css

--- show need of redux and global state ---
https://redux.js.org/tutorials/essentials/part-1-overview-concepts

https://blog.logrocket.com/understanding-redux-tutorial-examples/

https://redux.js.org/tutorials/quick-start

redux dev tools

=========

storybook

vitest

==========

add react hook form

show validation options

https://vitest.dev/guide/

https://github.com/vitest-dev/vitest/blob/main/examples/react/package.json
