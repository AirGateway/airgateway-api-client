import {
    DiscountPreferences,
    Fare,
    Metadata,
    Offer,
    OriginDestinationASRQ,
    Passenger,
    Qualifier,
    TaxExemption,
} from "./shared";
import { Preset } from "./AgencyPresets";

/**
 * Represents the request payload for the AirShopping endpoint.
 */
export interface AirShoppingPayload {
    /**
     * Optional corporate discount codes applied per airline.
     * The object keys represent airline codes, and the values are discount codes.
     *
     * @example
     * {
     *   "AA": "NDC0",
     *   "AF": "AMAZON"
     * }
     */
    corporateDiscountCodes?: Record<string, string>;

    /**
     * Optional corporate loyalty program codes applied per airline.
     * The object keys represent airline codes, and the values are loyalty program numbers.
     *
     * @example
     * {
     *   "IB": "OB123456",
     *   "LH": "C100107370942"
     * }
     */
    corporateLoyaltyProgramCodes?: Record<string, string>;

    /**
     * Metadata containing additional request details.
     */
    metadata?: Metadata;

    /**
     * The list of origin and destination pairs for the shopping request.
     * This defines the route(s) being searched.
     */
    originDestinations: OriginDestinationASRQ[];

    /**
     * The list of passengers included in the search request.
     * Each object represents a traveler with a unique reference and passenger type.
     *
     * @example
     * [
     *   { "travelerReference": "ADT0", "passengerType": "ADT", "infantReference": "INF0" },
     *   { "travelerReference": "YAD0", "passengerType": "YAD" },
     *   { "travelerReference": "CHD0", "passengerType": "CHD" },
     *   { "travelerReference": "INF0", "passengerType": "INF" }
     * ]
     */
    passengers: Passenger[];

    /**
     * Search preferences, defining cabin selection, baggage inclusion, discounts, fares, and other filters.
     */
    preferences?: PreferencesAS;

    /**
     * List of presets to apply on the search (e.g., preferences, tax exemptions, qualifiers).
     */
    presets?: Preset[];

    /**
     * Additional search qualifier to refine the shopping request.
     */
    qualifier?: Qualifier;

    /**
     * List of tax codes to be exempted (if the airline allows it).
     */
    taxExemptions?: TaxExemption[];
}

/**
 * Defines the preferences for an AirShopping request, including cabin selection, baggage, fare options, and flight filtering criteria.
 */
interface PreferencesAS {
    /**
     * Cabin preference from PADIS 9873.
     *
     * @example [ "2", "3" ]
     * - 1: First Class
     * - 2: Second Class (Business)
     * - 3: Third Class (Economy)
     * - 4: Economy/Coach Premium
     * - 5: Economy/Coach
     * - 6: Economy/Coach Discounted
     * - 7: All
     */
    cabin?: string[];

    /**
     * If true, only flights with checked baggage will be returned.
     * @example true
     */
    checkedBaggageIncluded?: boolean;

    /**
     * Discount preferences for the search.
     */
    discounts?: DiscountPreferences;

    /**
     * Fare options for the search.
     */
    fare?: Fare;

    /**
     * List of fare options available for the search.
     */
    fareList?: Fare[];

    /**
     * Maximum duration per Origin & Destination (O&D) in ISO-8601 format.
     *
     * @example [ "PT3H50M", "P1DT2H05M" ]
     */
    maxDuration?: string[];

    /**
     * Maximum duration ratio per O&D, represented as a float number factor.
     *
     * @example [ 3.5, 2 ]
     */
    maxDurationRatio?: number[];

    /**
     * Maximum number of stops allowed per O&D.
     *
     * @example [ 0, 2 ]
     */
    maxStops?: number[];

    /**
     * If true, only non-stop flights will be included in the results.
     * @example true
     */
    nonStop?: boolean;
}

/**
 * Represents the response for an AirShopping request, containing a list of flight offers.
 */
export interface AirShoppingResponse {
    /**
     * List of available flight offers matching the search criteria.
     */
    result: Offer[];
}
