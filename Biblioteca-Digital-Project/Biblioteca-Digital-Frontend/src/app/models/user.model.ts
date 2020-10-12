export class UserModel {
    constructor(
        public carnet:string,
        public name:string,
        public surname:string,
        public role:string,
        public password:string
    ){}
}