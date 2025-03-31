/**
 * Represents the response for the Provider List endpoint.
 */
export interface ProviderListResponse {
    /**
     * A list of provider codes.
     *
     * @example ["BA", "IB", "LH"]
     */
    providers: string[];
}
