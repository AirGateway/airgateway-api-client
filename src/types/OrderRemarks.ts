import { OrderRemarkData } from "./shared";

/**
 * Represents the request payload for the Order Remarks endpoint.
 */
export interface OrderRemarksPayload {
    /**
     * The order ID for which remarks should be added.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * The data containing the remark template, name, and variables.
     */
    data: OrderRemarkData;

    /**
     * The generated remarks text (optional).
     *
     * @example ""RM *BOOKINGPAD\nAGENT vitalii.savchuk.27\nAGENT ID 123\n""
     */
    result?: string;
}

/**
 * Represents the response for the Order Remarks endpoint.
 */
export interface OrderRemarksResponse {
    /**
     * Indicates whether the request was successful.
     */
    ok: boolean;
}
