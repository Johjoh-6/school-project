
export default class Db {
    protected url: string;

    constructor() {
        this.url = 'http://localhost:3000';
    }

    protected getToken = (): string => {
        return localStorage.getItem('token') || '';
    }
}
