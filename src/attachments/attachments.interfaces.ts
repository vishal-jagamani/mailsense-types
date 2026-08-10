import { BaseEntity } from '../common/index.js';

export interface StagedAttachmentAttributes extends BaseEntity {
    userId: string;
    accountId: string;
    r2Key: string;
    filename: string;
    mimeType: string;
    size: number;
    isInline?: boolean;
    contentId?: string;
    status: 'STAGED' | 'ATTACHED' | 'EXPIRED';
    expiresAt: Date;
}

export interface UploadAttachmentResponse {
    success: boolean;
    attachment: {
        attachmentId: string;
        filename: string;
        mimeType: string;
        size: number;
        createdAt: Date;
    };
}

export interface DeleteStagedAttachmentResponse {
    success: boolean;
    message: string;
}

export interface SendEmailRequestBody {
    accountId: string;
    to: string[];
    cc?: string[];
    bcc?: string[];
    subject: string;
    body: string;
    inReplyTo?: string;
    attachmentIds?: string[];
}
