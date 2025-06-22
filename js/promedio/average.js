export class Average{
    constructor(name, lastName, score1, score2, score3, score4){
        this._name = name
        this._lastName = lastName
        this._score1 = score1
        this._score2 = score2
        this._score3 = score3
        this._score4 = score4
    }
    get getName(){
        return this._name
    }
    get getLastName(){
        return this._lastName
    }
    get getScore1(){
        return this._score1
    }
    get getScore2(){
        return this._score2
    }
    get getScore3(){
        return this._score3
    }
    get getScore4(){
        return this._score4
    }
    set setName(name){
        this._name = name
    }
    set setLastName(lastName){
        this._lastName = lastName
    }
    set setScore1(score1){
        this._score1 = score1
    }
    set setScore2(score2){
        this._score2 = score2
    }
    set setScore3(score3){
        this._score3 = score3
    }
    set setScore4(score4){
        this._score4 = score4
    }
    calculateAverage(){
        return (this._score1+this._score2+this._score3+this._score4) / 4.0;
    }
}

