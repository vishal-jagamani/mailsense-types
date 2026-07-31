import { BaseEntity } from '../common/common.interfaces.js';
import { ACCOUNT_SYNC_MODE } from './user.enums.js';

export interface UserAccountSyncSettings {
    globalAutoSync: boolean;
    syncMode: ACCOUNT_SYNC_MODE;
    globalSyncInterval: number;
    defaultSyncInterval: number;
}

export interface UserAccountSettings {
    syncSettings: UserAccountSyncSettings;
    // Future additions: defaultAccountId?, signature?, etc.
}

export interface UserSettings extends BaseEntity {
    userId: string;
    account: UserAccountSettings;
}

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
