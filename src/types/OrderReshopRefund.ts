import { Flight, OrderLog, Price, Seat, Service, TicketInfo, Trace } from "./shared";

/**
 * Represents the request payload for an Order Reshop Refund.
 */
export interface OrderReshopRefundPayload {
    /**
     * AirGateway order ID.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;
}

/**
 * Represents the response for an Order Reshop Refund request.
 */
export interface OrderReshopRefundResponse {
    /**
     * List of flights associated with the refund process.
     */
    flights: Flight[];

    /**
     * Original order price details.
     */
    originalOrder: Price;

    /**
     * Penalty fees applied to the refund.
     */
    penalty: Price;

    /**
     * The refundable amount after penalties.
     */
    refund: Price;

    /**
     * List of seats affected by the refund.
     */
    seats: Seat[];

    /**
     * List of services associated with the refunded order.
     */
    services: Service[];

    /**
     * List of tickets affected by the refund.
     */
    tickets: TicketInfo[];

    /**
     * Trace information for tracking the refund request.
     */
    trace: Trace;

    /**
     * The type of refund action available.
     * If "unknown", the agent needs to select the action.
     *
     * @example "void"
     * @enum ["void", "refund", "unknown"]
     */
    type: "void" | "refund" | "unknown";

    /**
     * List of warnings related to the refund process.
     */
    warnings: OrderLog[];
}
