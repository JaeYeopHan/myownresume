<div align="center">
    <img src="/docs/images/myownresume_logo.png" alt="myownresume_logo" width="600px" height="200px">
</div>

# myownresume
[![Build Status](https://travis-ci.org/JaeYeopHan/myownresume.svg?branch=master)](https://travis-ci.org/JaeYeopHan/myownresume)
[![status](https://img.shields.io/badge/status-alpha-blue.svg)](https://img.shields.io/badge/status-alpha-blue.svg)
[![author](https://img.shields.io/badge/author-jbee-ff69b4.svg)](http://friendly-belief.surge.sh/)
[![version](https://img.shields.io/badge/npm%20version-0.0.2-orange.svg)](https://github.com/JaeYeopHan/myownresume/blob/master/package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

## What is this?
In short, this is **Generate Customized Resume Project**. Creates a resume based on the input json formatted data. You just enter the json data to `data.json` on `/data/data.json`.

</br>

#### [Live Demo](http://friendly-belief.surge.sh/)
* [Supported themes](#supported-themes)
* [Usage](#usage)
* [Supported Feature by JSON](#supported-feature-by-json)
* [Supported Browser](#supported-browsers)
* [Development Installation](#development-installation)
* [Bug Report](#bug-report)
* [Contribute](#contribute)

</br>

## Supported themes
### Default theme
* [Demo]()

</br>

## Usage
#### First, clone this project
```bash
# install node and npm.
$ git clone https://github.com/JaeYeopHan/myownresume && cd myownresume
$ npm install
```

#### Second, install `surge` npm
This tool works based on [surge](http://surge.sh/) module.
```bash
$ npm install -g surge
```

#### Third, customize `data.json`
You can find `data.json` file on path: `/data/data.json`.
> Notice! Don't change `themes.json`.

if you need image, you have to insert image to `/dist/images/` by sections and enter file name of image to `data.json`.

#### Fourth, run npm script to deploy
```bash
$ npm run deploy
```
and, you enter `surge` info.

#### Done!

</br>

## Supported Feature by JSON
You can specify your own resume data through the json file.
### theme

### profile
* `image`
* `lastUpdate`
* `isWorked`
* `name`
* `job`
* `email`
* `one_line_intro`
* `interests`
* `facebook`
* `linkedin`
* `github`

### work
[Array]
* `name`
* `position`
* `period`
* `description`
* `logo`

### blog
[Array]
* `title`
* `link`
* `description`
* `logo`

### projects
[Array]
* `title`
* `isPersonal`
* `github_link`
* `period`
* `tech`
* `descriptin`

### activity
[Array]
* `title`
* `period`
* `discription`
* `logo`

### education
[Array]
* `name`
* `period`
* `status`
* `major`
* `logo`

</br>

## Supported Browsers
|Chrome for iOS|
|:-:|
|Latest|

</br>

## Development Installation
```
$ git clone https://github.com/JaeYeopHan/myownresume && cd myownresume
$ npm install
# Something to do...
$ npm run dev
$ npm run build 
```
</br>

## Bug Report
If you find a bug, please report it to me using the [Issues](https://github.com/JaeYeopHan/myownresume/issues) page on Github.

</br>

## Contribute

</br>

## LICENSE
[MIT LICENSE](https://github.com/JaeYeopHan/resume_prj/blob/master/LICENSE)
