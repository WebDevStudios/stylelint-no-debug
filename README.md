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
