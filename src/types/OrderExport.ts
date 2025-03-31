/**
 * Represents the request payload for the Order Export endpoint.
 */
export interface OrderExportPayload {
    /**
     * The starting date of the issuing period for the order export.
     *
     * @example "2025-03-01"
     */
    issuingDateFrom: string;
    /**
     * The ending date of the issuing period for the order export.
     *
     * @example "2025-03-26"
     */
    issuingDateTo: string;
    /**
     * A list of email addresses to which the generated files will be sent.
     *
     * @example ["email@example.com", "admin@example.com"]
     */
    recipientEmails: string[];
}

/**
 * Represents the response for the Order Export endpoint.
 */
export interface OrderExportResponse {
    /**
     * Indicates whether the operation was successful.
     */
    ok: boolean;
}
