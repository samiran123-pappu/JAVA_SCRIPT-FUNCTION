// ✅ 1) Function Declaration (Basic)

// Used in utilities, helpers.

// function add(a, b) {
//   return a + b;
// }


// console.log(add(2, 3));
// ✅ 2) Function Expression (Stored in Variable)

// You asked about this many times 👇

// const greet = function() {
//   return "Hello";
// };


// console.log(greet());
// ✅ 3) Arrow Function (MOST USED IN YOUR PROJECTS)

// Used in GraphQL, Express, callbacks.

// const greet = () => {
//   return "Hello";
// };


// console.log(greet());

// Short version:

// const greet = () => "Hello";
// ✅ 4) Callback Function (You Used in Cron + HTTPS + GraphQL)

// Passed into another function.

// Example (Cron)
// new CronJob("* * * * *", function () {
//   console.log("Running...");
// });
// Example (HTTP request)
// https.get(URL, (res) => {
//   console.log(res.statusCode);
// });
// ✅ 5) Async Function (GraphQL + Database Calls)

// You use this in resolvers.

// async function getUser() {
//   return "Samiran";
// }


// getUser().then(console.log);
// Arrow Async (Most Common)
// const getUser = async () => {
//   return "Samiran";
// };
// ✅ 6) GraphQL Resolver Functions (VERY IMPORTANT)
// Query Resolver
// const resolvers = {
//   Query: {
//     users: () => {
//       return usersArray;
//     }
//   }
// };
// Async Resolver (Database)
// Mutation: {
//   createUser: async (_, args) => {
//     return await User.create(args);
//   }
// }
// ✅ 7) Schema Functions (Type Definitions)

// You asked about schemas many times.

// These are NOT JS functions, but they CONNECT to functions.

// type Query {
//   users: [User]
// }


// type Mutation {
//   createUser(name: String!): User
// }

// Connected to resolver function 👇

// createUser: async (_, args) => {}
// ✅ 8) Method Function (Inside Object)

// You use this in controllers and models.

// const user = {
//   name: "Sam",
//   greet() {
//     return "Hello " + this.name;
//   }
// };


// console.log(user.greet());
// ✅ 9) Constructor Function (Before Class Syntax)

// Used conceptually in Cron + Models.

// function User(name) {
//   this.name = name;
// }


// const u1 = new User("Sam");
// ✅ 10) Class Method Function (Modern Backend Style)

// Used in services.

// class UserService {
//   getUser() {
//     return "Sam";
//   }
// }


// const service = new UserService();
// console.log(service.getUser());
// ✅ 11) Higher Order Function (Callback Pattern)

// Function receiving function.

// function run(fn) {
//   fn();
// }


// run(() => console.log("Executed"));

// You used this indirectly in Express and Cron.

// ✅ 12) Middleware Function (Express / GraphQL Context)

// VERY COMMON.

// app.use((req, res, next) => {
//   console.log("Middleware running");
//   next();
// });



// const user = new userSchema({
//   name: "Samiran",
//   age: 21
// });



// const User = mongoose.model("User", userSchemaDefinition);

// const user = new User({});