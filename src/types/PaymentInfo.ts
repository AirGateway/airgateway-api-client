import { Payment, Price, ServiceRequest } from "./shared";

/**
 * Represents the request payload for the PaymentInfo endpoint.
 */
export interface PaymentInfoPayload {
    /**
     * AirGateway order ID. This ID refers to the order for which payment information is being processed.
     * Example: `AGW-JHTE1543KJ`.
     */
    id: string;

    /**
     * Payment details including method, amount, and other required payment information.
     * This object should align with the `Payment` interface.
     */
    payment: Payment;

    /**
     * (Optional) AirGateway reshop offer ID. This ID is used when a reshop offer is associated with the order.
     * Example: `OFFER-ZNPPE8B5OL2CT7A5PMBXI9RR27TV8J32MH7CY48NKJLRSB1SBBGSV7OF16N04XPY`.
     */
    reshopOfferID?: string;

    /**
     * A list of services associated with the order, such as cancellations or additions.
     */
    services: ServiceRequest[];

    /**
     * AirGateway OfferPrice response ID. This ID corresponds to the response from an OfferPrice request, which is used in the context of shopping and pricing.
     * Example: `ACR5L1UXXJS8KUXJD7GQYP7VDGX1CJGLOG2V68CCEWBD3CYK4M79J7PN4ZGQE2O5`.
     */
    shoppingResponseID?: string;

    /**
     * Defines the type of payment request and its behavior. It dictates what type of payment is to be processed for the order.
     * Possible values include:
     * - `pay_offer_on_ordercreate`: Pay for the offer during the order creation.
     * - `pay_order_on_hold_on_airdocissue`: Pay for the order when it is held during air document issue.
     * - `pay_ancillaries_on_orderchange`: Pay for ancillary services during order change.
     * - `pay_rebook_on_orderchange`: Pay for a rebooked order during an order change.
     * - `pay_pending_elements_on_orderchange`: Pay for pending elements during an order change.
     */
    type:
        | "pay_offer_on_ordercreate"
        | "pay_order_on_hold_on_airdocissue"
        | "pay_ancillaries_on_orderchange"
        | "pay_rebook_on_orderchange"
        | "pay_pending_elements_on_orderchange";
}

/**
 * Represents the response from the PaymentInfo endpoint.
 */
export interface PaymentInfoResponse {
    /**
     * The error code, if an error occurred during the payment processing.
     * Example: `AGW_malformed_response`.
     */
    code: string;

    /**
     * A detailed description of the error, if applicable.
     * Example: `malformed response from airline`.
     */
    detail: string;

    /**
     * The error group, categorizing the type of error if applicable.
     * Example: `provider_error`.
     */
    group: string;

    /**
     * The offer ID associated with the payment response.
     * This ID may not always be available and is included only when applicable.
     * Example: `Quis dicta earum tempore`.
     */
    offerID: string;

    /**
     * The total flight price for the booking.
     * This includes the base price for the flight.
     * This object aligns with the `Price` interface.
     */
    flightPrice: Price;

    /**
     * The total price for the seats in the booking.
     * This includes any seat selection fees, if applicable.
     * This object aligns with the `Price` interface.
     */
    seatsPrice: Price;

    /**
     * The total price for services related to the booking.
     * This includes ancillary services such as baggage fees, seat upgrades, etc.
     * This object aligns with the `Price` interface.
     */
    servicesPrice: Price;

    /**
     * The overall price for the booking, which could include flight, seat, and services prices combined.
     * This object aligns with the `Price` interface.
     */
    price: Price;
}
