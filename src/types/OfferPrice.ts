import {
    AgencyData,
    AllowedExtraFields,
    AllowedPaymentMethods,
    AllowedRequests,
    CardSurcharge,
    Disclosure,
    DiscountPreferences,
    Flight,
    Metadata,
    Offer,
    OfferPriceRemarks,
    OrderLog,
    Passenger,
    Price,
    Qualifier,
    ServiceRequest,
    SSR,
    TaxExemption,
    Trace,
} from "./shared";

/**
 * Represents the request payload for the Offer Price endpoint.
 */
export interface OfferPricePayload {
    /**
     * Metadata containing preferences such as country, currency, locale, and additional service information.
     */
    metadata?: Metadata;

    /**
     * The unique identifier of the flight offer for which pricing details are requested.
     * This ID is required for retrieving the normal behavior of OfferPrice.
     *
     * @example "Qm9va2luZ0BaQXM5TXVRcASDATE9ySXNMa4FyYzVBMDAx"
     */
    offerID?: string;

    /**
     * Promo code and other details.
     */
    qualifiers?: Qualifier[];

    /**
     * List of tax code to be exempt (if airline allows it).
     */
    taxExemptions?: TaxExemption[];

    /**
     * The unique identifier of a reshop offer, if applicable.
     * Used in cases where the user wants to retrieve pricing details for a modified offer.
     *
     * @example "6INlNkNo62eirnB3nqcbe3xaWoJYLsh5WiIOvws3cWylmR1AoxCL2rvLKZtfwbZV"
     */
    reshopOfferID?: string;

    /**
     * Specifies the type of offer pricing request. When set to `UpsellOptions`, the response
     * includes upsell offers for the selected flight.
     *
     * If left empty, the normal OfferPrice behavior is applied based on the provided IDs.
     *
     * Possible values:
     * - Empty: Default behavior based on `offerID` and `reshopOfferID`
     * - `"UpsellOptions"`: Retrieves upsell options for the offer
     *
     * @example "UpsellOptions"
     */
    type?: "UpsellOptions";

    /**
     * A list of additional services requested for the offer.
     * This is used in the rebooking flow with some airlines.
     */
    services?: ServiceRequest[];
}

/**
 * Represents the response for the Offer Price endpoint.
 */
export interface OfferPriceResponse {
    /**
     * Agency-level information added to all orders.
     */
    agencyData: AgencyData;

    /**
     * Information about allowed extra fields in the request.
     */
    allowedExtraFields: AllowedExtraFields;

    /**
     * Payment methods allowed by the provider.
     */
    allowedPaymentMethods: AllowedPaymentMethods;

    /**
     * Requests allowed in the OfferPrice response.
     */
    allowedRequests: AllowedRequests;

    /**
     * List of available passenger titles along with their respective genders.
     * Other titles apart from those in the example may be available depending on the provider.
     *
     * @example [{ "MR": "male" }, { "MSTR": "male" }, { "MRS": "female" }, { "MS": "female" }]
     */
    availableTitles: Record<string, string>[];

    /**
     * Represents the card surcharges map, categorized by card type.
     */
    cardSurchargesMap: Record<string, CardSurcharge>;

    /**
     * Unix timestamp representing the creation date and time.
     *
     * @example 584453609777626500
     */
    createdAt: number;

    /**
     * List of disclosures containing important information about the offer.
     */
    disclosures: Disclosure[];

    /**
     * Discount preferences associated with the offer.
     */
    discounts: DiscountPreferences;

    /**
     * Flight Segment information. Including departure, arrival and airline information.
     */
    flights: Flight[];

    /**
     * Instant payment field indicating auto-issuing with enabled 'agencyCash' or 'agencyCard'.
     * If present, payment method will be automatically selected.
     */
    instantPayment: string;

    /**
     * Expiration time of the offer.
     *
     * @example "2020-05-31T21:59:59Z"
     */
    offerExpiration: string;

    /**
     * The ID for the offer.
     *
     * @example "0mo3zQdVPZyW0NUWY6rWDFPvkAEVrIE8Jxmdj5AOkDe6j8Zb6vcCMSJqkLwDT4uW"
     */
    offerID: string;

    /**
     * List of other offers, including error or provider-related offers.
     */
    otherOffers: Offer[];

    /**
     * The code of the provider offering the flight.
     *
     * @example "BA"
     */
    owner: string;

    /**
     * List of passengers for this offer.
     */
    passengers: Passenger[];

    /**
     * Payment time limit for the offer.
     *
     * @example "2020-05-31T21:59:59Z"
     */
    paymentTimeLimit: string;

    /**
     * The price details for the offer.
     */
    price: Price;

    /**
     * Remarks associated with the offer price.
     */
    remarks: OfferPriceRemarks;

    /**
     * The ID of the response. Used for order creation.
     *
     * @example "M0DBXQ4Q06T32ZAL435JPC71NQGQNAO19130MEBBUTGBT4RC9EUZB81R91TRHBCD"
     */
    shoppingResponseID: string;

    /**
     * List of special services allowed for pre-booking, including ancillary services.
     */
    specialServices: SSR[];

    /**
     * Trace details for the offer price response.
     */
    trace: Trace;

    /**
     * List of warnings related to the offer price response.
     */
    warnings: OrderLog[];
}
