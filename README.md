## WM Inventory

By Tim Cooper - November 11, 2015

---

#### Instructions

* Use the MeteorJS stack to create an inventory app that is available after signing in.
* Each user will have their own inventory.  Each inventory item will consist of a SKU and a quantity. Have CRUD functionality.
* Log your time by using a commit at the start of your work and at the end.
* Just create an empty commit (or make a small change: a space in the readme or something) with message START WORK, and END WORK respectively.
* DO NOT squash your commits at the end, I want to see the individual commits.  
* To start, use the MeteorJS generator
* You can upload your work to github when you’re done and send me a link.

---

#### Docs

###### 1. Create Meteor app
`meteor create wmInventory`

###### 2. Initialize Git repo and commit 'START WORK' message.
```
git init
git add -A
git commit -m "START WORK"
```

###### 3. Set up app structure
Create **client, server, lib and public** folders. Move files into appropriate folders.

###### 4. Set up routing
`meteor add iron:router`. Create router.js for handling paths.

###### 5. Add Bootstrap and Flat theme from Bootswatch
```
meteor add mizzao:bootstrap-3
meteor add bootswatch:lumen
```
Add bootstrap 3 and apply bootswatch Lumen theme.

###### 6. Add User Account config
```
meteor add accounts-password
```
Add Sign-in / Sign-up pages.. Add logged In conditions to navbar.
Fix Bootstrap collapse on navbar item clicks.
Add Sign-in, Sign-up and Sign-out functionality.

###### 7. User Inventory
Create Add Inventory Form
Show List of Inventory Items
Add functionality to "Add" form
Add functionality to "Edit" button
Add functionality to "Delete" button

---

###### 8. Developer Notes

I have not removed the "insecure" and "autopublish" packages of this Meteor app.

In production, the publish and subscribe relationship should be implemented.
