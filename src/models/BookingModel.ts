export class BookingModel {
    constructor(
        public id: number,
        public guest: number,
        public date: Date,
        public time: number,
        public name: string,
        public phone: number,
        public email: string
    ) {}
}