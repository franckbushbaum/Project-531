 *Design inspired by the popular RTS game Starcraft and, to a lesser extent, Cyberpunk 2077.*

![Alt Text](https://media3.giphy.com/media/Xl2FpESIc1fWBlDhHs/giphy.gif?cid=790b7611f5cb753355ee7d28ec880206c841962a469d8693&amp;rid=giphy.gif)

### A workout app for the popular workout template, [Jim Wendler's 5/3/1](https://www.jimwendler.com/collections/books-programs/products/5-3-1-second-edition-hard-copy).
---
### Prerequisites <br />

- Internet browser (e.g. Chrome, Firefox, Safari)<br />
- Node.js<br />
- PostgreSQL<br />

---

### Time <br />

- 2 weeks

---

### Step 1. Design

<img src="./pics/pageonemockup.png" style="float: left; margin-right: 5px"> 
<img src="./pics/pagetwomockup.png" style="float: left; margin-right: 5px">
<img src="./pics/pagethreemockup.png" style="float: left; margin-right: 5px">
<img src="./pics/pagefourmockup.png" style="float: left; margin-right: 5px">

---

### Step 2. Datapath using [Lucidchart](https://www.lucidchart.com/pages/)

- This was the original concept schematic for how the data would flow behind the scenes.  I was confident I had all the data routes figured out, and was impressed by how wrong I actually was. As of writing, there are twice as many GET, POST, and DELETE routes as originally planned (and more are coming.) This is forgiveable on such a small, linear solo project; I would find it invaluable to do multiple iterations in group projects to keep everyone on the same page and speaking the same language.
<img src="./pics/Datapath.png" style="float: left; margin-right: 5px">

---



### Tuesday & Wednesday:
- [x] Create routing for 1st page. ~4 hours
- [x] Create button for first page, that goes to first and second page (testing) ~2hr
- [x] Create a best guess of table, with testing values ~1.5hr
- [x] Create basic layout for second page. (Lots to improve upon in CSS, I think flexbox will work well but tonight has revealed how little I know about grid.) ~2 hr
- [x] Added signature to footer. ~10 mins
- [x] Base functionality of page three complete. ~4 hours.
- [x] Successfully push input values into useState. (This was a challenge.  New to switch statements and new to Material UI...In using Material UI for the dropdown menu, I ran into an unexpected issue with the syntax where grabbing the value's id was not immediately apparent.  As soon as I find out how to grab that value, the switch statement should also come together.) ~3 hours
- [x] Create and dispatch object data. (As of writing this, this involves updating the database with new values not included in the scope, but it is still early in the game and no time has been wasted.)

### Friday:
- [x] Posted the workouts added to the DOM.
- [x] Destructured the workout list into workout items
- [x] Append only the new workout.  ~14 hour day... lots of lessons learned!

### Saturday:
- [x] Create a table for the new workout
- [x] Edit functionality in new workout (I'm not sure if I should have 1 saga, or many, I'm going to do a combination of both -- the Edit/Delete will have their own saga, for practice sake.)
- [x] Properly linking all pages. Clearing inputs, adding an Edit button with addition and subtraction functionality.
- [x] Discovered and added Sweet Alerts. (All of Saturday and Sunday involved a great deal of practicing ternary operators and conditional rendering, ~7 hours on that alone over the 2 days.)

### Monday:
- [x] PUT req to server completed and tested.
- [x] Basic CSS layout for page 2s completed.
- [x] Data cursor on /user page... this may be much more complicated than it looks.
- [x] History page has data from last workouts
- [x] History page has a delete function
- [x] Link up the remaining 3 bodyparts to also be able to post a workout.

In the future:
- [] Dress up your GitHub for visitors.
- [] Deploy to Heroku.


# EDA Project
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).


## Deployment (Future goal.)

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

