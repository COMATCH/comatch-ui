# <img src="./comatchUiLogo.svg" width="350" alt="COMATCH UI">

:point_right: [Live Storybook preview](https://comatch.github.io/comatch-ui/) :point_left:

[![CircleCI](https://circleci.com/gh/COMATCH/comatch-ui.svg?style=svg&circle-token=b2eea611c1911aa0d1f9c3ccf48631766425f5ec)](https://circleci.com/gh/COMATCH/comatch-ui)

## Description

This project contains all of our React core (UI) components to be re-used across our projects.

This project is setup with a minimalistic Webpack config to handle the build pipeline and Storybook to facilitate development.

A preview of all the components can be seen on the deployed version of our Storybook by clicking [here](https://comatch.github.io/comatch-ui/).

## Documentation

**Contents**

  - [Description](#description)
  - [Documentation](#documentation)
    - [Setting up the project](#setting-up-the-project)
    - [Making a new release](#making-a-new-release)
    - [Structure of the project](#structure-of-the-project)
    - [PropTypes documentation](#proptypes-documentation)

### Setting up the project

To run this project, after cloning it, follow these steps:

1. `cd` to the directory of the project.
2. Run `yarn install && yarn start`

### Making a new release

To make a new release you need to:

1. [Run `npm version major|minor|patch`](https://docs.npmjs.com/cli/version).
2. Run `npm publish`, which will publish the new version of the package to the npm registry.

### Structure of the project

All components in our UI library can be found under `/src/core/ui/components`.

Each component folder should have the following structure (e.g. for Button):

```
├── src/
    ├── index.js                    // Exports all components of the library
    └── components/
        └── Button/
            ├── index.js            // Exports the component for the file it's defined
            ├── Button.md           // Documentation of PropTypes in markdown
            ├── Button.js           // Component definition
            ├── Button.scss         // Styling
            ├── Button.test.js      // Unit tests
            └── Button.stories.js   // Stories for Storybook
```

### PropTypes documentation

The PropTypes of all components of the library are documented in their respective folders, a list follows with links for quick access:

**Component PropTypes**

-   [Alert](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Alert/Alert.md)
-   [Autocomplete](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Autocomplete/Autocomplete.md)
-   [Badge](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Badge/Badge.md)
-   [Button](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Button/Button.md)
-   [CheckboxGroupInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/CheckboxGroupInput/CheckboxGroupInput.md)
-   [CheckboxInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/CheckboxInput/CheckboxInput.md)
-   [DropdownMenu](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/DropdownMenu/DropdownMenu.md)
-   [EmailInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/EmailInput/EmailInput.md)
-   [FileInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/FileInput/FileInput.md)
-   [Flyout](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Flyout/Flyout.md)
-   [InputError](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/InputError/InputError.md)
-   [InputLabel](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/InputLabel/InputLabel.md)
-   [ModalWindow](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/ModalWindow/ModalWindow.md)
-   [MultiLangTextAreaInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/MultiLangTextAreaInput/MultiLangTextAreaInput.md)
-   [MultiLangTextInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/MultiLangTextInput/MultiLangTextInput.md)
-   [Navigation](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Navigation/Navigation.md)
-   [NumberInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/NumberInput/NumberInput.md)
-   [Panel](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Panel/Panel.md)
-   [PasswordInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/PasswordInput/PasswordInput.md)
-   [PhoneNumberInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/PhoneNumberInput/PhoneNumberInput.md)
-   [Popover](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Popover/Popover.md)
-   [ProgressBar](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/ProgressBar/ProgressBar.md)
-   [RadioBooleanInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/RadioBooleanInput/RadioBooleanInput.md)
-   [RadioGroupInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/RadioGroupInput/RadioGroupInput.md)
-   [RadioInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/RadioInput/RadioInput.md)
-   [SectionHeader](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/SectionHeader/SectionHeader.md)
-   [SelectInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/SelectInput/SelectInput.md)
-   [Separator](https://github.jcom/COMATCH/comatch-ui/blob/master/src/core/ui/components/Separator/Separator.md)
-   [Spinner](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Spinner/Spinner.md)
-   [StarRatingInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/StarRatingInput/StarRatingInput.md)
-   [StepProgressBar](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/StepProgressBar/StepProgressBar.md)
-   [StickyBanner](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/StickyBanner/StickyBanner.md)
-   [Table](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/Table/Table.md)
-   [TabNavigation](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/TabNavigation/TabNavigation.md)
-   [TextAreaInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/TextAreaInput/TextAreaInput.md)
-   [TextInput](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/TextInput/TextInput.md)
-   [ThumbnailImage](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/components/ThumbnailImage/ThumbnailImage.md)

**Container PropTypes**

-   [Notifications](https://github.com/COMATCH/comatch-ui/blob/master/src/core/ui/containers/Notifications/ui/containers/Notifications/Notifications.md)
