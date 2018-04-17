# Zibby Account Portal

## Scripts
- `npm install` or `yarn`
- `npm start` or `yarn start`


## Instructions:
What has been provided is a partially-complete and simplified react/redux scaffolded mini-project. <br>
Don't delete any existing files, but you are encouraged to replace and add whatever logic (and files) you need to complete the task. <br>
You may use axios, an http client to help in your task (https://github.com/axios/axiosX).

1. When the app initializes, dispatch an action to fetch from https://swapi.co/api/people/.
2. You'll receive a list, from which you'll need to choose a single person at random (and store his/her data into redux).
3. Using that data, dispatch another action to fetch information about his/her homeworld (and store the homeworld data as well).
4. Both Home and About should bind to the redux states- (1) display personhood data in Home and (2) planetary data in About.