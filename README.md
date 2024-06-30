# eslint-config-ncfex

This ESLint configuration provides a solid foundation for linting JavaScript code in Node.js environments. It extends the following configurations:

- **eslint**: ESLint's built-in recommended rules
- **airbnb-base**: Airbnb's base style guide for JavaScript
- **prettier**: Enables ESLint to work seamlessly with Prettier (if installed)
- **eslint-plugin-import**: ESLint plugin for import/export linting

### Features:

- Enforces consistent code style and quality
- Leverages industry-standard rules from Airbnb and ESLint
- Integrates well with Prettier for automatic code formatting

### Installation:

```bash
npx install-peerdeps --dev eslint-config-ncfex
```

### Usage:

1. Create an ESLint configuration file:

   If you don't have one already, create a `.eslintrc.js` file in your project's root directory.

2. Extend `eslint-config-ncfex`:

   Add the following content to your `.eslintrc.js` file:

   ```javascript
   module.exports = {
     extends: 'eslint-config-ncfex',
     rules: {}
   };
   ```

   This extends your project's ESLint configuration with the rules from `eslint-config-ncfex`.

3. (Optional) Customize the configuration:

   You can add additional rules or overrides to the `.eslintrc.js` file to tailor the linting behavior to your project's specific needs. Refer to the [ESLint documentation](https://eslint.org/docs/latest/) for more information on available rules and configuration options.

### License:

This project is licensed under the MIT License. See the LICENSE file for more details.
