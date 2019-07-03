# Pre lecture 

1. Make sure that students have installed SQL tabs

2. Make sure that students have signed up for a heroku account

# Lecture (Demo using postman to make requests)

1. Have students walk you through creating a basic express server 

    - Install express
    - create index.js
    - require express, create app and then do app.listen
    - Make sure to do app.use(express.json())

2. After creating a basic server, install massive and dotenv

3. create a .env file

4. git init, create a .gitignore file and then add .env and node_modules to your gitignore explaining why

5. Go to Heroku and show how to create an app and then a database.

- Grab connection string from heroku app
- Add connection string to .env file and add ?ssl=true
    * ssl stands for secure socket layer. It's a way to ensure that all the data sent back and forth with the database is encrypted.

6. Next, move into index.js and require and configure dotenv. require massive. Deconstruct server_port and connection string from the .env file.

7. instantiate massive and explain connection string. 

- Explain the .then and that massive is a function that will return a promise.
    * We need to handle the reponse thus the .then
- Console.log the db and explain how its the db object
- explain app.set('db', db')
    * this is a way of setting variables in express. There are certain properties that if set, express will do things behind the scenes which is why we invoke the app.set method.

8. Create the db folder at the root of the project. Create an init file and seed file explaining the purpose of both. Create a basic table in init and insert some records in seed.

9. Open sql tabs, connect to db and run init then seed.

10. Create a sql file, write sql to query the newly created table and then create the endpoint querying that file in index.js. 

- Write the db.get_pets() and explain that get_pets is a function that corresponds with the same named file in the db folder in the root.
- send back pets with res.send.

11. Create an endpoint to create a pet. Then create the sql file and show first the $1, $2. Explain that if there is only one argument you dont need an array but multiple require it

12. Next show using destructing from an object and rewrite the file.

13. If needed, review with queries params and body if needed with the class.

14. Move on to the mini