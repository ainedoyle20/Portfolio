---
title: 'Productivity Tracker App'
excerpt: 'Create a checklist, mark off completed tasks and track your productivity over time with this productivity tracker app. Designed to increase productivity!'
cover_image: '/images/projects/todo.png'
github_link: 'https://github.com/ainedoyle20/productivity-tracker'
viewLive_link: 'https://distracted-wozniak-ff7f4a.netlify.app'
---

# Productivity Tracker

![Productivity Tracker Cover!](/images/projects/todo.png)

## Table of Contents

1. [Using Productivity-Tracker](#using-productivity-tracker)
2. [Discussing Features used when building Productivity Tracker](#discussing-features-used-when-building-productivity-tracker)
    - [React](#react)
    - [React Router V6](#react-router-v6)
    - [Redux, Reselect, Redux-Logger](#redux-reselect-redux-logger)
    - [Firebase V9](#firebase-v9)
    - [Styled Components](#styled-components)
    - [Chart.js](#chartjs)
    - [Optimisations](#optimisations)
3. [Building the Calendar Component](#building-the-calendar-component)

## Using Productivity-Tracker

In order to access your data you must first create an account and log in. You can do this with your email or with your Google account.          

Once logged in you will be directed to the Home Page. Here you can create, edit, complete or delete tasks for that day.

If you wish to schedule future taks, or view past ones, navigate to the Schedule Page. You can navigate between all pages using the Side Navigation bar. On the Schedule Page you will be shown a calendar and you can choose any future day to add tasks to. Note however that if you choose a past date, you may only view the tasks, if any, for that date. You will not be able to alter them.

To view your productivity improvment / deterioration navigate to the Progress Page. Here a line chart with your data for the current month will be displayed. To view your data for past months simply toggle the Back button.

There is a logout option on the Side Navigation bar when you wish to sign out.

## Discussing Features used when building Productivity Tracker          

### React

React JS is a JavaScript library that makes developing web apps and interactive user interfaces so much easier. I used React JS to build Productivity Tracker as the library has many advantages over vanilla JavaScript. Building a project as big as Productivity Tracker with just JavaScript would have been complicated and hard to manage. With React JS however, the project is easily maintained and the build process was incredibly simple due to the librarys method of breaking the app into reusable components, handling dependencies, one-way data binding and so much more.

### React Router V6

Productivity Tracker uses the react-router library to create page routes, nested routes and to deal with catch-all routes. The project also leverages the Link element this library provides to navigate between pages and the useNavigate hook to navigate programatically (e.g. on signing in successfully it is used to redirect the user to Home).     
One advantage to using the React Router library is the Link element. When using an 'a' tag the page refreshes with each navigation which can result in some unwanted effects on the state. When using Link with React Router, the page does not refresh preventing unpredictable state changes and also resulting in a better user experience.

### Redux, Reselect, Redux-Logger

Redux is used to manage state in this project. It provides a single source of state (the store) eliminating the passing of props and the risk of prop drilling. Keeping the state in a single place also makes changes in the app more predictable and traceable.           
The Reselect library is used in Productivity Tracker to create memoized selectors. Selectors are used by components to pick the pieces of state that they require from the redux store. The components use these selectors through the useSelector hook provided by redux. Even though this hook is triggered after *every* redux action is dispatched (even if the action only effects the piece of state used by one selector), since these selectors are memoized selectors created by the Reselect function **createSelector**, only the selectors with a different input than last time rerun.     
Since some of the selectors in my project do some expensive calculations (like calculating the percentage of tasks completed) the use of the Reselect library is very beneficial to the Productivity Tracker app.       
To make keeping track of redux actions being dispatched I used the redux-logger library. This library provides a middleware that logs: the previous redux state, the action dispatched and its payload and finally the next altered redux state to the console. This is incredibly useful when in development but I created a conditional to remove the logger if the project was in production mode so as to not effect the user experience.

### Firebase V9

I used the firebase library for my project to handle authentication and data storage. I used firebase email and google authentication services create user accounts and log users in. I used firebase firestore to store user details, user tasks and user percentages (percentage of tasks completed). This data was separated into different collections in firestore: users collection, todos collection and percentages collection.         
In the todos collection a users tasks / todos are stored in a document with a uid matching that users uid (so in the firestore rules I could prevent any user without this uid from accessing this data).       
The percentages collection is the very same with the percentage document uids matching the uids of the users. In the percentage documents an object with key-value pairs being month dates - percentages is assigned to each month a user is active on the website.         
Firebase functions were used from inside project components to access and update the data in firestore.         
I used Firebase rules to prevent random users from accessing other user data.

### Styled Components

I used styled components in Productivity Tracker as I felt the advantages of the library would make styling my application much easier and safer.           
Styled components prevents **styles overwriting** each other. Even though a css processor such as SASS provides nesting and variables, there is still a liklihood of overwriting styles if you happen to give two components the same class name (SASS, like CSS, comes with globally scoped selectors). But with styled components I could style my project without the headache of trying to invent unique class names (styled-components create their own class names!) for every component and I didnt have to worry about overwriting styles.        
There is also a **performance** boost when using styled-components. Styled-components are only rendered if the component is on screen. CSS (and even SASS in most cases) is processed anyway.

### Chart.js

Chart.js is the library I used to create the progress chart in Productivity Tracker. It uses JavaScript to create simple but flexible charting. I used the percentages data stored in firebase firestore to plot the graph.

### Optimisations

I implemented code splitting in Productivity Tracker by using React lazy loading for all the page routes (including nested routes). This prevents a large code bundle (slows down the app) and now the data for each page is only loaded when the user visits that page. This is much better for performance than loading data for all pages even the ones not being rendered.            
I used the Suspense component from React 

I implemented code splitting in Productivity Tracker to optimize my code and to prevent a large code bundle (slows down the app). I did this through the dynamic **import()** syntax. Since I set up this project using Create React App, my Webpack was already configured so that it automatically starts code-splitting when it comes across this syntax.        
I used the dynamic import() in conjunction with the React.lazy function so that I could render a dynamic import as a regular component. I did this for all the page routes and nested routes in Productivity Tracker. As a result, the data needed for a page is only loaded if that page is being rendered. This is much better for performance than loading data for all pages even the ones not being rendered.          

Before:

```
    import HomePage from '../home-page/home-page.component';
```

After:

```
    const HomePage = React.lazy(() => import('../home-page/home-page.component'));
```

## Building the Calendar Component
