# Currents2021
Official Repo for Currents 2021

Portal Link: www.currents.nitt.edu

#### Installation
- Clone / Download this repository.
- Install dependencies using 
```
    $ npm install
```

#### How to Run
- For dev work 
```   
    $ npm run dev
```
- For production 
```
    $ npm run start
```

#### File Structure
- The project is divided into backend and frontend folders.
- Backend contains the file structure for Express 
- Frontend contains the file structure for React

#### Backend
##### Routes 
- **/events :** Returns a list of titles and images of all events
- **/events/:id :** Returns title, description and image of particular event
- **/workshops :** Returns a list of titles and images of all workshops
- **/workshops/:id** : Returns title, description and image of particular workshop
- **/team :** Returns a list of names, titles and images of all core members
- **/sr :** Returns a list of titles, images of all social responsiblity events
- **/sr/:id :** Returns title, description and image for particular social responsiblity event
- **/tronicals :** Returns a list of titles and images of all published tronicals
- **/tronicals/:id :** Returns title, description and image of particular tronicals edition

##### Models
Contains database schema for each object.

##### Controllers
Acts as an intermediate to connect the model with the router.