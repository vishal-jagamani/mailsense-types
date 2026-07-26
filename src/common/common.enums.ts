/**
 * Supported date range filters for email and folder queries
 */
export enum DATE_RANGE {
    TODAY = 'today',
    LAST_WEEK = 'last_week',
    LAST_MONTH = 'last_month',
    LAST_3_MONTHS = 'last_3_months',
    ALL_TIME = 'all_time',
}

/**
 * Supported control types for UI filter options
 */
export enum FILTER_OPTION_TYPE {
    STRING = 'string',
    TOGGLE = 'toggle',
    DROPDOWN = 'dropdown',
}
