import { AxiosInstance } from 'axios';
export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

declare global {
    interface Window {
        axios: AxiosInstance;
    }
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
