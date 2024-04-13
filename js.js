class User {
    #password;
    constructor(name, userName, password) {
    this.name = name;
    this.userName = userName;
    this.#password = password;
    }
    login(userName, password) {
    if (userName === this.userName && password === this.#password) {
    console.log('Login Successfully');
    } else {
    console.log('Authentication Failed!!');
    }
    }
    setPassword(newPassword) {
    this.#password = newPassword;
    }
    };
    const object1= new User('belay', 'belay', 'password:)');
    const js = new User('JavaScript', 'js', 'python:)');
   
    object1.login('belay', 'password:)'); 
    js.login('js', 'javascript'); 
    console.log(object1.name); 
    console.log(object1.password); 
    console.log(js.password); 
    js.setPassword('new_password');
    js.login('belay', 'password:)'); // Authentication Failed!!
    js.login('belay', 'new_password'); 