import { AccountDetail, Flight, Passenger } from "./shared";

/**
 * Represents the parameters that can be used to filter the order list.
 */
export interface OrderListParams {
    /**
     * Agency associated with the orders.
     *
     * @example "airgateway"
     */
    agency?: string;

    /**
     * Approve status of the orders.
     * Possible values: `"in_progress"`, `"approved"`, `"refused"`.
     *
     * @example "approved"
     */
    approveStatus?: "in_progress" | "approved" | "refused";

    /**
     * Filter orders by booking date range.
     */
    bookingDateFrom?: string;
    bookingDateTo?: string;

    /**
     * Filter orders by booking type.
     * Possible values: `"OW"` (one-way), `"RT"` (round-trip), `"MC"` (multi-city).
     *
     * @example "RT"
     */
    bookingType?: "OW" | "RT" | "MC";

    /**
     * Corporate ID associated with the orders.
     *
     * @example "d81c4af8-8c61-43eb-be12-cc9592328c69"
     */
    corporateID?: string;

    /**
     * Filter orders by departure date.
     *
     * @example "2025-03-27"
     */
    departureDate?: string;

    /**
     * Destination of the flight.
     *
     * @example "LHR"
     */
    destination?: string;

    /**
     * Order ID for sorting the orders.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id?: string;

    /**
     * Flag indicating whether to include counters in the response.
     * Possible values: `"true"`, `"false"`.
     *
     * @example "true"
     */
    includeCounters?: "true" | "false";

    /**
     * Filter orders by issuing date range.
     */
    issuingDateFrom?: string;
    issuingDateTo?: string;

    /**
     * Flag to show orders which received a change notification.
     * Possible values: `"true"`, `"false"`.
     *
     * @example "false"
     */
    notified?: "true" | "false";
    /**
     * Operating airline numeric code.
     *
     * @example "AF"
     */
    operatingCarrier?: string;

    /**
     * Origin of the flight.
     *
     * @example "FRA"
     */
    origin?: string;

    /**
     * Page number for paginated results.
     *
     * @example "1"
     */
    page?: string;

    /**
     * Number of orders per page for pagination.
     *
     * @example "10"
     */
    pageSize?: string;

    /**
     * Filter by PAX number.
     *
     * @example "1"
     */
    pax?: string;

    /**
     * Filter by PNR.
     *
     * @example "JR2MN"
     */
    pnr?: string;

    /**
     * Filter by providers.
     *
     * @example "AF"
     */
    providers?: string;

    /**
     * Passenger name.
     *
     * @example "John"
     */
    psgName?: string;

    /**
     * Passenger surname.
     *
     * @example "Doe"
     */
    psgSurname?: string;

    /**
     * Show orders type filter.
     *
     * @example "all"
     */
    showOrdersType?: string;

    /**
     * Flag to show subagency orders.
     * Possible values: `"true"`, `"false"`.
     *
     * @example "false"
     */
    showSubagencies?: "true" | "false";

    /**
     * Sorting order of the orders.
     *
     * @example "asc"
     */
    sort?: string;

    /**
     * Status of the order.
     *
     * @example "Ticketed"
     */
    status?: string;

    /**
     * Filter by ticket number or EMD.
     *
     * @example "1234567890"
     */
    ticketNumber?: string;
}

/**
 * Represents the response for the Order List endpoint.
 */
export interface OrderListResponse {
    /**
     * List of agencies associated with the orders.
     *
     * @example ["Airgateway"]
     */
    agencies: string[];

    /**
     * Total number of orders in the response.
     *
     * @example 100
     */
    count: number;

    /**
     * Order counters with counts of orders in different statuses.
     */
    counters: OrderCounters;

    /**
     * List of orders.
     */
    orders: OrderListItem[];
}

/**
 * Represents counters for orders, broken down by various statuses.
 */
interface OrderCounters {
    /**
     * Number of active orders.
     *
     * @example 7
     */
    active: number;

    /**
     * Number of approved orders.
     *
     * @example 2
     */
    approved: number;

    /**
     * Number of cancelled orders.
     *
     * @example 2
     */
    cancelled: number;

    /**
     * Number of expired orders.
     *
     * @example 4
     */
    expired: number;

    /**
     * Number of orders being issued.
     *
     * @example 10
     */
    issuing: number;

    /**
     * Number of orders with notifications.
     *
     * @example 5
     */
    notified: number;

    /**
     * Number of pending orders.
     *
     * @example 10
     */
    pending: number;

    /**
     * Number of refused orders.
     *
     * @example 1
     */
    refused: number;

    /**
     * Number of ticketed orders.
     *
     * @example 11
     */
    ticketed: number;

    /**
     * Number of orders under approval.
     *
     * @example 3
     */
    underApproval: number;

    /**
     * Number of orders with unknown status.
     *
     * @example 4
     */
    unknown: number;

    /**
     * Number of unused orders.
     *
     * @example 4
     */
    unused: number;

    /**
     * Number of voided orders.
     *
     * @example 3
     */
    voided: number;
}

/**
 * Represents an order list item with detailed order information.
 */
interface OrderListItem {
    /**
     * Account details for the order.
     */
    account: AccountDetail;

    /**
     * Agency that created the order.
     * If the agency is deleted, it will have a "[deleted]" suffix.
     *
     * @example "Airgateway"
     */
    agency: string;

    /**
     * Agent who created the order.
     *
     * @example "john"
     */
    agent: string;

    /**
     * Approval status of the order.
     * Possible values: `"traveler_pending"`, `"traveler_rejected"`, `"manager_pending"`, `"manager_rejected"`, `"customer_ok"`.
     *
     * @example "traveler_pending"
     */
    approveStatus:
        | "traveler_pending"
        | "traveler_rejected"
        | "manager_pending"
        | "manager_rejected"
        | "customer_ok";

    /**
     * The booking date of the order.
     * Format: YYYY-MM-DD
     *
     * @example "2018-08-26"
     */
    bookingDate: string;

    /**
     * Type of booking.
     * Possible values: `"OW"` (One-Way), `"RT"` (Round Trip), `"MC"` (Multi-City).
     *
     * @example "OW"
     */
    bookingType: "OW" | "RT" | "MC";

    /**
     * Corporate ID associated with the order.
     *
     * @example "d81c4af8-8c61-43eb-be12-cc9592328c69"
     */
    corporateID: string;

    /**
     * Disruption status of the order.
     * Indicates if there was a disruption to the booking (e.g., flight number change, flight time change, etc.).
     *
     * @example "FlightNumberChange"
     */
    disruptionStatus: string;

    /**
     * Flight Segment information. Including departure, arrival and airline information.
     */
    flights: Flight[];

    /**
     * Unique order ID for the order.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * The order ID, can be used to uniquely identify the order.
     *
     * @example "AF057AV1752E4"
     */
    orderID: string;

    /**
     * Owner of the order.
     *
     * @example "AF"
     */
    owner: string;

    /**
     * List of passengers associated with the order.
     */
    passengers: Passenger[];

    /**
     * Payment time limit for the order in ISO 8601 format.
     *
     * @example "2024-05-31T21:59:59.000Z"
     */
    paymentTimeLimit: string;

    /**
     * PNR associated with the order.
     *
     * @example "KWJ2MT"
     */
    pnr: string;

    /**
     * Current status of the order.
     *
     * @example "Ticketed"
     */
    status: string;
}
