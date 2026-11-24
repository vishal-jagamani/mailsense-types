import { AI_PROVIDER_NAME } from '../ai/ai.enums.js';
import { BaseEntity, DATE_RANGE, Filter } from '../common/index.js';
import { EMAIL_AI_CATEGORY, EMAIL_AI_PRIORITY, SUGGESTED_REPLY_TONE } from './emails.enums.js';

// DB entities
export interface EmailAttributes extends BaseEntity {
    accountId: string;
    providerMessageId: string;
    threadId: string;
    threadCount?: number;
    from: string;
    to: string[];
    cc: string[];
    bcc: string[];
    subject: string;
    body: string;
    bodyHtml: string;
    bodyPlain: string;
    receivedAt: Date;
    isRead: boolean;
    folders: string[];
    attachments?: EmailAttachment[];
    aiCategory?: EMAIL_AI_CATEGORY;
    aiPriority?: EMAIL_AI_PRIORITY;
    aiSummary?: string;
    aiTags?: string[];
    aiProcessedAt?: Date;
    aiProvider?: AI_PROVIDER_NAME;
}

export interface EmailAttachment {
    attachmentId: string;
    filename: string;
    mimeType: string;
    size: number;
    contentId?: string;
    isInline: boolean;
}

// Structured AI analysis metadata for email documents
export interface EmailAiMetadata {
    category: EMAIL_AI_CATEGORY;
    priority: EMAIL_AI_PRIORITY;
    summary: string;
    tags: string[];
    confidence: number;
    processedAt: Date;
    provider: AI_PROVIDER_NAME;
}

// Lightweight Email summary DTO for list views
export interface EmailListDTO extends BaseEntity {
    subject?: string;
    from?: string;
    receivedAt?: Date;
    isRead?: boolean;
    providerMessageId?: string;
    accountId?: string;
    threadId?: string;
    threadCount?: number;
    attachmentCount?: number;
    body?: string;
    bodyHtml?: string;
    bodyPlain?: string;
    to?: string[];
    cc?: string[];
    bcc?: string[];
    hasAttachments?: boolean;
    aiCategory?: EMAIL_AI_CATEGORY;
    aiPriority?: EMAIL_AI_PRIORITY;
    aiSummary?: string;
}

export interface EmailMoveParams {
    emailIds: string[];
    targetFolderId: string;
    accountId?: string;
}

export interface EmailStarParams {
    emailIds: string[];
    star: boolean;
}

export interface EmailUnreadParams {
    emailIds: string[];
    unread: boolean;
}

export interface EmailDeleteParams {
    emailIds: string[];
}

export interface EmailArchiveParams {
    emailIds: string[];
}

// Phase 4 (REFACTOR-BE-02: Structured context for per-account batch actions)
export interface PerAccountActionContext {
    accountId: string;
    emailIds: string[];
    providerMessageIds: string[];
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
    aiCategory?: EMAIL_AI_CATEGORY | undefined;
    aiPriority?: EMAIL_AI_PRIORITY | undefined;
}

// Request payload for composing and sending an email
export interface ComposeEmailRequestBody {
    accountId: string;
    to: string[];
    subject: string;
    body: string;
    cc?: string[];
    bcc?: string[];
    inReplyTo?: string;
    threadId?: string;
    attachmentIds?: string[];
}

// Recipient suggestion item returned from contact search
export interface SearchOtherContactsResponse {
    name: string;
    email: string;
}

// Filter dropdown metadata options for email lists
export interface GetFiltersResponse {
    accounts: FilterAccountOption[];
    folders: FilterFolderOption[];
}

// Response envelope for email listing endpoints
export interface GetEmailsResponse {
    data: EmailListDTO[];
    size: number;
    page: number;
    total: number;
}

// Response envelope for email threads endpoints
export interface GetThreadResponse {
    thread: EmailAttributes[];
    threadId: string;
}

export interface MoveEmailsRequestBody {
    emailIds: string[];
    targetFolderIds: string[];
    removeFolderIds?: string[];
}

export interface MoveEmailsResponse {
    success: boolean;
    updatedCount: number;
}

export interface BatchEmailActionRequest {
    emailIds: string[];
}

export interface EmailEndpointParams {
    emailId: string;
}

export interface EmailAttachmentEndpointParams {
    emailId: string;
    attachmentId: string;
}

export interface FilterAccountOption {
    id: string;
    provider: string;
    emailAddress: string;
}

export interface FilterFolderOption {
    id: string;
    name: string;
    providerFolderId: string;
}

// Response payload for on-demand email/thread summarization
export interface GetEmailSummaryResponse {
    emailId: string;
    summary: string;
    keyPoints: string[];
    actionItems: string[];
    generatedAt: number;
}

// Individual suggested reply option
export interface SuggestedReplyItem {
    id: string;
    title: string;
    body: string;
    tone: SUGGESTED_REPLY_TONE;
}

// Response payload for contextual quick replies
export interface GetSuggestedRepliesResponse {
    emailId: string;
    suggestions: SuggestedReplyItem[];
    generatedAt: number;
}
