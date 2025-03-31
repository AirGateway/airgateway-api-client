/**
 * Represents the response for the API status endpoint.
 */
export interface StatusResponse {
    /**
     * The environment in which the API is running (e.g., production, staging).
     *
     * @example "production"
     */
    environment: string;

    /**
     * The current status of the API.
     *
     * @example "ok"
     */
    status: string;

    /**
     * The version of the API.
     *
     * @example "1.2"
     */
    version: string;
}
