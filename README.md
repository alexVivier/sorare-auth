# Sorare basic api auth

I created this repo to test Sorare API.

## Config

First you have to download deps

````
npm i
````

Next, you have to set email and password in /src/auth/auth.service.js. The two variables are in line 6 and 7.

## Usage

Once you've setup email and password you juste have to go in repo directory in a cli.

Then use this command :

````bash
npm run start
````

## Data explaination

The retrieve data is last 10 player cards.

Each card contains this data :
- Card ID
- Card name
- Card pictureUrl
- Card SO5Scores
- Card Power