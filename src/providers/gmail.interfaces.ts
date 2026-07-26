import { GMAIL_LABEL_LABEL_LIST_VISIBILITY, GMAIL_LABEL_MESSAGE_LIST_VISIBILITY, GMAIL_LABEL_TYPE } from './gmail.enums.js';

// Google OAuth access token exchange response payload
export interface GmailOAuthAccessTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
}

// User profile object returned from Google OAuth / userinfo endpoint
export interface GmailUserProfile {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
}

// Gmail API header structure
export interface GmailMessageHeaderFull {
    name: string;
    value: string;
}

// Gmail API payload part structure
export interface GmailMessagePartsFull {
    partId: string;
    mimeType: string;
    filename: string;
    headers: GmailMessageHeaderFull[];
    body: { size: number; data: string };
}

// Full Gmail API message resource payload
export interface GmailMessageObjectFull {
    id: string;
    threadId: string;
    labelIds: string[];
    snippet: string;
    payload: {
        partId: string;
        mimeType: string;
        filename: string;
        headers: GmailMessageHeaderFull[];
        body: { size: number; data?: string };
        parts: GmailMessagePartsFull[];
    };
    sizeEstimate: number;
    historyId: string;
    internalDate: string;
}

// List response envelope from Gmail messages API
export interface GmailMessages {
    messages: { id: string; threadId: string }[];
    nextPageToken?: string;
    resultSizeEstimate: number;
}

// Simplified message reference for history records
export interface GmailMessageRef {
    id: string;
    threadId: string;
}

// Gmail history change record item
export interface GmailHistoryRecord {
    id: string;
    messages?: GmailMessageObjectFull[];
    messagesAdded?: { message: GmailMessageRef }[];
    messagesDeleted?: { message?: GmailMessageRef; messageId?: string; id?: string }[];
    labelsAdded?: string[];
    labelsRemoved?: string[];
}

// Response payload from Gmail History API
export interface GmailHistoryResponse {
    history: GmailHistoryRecord[];
    nextPageToken?: string;
    historyId: string;
}

// Individual label details from Gmail Labels API
export interface GmailLabel {
    id: string;
    name: string;
    messageListVisibility?: GMAIL_LABEL_MESSAGE_LIST_VISIBILITY;
    labelListVisibility?: GMAIL_LABEL_LABEL_LIST_VISIBILITY;
    type: GMAIL_LABEL_TYPE;
    messagesTotal?: number;
    messagesUnread?: number;
    threadsTotal?: number;
    threadsUnread?: number;
    color?: {
        textColor: string;
        backgroundColor: string;
    };
}

// Gmail labels list API response
export interface GmailLabelsListResponse {
    labels: GmailLabel[];
}

// Google People API Person contact resource
export interface GooglePerson {
    resourceName: string;
    etag: string;
    emailAddresses?: {
        metadata: { primary?: boolean; sourcePrimary?: boolean; source: { type: string; id: string } };
        value: string;
    }[];
    names?: {
        metadata: { primary?: boolean; sourcePrimary?: boolean; source: { type: string; id: string } };
        displayName: string;
        familyName?: string;
        givenName?: string;
    }[];
}

// Google People API search response wrapper
export interface GoogleOtherContactsSearchResponse {
    results?: {
        person: GooglePerson;
    }[];
}
