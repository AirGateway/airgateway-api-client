import {
    AccountDetail,
    AgencyData,
    AirlineNotification,
    AllowedExtraFields,
    AllowedPaymentMethods,
    AllowedRequests,
    AllowedUpdates,
    BookingReference,
    CardSurcharge,
    Disclosure,
    Flight,
    OrderCreatePayment,
    OrderFile,
    OrderHistoryItem,
    OrderLog,
    OrderRemarks,
    OtherServiceInformation,
    Passenger,
    Price,
    Seat,
    Service,
    TicketInfo,
    Trace,
} from "./shared";

/**
 * Represents the response for the AirDocIssue endpoint.
 */
export interface OrderResponse {
    /**
     * Details of the account associated with the issued document.
     */
    account: AccountDetail;

    /**
     * The name of the agency issuing the document.
     *
     * @example "airgateway"
     */
    agency: string;

    /**
     * Additional agency data related to the issuance.
     */
    agencyData: AgencyData;

    /**
     * The name of the agent handling the issuance.
     *
     * @example "john"
     */
    agent: string;

    /**
     * The email of the agent processing the issuance.
     *
     * @example "email@example.com"
     */
    agentEmail: string;

    /**
     * List of notifications received from the airline indicating changes to the order (e.g., disruption, re-schedule, expiration).
     */
    airlineNotifications: AirlineNotification[];

    /**
     * Information about allowed extra fields in the request.
     */
    allowedExtraFields: AllowedExtraFields;

    /**
     * Specifies the allowed updates for passenger information in the order.
     */
    allowedPassengerUpdates: AllowedUpdates;

    /**
     * Payment methods allowed by the provider.
     */
    allowedPaymentMethods: AllowedPaymentMethods;

    /**
     * Specifies the allowed requests at different order stages.
     */
    allowedRequests: AllowedRequests;

    /**
     * Approval status of the document issuance.
     */
    approvalStatus: string;

    /**
     * Indicates whether the issuance has been approved.
     *
     * @example true
     */
    approved: boolean;

    /**
     * List of available passenger titles along with their respective genders.
     * Other titles apart from those in the example may be available depending on the provider.
     *
     * @example [{ "MR": "male" }, { "MSTR": "male" }, { "MRS": "female" }, { "MS": "female" }]
     */
    availableTitles: Record<string, string>[];

    /**
     * The booking date in YYYY-MM-DD format.
     *
     * @example "2018-08-26"
     * @pattern (\d{4})-(\d{2})-(\d{2})
     */
    bookingDate: string;

    /**
     * Booking reference details.
     */
    bookingReference: BookingReference;

    /**
     * The type of booking (e.g., One-Way, Round-Trip).
     *
     * @example "OW"
     */
    bookingType: string;

    /**
     * Represents the card surcharges map, categorized by card type.
     */
    cardSurchargesMap: Record<string, CardSurcharge>;

    /**
     * Additional comments.
     *
     * @example "Some text comments"
     */
    comments: string;

    /**
     * The date and time when the record was created in YYYY-MM-DD HH:mm format.
     *
     * @example "2024-08-26 17:16"
     * @pattern (\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})
     */
    createdAt: string;

    /**
     * List of disclosures.
     */
    disclosures: Disclosure[];

    /**
     * Error message during OrderRetrieve call.
     */
    error: string;

    /**
     * External order ID.
     *
     * @example "Qm9va2luZ0BaQXM5TXVRcOUSEE8ySXQZMa4FyYzVBMDAx"
     */
    externalOrderID: string;

    /**
     * List of files associated with the order.
     */
    files: OrderFile[];

    /**
     * List of flights included in the order.
     */
    flights: Flight[];

    /**
     * Form of payment used for the order.
     *
     * @example "Card"
     */
    formOfPayment: string;

    /**
     * History of order changes and updates.
     */
    history: OrderHistoryItem[];

    /**
     * AirGateway order ID.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * Logs associated with the order.
     */
    logs: OrderLog[];

    /**
     * Loyalty program account number for corporate bookings.
     */
    loyaltyProgramAccount: string;

    /**
     * Specifies the mandatory requests for the order.
     *
     * @example { orderReshopReprice: true }
     */
    mandatoryRequests: {
        [key: string]: boolean;
    };

    /**
     * Metadata associated with the order.
     *
     * @example { AirGateway: "Default meta info" }
     */
    metas: {
        [key: string]: string;
    };

    /**
     * List of other service information associated with the order.
     * This includes information from the traveler or agent, such as action codes, OSI codes, and free text.
     */
    otherServiceInformation: OtherServiceInformation[];

    /**
     * List of passengers.
     */
    passengers: Passenger[];

    /**
     * Payment details for the order.
     */
    payment: OrderCreatePayment;

    /**
     * The time limit by which the payment should be made.
     * This is in ISO 8601 format (e.g., 2024-05-31T21:59:59.000Z).
     *
     * @example "2019-05-31T21:59:59.000Z"
     */
    paymentTimeLimit: string;

    /**
     * The unique identifier of the order used in the old system.
     * This is respected by some providers to maintain compatibility.
     *
     * @example "QEHNRY"
     */
    pnr: string;

    /**
     * The price details for the order.
     */
    price: Price;

    /**
     * Time limit for an on-hold order, during which the airline guarantees that the price will not vary.
     * This is typically used when the price is held pending confirmation.
     *
     * @example "2019-05-29T21:59:59.000Z"
     */
    priceGuaranteeTimeLimit: string;

    /**
     * A list of remarks received from the provider related to the order.
     * These remarks provide additional information or updates about the order.
     */
    providerRemarks: OrderLog[];

    /**
     * The type of refund associated with the order.
     * Possible values are 'refund' or 'voucher'.
     *
     * @example "refund"
     */
    refundType: string;

    /**
     * The refunded amount details.
     * This represents the amount refunded as part of the order, if applicable.
     */
    refundedAmount: Price;

    /**
     * Represents order remarks.
     */
    remarks: OrderRemarks;

    /**
     * List of seats associated with the order.
     * Each seat contains detailed information such as location, price, and characteristics.
     */
    seats: Seat[];

    /**
     * List of services associated with the order.
     * Each service contains detailed information such as service name, descriptions, prices, and more.
     */
    services: Service[];

    /**
     * The current status of the order.
     * It can represent various stages of the order, such as:
     * - Pending
     * - Ticketed
     * - Cancelled
     * - Completed
     * - Started
     * - Expired
     *
     * @example "Ticketed"
     */
    status: string;

    /**
     * List of tickets associated with the order.
     * This can include rebooked tickets, ticket issue dates, passenger references, and more.
     */
    tickets: TicketInfo[];

    /**
     * Trace information associated with the order.
     */
    trace: Trace;

    /**
     * The timestamp indicating when the order was last updated.
     * This is in the format of YYYY-MM-DD HH:mm.
     *
     * @example "2018-08-26 17:16"
     * @pattern (\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})
     */
    updatedAt: string;

    /**
     * View mode for the order.
     * This specifies how the order's data is displayed or processed in the system.
     *
     * @example "agent"
     */
    viewMode: string;

    /**
     * A list of warnings associated with the order.
     */
    warnings: OrderLog[];
}
