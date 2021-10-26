# eslint-config-incloud

1. Install the package:
    - Using npm:
      ```shell
      npm i -D eslint-config-incloud
      ```
      With npm < v7 you also need to manually install peer dependencies:
      ```shell
      npx install-peerdeps -d eslint-config-incloud
      ```

    - Using yarn:
      ```shell
      yarn add -D eslint-config-incloud
      npx install-peerdeps -d --yarn eslint-config-incloud
      ```

2. Create a Prettier config as described [here](https://github.com/incloud/prettier-config).

3. Create `.eslintrc.js` with the following content:

    - Node:
      ```js
      module.exports = {
        extends: ['incloud'],
        env: {
          node: true,
        },
      };

      ```
    - React:
      ```js
      module.exports = {
        extends: ['incloud/react'],
      };
      ```
