# Contributing To `generator-phaser-plus`

-   **Reporting problems**. If you found problems in the generator or its sample projects, do not hesitate and report them as soon as possible.

-   **Improving documentation**. I kindly appreciate improvements to the documentation, especially typo and grammar corrections.

    >   **NOTE**: At the moment, proposals for localization of content in other languages are not being accepted.

-   **Suggesting improvements and new features**. Feel free to suggest improvements or new features to the generator and its sample projects. To avoid duplicates, be sure these were not [suggested before](https://github.com/rblopes/generator-phaser-plus/issues?utf8=✓&q=label%3AFEATURE).

-   **Star the repository**. Yes, this is the simplest contribution you can make to this project. It helps the project rank better on search engines and attract more interested users and contributors alike.

-   **Sending pull requests**. If you have the skills for it, do not hesitate. Be bold and tackle those bugs for me! Read below to learn what you will need to accomplish this task.


## Developer Notes

`generator-phaser-plus` is developed using Node.js 6.12, so you shouldn't run into issues testing the repository on later versions.

This repository uses [Yarn Workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) to manage dependencies, so make sure you have [Yarn installed](https://yarnpkg.com/en/docs/install) before starting.


### Setup

```sh
git clone https://github.com/rblopes/generator-phaser-plus.git
cd generator-phaser-plus
```

If you forked the repository previously on GitHub, replace the repository URL with the one you own.

```sh
yarn test
```

This should bootstrap the repository, installing the necessary development dependencies and run all test suites.

>   **NOTE**: This applies to the repository packages only. For the time being, you must run `yarn` to install the packages on each sample project to test them.


### Testing Packages

The generator and its complementary packages live in the `packages/` directory. You can run their tests individually changing to any directory and running `yarn test`. Coding style checks takes precedence and execute before tests by default. You can run `yarn xo --fix` to solve most linting issues.


### Templates

The templates of the sample projects are kept inside the `templates/` directory. They are fully runnable, preview versions of the projects created by the generator. [Learn more](/templates#readme).


### Keep In Mind

-   **Follow the coding conventions.** Run `yarn xo` to spot linting problems early.
-   **Avoid making changes directly on `master`, use topic branches instead.** Use `git checkout my-feature-branch` (of course, replacing `my-feature-branch` with a name you feel more appropriate), edit and commit your changes there. Run `git push` when you're done.
-   **Refrain from editing the repository through GitHub.** Changes made with the GitHub editor are cumbersome and harder to evaluate, especially changes made to the source code. Changes made on a local working copy are more reliable and more appropriate pull requests.

>   OK, nobody is perfect. Don't feel intimidated if you don't know how to do all that stuff. I won't turn down your proposal right away just because you have failed any of these prerequisites, too. When applicable, I can do the necessary amendments and apply your changes. Just be careful and do your best!
