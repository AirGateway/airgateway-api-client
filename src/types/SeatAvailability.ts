import {
    CardSurcharge,
    Disclosure,
    ExitSeat,
    FlightSegment,
    Passenger,
    Seat,
    SeatDisplay,
} from "./shared";

/**
 * Represents the request payload for the Seat Availability endpoint.
 */
export interface SeatAvailabilityPayload {
    /**
     * AirGateway order ID.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * List of passengers requesting seat availability.
     */
    passengers?: Passenger[];

    /**
     * The offerID provided in OrderReshopReprice response on the rebooking process.
     * Required when SeatAvailability is requested during the rebooking stage.
     *
     * @example "6INlNkNo62eirnB3nqcbe3xaWoJYLsh5WiIOvws3cWylmR1AoxCL2rvLKZtfwbZV"
     */
    reshopOfferID?: string;

    /**
     * Segment ID to fetch seat availability for a specific flight segment.
     *
     * @example "IB625120180217"
     */
    segmentID?: string;

    /**
     * The responseID provided in OfferPrice response.
     * Required when SeatAvailability is requested in the pre-booking stage.
     *
     * @example "6INlNkNo62eirnB3nqcbe3xaWoJYLsh5WiIOvws3cWylmR1AoxCL2rvLKZtfwbZV"
     */
    shoppingResponseID?: string;
}

/**
 * Response for Seat Availability request.
 * Contains details about available seats, pricing, segment data, and additional disclosures.
 */
export interface SeatAvailabilityResponse {
    /**
     * Represents the card surcharges map, categorized by card type.
     */
    cardSurchargesMap: Record<string, CardSurcharge>;

    /**
     * Disclosures related to seat availability, such as policies or restrictions.
     */
    disclosures?: Disclosure[];

    /**
     * List of exit rows and their positions in the aircraft.
     */
    exits?: ExitSeat[];

    /**
     * The owner of the flight or booking.
     * Usually represents the airline that operates the flight.
     *
     * @example "BA"
     */
    owner: string;

    /**
     * Information about seat display, including available columns, row range, and segment reference.
     */
    seatDisplay?: SeatDisplay[];

    /**
     * List of available seats, including details such as pricing, location, and restrictions.
     */
    seatList?: Seat[];

    /**
     * List of segments containing seat availability details.
     */
    segments?: FlightSegment[];
}
