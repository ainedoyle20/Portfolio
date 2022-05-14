---
title: 'Flashcards'
excerpt: 'A simple app where users can create and share decks of flashcards focused on any topic of their choosing!'
cover_image: '/images/projects/flashcards.png'
github_link: 'https://github.com/ainedoyle20/flashcards'
viewLive_link: 'https://flashcards-rho.vercel.app/'
---

# Flashcards

![Flashcards Project Cover!](/images/projects/flashcards.png)

## Table of Contents    

1. [Using the Flashcards App](#using-the-flashcards-app)
2. [A List of Features used in this Project](#a-list-of-features-used-in-this-project)
3. [Discussing Next JS, Tailwind CSS and Redux](#discussing-next-js-tailwind-css-and-redux)
4. [Discussing the Next JS Course](#discussing-the-next-js-course)

## Using the Flashcards App

In order for a user to get access to the application they must first create an account, via email or google, or log in using their email and password or by google.       

Once logged in, a user can navigate between the Private Decks Page and Public Decks Page using the navigation bar located at the top of the website.         
Here, they will also find the option to Logout if they wish. On logging out the user will be redirected to the authentication page.

On the Private Decks Page the user can view their private decks collection and can create a private deck or edit / delete an existing deck.     
Each private deck has a 'post' option along with an 'edit' and 'delete' option (display on hovering over the deck). The 'post' option allwos the user to make their private deck public so that any user can view the deck and its content on the Public Decks Page.

On the Public Decks Page the user can view every deck that has been made public either by themselver or by other users.           
Public Decks cannot be altered in any way (not the title, description, flashcards, etc) unless the user currently logged in is also the creator of the public deck they wish to alter.
A user can create a public deck while on the Public Decks Page. However, if they create a deck in this way, the created deck will only appear in the public decks collection and will not be a part of the users private decks collection.

Each public deck has a 'copy' option (along with an 'edit' and 'delete' option, all of which display only when a user hovers over the deck). This 'copy' option allows any user to copy a public deck, even if they are not themselves the creator, into their private decks collection. Back on the Private Decks Page, the user can alter the copied deck however they wish.

To add flashcards to a deck (if the deck is public the user must be the creator to do this) the user must first enter the deck by clicking on it. Once inside the deck the user can add an infinite number of flashcards. Each flashcard has a Question field and and Answer field. Flashcards can be deleted by clicking the bin icon.         
The flashcards can be viewed as traditional card flashcards where the question shown on the front and the card is flipped (by clicking) to reveal the answer on the back.
Alternatively, flashcards can be viewed in a list form. Both the question and answer are displayed when in this format.

## A List of Features used in this Project

- Next JS
- Tailwind CSS
- Firebase
- Redux
- Redux Thunk
- Reselect
- Redux Persist
- Redux logger
- React cookie
- uuidv4

## Discussing Next JS, Tailwind CSS and Redux

### ***Next JS***     

Flashcards is the first (personal) project I have built using Next.js. I started this project on completing the
<a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" target="_blank">Next.js and React - The Complete Guide</a> by Maximilian Schwarzmuller.

I list the exact topics I learned about in this course under the heading 'Discussing the Next.js Course' (see Contents).

Building Flashcards with Next.js allowed me the oppurtunity to practice what I had learned during the course. Also, since Next.js is built on top of React, I could continue to code React components with which I am familiar while my project still benefited from the features and optimizations of Next.js.

- Next.js **Optimizations** I used in Flashcards

The **Head** component exposed by Next.js allows you to add unique titles and metadata to each page in your application. The title, appearing on the page tab, can enhance user experience and is, when combined with the metadata, crucial for SEO (search engine optimization). Search engine crawlers will read the title and metadata 'description' and this will influence where your website is ranked in the results shown in response to a web search.
The Next.js Head component also has the clever feature of merging its content. This becomes very useful when, for expample, you want to have a <meta> tag that controls the viewport available in every page Head component. Instead of writing the same line of code repeatedly (a cardinal sin for developers!) into every Head component in your application, you simply add the <meta> tag once to the Head component in _app.js.

Next.js gives you the option of creating a custom **_document.js** file. In this file you can update the 'html' tag (I added the 'lang="en"' attribute) and the 'body' tag. To the body tag I added some styling such as background colour and padding. I also added my desired font to the Head component imported from 'document/head' (different from the Head component mentioned above imported from 'next/head').

I also used the Next.js **Image** component in Flashcards. The purpose of this component is to produce images optimized for production. With the Image component the images downloaded are a) not the full size of the original image but rather the size you specify on the Image component and b) of slightly less quality than the original. This reduces the file size in your application. Another optimization the Image component offers is how each image is lazy loaded by default. If on a mobile screen and an image is not visible, it will not be downloaded. This reduces the amount of requests carried out in advanced and increases page performance.     
Although Flashcards only has one image (the bin icon) I felt it would be best practice to use the optimized Image component. 

- Next.js **File-based routing**, **Link component** and **useRouter hook**

Due to Next.js file-based routing system I could avoid the initial setup of making pages available as routes, manually assigning each a url path.       
Example: Setting up routes in Crown Clothing

```
    <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="order-history" element={<OrderHistory />} />
          <Route path="contact" element={<Contact />} />
        </Route>
    </Routes>
```

Instead, I simply added my desired pages into the `pages` directory as any file in this location is automatically available as a route. Their url path names are dependent on their file name. Any file named 'index.js' is routed to the root of their directory while files named, for example, 'contact.js' will have a url based on that name and their location in the `pages` directory.

**/pages/index.js** - "/"       
**pages/privateDecks/index.js** - "/privateDecks"

Next.js also makes it very easy to create dynamic routesby simply adding a bracket:             
**/pages/privateDecks/[deckId].js** - "/privateDecks/(some-id)"

Next.js Link component and useRouter hook are used in Flashcards to navigate between pages. These two components combined with the file-based routing system meant that there was never any need to install a routing library, such as React Router, which in turn resulted in a reduced final bundle size (not to mention less setup).

- Next.js **getServerSideProps**

I used getServerSideProps and its context in Flashcards to access the deck id in the url of the dynamic route. This id was then used to access a specific deck data which was used to populate the dynamic page. The great advantage I found with using getServerSideProps in this way is that the steps above are all done on the server side before the page is rendered. The user is not watching a blank page (or worse a page with an error) waiting for some data to appear. The user experience was improved.

I also found getServerSideProps extremely useful in setting up route guards in my project. I wanted to prevent any unauthorised user from accessing any page other than the authentication page. Or if they were authenticated I wanted them unable to access the authentication page to avoid multiple log-ins.         
I have done this in previous projects by checking, from within a component, if a user is logged in. If there was no user then the application rerouted to the authentication page. The issue with this however is that the data on these pages would sometimes flash and be visible before the user was rerouted. This is not the case with getServerSideProps. The check is done on the server before the page has even rendered. If the user is unauthenticated the rerouting is done before any data is displayed. I found getServerSideProps to greatly improve my projects security.

### ***Tailwind CSS*** 

Flashcards is the first project in which I have used Tailwind CSS. Originally I built this project using plain CSS. Converting the project over only highlighted the frameworks advantages.

- Tailwind CSS is Customizable

Even though tailwind comes with a default configuration, I could easily add my own styles by adding them to the `tailwind.config.js` file. I did this for my own custom grid styling (used when displaying the decks) and the lined notebook styling I used on the flashcards.

- Tailwind CSS is a utility first framework

Utility classes are named according to their intended purpose and are written directly into HTML. This is a big reason for why I enjoyed using tailwind in my project. I no longer had to switch between component and css files or try to invent unique classNames that also made sense (something that becomes increasingly difficult as the project size increases).     
Having the styling added directly onto the HTML made it very easy for me to read my code and understand how each element was being displayed and how it interacted with the other elements on the page. It was much like writing inline styles but without all the colons and semi-colons. Tailwind CSS styles are nearly always shorter than regular css, e.g. 'background: white;' is simply 'bg-white' with tailwind. This greatly increased productivity.

- Tailwind CSS is optimized to remove unused CSS

Tailwind automatically scans the files in your project that use tailwind css and will remove any unused css from the project. (Note: In order for tailwind to know what files will be using tailwind, you add these files into the `content` array in the `tailwind.confing.js` file.)          
Normally, as a project grows so would the CSS file, however with tailwind this does not occur having removed any unnecessary CSS.

- Tailwind uses a default mobile-first approach

By default, Tailwind uses a mobile first breakpoint system meaning that unprefixed utilities (like 'w-full') take effect on all screen sizes, while prefixed utilities (like 'md:w-3/4') only take effect at the specified breakpoint *and above*.          
Normally when designing my projects I would write my styles for larger screens first and then specify breakpoints and their styles for smaller screens later. But with tailwind the styles I added first would be applied to mobile screen and above and it would be up to me to override these styes for larger screens.           
Tailwind CSS makes responsive design very easy as it provides a set of default breakpoints representing the most common screen sizes. These breakpoints were represented by prefixes like 'sm' for a minimum of 640px and 'md' for a minimum of 768px. In order to override certain styles to match larger screens all I had to do was add the prefix before the style I wished to change, e.g. 'lg:w-3/4' meaning at the minimum screen width of 1024px the width of that element would now be 75% of its container (regardless of its width on smaller screens).          
Because of Tailwind CSS, by the time I had completely converted my Flashcards project from plain CSS to tailwind my mindset had firmly shifted to take on the mobile-first approach. Since the majority of users today view websites from a mobile screen this styling approach can only be advantageous.           

### ***Redux, Redux Thunk and Reselect***      

I used **Redux** for state management in this project. Redux provides a single source of state for the entire application preventing the need for passing props and the possible occurance of prop drilling.

I chose Redux over Context API as I felt redux was better suited to Flashcards considering the project has:

- a large amount of state, needed by many components
- state that is updated frequently
- logic to update that state which is sometimes complex, e.g. filtering duplicate flashcards before adding a newly created flashcard

Redux also allowed for the use of **Redux thunk**, a library I decided would benefit my project due to the added level of control it provided me when dealing with asynchronous tasks.          
Redux Thunk is a middleware that allows components to execute asynchronous actions without being aware they are doing so. The function the component dispatches carries out the asynchronous and additional Redux-related logic separate from the UI-layer.         
I used a Redux thunk function to fetch decks in Flashcards:

~~~
export const fetchDecksAsync = (currentUserId) => {
    return async (dispatch) => {
        dispatch(fetchDecksStart());

        try {
            const decksObject = await getDecks(currentUserId);
            dispatch(fetchDecksSuccess(decksObject));
        } catch (error) {
            dispatch(fetchDecksFailed(error));
        }
    }
}
~~~

As you can see in the code snippet above, this redux thunk function (fetchDecksAsync) dispatches multiple redux actions on running. Each action dispatched updates the Redux state:

1. `fetchDecksStart` sets 'isLoading' on the redux state to *true*
2. `fetchDecksSuccess`, if dispatched, sets 'isLoading' to *false* and sets the 'decksObject' to the data returned from the asynchronous request
3. `fetchDecksFailed`, if dispatched, sets 'isLoading' to *false* and sets the 'error' to the error returned from the asynchronous request

These redux state updates, specifically the isLoading property, allowed me to ensure a user friendly experience. When the application fetches a users decks, instead of the user viewing a blank screen and perhaps wondering what was going on, a Spinner Component is displayed (when isLoading === true). This spinner dissappears when the decks have been fetched successfully.

**Reselect** is another library I took advantage of in this project. In order to explain why I implemented Reselect in Flashcards, I will first discuss the need for plain selectors when using Redux and the problem that arises when using them.

When I first started using Redux I learned that it is recommended to keep Redux state minimal and the data it stores in the most basic format.          
Then if you wish to transform the data into an alternative shape (e.g. object into an array) this logic should be contained in a selector and should not alter the original data shape.         
This is to allow for the possiblity of having multiple selectors performing different transformations on the base format of the data.

Note: multiple tranformations do not occur in Flashcards but I decided it would be good practice to practice best practices!

In Flashcards, a users decks data is fetched from firebase and stored in redux state as its most basic format (an object). I then used selectors to transform this object into the sorted array my project required.

**Note**: I used selectors to access any piece of redux state (even if no tranformation is required) as I found this pattern more readable and easier to understand than having to do the selection logic inside a useSelector hook.

To use the selectors in my project I used the useSelector hook in my components. The problem with useSelector is that it is triggered after *every* dispatched action regardless of what section of the Redux root state was actually updated. This means that any selectors the useSelector hook uses also run which becomes costly since some of these selectors may use expensive calculations.

The solution to this is momoization and this is where the Reselect Library comes in. Reselect provides a function called `createSelector` to generate memoized selectors.           
Although reselect selectors only momoize the most recent set of parameters, even if one selector may have a different input, the majority of the selectors re-running will have the same inputs as previous runs and therefore there will still be a large optimization boost.

For this reason I used createSelector when creating each of my selectors.

## Discussing the Next JS Course           

<a href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" target="_blank">Next.js and React - The Complete Guide</a> was created by Maximilian Schwarzmuller. This course has one section that serves as a React refresher, the rest is focused on Next.js.           

**What I learned in this course:**          

- Pages and File-based Routing
- Adding Dynamic Routes and Catch All Routes
- Page Pre-rendering and Data Fetching
    - getStaticProps
        - running server-side code using the file system
        - utilizing Incremental Static Generation (ISR)
        - getStaticPaths for dynamic routes
        - working with Fallback pages and 404 Pages
    - getServerSideProps 
        - Server-Side Rendering (SSR)
        - its context (accessing url, cookies etc)
        - dynamic routes
    - Client-Side Data Fetching and when to use it
        - using the SWR Next.js Hook
    - Combining Pre-Fetching with Client-Side Fetching
- Optimising Next.js Apps
    - Next.js Head Component
    - Working with the _app.js file
    - Creating a custom _document.js file
    - Next.js Optimised Image component
- Adding Backend Code with API Routes
- Deploying Next.js Apps
    - build options depending on your project
    - The Key Deployment Steps
        1. Checking and Optimising code
        2. The Next.js config file and environment variables
        3. Running a test build and reducing code size
        4. Deploying to a production site (Vercel)
- Authentication with the next-auth library
    - signing up / in a user
    - logging out
    - server-side page guards with getServerSideProps and cookies
    - protecting API routes

During the course I built (along with the course instructor) multiple small projects that focused on the teachings of specific sections, helping to solidify what I had learned:

1. A project focused on **File-based Routing**
2. A project focused on **Page pre-rendering and Data Fetching**
3. A project focused on **API Routes**

Near the end of the course we built a final large project, a blog website, incorporating everything that had been taught in the course. While building this project I was challenged to first attempt to complete many sections alone before watching the lectures to check my solution. I found this extremely effective in helping what I had learned during the course stick with me.

All the projects built during this course can be found in my Github repositories.

<a href="https://github.com/ainedoyle20/nextjs-course-project1" target="_blank">The File-based Routing Project</a>

<a href="https://github.com/ainedoyle20/nextjs-course-project2" target="_blank">The Page Pre-rendering and Data Fetching Project</a>

<a href="https://github.com/ainedoyle20/nextjs-course-project3" target="_blank">The API Routes Project</a>

<a href="https://github.com/ainedoyle20/nextjs-course-blog" target="_blank">The Blog Website Project</a>

