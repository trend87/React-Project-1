class User{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    login(){
        console.log(this.name, "login successful");
        return this;
    }
    logout(){
        console.log(this.name, "logout successful");
        return this;
    }
}


class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}


var userOne = new User ("emma", 20, "male");
var userTwo = new User ("israel", 22, "male");

var users = [userOne, userTwo];