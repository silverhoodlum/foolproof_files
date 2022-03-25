# Foolproof Files


This project is a react practice test I have developed for Foolproof, it allows the usuer to see files and filter them by type or user, a searchbar component is also available.

[DEMO](https://silverhoodlum.github.io/foolproof_files/)


## Tech

This project has been build mainly using React, React-Hooks & React-Bootstrap



## Installation

To install the api open a terminal

```sh
cd api
npm install
node index.js
```

Once api is running open a new terminal & cd into into main folder, install dependencies & start

```sh
npm install 
npm start
```

## Design

The project was design in Adobe XD following the provided brief. 

![image](https://www.linkpicture.com/q/Foolproof_design.jpg)

## Functionality Overview

Tree component goes as follow

![image](https://www.linkpicture.com/q/Fproof_Files_Diagram.jpg)

All tge data is fetched from mock-api (running locally on port 3001) in Homepage component.
I have used react functional components with react hooks to manage state across the tree component.
Page is mainly divided in two components: **Filters**,  & **Files Directory**. Every time it runs one type of filter it checks if other filters or searchbars active to updated the filtered files.
The checkboxes are re-usable components from Bootstrap. 






**Thanks for visiting!**


