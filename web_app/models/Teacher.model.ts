import User from "./User.model";


interface Teacher extends User {
    userId: string;
    subject: string;
}

export default Teacher;