# Addres book app

A simple react app mocking an address-book

LIVE DEMO -> [Demo page hosting on Netlify](https://frosty-benz-d50b1c.netlify.app/)

## Installation

First, you need to clone the repo, for example:

```bash
git clone https://github.com/yocmen/address-book
```

them go to the folder
```bash
cd address-book
```

Create a .env and provide a valid string API:

To create a .env file just run:
```bash
touch .env
```

Example values:
```env
REACT_APP_USERS_API="https://randomuser.me/api"
STORYBOOK_USERS_API="https://randomuser.me/api"
```

## For Develop -> front-end

To work in the **front-end** you need to install the package dependencies.

Using Yarn just execute:

```bash
yarn install
```

to start the dev server just run:
```bash
yarn start
```
This will start the dev server on **http://localhost:3000**

If you need change the app port just add in the .env file
```env
PORT=NEW_PORT_NUMBER
```

StoryBook is used for some components, you can run:
```env
yarn storybook
```
To start a new server on port **6006** and check the visuals.

**Note: the faker library has some problems with the image URLs, that's why you can't see them in the components.**

## PRODUCTION Usage

Install all the dependencies in front-end (see **For develop** above).

The next step is create a build of the React  client, just run:

```bash
yarn build
```

When the process finished you can test the app running:

For install a webserver
```bash
yarn global add serve
```

To run the app in the webserver
```bash
serve -s build
```

This will start the **PRODUCTION** server on **http://localhost:5000** and from there you can see the app working.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)