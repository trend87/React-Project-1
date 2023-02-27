const page =
        (
           <div>
            <h1>Hello World</h1>
            <p>I'm Israel and i am learning React</p>
           </div> 
        )

    ReactDOM.render(page, document.getElementById("root"))













// className User{
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     login(){
//         console.log(this.name, "login successful");
//         return this;
//     }
//     logout(){
//         console.log(this.name, "logout successful");
//         return this;
//     }
// }


// className Admin extends User{
//     deleteUser(user){
//         users = users.filter(u => {
//             return u.email != user.email
//         })
//     }
// }


// var userOne = new User ("emma", 20, "male");
// var userTwo = new User ("israel", 22, "male");

// var users = [userOne, userTwo];


// Javascript Prototype Construction Function Model

// function NewUser(email, name, age){
//     this.email = email;
//     this.name = name;
//     this.age = age
// }