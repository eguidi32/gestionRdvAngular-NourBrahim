export interface UserModel {
    id: number;
    fullName?: string;
    email: string;
    password: string;
    role: UserRole;
}

type UserRole = 'Patient' | 'Medecin' | 'Admin';

export interface UserLoginRequest {
    email: string;
    password: string;
}

export interface UserLoginResponse {
    token?: string;
    user: UserModel;
}