import { GmailMessageObjectFull, GmailOAuthAccessTokenResponse, GmailUserProfile } from './gmail.interfaces.js';
import { OutlookMessageObjectFull, OutlookOAuthAccessTokenResponse, OutlookUserProfile } from './outlook.interfaces.js';

// Standard sync result payload returned from provider sync adapters
export interface EmailSyncResult {
    addedEmails: string[];
    deletedEmailIds: string[];
    newCursor: string;
}

// Union type for OAuth access token response across providers
export type IEmailTAuthToken = GmailOAuthAccessTokenResponse | OutlookOAuthAccessTokenResponse;

// Union type for user profile objects across providers
export type IEmailTUserProfile = GmailUserProfile | OutlookUserProfile;

// Union type for outgoing mail dispatch result across providers
export type IEmailTSendEmailResult = Partial<GmailMessageObjectFull> | OutlookMessageObjectFull;
