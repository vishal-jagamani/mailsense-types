// Standard Gmail system label identifiers
export enum GMAIL_LABELS {
    INBOX = 'INBOX',
    SENT = 'SENT',
    SPAM = 'SPAM',
    TRASH = 'TRASH',
    UNREAD = 'UNREAD',
    STARRED = 'STARRED',
    IMPORTANT = 'IMPORTANT',
}

// Gmail label visibility in message lists
export enum GMAIL_LABEL_MESSAGE_LIST_VISIBILITY {
    SHOW = 'show',
    HIDE = 'hide',
}

// Gmail label visibility in label list sidebar
export enum GMAIL_LABEL_LABEL_LIST_VISIBILITY {
    LABEL_SHOW = 'labelShow',
    LABEL_SHOW_IF_UNREAD = 'labelShowIfUnread',
    LABEL_HIDE = 'labelHide',
}

// Type of Gmail label (system created vs user defined)
export enum GMAIL_LABEL_TYPE {
    SYSTEM = 'system',
    USER = 'user',
}
