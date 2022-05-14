---
title: 'Crown Clothing'
excerpt: 'Crown Clothing is an online retail store where users can create an account, via email or google, and shop for clothes online.'
cover_image: '/images/projects/clothing.png'
github_link: 'https://github.com/ainedoyle20/crwn-clothing1'
viewLive_link: 'https://crwn-clothing-mauve.vercel.app/'
---

# Crown Clothing

![Crown Clothing Project Cover!](/images/projects/clothing.png)

I built this project as part of the Complete React Zero To Mastery course provided by the Zero To Mastery Academy.<br>
This course was originally recorded in 2020 but was updated in 2021 and has recently undergone a complete rerecording for 2022 including all the React best practices and various library updates (e.g. React Router v6 and Firebase v9). I have completed the 2021 updated course as well as the 2022 rerecorded course.

Although I built Crown Clothing during the course, I used what I learned about React and the various libraries to implement my own features into the project. These features were a **Confirmation Page**, an **Order History Page** and a **cart collection** in the firebase database with documents specific to the user. I also implemented rerouting at certain url paths depending on whether the user was signed in. I discuss these features more thoroughly at the end of this project summary under the heading [My Features](#my-features).

### Table of Contents

1. [Using the Crown Clothing App](#using-the-crown-clothing-app)
2. [The Tools I learned about in this course and are implemented in Crown Clothing](#the-tools-i-learned-about-in-this-course-and-are-implemented-in-crown-clothing))
3. [The Tools this course also covered but are *not* implemented in the final project Crown Clothing](#the-tools-this-course-also-covered-but-are-not-implemented-in-the-final-project-crown-clothing)
4. [My Features](#my-features)

### Using the Crown Clothing App

A Navigation bar is located at the top of this app on every page. You can use this bar to navigate between the home, shop, orders, contact and authentication pages. 

To create an account with Crown Clothing navigate to the authentication page. Here you can fill in your details (display name, email, password etc) or continue with your Google account. When you have successfully signed in you will be redirected to the Home Page.

Although you do not need an account to shop with Crown Clothing, some features of the website will be unavailable to you if you are not logged in (e.g. viewing your orders history).

On the home page you can choose a clothes section that you wish to browse. When you do this you will be directed to that specific clothing section page where all the clothes available in that section will be displayed. You can browse the collection and add items to your cart by clicking the ADD TO CART button attached to each item.

Alternatively you can navigate to the shop page where you will see a preview of items (4 of them) for all the clothing sections. To browse all items of a specific section (enter the specific section page as mentioned above) simpley click the SHOW ALL option.

Clicking the cart icon located in the navigation bar will toggle the cart dropdown allowing you to view your cart items. To navigate to the checkout page click the GO TO CHECKOUT button in the cart dropdown.

The Checkout Page will display your cart items and the total amount you will pay. You can increase or decrease the quantity of any item or completely remove the item on this page.         
To purchase the items click on the PAY NOW button located at the bottom of the page and enter your card details (a test card is available). Once your payment is complete you will be redirected to the Payment Confirmation Page.          
The Payment Confirmation Page will display the items you have successfully purchased and the final amount that was paid.

To view your previous orders simply navigate to the Orders Page. Note that you must be signed in to view past orders.           
On this page your previous orders will be listed under the date of purchase and in order of most recently orderd.

To logout (if you are signed in) simply click the 'Sign Out' option on the navigation bar.

### The Tools I learned about in this course and are implemented in Crown Clothing:  

- React Hooks
- React Router (v6)
- Redux
- Redux Logger
- Redux Sagas
- Reselect
- Redux Persist
- Code Optimizations
   - Code Splitting (lazy loading)
   - useCallback and memo
- Firebase
    - Firebase authentication
    - Firebase Firestore and CRUD
    - Frirebase Rules
- Stripe (for payment simulation)
- Styled Components 
- Typescript in React (Redux, Sagas, Selectors, Firebase functions and React components were all typed)

### The Tools this course also covered but are *not* implemented in the final project Crown Clothing:     

- Context API (used Redux instead)
- Redux thunk (went with Redux Saga instead)
- React v18 (remained with React v17 as v18 completely broke Stripe.js)
- Context API and Apollo
- Testing (implemented in older version of Crown clothing)
- SASS

### My Features       

- ***Firestore Cart Collection and Orders Collection***

The firestore cart collection and orders collection contain documents with uids matching user uids so that each document is specific to each user. 

While building Crown Clothing, the course demonstrated how to create firestore collections and documents and how to update and retrieve the data within them (user collecton and category items collection).

I used this knowledge to then create my cart collection as well as my orders collection in firebase firestore.

When a user logs out, their cart items are saved to their specific cart document in firebase and the shopping cart in the app is cleared so that other users will not view what that user had selected for their cart. When the user logs back in, their cart items are fetched from firebase firestore and populate the shopping cart again.         
The data in the orders collection is used to populate the Previous Orders Page. 

I used what I learned about firestore rules in this course and updated these rules so that a user can only retrieve and update data in a cart or orders document if their uid matches the uid of that cart or orders document.

- ***Payment Confirmation Page***

While Stripe simulates the payment process on confirming purchase of the cart items, the value of cartItems in redux state is set to the value of the confirmedItems redux state.     
After Stripe completes the payment the user is automatically redirected to the Payment Confirmation Page.      
This page displays the items the user just bought (using the confirmedItems value in redux state).     
These items are added to the orders document specific to the user currently logged in. On visiting the Previous Orders Page the newly bought items will now also be displayed.         
The shopping bag is cleared along with the user specific cart document in firestore (it now contains just an empty array).

- ***Previous Orders Page***

On visiting this page, the orders for the logged in user are fetched from firestore and are used to populate the orders redux state variable.             
The orders are stored in redux as an array of objects.      
I used the reselect library to create a selector to select this array and then return this array sorted in the order of most recently ordered items.     
On leaving this page, the orders redux state variable is returned to an empty array. This prevents orders of one user being displayed initially when another user visits this page.
