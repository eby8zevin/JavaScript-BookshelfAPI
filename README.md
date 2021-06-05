# JavaScript-BookshelfAPI
Submission [Dicoding](https://www.dicoding.com/academies/261)

## Configuration [server.js](src/server.js)
Local Web Server
```
const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
```

## Installation
```bash
git clone https://github.com/eby8zevin/JavaScript-BookshelfAPI.git
cd JavaScript-BookshelfAPI

npm init

npm install @hapi/hapi

npm install nodemon --save-dev

npm install eslint --save-dev

npx eslint --init
```
Then you will be given several questions, please answer these questions with the following answers:
- How would you like to use ESLint? -> **To check, find problems, and enforce code style.**
- What type of modules does your project use? -> **CommonJS (require/exports).**
- Which framework did you use? -> **None of these.**
- Does your project use TypeScript? -> **N.**
- Where does your code run? -> **Node** (select using space).
- How would you like to define a style for your project? -> **Use a popular style guide.**
- Which style guide do you want to follow? -> (You are free to choose, for example choosing **AirBnB**).
- What format do you want your config file to be in? -> **JSON.**
- Would you like to …… (all further questions) -> **Y.**

After answering all the questions given, an eslint configuration file with the name **[.eslintrc.json](https://github.com/eby8zevin/JavaScript-BookshelfAPI/blob/main/.eslintrc.json)** will be formed.

```
npm install nanoid

npm run start
```

## Features

### 1. API can save books
``` 
Method: POST
URL: /books
Body Request: {...}
```
### 2. API can display whole book
```
Method : GET
URL: /books
```
### 3. API can display book details
```
Method : GET
URL: /books/{bookId}
```
### 4. API can change book data
```
Method : PUT
URL : /books/{bookId}
Body Request: {...}
```
### 5. API can delete books
```
Method : DELETE
URL: /books/{bookId}
```

## License
[ISC](LICENSE.md) — Copyright © 2021, Ahmad Abu Hasan
