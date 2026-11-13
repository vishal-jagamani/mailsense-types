import { BaseEntity } from '../common/index.js';
import { ATTACHMENT_STATUS } from './attachments.enums.js';

export interface StagedAttachmentAttributes extends BaseEntity {
    userId: string;
    accountId: string;
    r2Key: string;
    filename: string;
    mimeType: string;
    size: number;
    isInline?: boolean;
    contentId?: string;
    status: ATTACHMENT_STATUS;
    expiresAt: Date;
}

export interface UploadAttachmentResponse {
    success: boolean;
    attachment: StagedAttachmentSummaryDTO;
}

export interface DeleteStagedAttachmentResponse {
    success: boolean;
    message: string;
}

export interface StagedAttachmentSummaryDTO extends BaseEntity {
    attachmentId: string;
    filename: string;
    mimeType: string;
    size: number;
}

export interface UploadStagedAttachmentPayload {
    accountId: string;
}
