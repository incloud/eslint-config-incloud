# eslint-config-incloud

## Installation
To include this eslint-file to your project just create a .eslint file in your projects root-directory and extend it like that

1. Install the npm module

      npm install git+ssh://git@github.com:incloud/eslint-config-incloud.git


2. Extend your .eslintrc

        {
            "extends": "eslint-config-incloud"
        }


## Development

Explanation of rules you may want to override you can find [here](http://eslint.org/docs/rules)

To override a rule

    {
        "rules": {
            "quotes": ["error", "double"] // "rulename": ["servity", "setting"]
        }
    }