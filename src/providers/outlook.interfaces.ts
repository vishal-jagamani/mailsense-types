// Outlook OAuth access token exchange response payload
export interface OutlookOAuthAccessTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    ext_expires_in: number;
    refresh_token: string;
    scope: string;
}

// User profile object returned from Microsoft Graph API /me endpoint
export interface OutlookUserProfile {
    id: string;
    displayName: string;
    givenName: string;
    surname: string;
    mail: string;
}

// Email address recipient object in Microsoft Graph API
export interface OutlookMessageEmailAddress {
    name: string;
    address: string;
}

// Full message resource object from Microsoft Graph API
export interface OutlookMessageObjectFull {
    id: string;
    receivedDateTime: string;
    sentDateTime: string;
    hasAttachments: boolean;
    subject: string;
    bodyPreview: string;
    parentFolderId: string;
    conversationId: string;
    conversationIndex: string;
    isRead: boolean;
    isDraft: boolean;
    webLink: string;
    body: { contentType: string; content: string };
    sender: { emailAddress: OutlookMessageEmailAddress };
    from: { emailAddress: OutlookMessageEmailAddress };
    toRecipients: { emailAddress: OutlookMessageEmailAddress }[];
    ccRecipients: { emailAddress: OutlookMessageEmailAddress }[];
    bccRecipients: { emailAddress: OutlookMessageEmailAddress }[];
}

// Response wrapper for Microsoft Graph API messages query
export interface OutlookMessagesResponse {
    '@odata.context': string;
    value: OutlookMessageObjectFull[];
    '@odata.nextLink'?: string;
    '@odata.deltaLink'?: string;
}
