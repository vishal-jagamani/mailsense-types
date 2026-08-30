import { ACCOUNT_PROVIDER } from '../accounts/accounts.enums.js';
import { ANALYTICS_TIMEFRAME } from './analytics.enums.js';

export interface OverviewMetricsAttributes {
    totalEmails: number;
    unreadEmails: number;
    sentEmails: number;
    starredEmails: number;
    draftsCount: number;
    activeAccountsCount: number;
    totalThreadsCount: number;
    emailsChangePercentage?: number;
    unreadChangePercentage?: number;
    sentChangePercentage?: number;
}

export interface AccountActivitySummaryAttributes {
    accountId: string;
    emailAddress: string;
    provider: ACCOUNT_PROVIDER;
    totalEmails: number;
    unreadEmails: number;
    sentEmails: number;
    lastSyncedAt?: number;
}

export interface EmailVolumeDataPointAttributes {
    date: string; // ISO date string format YYYY-MM-DD
    receivedCount: number;
    sentCount: number;
    totalCount: number;
}

export interface TopSenderDataAttributes {
    email: string;
    name: string;
    count: number;
    percentage: number;
    lastReceivedAt: string;
}

export interface ResponseTimeDistributionAttributes {
    under1Hour: number;
    between1And4Hours: number;
    between4And24Hours: number;
    over24Hours: number;
}

export interface ResponseTimeMetricsAttributes {
    averageResponseMinutes: number;
    medianResponseMinutes: number;
    totalRepliesAnalyzed: number;
    responseRatePercentage: number;
    distribution: ResponseTimeDistributionAttributes;
}

export interface AnalyticsQueryParams {
    accountId?: string;
    timeframe?: ANALYTICS_TIMEFRAME;
    startDate?: string;
    endDate?: string;
}

// API Response Types
export interface DashboardAnalyticsResponse {
    overview: OverviewMetricsAttributes;
    volumeTrend: EmailVolumeDataPointAttributes[];
    topSenders: TopSenderDataAttributes[];
    responseTime: ResponseTimeMetricsAttributes;
    accountSummaries: AccountActivitySummaryAttributes[];
    timeframe: ANALYTICS_TIMEFRAME;
    startDate: string;
    endDate: string;
}
