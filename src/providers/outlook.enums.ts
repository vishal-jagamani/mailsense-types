// Outlook Graph API standard well-known folder names
export enum OUTLOOK_FOLDERS {
    INBOX = 'inbox',
    SENT = 'sentitems',
    ARCHIVE = 'archive',
    DRAFTS = 'drafts',
    DELETED = 'deleteditems',
    SPAM = 'spam',
    OUTBOX = 'outbox',
}

// Delta change reason for Outlook message mutation events
export enum OUTLOOK_MESSAGE_REMOVED_REASON {
    CREATED = 'created',
    DELETED = 'deleted',
    UPDATED = 'updated',
}
