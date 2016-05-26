# SASS BASE

**My Source of Truth**

Based off [Modular Design](http://en.wikipedia.org/wiki/Modular_design) – with [SMACSS](http://smacss.com/) at its core. It incorporates other open-source projects including Animate.css and Materalize.css which are maintained via BowerJS. A GruntJS configuration has also been implemented and provides common build processes including SASS, Compass, Compile, CSSMin, HTMLHint, Concatenation, Uglify, Watch and more.

## Table of Content

1. [Getting Started](#getting-started)
2. [Fire It Up](#fire-it-up)
3. [Documentation](#documentation)
4. [File Organization](#file-organization)
5. [ToDo](#todo)

## Getting Started

#### Step 1: Install Dependencies
1. [node](http://nodejs.org/): follow the link and click the button
2. [ruby](https://www.ruby-lang.org/en/installation/): this comes pre-installed on macs
3. `gem install sass` & `gem install compass`
4. `npm install grunt` & `npm install grunt-cli`: installs grunt and grunt-cli globally.
5. `npm install -g bower` : installs bower globally (*optional*)

**Note:**

 - Depending on your permissions setup, you might need to prefix each command with `sudo` (use with caution)
 - All user level installs: `cd ~` will put you at your user level


#### Step 2: Clone Project

You'll need to clone this repository so that its on your local computer.

```
$ cd /path/to/your/repo
$ git clone git@github.com:nauerster/sass-base.git

```

#### Step 3: Know Your Git Commads
* `git add -A`: stages all files to commit (locally)
* `git commit -am "Commit message"`: commits all files with a description
* `git push origin {branch name}`: push committed files to repository
* `git branch {new branch}`: creates a new working branch
* `git checkout branch`: switches you to your new branch
* `git merge {branch name}` : will merge changes from the specified branch into your current branch

## Fire It Up
Follow these instructions to fire up your `Sass Plate` after ensuring you have all dependencies listed above installed in your environment.

1. In Terminal/Command-line, navigate to the root directory (where Gruntfile.js is located)
  * Install Node Modules: `npm install`

2. In the same directory run the following command
  * `grunt serve`: css file will be output into the dev folder. The watch task will continue to run until you quit it `(ctrl + c)`.
  * `grunt build`: will run all the same dev tasks, but will compress our css file for final release.


## Documentation
Using [SassDoc](http://http://sassdoc.com/), you can parse your source folder to grab documentation-specific comments. From there, it builds a data tree, that gets enhanced and filtered before being passed to the view.

1. In Terminal/Command-line, simply run 'grunt sassdoc' at the root of your project directory.




## File Organization
In general, the CSS file organization should follow something like this:

```
  + app/
  |
  | + sass/
  |   |
  |   | + base/                           # reset, typography, site-wide
  |   |   |-- _index.sass                 # imports for all base styles
  |   |   |-- _base.sass                  # base styles
  |   |   |-- _normalize.scss             # normalize v3.0.1
  |   |   |-- _reset.sass                 # reset v0.0.1
  |   |   |-- _modifiers.sass             # single responsibility classes
  |   |   |-- _typography.sass            # core typography rules
  |   |
  |   | + layout/                         # major components, e.g., header, footer etc.
  |   |   |-- _index.sass                 # imports for all layout styles
  |   |   |-- _content.sass               # core content block's, e.g., .section, .container, .row, .content
  |   |   |-- _grid.sass                  # responsive grid system
  |   |   |-- _header.sass                # global header
  |   |   |-- _footer.sass                # global footer
  |   |   |-- _variables.sass             #
  |   |
  |   | + components/                     # minor components, e.g., buttons, widgets etc.
  |   |   |-- _index.sass                 # imports for all modules
  |   |   |-- _modal.sass                 # modal styles
  |   |   |-- _button.sass                # default build decorator
  |   |
  |   | + states/                         # js-based classes, alternative states e.g., success or error state
  |   |   |-- _index.sass                 # imports for all state styles
  |   |   |-- _states.sass                # state rules
  |   |   |-- _print.sass                 # print styles
  |   |   |-- _touch.sass                 # touch styles
  |   |
  |   | + themes/                         # (optional) separate theme files
  |   |   |-- theme.sass                  # rename to appropriate theme name
  |   |
  |   | + views/                          # (optional) separate view files
  |   |   |-- _index.sass                 # imports for all views styles
  |   |   |-- _view1.sass                 # specific view styles
  |   |   |-- _view2.sass                 # specific view styles
  |   |   |-- ...                         # more...
  |   |
  |   | + utilities/                      # non-CSS outputs (i.e. mixins, variables) & non-modules
  |   |   |-- _index.sass                 # imports for all mixins + global project variables
  |   |   |-- _fonts.sass                 # @font-face mixins
  |   |   |-- + functions/                # ems to rems conversion, etc.
  |   |       | _index.sass               # imports for all function modules
  |   |       | _colors.scss              # color mapper
  |   |       | _units.scss               # ems to rems conversion
  |   |       | _layout.scss              # width calculations and depth mapping
  |   |
  |   |   |-- _config.sass                # config variables
  |   |   |-- _colors.sass                # color variables
  |   |   |-- _typography.sass            # typography variables
  |   |   |-- _helpers.sass               # extension classes
  |   |   |-- _mixins.sass                # media queries, CSS3, etc.
  |   |   |-- _lib.sass                   # imports for third party styles
  |   |   |-- + lib/                      # third party styles
  |   |       | _pesticide.scss           # CSS pesticide
  |   |       | _animate.scss             # Cross-Browser animation library
  |   |
  |   |   + styles.sass                   # primary Sass file
  |   |   + _shame.sass                   # because hacks happen
  |
  + node_modules/                         # repository for node modules
  + bower.json                            # use to install third party dependencies
  + package.json                          # use to install grunt dependencies
  + Gruntfile.js                          # used to configure your grunt tasks
  + README.md                             # used to shared helpful information about the project
  + .gitignore                            # used to ignore certain files and/or directories when push to remote repo
  + .bowerrc                              # used to change the install location of your bower_components)
  + config.rb                             # Compass configuration file (optional)
  + Gruntfile.js                          # Grunt configuration & tasks
  + package.json                          # Grunt metadata & dependencies

```

## ToDO

- [ ] Look into install [Refill](https://github.com/thoughtbot/refills)
