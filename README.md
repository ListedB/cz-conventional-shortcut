# cz-conventional-shortcut

An adapter for commitizen that follows the
[angular commit standard](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular/convention.md).
Initially forked from [Updater/cz-conventional-clubhouse](https://github.com/listedb/cz-conventional-shortcut) this version provides
additional questions intended to help aid users of  [Shortcut](https://shortcut.com).

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Features

This adapter adds 1 feature to commitizen/cz-conventional-changelog:

* The ability to link the specific commit to a [Shortcut](https://shortcut.com) story via:
  `[SC-<STORYNUMBER>]`

A user only needs to know the story number to link the story. The shortcut.com
specific syntax is added for you. The story number is also pre-populated using when creating your branch with the `<BranchType>/SC-<STORYNUMBER>` naming convetion. Example: `feature/SC-123`

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
