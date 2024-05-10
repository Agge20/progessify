/** @type {import('prettier').Config} */
module.exports = {
    trailingComma: 'all',
    singleQuote: true,
    importOrderSeparation: true,
    pluginSearchDirs: false,
    plugins: [
      // '@trivago/prettier-plugin-sort-imports',
      'prettier-plugin-tailwindcss',
    ],
  };