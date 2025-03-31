/**
 * Represents the request payload for the Order PDF endpoint.
 */
export interface OrderPDFPayload {
    /**
     * The AirGateway order ID for which the PDF should be generated.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;
}

/**
 * Represents the response for the Order PDF endpoint.
 */
export interface OrderPDFResponse {
    /**
     * The URL at which the generated PDF file can be downloaded.
     *
     * @example "http://example.com"
     */
    downloadURL: string;
}
