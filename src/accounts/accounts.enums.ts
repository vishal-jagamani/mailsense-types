// Supported email provider types
export enum ACCOUNT_PROVIDER {
    GMAIL = 'gmail',
    OUTLOOK = 'outlook',
}

// Status of the last background account synchronization
export enum ACCOUNT_LAST_SYNC_STATUS {
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
}

// Lifecycle status of queued account sync background jobs
export enum ACCOUNT_SYNC_JOB_STATUS {
    PENDING = 'PENDING',
    RUNNING = 'RUNNING',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
}

// Trigger source for background account sync jobs
export enum ACCOUNT_SYNC_JOB_TRIGGER_TYPE {
    MANUAL = 'MANUAL',
    SCHEDULED = 'SCHEDULED',
}
