import { EMAIL_AI_CATEGORY, EMAIL_AI_PRIORITY } from '../emails/emails.enums.js';
import { SuggestedReplyItem } from '../emails/emails.interfaces.js';

// Input parameter for email classification & priority scoring
export interface AiClassifyEmailParams {
    subject: string;
    from: string;
    to: string[];
    bodyPlain: string;
    receivedAt: Date;
}

// Result of classification & scoring
export interface AiClassifyEmailResult {
    category: EMAIL_AI_CATEGORY;
    priority: EMAIL_AI_PRIORITY;
    summary: string;
    tags: string[];
    confidence: number;
}

// Input message item for thread summarization
export interface AiThreadMessageInput {
    from: string;
    date: Date;
    bodyPlain: string;
}

// Input parameter for thread summarization
export interface AiSummarizeThreadParams {
    threadSubject: string;
    messages: AiThreadMessageInput[];
}

// Result of thread summarization
export interface AiSummarizeThreadResult {
    summary: string;
    keyPoints: string[];
    actionItems: string[];
}

// Input parameter for suggested replies
export interface AiSuggestedRepliesParams {
    subject: string;
    from: string;
    to: string[];
    bodyPlain: string;
    receivedAt: Date;
    recentMessages?: AiThreadMessageInput[];
}

// Result of suggested replies
export interface AiSuggestedRepliesResult {
    suggestions: SuggestedReplyItem[];
}
