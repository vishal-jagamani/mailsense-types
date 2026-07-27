import { DATE_RANGE, FILTER_OPTION_TYPE } from './common.enums.js';

// Base entity interface for database models and domain entities
export interface BaseEntity {
    _id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

// Utility type for constructing creation inputs (omits DB-generated metadata)
export type CreateEntityInput<T> = Omit<T, '_id' | 'createdAt' | 'updatedAt'>;

// API Types
// Generic API response wrapper for payload object `T`
export interface APIResponse<T> {
    status: boolean;
    message: string;
    data: T;
}

// Generic paginated response wrapper for list requests containing array `T`
export interface PaginatedDataResponse<T> {
    data: T[];
    size: number;
    page: number;
    total: number;
}

// Standard API response envelope for mutation/update operations
export interface UpdateAPIResponse {
    status: boolean;
    message: string;
}

// Standard API response envelope for generic success operations
export interface SuccessAPIResponse {
    status: boolean;
    message: string;
}

// Shared search and filter options interface used across frontend & backend
export interface Filter {
    searchText?: string | undefined;
    accountId?: string[] | undefined;
    dateRange?: DATE_RANGE | undefined;
    folders?: string[] | undefined;
    unread?: boolean | undefined;
}

// Metadata definition for individual filter option choices
export interface FilterOptionData {
    id: string;
    name: string;
    label: string;
    selectedValue: string | boolean;
    provider?: string;
}

// Configuration payload for rendering filter controls
export interface FilterOption {
    id: number;
    name: string;
    label: string;
    type: FILTER_OPTION_TYPE;
    data: FilterOptionData[] | FilterOptionData;
}
