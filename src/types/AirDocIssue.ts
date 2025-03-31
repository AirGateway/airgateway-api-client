import {
    Payment
} from "./shared";

/**
 * Represents the request payload for the AirDocIssue endpoint.
 * */
export interface AirDocIssuePayload {
    /**
     * The unique identifier of the AirGateway order.
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * The payment details for ticket issuance.
     */
    payment: Payment;
}


