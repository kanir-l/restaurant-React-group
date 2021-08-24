export class BookingModel {
    constructor(
        public id: number,
        public numberOfGuests: number,
        public date: Date,
        public time: number,
        public firstName: string,
        public lastName: string,
        public phone: number,
        public email: string,
        public specialRequest: string
    ) {}
}