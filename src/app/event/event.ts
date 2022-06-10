export class Event {
    constructor(public _id:string,public title:string,public eventDate:Date,public mainSpeakerId:String,public otherSpeakersIds:String[],public studentsIds:String[]){

    }
}