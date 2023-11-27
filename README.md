# We Share It - Social Media Platform

Welcome to We Share It - a dynamic social media platform designed for individuals who love sharing their experiences, interests, and inspirations through captivating photos and videos. This platform provides a visually immersive way to connect, explore, and engage with a diverse community of content creators.

The purpose of this Portfolio Project #5(Advanced Front-End Project), this is part of me achieving the Diploma in Full Stack Software Development at [Code Institute](https://codeinstitute.net/).
![Image](images/iAmResponsive.png)

[View live website here](https://weshare-it-2feb6d10cc1b.herokuapp.com/login)

## Table of content
1. [Project](#project)
   - 1.1 [Objective](#objective)
   - 1.2 [Site Users Goal](#site-user-goal)
   - 1.3 [Site Owners Goal](#site-owners-goal)
   - 1.4 [Project Management](#project-management)
2. [User Experience](#user-experience)
   - 2.1 [Wireframes](#wireframes)
   - 2.2 [User Stories](#user-stories)
   - 2.3 [Site Stracture](#site-structure)
   - 2.4 [Design](#design)
      - 2.4.1 [Typography](#typography)
      - 2.4.2 [Color scheme](#color-scheme)
3. [Features](#features)
   - 3.1 [Navigation](#navigation)
   - 3.2 [Authentication](#authentication)
   - 3.3 [Home page](#home-page)
   - 3.4 [Feed](#feed)
   - 3.5 [Loved](#loved)
   - 3.6 [Profile page](#profile-page)
   [Future features](#Future-features)
 4. [Technologies Used](#technologies-used)
    - 4.1 [Languages](#langauges)
    - 4.2 [Frameworks, Toolkit & Software](#frameworks-toolkit-software)
    - 4.3 [Libraries](#libraries)
5. [Testing](#testing)
   - 5.1 [Code Validation](#51-code-validation)
   - 5.2 [Fixed bugs](#52-fixed-bugs)
   - 5.3 [Supported screens and browsers](#53-supported-screens-and-browsers)
   - 5.4 [Test cases](#54-test-cases)
   - 5.5 [Automation test](#55-automation-test)
6. [Deployment](#deployment)
7. [Credits](#credits)

## Project
<hr>

### Objective
<hr>
The primary objective of "WeShareIt," our social media platform, is to connect people with similar interests, facilitate content sharing, foster online communities, support private and group communication, encourage user engagement, ensure a seamless user experience, and expand its global presence by accommodating diverse languages and cultures.

### Site Users Goal
<hr>
The site users' goal on "WeShareIt" is to connect, share, and engage within a diverse online community.

### Site Owners Goal
<hr>
The site owner's goal for "WeShareIt" is to provide a vibrant and user-friendly social media platform that fosters meaningful connections, content sharing, and community engagement while ensuring the platform's sustainability and growth.

### Project Management
<hr>

#### Gihub Project Board

![Image](images/user-stories.png)
![Image](images/project-board.png)

#### Database Schema

 All the models have been set up in a separate DRF repository. Click [here](https://github.com/araldwin/weshareit-api) to view the repository or [here](https://wsiapi2023-b84941ad1c92.herokuapp.com/) to view the deployed API.

[Back to top](#table-of-content)

## User Experience
<hr>

### Wireframes
<hr>

 I used balsamiq to create wireframes for my project.
- [View wireframes here]()

### User Stories
<hr>

### _As a Site User, I Want To:_

1. **Sign Up and Log In**
   - Sign up for a new account.
   - Log in securely to access my account and personalized content.

2. **Create and Edit My Profile**
   - Create and customize my user profile with a profile picture and personal information.
   - Edit my profile details, including my name, bio, and profile picture.

3. **Discover Content**
   - Explore  photos shared by other users.
   - Discover trending and popular posts from different categories.

4. **Follow and Interact With Users**
   - Follow other users whose content I find interesting.
   - Like, comment on, and share posts from users I follow.

5. **Create and Share Posts**
   - Create or upload images to engage with the community.
   - Add hashtags and categories to make my posts discoverable by others.

6. **Search and Discover Users, Content, and Communities**
   - Search for specific users using keywords and filters.
   - Discover new users, most like post , and vibrant communities of interest.

7. **Log Out and Secure My Account**
    - Log out of my account to protect my privacy and security.
    - Reset my password in case of login issues.

8. **Access Across Devices**
    - Seamlessly access the platform on various devices, including desktop, mobile, and tablets.

[Back to top](#table-of-content)

### Site Structure
<hr>
   
The site structure for WeShare-It, the social media platform, encompasses various key sections, including a dynamic home page for user engagement, user profiles for personalization, content feeds for sharing and discovery, post creation capabilities, and a custom 404 error page, all designed to create an intuitive and engaging user experience.

[Back to top](#table-of-content)

### Design
<hr>

 WeShare-It boasts an elegantly crafted and user-centric design, seamlessly blending visually appealing aesthetics with intuitive navigation, ensuring an engaging and delightful social media experience for all users.

- ### Typography
   <hr>
   <details><summary>typography screen shot</summary>
      <p> <img src="images/typography.png"></p>
      </details>
      In this project, I use font-family Roboto and Open Sans.
- ### Color scheme
   <hr>
   <details><summary>color palette preview</summary>
      <p> <img src="images/We-ShareIt color scheme.png"></p>
      </details>
      These colors are integral to the overall design and appearance of the website.

[Back to top](#table-of-content)
## Features
- ### A Simple, Easy to Remember URL:[WeShare-It](https://weshare-it-2feb6d10cc1b.herokuapp.com/)
   <hr>

- ### Navigation
   <hr>
   
    The navigation bar adapts its functionalities based on the user's authentication status, providing different options for logged-out and logged-in users. It also ensures responsiveness for mobile and tablet devices.
   #### _Logged-Out State_
   - ##### Logo and Navigation:
      - WeShare-it logo on the left
      - Home icon
      - Login/Authenticate page on the right
         <details><summary>Logged-Out State Preview</summary>
         <p><img src="images/loggedoutstate.png"></p>
         </detail>
      - Mobile Responsiveness View
         - Hamburger icon to reveal dropdown menu for navigation options
            <details><summary>Mobile Preview</summary>
            <p><img src="images/mobileloggedoutview.png"></p>
            </detail>
   #### _Logged-In State_
   - ##### Logo and Navigation:
      - WeShare-it logo on the left
      - Create Pin icon
      - Functionalities: Home, Feed, Loved, Logout, Profile icons on the right
         <details><summary>Logged-In State Preview</summary>
         <p><img src="images/loggedinstate.png"></p>
         </detail>
      - Mobile Responsiveness View
         - Hamburger icon to reveal dropdown menu for navigation options
            <details><summary>Mobile Preview</summary>
            <p><img src="images/mobileview.png"></p>
            </detail>
- ### Authentication
   <hr>

    Users can log-in, and log-out using the options provided in the navigation bar.
   #### _Sign up process_
   - New users who wish to create an account on WeShare-it can follow these steps:
      1. Click on the **Sign-up** menu option in the Log-in Page.
      2. Follow the user account sign-up process provided through dj-rest/auth/registration.
      3. Enter necessary details to create a new user account.
               <details><summary>Sign-up Preview</summary>
               <p>_Desktop/Laptop Sign-up Preview_<br><img src="images/signupview.png"></p>
               <p>_Mobile Sign-up Preview_<br><img src="images/mobilesignupview.png"></p>
               <p>_Tablet Sign-up Preview_<br><img src="images/tabletsignupview.png"></p>
               </detail>
   #### _Log In process_
   - Existing users with a WeShare-it user account can sign in by:
      1. Clicking on the **Log-in icon** menu option in the Navigation Bar.
      2. Providing their credentials (username and password) through the authentication process.
               <details><summary>Log in Preview</summary>
               <p>_Desktop/Laptop view_<br><img src="images/loginpreview.png"></p>
               <p>_Mobile Sign-up Preview_<br><img src="images/mobileloginpreview.png"></p>
               <p>_Tablet Sign-up Preview_<br><img src="images/tabletloginpreview.png"></p>
               </detail>
   #### _Log out process_
   - Once logged in, users can log-out by:
      1. Clicking on the **Log-out icon** visible in the Navigation Bar.        
               <details><summary>Log-out icon Preview</summary>
               <p>_NavBar view_<br><img src="images/logoutnavbarpreview.png"></p>
               <p>_Log-out icon_<br><img src="images/logouticonpreview.png">
               </p>
               <summary>**Mobile Log-out Preview**</summary>
               <p>- _Select burger icon to see the log-out icon._ <br><img src="images/mobilelogoutpreview.png"></p>
               </detail>

 - ### Home page
   <hr>

   The three main components of the WeShare-It home page, highlighting the functionality and layout of each section. 
   
   1. **Most Followed Profiles**

      The Most Followed Profiles component showcases the top four users with the highest follower count. The layout and interaction differ based on device views (desktop/laptop vs. tablet/mobile).

      - Displays avatars and usernames of the most followed profiles for logged-out users in desktop/laptop view.
            <details><summary>Preview</summary>
            <p>_Desktop/Laptop view_<br><img src="images/mostfollowedprofilesforguestusersdesktopview.png"></p>
            </detail>

      - Shows the top four most followed profiles for logged-out users in tablet/mobile view.
            <details><summary>Preview</summary>
            <p>_Mobile view_<br><img src="images/mostfollowedprofilesmobileloggedoutview.png"></p>
            <p>_Tablet view_<br><img src="images/mostfollowedprofilestabletloggedoutview.png"></p>
            </detail>

      - Logged-in users (desktop/laptop view) can follow/unfollow profiles directly from this component.
            <details><summary>Preview</summary>
            <p>_Desktop/Laptop view_<br><img src="images/mostfollowedprofilesloggedindesktopview.png"></p>
            </detail>
      
      - Clicking on an avatar redirects to the full profile page of the respective user.

   2. **Created pins**

      The Created pins component displays all pins created through the WeShare-It platform. Pins are ordered by the created date, with the most recent ones appearing first.
      
      - Masonry layout on desktop/laptop/tablet view for optimal pin display.
            <details><summary>Preview</summary>
            <p>_Desktop/Laptop view_<img src="images/masonrylayoutview.png"></p>
            <p>_Tablet view_ <br><img src="images/tabletmasonrylayoutview.png"></p>
            </detail>

      - Infinite scroll method for mobile view to handle the pins' presentation.
            <details><summary>Preview</summary>
            <p><img src="images/infinitescrollview.png"></p>
            </detail>

      - Information displayed: user who posted the pin, date, title, description, pin image, love (like) counts, comment counts.

      - User-specific interactions: Love/unlove functionality for logged-in users (excluding their own pins), comment functionality.

   3. **Search and Filter**

      The Search and Filter component allows users to search for specific pins by Title, user name, description, or categories.

      - Enables users to search for pins based on various criteria.
      - provides a filtering mechanism for a refined search experience.
            <details><summary>Search and Filter Preview</summary>
            <p><img src="images/searchandfilterpreview.png"></p>
            </details>
      
- ### Feed
  <hr>

   The Pins Display in the Feed page showcases pins that are exclusively posted by the currently logged-in user. It filters and displays only the pins created by the user who is accessing the Feed page.

   - Fetches pins from the API but filters to show only those posted by the logged-in user.
   - if the logged in user has not posted any pins, a "No results found,[user] hasn't posted yet." message is displayed inside the Feed component.
   - similar layout and functionality as the homepage's Pins component, displaying user-specific pins.
           



