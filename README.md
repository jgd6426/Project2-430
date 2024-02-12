# Project 2 - IGME.430
Create a satisfying and engaging web application that users would use in the real world. The application must have user accounts and a use for those accounts.

**Visit the project here: https://noteboard-proj2-d8e56d4a78aa.herokuapp.com**

## What is the intended purpose of the application? What does it do?
This application is a task management application. Each user can make post-it notes to keep track of projects, assignments, or just daily tasks.

## How is React being used? What components have been made?
React is being used to create the Post-it notes as components, similar to how the Domos were created in DomoMaker. The notes, the form to make new notes, the form for the user to change their password, the login and sign-in forms and directory, and the ad space are all components.

## What data is being stored in MongoDB?
MongoDB stores each Post-it note made by the user with their ID, the title, info, due date, and when the note was created. User accounts with unique IDs, usernames, and encrypted passwords are also being stored.

## What went right in the development of this project?
I think the styling is pretty close to my mockups, so I’m very proud of that. The login/signup page works correctly. I had to change things around to have the nav before getting into the app only show either the login or sign-up button. I got this to work by making those directories react components. Inside the app, notes can be created and displayed successfully. Also, the forms to make a new note or change the account password successfully pop up and close using the useState method.

## What went wrong in the development of this project?
I couldn’t figure out how to access account data being stored in Mongo while inside the app. So I couldn’t display the username in the nav under the image like I wanted to. I also couldn’t figure out how to delete notes when the pin was clicked on or allow the user to change their password. I assumed it was similar to getting all the notes saved in the user’s account and displaying them, but when I tried doing the same kind of thing it wasn’t working. I also couldn’t figure out how to close the make note form after it successfully made a note, but I did find a way around this by adding a separate button to close the form, after the note is made all the fields get cleared and the error message tells the user it was added. I also didn’t leave myself enough time to figure out how to implement the premium version of the app including the app theme customization options.

## What did I learn while developing this project?
I learned that having mockups of what I want the app to look like ahead of time helps me know which direction to go, and I’m not coming up with styling on the spot and hoping it’s cohesive. Another thing with that though, I think my mockups should have been more detailed in how the app functioned. For example, I should have included the making note form, and (assuming I was able to implement it) what the user needs to do after pressing the “premium” button, to get the premium status and get into that part of the app. I also learned that I need to start sooner, ask for help more and sooner, and make a better plan for what needs to get done and when (set goals of what to accomplish by the end of that working period). For a specific example, I found myself spending a lot of time trying to figure out how to access the account username so I could display it. I spent a couple of hours over multiple days but nothing I tried worked and I worked all that time to make no progress. I know now I need to plan for that time spent trying to fix errors, but also I need to reach out for help soon after I realize I can’t figure it out so that I don’t waste any more of that time and I can move on to the next thing.

## If I were to continue, what would I do to improve this application?
I would start by fixing/implementing everything I couldn’t do before it was due. (website themes, being able to change the individual note colors, premium version, showing the user name, closing the forms after they submit successfully, deleting notes) Besides those though, I would like to fix some of the styling to be more responsive, since I used absolute position for a lot of the elements it looks pretty funky the smaller the screen gets. I would also like to include more features, like having the user be able to name and create more boards besides “my board” for more organization. Also, include some kind of collaborative board like I thought for the premium version in my mockup, but make that also customizable by making friends with other accounts and choosing who to collaborate with on which board. Also, have the user be able to upload their photo instead of having the default placeholder one, which could then be used for adding friends or seeing who made each note in the collab boards.

## If I went above and beyond, how?
I’m not sure how much this counts, I know the project assignment says CSS frameworks count as above and beyond. I didn’t use a framework, I just did all the styling myself (and there’s a lot of it, and organized it as best I could by splitting it into separate files) but I feel like I did pretty well with the styling of the app and I’m hoping that might count for something.

## If any borrowed code or code fragments are used, where did they come from? What do the code fragments do? Where are they in the code?
Most of the code is from the DomoMaker-E assignment. Then I also used w3schools tutorials for help with a lot of the CSS. I also used code from https://www.youtube.com/watch?v=ZCvemsUfwPQ&t=302s to help with getting the make note and change password forms to open and close using useState, this code is in maker.jsx in lines 72, 76, 77, 89, 144, 148, 149, 161.


## Screenshots
### Mockup/Ideas
https://www.figma.com/file/M5sjVa5f1qiPaWdwMQ5lNl/NoteBoard?type=design&node-id=0%3A1&mode=design&t=kCZlgdrQwQsvMFB1-1

### Login and Sign-up Pages

<img width="1288" alt="Screenshot 2024-02-12 at 2 04 54 PM" src="https://github.com/jgd6426/Project2-430/assets/100483381/7a997534-2c91-49e0-bebd-715042216640"> 
<img width="1238" alt="Screenshot 2024-02-12 at 2 05 03 PM" src="https://github.com/jgd6426/Project2-430/assets/100483381/129286ef-041b-45bc-b3e8-8897486f59b1">

### Inside the app

<img width="1440" alt="Screenshot 2024-02-12 at 2 05 36 PM" src="https://github.com/jgd6426/Project2-430/assets/100483381/2922946b-08d3-4607-953b-f36823dd5f69"> 
<img width="1440" alt="Screenshot 2024-02-12 at 2 05 55 PM" src="https://github.com/jgd6426/Project2-430/assets/100483381/dea70338-872e-4d51-8ab1-acefab9a5972">

### Creating Notes

https://github.com/jgd6426/Project2-430/assets/100483381/0c689fcf-1c3c-410e-ae54-89ebe273f35d

