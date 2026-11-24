// Sorting order for email search & list queries
export enum EmailSearchSortOrder {
    ASC = 'asc',
    DESC = 'desc',
}

export enum EMAIL_STATUS {
    RECEIVED = 'received',
    DRAFT = 'draft',
    SENT = 'sent',
}

// AI Smart Categorization domain classifications
export enum EMAIL_AI_CATEGORY {
    WORK = 'work',
    PERSONAL = 'personal',
    FINANCE = 'finance',
    SOCIAL = 'social',
    PROMOTIONS = 'promotions',
    UPDATES = 'updates',
    GENERAL = 'general',
}

// AI Priority Scoring levels for inbox triage
export enum EMAIL_AI_PRIORITY {
    CRITICAL = 'critical',
    HIGH = 'high',
    NORMAL = 'normal',
    LOW = 'low',
}

// Tone variants for AI-generated suggested replies
export enum SUGGESTED_REPLY_TONE {
    FORMAL = 'formal',
    CASUAL = 'casual',
    CONCISE = 'concise',
}
