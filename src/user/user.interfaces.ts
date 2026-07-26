// User entity representation
export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture?: string | undefined;
}

// Detailed Auth0 user profile payload object
export interface UserDetailsObject {
    created_at: string;
    email: string;
    email_verified: boolean;
    identities: {
        connection: string;
        provider: string;
        user_id: string;
        isSocial: boolean;
    }[];
    name: string;
    nickname: string;
    picture: string;
    updated_at: string;
    user_id: string;
    user_metadata: Record<string, unknown>;
    last_ip: string;
    last_login: string;
    logins_count: number;
}

// Response interface for update password endpoint
export interface UpdatePasswordResponseObject {
    message: string;
}

// User profile settings data structure
export interface ProfileSettingsDataObject {
    nickname: string;
    name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    sub: string;
    user_metadata: {
        phone_number: string;
    };
}

// Response envelope for profile settings update
export interface UpdateUserProfileSettingsResponse {
    status: boolean;
    message: string;
    data: ProfileSettingsDataObject;
}