import { BaseEntity, DATE_RANGE, Filter } from '../common/index.js';
import { FOLDER_KIND, FOLDER_ROLE } from './folders.enums.js';

// Folder entity attributes definition
export interface FolderAttributes extends BaseEntity {
    userId: string;
    accountId: string;

    providerFolderId: string;
    parentProviderFolderId: string;

    name: string;
    normalizedName: string;
    role: FOLDER_ROLE;
    kind: FOLDER_KIND;

    totalEmails: number;
    totalUnreadEmails: number;
    totalThreads?: number | undefined;
    totalUnreadThreads?: number | undefined;

    totalChildFolders: number;
    isHidden: boolean;

    color: {
        text: string;
        background: string;
    };

    lastSyncedAt: Date;
    providerMeta?: Record<string, unknown> | undefined;

    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}

// Request options for folder listing
export interface GetAllFoldersRequestOptions {
    userId: string;
    size: number;
    page: number;
    filters: Filter;
}

// Filters for folder query endpoints
export interface GetAllFoldersFilters {
    searchText?: string | undefined;
    accountId?: string[] | undefined;
    dateRange?: DATE_RANGE | undefined;
}

// Body parameters for folder creation
export interface CreateFolderBodyParams {
    accountId: string;
    folderName: string;
}
