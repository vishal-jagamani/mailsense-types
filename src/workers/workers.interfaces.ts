import { AI_PROCESSING_STATUS } from '../ai/ai.enums.js';
import { EMAIL_AI_CATEGORY, EMAIL_AI_PRIORITY } from '../emails/emails.enums.js';

// Background sync job worker execution result
export interface SyncJobResult {
    addedEmailsCount: number;
    deletedEmailsCount: number;
}

// Payload for AI processing background BullMQ job
export interface AIProcessingJobPayload {
    emailId: string;
    accountId: string;
    userId: string;
    providerMessageId: string;
    forceReprocess?: boolean;
}

// Result returned upon completion of AI processing job
export interface AIProcessingJobResult {
    emailId: string;
    status: AI_PROCESSING_STATUS;
    category?: EMAIL_AI_CATEGORY;
    priority?: EMAIL_AI_PRIORITY;
    hasSummary: boolean;
    processingDurationMs: number;
    skippedReason?: string;
}
