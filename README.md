# Zibby Account Portal

## Scripts
- `npm install` or `yarn`
- `npm start` or `yarn start`


## Instructions:
What has been provided is a partially-complete and simplified react/redux scaffolded mini-project. <br>
Don't delete any existing files, but you are encouraged to replace and add whatever logic (and files) you need to complete the task. <br>
https://github.com/axios/axios

1. When the app initializes, dispatch an action to fetch from https://swapi.co/api/people/.
2. You'll receive a list, from which you'll need to choose a single person at random (and store that into redux).
3. Using that data, dispatch another action to fetch information about his/her homeworld (and store the homeworld data).
4. Both Home and About should bind to the reducers' states- (1) display personhood data in Home and (2) planetary data in About.