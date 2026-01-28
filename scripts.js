// const user = {
//     "username" : "James", 
//     "age" : 12, 
//     "id" : 123, 
//     "location": "Lagos", 
//     "theme-colour": "black"
// }

// // convert object into a string
// // JSON.stringify()

// let string_user = JSON.stringify(user);

// localStorage.setItem("user", string_user)

let stored_user = localStorage.getItem("user");

console.log(stored_user);

//JSON.parse()

let original_user = JSON.parse(stored_user);

console.log(original_user)