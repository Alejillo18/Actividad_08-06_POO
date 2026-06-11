export class Invoice {
    constructor(
        public id: string,
        public userId: string,
        public amount: number,
        public issuedAt: Date
    ) {}
}