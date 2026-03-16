import { UserModel } from "../core/models/user.model";

export const MOCK_USERS: UserModel[] = [
    {
        id: 1,
        fullName: 'Patient User',
        email: 'patient@example.com',
        password: 'user123',
        role: 'Patient'
    },
    {
        id: 2,
        fullName: 'Medecin Dupont',
        email: 'medecin@example.com',
        password: 'medecin123',
        role: 'Medecin'
    },
    {
        id: 3,
        fullName: 'Admin User',
        email: 'admin@example.com',
        password: 'Admin123',
        role: 'Admin'
    }
];
