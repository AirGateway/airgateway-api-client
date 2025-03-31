import { Passenger, Payment, ServiceRequest } from "./shared";

/**
 * Represents the request payload for the OrderChange endpoint.
 */
export interface OrderChangePayload {
    /**
     * A flag used in some cases of the OrderChange.
     * This can indicate actions like accepting disruption, splitting the order, or issuing pending items on hold.
     *
     * Enum:
     *  - `accept_disruption`: Accept the disruption of an order.
     *  - `split_order`: Split the order into multiple parts.
     *  - `issue_pending_items_on_hold_mode`: Pay the pending items on the order that are on hold.
     *  - `""`: Default action, if no specific action is provided.
     *
     * @example "issue_pending_items_on_hold_mode"
     */
    action?: "accept_disruption" | "split_order" | "issue_pending_items_on_hold_mode" | "";

    /**
     * The unique identifier for the order being changed.
     * This is the AirGateway order ID associated with the existing order.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * The loyalty program account number associated with the corporate order.
     * This is optional and used for orders that are tied to a corporate loyalty program.
     */
    loyaltyProgramAccount?: string;

    /**
     * A list of passengers whose information may be updated in the order.
     * The details of the passengers being amended can include name changes, additions, or removals.
     */
    passengers: Passenger[];

    /**
     * Payment details for the amended order.
     * This can include changes to the payment method or other payment-related updates.
     */
    payment: Payment;

    /**
     * The Reshop offer ID associated with the reshop process.
     * This ID is provided in the response from the OrderReshop endpoint and is used to link to an alternative flight or offer.
     *
     * @example "OFFER-454JD07N00INPGFI3KPBK3UGODHWKTXX04INXL738ZJ47E3KUFTOYBV8MQ9LLONH"
     */
    reshopOfferID?: string;

    /**
     * A list of services to be requested as part of the order change.
     * This can include services like seat upgrades, additional baggage, or other special requests.
     */
    services?: ServiceRequest[];
}
