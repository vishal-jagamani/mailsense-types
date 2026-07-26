import { ACCOUNT_PROVIDER } from './accounts.enums.js';
import { AccountProviderType } from './accounts.interfaces.js';

// Default synchronization interval in milliseconds (15 minutes)
export const DEFAULT_SYNC_INTERVAL_MS = 15 * 60 * 1000;

// List of supported account providers metadata
export const SUPPORTED_ACCOUNT_PROVIDERS: AccountProviderType[] = [
    { id: 1, name: ACCOUNT_PROVIDER.GMAIL, displayName: 'Google Mail' },
    { id: 2, name: ACCOUNT_PROVIDER.OUTLOOK, displayName: 'Microsoft Outlook' },
];
