export interface ErrorResponse {
    /**
     * The group or category of the error. This value helps to classify the error,
     * such as network issues, server errors, or authentication failures.
     *
     * @example "authentication"
     */
    group: string;

    /**
     * A unique error code that identifies the specific error within the system.
     * This code is useful for pinpointing the exact cause of the error and can be
     * used for debugging or user support.
     *
     * @example "AGW_expired_JWT"
     */

    code: string;
    /**
     * The HTTP status code associated with the error.
     * This value typically reflects the HTTP response code.
     *
     * @example 401
     */
    status: number;

    /**
     * A detailed message that explains the error. This may include context about
     * what went wrong and can help with troubleshooting.
     *
     * @example "Expired JWT."
     */
    detail: string;

    /**
     * A unique identifier for the request that caused the error. This can be used
     * for tracing and identifying the specific request that generated the error.
     *
     * @example "68530dd470d24037b01747c0fdfdc994"
     */
    requestID: string;

    /**
     * A unique identifier for the session during which the error occurred.
     * This can help link errors to a specific session for tracking or logging purposes.
     *
     * @example "cbe421ee790a431dbd51da8a618dce35"
     */
    sessionID: string;
}
