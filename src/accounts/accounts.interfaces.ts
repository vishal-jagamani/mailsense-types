import { IEmailTUserProfile } from '../providers/provider.interfaces.js';
import { ACCOUNT_LAST_SYNC_STATUS, ACCOUNT_PROVIDER, ACCOUNT_SYNC_JOB_STATUS, ACCOUNT_SYNC_JOB_TRIGGER_TYPE } from './accounts.enums.js';

// Display metadata for connected account providers
export interface AccountProviderType {
    id: number;
    name: string;
    displayName: string;
}

// Main Account entity model and DTO representation
export interface AccountAttributes {
    userId: string;
    provider: ACCOUNT_PROVIDER;
    emailAddress: string;
    userProfileDetails: IEmailTUserProfile;
    accessToken: string;
    refreshToken: string;
    accessTokenExpiry: number;
    refreshTokenExpiry: number;
    scope: string;
    syncEnabled: boolean;
    syncInterval: number;
    lastSyncedAt: number;
    lastSyncCursor?: string | undefined;
    active: boolean;
    syncInProgress?: boolean | undefined;
    lastSyncStatus?: ACCOUNT_LAST_SYNC_STATUS | undefined;
    lastSyncError?: string | undefined;
    lastSyncStartedAt?: number | undefined;
    lastSyncCompletedAt?: number | undefined;
}

// Metrics and counters tracked for an account
export interface AccountMetricsAttributes {
    accountId: string;
    totalEmails: number;
    totalThreads: number;
    totalLabels: number;
    totalFolders: number;
    totalContacts: number;
    date: Date;
}

// Execution record for queued background account sync jobs
export interface SyncJobAttributes {
    accountId: string;
    bullJobId: string;
    status: ACCOUNT_SYNC_JOB_STATUS;
    triggerType: ACCOUNT_SYNC_JOB_TRIGGER_TYPE;
    startedAt: number;
    completedAt?: number | undefined;
    addedEmailsCount: number;
    deletedEmailsCount: number;
    errorMessage?: string | undefined;
    errorStack?: string | undefined;
}

// API response wrapper for accounts list
export interface GetAccountsResponse {
    data: AccountAttributes[];
}

// OAuth authorization callback query parameters
export interface OAuthCallbackParams {
    code: string;
    state: string;
}
