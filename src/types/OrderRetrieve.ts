/**
 * Represents the request payload for the Order Retrieve endpoint.
 */
export interface OrderRetrievePayload {
    /**
     * The unique identifier of the AirGateway order.
     * @example "AGW-JHTE1543KJ"
     */
    id: string;
}
