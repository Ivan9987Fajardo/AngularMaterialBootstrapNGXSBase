# AngularMaterialBase

This Angular 10 Base consists of Angular Material Base, NGXS, CompoDoc, App Initializer, and Resolver. A Demo Component has been added for your reference.

## Installation

1.  Install `Visual Studio Code` at `https://code.visualstudio.com/`
2.  Open `Visual Studio Code`. From the `Extensions (Ctrl+Shift+X)` sidebar, Install the following:

    1.  Git Lens
    2.  TSLint
    3.  Prettier

        1. In VS Code, File -> Preferences -> Settings -> Search “Formatter” -> Set Prettier As Default Formatter -> Check “Format on Save”
           2.Open the settings (⇧⌘P or Ctrl+Shift+P), find Preferences: Configure Language Specific Settings... and then find the TypeScript. It will open the settings.json file. Now add the configuration.

        "[typescript]": {

            "editor.codeActionsOnSave": {
            "source.organizeImports": true
            }

        },
        "[typescriptreact]": {
        "editor.codeActionsOnSave": {
        "source.organizeImports": true
        }
        },
        "js/ts.implicitProjectConfig.experimentalDecorators": true,
        "tslint.rulesDirectory": "./node_modules/codelyzer",
        "typescript.tsdk": "node_modules/typescript/lib"

## Patch

Make sure to run `npm run lint` and fix lint issues before pushing to your own repository.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Documentation

Run `npm run documentation` to generate documentation files by CompoDoc. Documentation files will be stored in the `/documentation` directory.
