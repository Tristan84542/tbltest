export class User {
    username: string;
    password: string;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }
}

export function initUser(){
    const username = 'techtest1';
    const password = 'TechTest1!';
    return new User(username, password);
}