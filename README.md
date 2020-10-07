![WebDevStudios Branding](https://camo.githubusercontent.com/7d12ec7f6ef8149a0d837890409505a76a289b13/68747470733a2f2f77656264657673747564696f732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f30342f7764732d6769746875622d62616e6e65722e706e67)

# `@webdevstudios/stylelint-no-debug`

A [stylelint](https://github.com/stylelint/stylelint) custom rule to catch usage of `@debug` statements.

This rule will cause stylelint to warn you whenever `@debug` is used.

## Installation

```
npm install @webdevstudios/stylelint-no-debug
```

This plugin is compatible with v5.0.1+.

## Details

```css
a { /* Not OK */
   @debug $blue;
   color: $blue;
}

a { /* OK */
   color: $blue;
}
```

## Usage

Add `"@webdevstudios/stylelint-no-debug"` to your stylelint config `plugins` array, then add `@webdevstudios/stylelint-no-debug/no-debug` to your rules, set to `true`.

As follows:

```js
{
  "plugins": [
    "@webdevstudios/stylelint-no-debug"
  ],
  "rules": {
    "no-debug": true
  }
};
```

## Changelog

## 1.0.1

- Improvement to the lint itself, so that it works per-node.
