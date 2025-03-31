import { OrderLog, Trace } from "./shared";

/**
 * Represents the request payload for the Order Cancel endpoint.
 */
export interface OrderCancelPayload {
    /**
     * The unique identifier of the order to be canceled.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * The type of cancellation request. It can be a void, refund, or left empty.
     *
     * @example "void"
     */
    type?: "void" | "refund" | "";
}

/**
 * Represents the response for the Order Cancel endpoint.
 */
export interface OrderCancelResponse {
    /**
     * The unique identifier of the canceled order.
     *
     * @example "Qm9va2lu350BaQXM5TXVRcENTSE8ySXNMa1FyYzV35DAx"
     */
    orderID: string;

    /**
     * Request tracking details for debugging.
     */
    trace: Trace;

    /**
     * List of warnings related to the cancellation request, if any.
     */
    warnings?: OrderLog[];
}
