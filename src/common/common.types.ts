// Common pagination request parameters
export type PaginationQueryParams = {
    page?: number;
    size?: number;
};

// Generic ID type alias for entity identifiers
export type EntityId = string;

// Utility type forNullable values
export type Nullable<T> = T | null;
