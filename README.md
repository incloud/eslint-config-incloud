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
      You probably want to run eslint with `--max-warnings 0` as many of the [react-app rules we depend on are only warnings](https://github.com/facebook/create-react-app/blob/v4.0.3/packages/eslint-config-react-app/index.js#L13), which is not desirable when checking against them in CI.
