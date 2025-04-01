import { Disclosure, Flight, OrderLog, OriginDestinationASRQ, Preferences, Price } from "./shared";

/**
 * Represents the request payload for the Order Reshop endpoint.
 */
export interface OrderReshopPayload {
    /**
     * AirGateway order ID.
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * List of origin-destination pairs for the shopping search scenario.
     */
    originDestinations: OriginDestinationASRQ[];

    /**
     * User-defined preferences for the reshop search.
     */
    preferences?: Preferences;
}

/**
 * Represents the response received from the OrderReshop request.
 */
export interface OrderReshopResponse {
    /**
     * List of available reshop offers.
     */
    offers: OrderReshopOffer[];
}

/**
 * Represents an individual offer in the OrderReshop response.
 */
export interface OrderReshopOffer {
    /**
     * List of disclosures related to the offer.
     */
    disclosures?: Disclosure[];

    /**
     * Provider error message, if applicable.
     * @example "provider error message"
     */
    error?: string;

    /**
     * List of flights included in this offer.
     */
    flights?: Flight[];

    /**
     * Unique identifier for the offer.
     * @example "2r5t6w"
     */
    offerID: string;

    /**
     * Type of offer (e.g., one-way, round-trip, outbound, return).
     * @example "oneWay"
     * Enum: ["oneWay", "roundTrip", "outbound", "return"]
     */
    offerType: "oneWay" | "roundTrip" | "outbound" | "return";

    /**
     * Two-letter abbreviation of the airline that owns the offer.
     * @example "AA"
     */
    owner: string;

    /**
     * Pricing details for the offer.
     */
    price: Price;

    /**
     * Indicates whether the price has changed from the original hold order.
     * @example false
     */
    priceChange: boolean;

    /**
     * List of warnings related to the offer.
     */
    warnings?: OrderLog[];
}
