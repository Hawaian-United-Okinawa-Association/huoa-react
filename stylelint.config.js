// Transform from PascalCase to kebab-case
const pascalToKebabCase = str => str.replace(/\.?([A-Z])/g, (char) =>  "-" + char.toLowerCase()).replace(/^-/, "");
// Given a component name in PascalCase, returns a regex. The regex
// must match CSS selectors conforming to the BEM naming conventions
// you want to enforce.
const customBemSelector = component => {
  const block = pascalToKebabCase(component);
  const kebabCase = "[a-z][a-zA-Z0-9]*";
  const element = `(?:--${kebabCase})?`;
  const modifier = `(?:__${kebabCase})?`;
  const attribute = "(?:\\[.+\\])?";
  return new RegExp(`^\\.${block}${element}${modifier}${attribute}$`);
};

module.exports = {
  extends: ["stylelint-config-idiomatic-order"],
  plugins: ["stylelint-order", "stylelint-selector-bem-pattern"],
  rules: {
    "plugin/selector-bem-pattern": {
      implicitComponents: true,
      preset: "bem",
      componentSelectors: {
        initial: customBemSelector
      }
    },
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [ "always", {
      "ignore": ["stylelint-commands", "after-comment"]
    } ],
    "declaration-colon-space-after": "always",
    "max-empty-lines": 2,
    "rule-empty-line-before": [ "always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    } ]
  },
};