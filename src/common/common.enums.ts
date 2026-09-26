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

// Centralized keyboard navigation action identifiers for inbox operations — Phase 4 (UI-NEXT-02)
export enum KEYBOARD_SHORTCUT_ACTION {
    NEXT_EMAIL = 'NEXT_EMAIL',
    PREVIOUS_EMAIL = 'PREVIOUS_EMAIL',
    OPEN_EMAIL = 'OPEN_EMAIL',
    BACK_TO_LIST = 'BACK_TO_LIST',
    STAR_EMAIL = 'STAR_EMAIL',
    MARK_UNREAD = 'MARK_UNREAD',
    ARCHIVE_EMAIL = 'ARCHIVE_EMAIL',
    DELETE_EMAIL = 'DELETE_EMAIL',
    COMPOSE_EMAIL = 'COMPOSE_EMAIL',
    FOCUS_SEARCH = 'FOCUS_SEARCH',
    SHOW_SHORTCUTS = 'SHOW_SHORTCUTS',
}
