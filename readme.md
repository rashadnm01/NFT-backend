
## NFT Bank

# Project Summary
-  This application provides the user a storage of all the NFTs. User gets to sign in, add NFTs in his own collection, access each individual NFT and read about it more indepth or delete it. The main home page will have a carousel of random NFTs. User will also be able to browse to see other NFTs. The goal is to make an "instagram" for NFTs.
The functionalities of this application are outlined below:


[Description - User Story]
# User Stories
- I can create a new NFT and see that it loads on the page. 
- I can see a list of all my NFTs when I login.
- click on one of my NFTs and have it take me to the linked    website.
- delete an NFT. 
- Able to update an NFT. 

## User Persona(s)
 This approach follows the "Four Perspectives" method by Lene Nielsen outlined in interaction-design.org.

 This is designed toward the the "Goal-Oriented" Persona, and is defined as follows: "...by its personal, practical, and company-oriented goals as well as by the relationship with the product to be designed, the emotions of the persona when using the product, and the goals of the persona in using the product (hence Goal-Directed)." 

Thus, the desired outcome for this application is to provide the user a solution to store NFTs, and will provide simple intiutive UI with the functions and features outlined below...

###Scope of Functionalities

## Functions & Features
- Basic CRUD Functionality; User should be able to Create, Read, Update and Delete their stored information.


## Acceptance Criteria
To meet Minimum Viable Product, this application will provide: 
- Detailed README
- Full CRUD functionality to its data model.
- Follow RESTful conventions 
- Responsive Styling


- This Application will have its backend deployed on Heroku with its frontend deplyed to Netlify.

## Intent & Desired Outcome
- A full functioning application that provides the user with an storage solution for NFTs

# Challenges

- detail roadblocks : TBD


## List of Technologies
Built with ReactJS, Node.js 

Dependencies with versions outlined below:
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^6.0.12",
    "morgan": "^1.10.0"

## Models

List here any models in your app and their properties:

const nftSchema ({
    name: "",
    image_url: "",
    external_link: "",
    description: "",
    traits: "",
    stats: ""
)},

## Route Table

List your routes in a table

| url | method | action |
|-----|--------|--------|
|/nft | GET | get all NFTs (index)|
|/nft/:id | GET | get individual NFT(show)| 
|/nft/:id/edit | GET | Show (edit) form |
|/nft/new | GET | Show (new) NFT input form|
|/nft | POST | Input NFT, redirect home|
|/nft/:id | PUT | Update NFT, redirect home |
|/nft/:id | DELETE |Delete NFT,redirect home|


##Collaborators

Frontend: Max-Styling ( Frontend Repo Owner ), Ray. 
Backend: Rashad and John ( Backend Repo Owner ).

[Sources Cited]
TBD