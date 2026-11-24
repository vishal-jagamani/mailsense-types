// Pluggable AI Provider strategies
export enum AI_PROVIDER_NAME {
    GEMINI = 'gemini',
    OPENAI = 'openai',
    ANTHROPIC = 'anthropic',
    NOOP = 'noop',
}

// Specific AI feature toggles
export enum AI_FEATURE_KEY {
    CATEGORIZATION = 'categorization',
    PRIORITY_SCORING = 'priorityScoring',
    SUMMARIZATION = 'summarization',
    SUGGESTED_REPLIES = 'suggestedReplies',
}

// Discriminated status for AI background processing job outcomes
export enum AI_PROCESSING_STATUS {
    SUCCESS = 'success',
    SKIPPED = 'skipped',
    FAILED = 'failed',
    RATE_LIMITED = 'rateLimited',
}
