import { BaseEntity } from '../common/common.interfaces.js';
import { EmailAttachment } from '../emails/emails.interfaces.js';

// DB Entities
// Full Draft entity interface shared between frontend and backend
export interface DraftAttributes extends BaseEntity {
    userId: string;
    accountId: string;
    providerDraftId?: string;
    to: string[];
    cc?: string[];
    bcc?: string[];
    subject: string;
    body: string;
    bodyPlain?: string;
    inReplyTo?: string;
    attachments?: EmailAttachment[];
    lastSavedAt: Date;
    syncedToProvider?: boolean;
}

// API Contracts
// Request payload for auto-save draft endpoint
export interface SaveDraftRequestBody {
    draftId?: string;
    accountId: string;
    to: string[];
    cc?: string[];
    bcc?: string[];
    subject: string;
    body: string;
    inReplyTo?: string;
}

// Response payload when dispatching a draft
export interface SendDraftResponse {
    sentEmailId: string;
    providerMessageId: string;
}

// DTO Interfaces
// Summary DTO for draft list view
export interface DraftListDTO extends BaseEntity {
    accountId: string;
    to: string[];
    subject: string;
    lastSavedAt: Date;
    snippet?: string;
}
