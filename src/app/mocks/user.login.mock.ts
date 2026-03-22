import { UserModel } from "../core/models/user.model";

export const MOCK_USERS: UserModel[] = [
    {
        id: 1,
        fullName: 'Patient User',
        email: 'patient@nour.com',
        password: 'patient123',
        role: 'Patient'
    },
    {
        id: 2,
        fullName: 'Medecin Dupont',
        email: 'medecin@nour.com',
        password: 'medecin123',
        role: 'Medecin'
    },
    {
        id: 3,
        fullName: 'Admin User',
        email: 'admin@nour.com',
        password: 'admin123',
        role: 'Admin'
    }
];
