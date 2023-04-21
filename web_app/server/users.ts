import Db from "./db";
import User from "~/models/User.model";

export default class Users extends Db {
    protected userUrl: string;

    constructor() {
        super();
        this.userUrl = `${this.url}/users`;
    }

    public registerUser = async (user: User): Promise<{ token: string }> => {
        const response = await fetch(`${this.url}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        return response.json();
    }

    public loginUser = async (user: User): Promise<{ token: string }> => {
        const response = await fetch(`${this.url}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        return response.json();
    }

    public  getAllStudents = async (): Promise<User[]> => {
        const token = this.getToken();
        const response = await fetch(`${this.userUrl}/students`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.json();
    }

    public  getUserById= async (id: string): Promise<User> => {
        const token = this.getToken();
        const response = await fetch(`${this.userUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.json();
    }

    public  updateUserById = async (id: string, user: User): Promise<User> =>{
        const token = this.getToken();
        const response = await fetch(`${this.userUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(user),
        });
        return response.json();
    }


}