export class BookingModel {
    constructor(
        public _id: number,
        public id: number,
        public numberOfGuests: number,
        public date: Date,
        public time: number,
        public firstName: string,
        public lastName: string,
        public phone: string,
        public email: string,
        public specialRequest: string
    ) {}
}