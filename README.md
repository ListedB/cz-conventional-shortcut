# cz-conventional-shortcut

An adapter for commitizen that follows the
[angular commit standard](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular/convention.md).
Initially forked from [Updater/cz-conventional-clubhouse](https://github.com/Updater/cz-conventional-clubhouse) this version provides
additional questions intended to help aid users of shortcut.com.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Features

This adapter adds 2 features to commitizen/cz-conventional-changelog:

* The ability to link the branch the commit is on to a shortcut.com story via:
  `[branch sc<STORYNUMBER>]`
* The ability to likk the specific commit to a shortcut.com story via:
  `[sc<STORYNUMBER>]`

Both of these are questions asked after the commit information has been added. A
user only needs to know the story number to link the story. The shortcut.com
specific syntax is added for you. Multiple stories can be added by comma
seperating the response.

## Usage

Use as any commitizen adapter by setting `path` in your `package.json`
commitizen config:

```json
"config": {
  "commitizen": {
    "path": "cz-conventional-shortcut"
  }
}
```
