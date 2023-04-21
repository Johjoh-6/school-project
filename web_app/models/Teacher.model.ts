import User from "./User.model";


interface Teacher extends User {
    _id?: string;
    userId: string;
    subject: string;
}

export default Teacher;