import { Metadata, OrderCreateRemarks, Passenger, Payment, Qualifier } from "./shared";

/**
 * Represents the request payload for the Order Create endpoint.
 */
export interface OrderCreatePayload {
    /**
     * Corporate ID.
     */
    corporateID?: string;

    /**
     * Loyalty program account number for corporate bookings.
     */
    loyaltyProgramAccount?: string;

    /**
     * Metadata related to the order.
     */
    metadata?: Metadata;

    /**
     * Additional metadata for the order.
     */
    metas?: Record<string, any>;

    /**
     * List of passengers included in the order.
     */
    passengers: Passenger[];

    /**
     * Payment details for completing the order.
     */
    payment?: Payment;

    /**
     * Additional qualifiers for the booking process.
     */
    qualifiers?: Qualifier[];

    /**
     * Remarks associated with the order.
     */
    remarks?: OrderCreateRemarks;

    /**
     * The response ID provided in the OfferPrice response.
     * @example "6INlNkNo62eirnB3nqcbe3xaWoJYLsh5WiIOvws3cWylmR1AoxCL2rvLKZtfwbZV"
     */
    shoppingResponseID: string;
}
