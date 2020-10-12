export class BookModel {
    constructor(
        public author:string,
        public title:string,
        public edition:string,
        public keywords:string,
        public description:string,
        public themes:string,
        public copies:number,
        public avaliable:number
    ){}
}