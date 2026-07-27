import { BaseEntity, DATE_RANGE, Filter } from '../common/index.js';

// Full Email entity interface shared between frontend and backend
export interface EmailAttributes extends BaseEntity {
    accountId: string;
    providerMessageId: string;
    threadId: string;
    from: string;
    to: string[] | string;
    cc: string[] | string;
    bcc: string[] | string;
    subject: string;
    body: string;
    bodyHtml: string;
    bodyPlain: string;
    receivedAt: Date;
    isRead: boolean;
    folders: string[];
}

// Lightweight Email summary DTO for list views
export interface EmailListDTO extends BaseEntity {
    subject?: string | undefined;
    from?: string | undefined;
    receivedAt?: Date | undefined;
    isRead?: boolean | undefined;
    body?: string | undefined;
    bodyHtml?: string | undefined;
    bodyPlain?: string | undefined;
}

// Options for fetching paginated emails on frontend
export interface FetchEmailRequestOptions {
    userId: string;
    size: number;
    page: number;
    filters: Filter;
}

// Parameters for full text email search queries
export interface SearchEmailsParams {
    userId: string;
    searchText: string;
    size: number;
    page: number;
}

// Query filter parameters for email retrieval
export interface GetAllEmailsFilters {
    searchText?: string | undefined;
    accountId?: string[] | undefined;
    dateRange?: DATE_RANGE | undefined;
    folders?: string[] | undefined;
    unread?: boolean | undefined;
}

// Request payload for composing and sending an email
export interface ComposeEmailRequestBody {
    accountId: string;
    to: string[];
    subject: string;
    body: string;
}

// Recipient suggestion item returned from contact search
export interface SearchOtherContactsResponse {
    name: string;
    email: string;
}

// Filter dropdown metadata options for email lists
export interface GetFiltersResponse {
    accounts: { id: string; provider: string; emailAddress: string }[];
    folders: { id: string; name: string; providerFolderId: string }[];
}

// Response envelope for email listing endpoints
export interface GetEmailsResponse {
    data: EmailListDTO[];
    size: number;
    page: number;
    total: number;
}
