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

var userOne = new User ("emma", 20, "male");
var userTwo = new User ("israel", 22, "male");

userOne.login().logout()
userTwo.login().logout()
