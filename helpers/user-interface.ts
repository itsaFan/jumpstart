

export interface NewUserProps {
    onAddUser: (user: {
        email: string;
        password: string;
    }) => void;
}