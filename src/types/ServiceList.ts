import {
    CardSurcharge,
    Disclosure,
    DiscountPreferences,
    FlightSegment,
    OrderLog,
    Passenger,
    Service,
} from "./shared";

/**
 * Represents the request payload for the Seat Availability endpoint.
 */
export interface ServiceListPayload {
    /**
     * Discounts applicable to the services.
     */
    discounts?: DiscountPreferences;

    /**
     * AirGateway order ID.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * List of passengers included in the service request.
     */
    passengers?: Passenger[];

    /**
     * The offerID provided in the OrderReshopReprice response during rebooking.
     * Used when requesting ServiceList at the rebooking stage when the order has services.
     *
     * @example "6INlNkNo62eirnB3nqcbe3xaWoJYLsh5WiIOvws3cWylmR1AoxCL2rvLKZtfwbZV"
     */
    reshopOfferID?: string;

    /**
     * The responseID provided in the OfferPrice response.
     * Used when requesting ServiceList during the Pre-Booking stage.
     *
     * @example "6INlNkNo62eirnB3nqcbe3xaWoJYLsh5WiIOvws3cWylmR1AoxCL2rvLKZtfwbZV"
     */
    shoppingResponseID?: string;
}

/**
 * Response object for the ServiceList request. Contains details about available services for the order.
 */
export interface ServiceListResponse {
    /**
     * Represents the card surcharges map, categorized by card type.
     */
    cardSurchargesMap: Record<string, CardSurcharge>;

    /**
     * A list of disclosures related to the services or terms and conditions.
     */
    disclosures: Disclosure[];

    /**
     * List of passengers related to the services.
     */
    passengers: Passenger[];

    /**
     * Flight segments related to the services.
     */
    segments: FlightSegment[];

    /**
     * The available services for the order.
     */
    services: Service[];

    /**
     * Any warnings related to the services request.
     */
    warnings: OrderLog[];
}
