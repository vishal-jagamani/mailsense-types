import { SYSTEM_EVENT } from './events.enums.js';

// Payload for SYNC_COMPLETED system event
export interface SyncCompletedPayload {
    accountId: string;
    addedEmailsCount: number;
    deletedEmailsCount: number;
    startedAt: number;
    completedAt: number;
}

// Payload for EMAIL_CREATED system event
export interface EmailCreatedPayload {
    accountId: string;
    email: string;
}

// Registry interface mapping system events to their payload types
export interface SystemEventPayloads {
    [SYSTEM_EVENT.SYNC_COMPLETED]: SyncCompletedPayload;
    [SYSTEM_EVENT.EMAIL_CREATED]: EmailCreatedPayload;
}
