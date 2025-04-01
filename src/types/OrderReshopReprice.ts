import {
    AncillariesToRebook,
    CardSurcharge,
    Disclosure,
    Flight,
    OrderLog,
    Price,
    Trace,
} from "./shared";

/**
 * Represents the request payload for the OrderReshopReprice endpoint.
 */
export interface OrderReshopRepricePayload {
    /**
     * AirGateway order ID.
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * OrderReshop offer ID for the reprice request.
     * @example "OFFER-454JD07N00INPGFI3KPBK3UGODHWKTXX04INXL738ZJ47E3KUFTOYBV8MQ9LLONH"
     */
    offerID: string;
}

/**
 * Represents the response payload for the OrderReshopReprice endpoint.
 */
export interface OrderReshopRepriceResponse {
    /**
     * Represents the card surcharges map, categorized by card type.
     */
    cardSurchargesMap: Record<string, CardSurcharge>;

    /**
     * A list of disclosures related to the reprice request.
     */
    disclosures: Disclosure[];

    /**
     * A list of flights included in the reprice response.
     */
    flights: Flight[];

    /**
     * The ID for this offer.
     * @example "0mo3zQdVPZyW0NUWY6rWDFPvkAEVrIE8Jxmdj5AOkDe6j8Zb6vcCMSJqkLwDT4uW"
     */
    offerID: string;

    /**
     * The code of the provider that is really offering the flight.
     * @example "BA"
     */
    owner: string;

    /**
     * The price details for the reprice request.
     */
    price: Price;

    /**
     * The trace information related to the reprice request.
     */
    trace: Trace;

    /**
     * List of seats that indicate for which segment the ancillaries must be re-booked.
     */
    seatsToRebook: AncillariesToRebook[];

    /**
     * List of services that indicate for which segment the ancillaries must be re-booked.
     */
    servicesToRebook: AncillariesToRebook[];

    /**
     * A list of warnings associated with the reprice request.
     */
    warnings: OrderLog[];
}
