export class User {
    public name:string;
    email:string;
    topic:string;
    timePreference:string;
    subscribe:boolean;
    constructor(
        name:string,
        email:string,
        topic:string,
        timePreference:string,
        subscribe:boolean
    ){
        this.name=name;
        this.email=email;
        this.topic=topic;
        this.timePreference=timePreference;
        this.subscribe=subscribe;

    }
   

}
