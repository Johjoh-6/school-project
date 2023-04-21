import User from "./User.model";


interface ClassStudent {
    _id?: string;
    name: string;
    students: User[];
}

export default ClassStudent;