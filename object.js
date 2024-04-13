const user = {
    name: 'Kedir dereje',
    userName: 'kedir',
    password: '123456',
    login: function(userName, password) {
    if (userName === this.userName && password === this.password) {
    console.log('Login Successfully');
    } else {
    console.log('Authentication Failed!!');
    }
    },// convert the above function to arrow function
    };
    user.login('kedir', '123456');
    user.login('frie', 'password');
    // Authentication Failed!!
    // Login Successfully
