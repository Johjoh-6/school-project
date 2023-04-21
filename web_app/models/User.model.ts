import Documents from "./Doc.model";

interface User {
    _id?: string;
    email: string;
    password: string;
    fname?: string;
    lname?: string;
    role?: "teacher" | "student" | "staff" | "user";
    document?: Documents[];
    age?: number;
    created_at?: Date;
    updated_at?: Date;
}

export default User;