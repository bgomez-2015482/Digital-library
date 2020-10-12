export class MagazineModel {
    constructor(
        public author:string,
        public title:string,
        public edition:string,
        public description:string,
        public frecuency:string,
        public ejemplares:number,
        public themes:string,
        public keywords:string,
        public copies:number,
        public avaliable:number
    ){}
}