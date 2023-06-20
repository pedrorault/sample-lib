module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: "es5",
  useTabs: true,
  bracketSpacing: true,

  tailwindFunctions: ['clsx'],
  plugins: [require('prettier-plugin-tailwindcss')],
}