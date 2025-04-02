/**
 * Represents a passenger information.
 */
export interface Passenger {
    /**
     * Personal information of the passenger.
     */
    data?: PassengerData;

    /**
     * Document information associated with the passenger.
     */
    document?: Document;

    /**
     * Document correction information.
     * This includes lists of documents to delete or add.
     */
    documentCorrection?: DocumentCorrection;

    /**
     * List of document associated with the passenger.
     */
    documents?: Document[];

    /**
     * Infant reference (if any).
     * This is used to identify an infant passenger.
     *
     * @example "INFANT_01"
     */
    infantReference?: string;

    /**
     * The type of passenger.
     *
     * @example "ADT"
     */
    passengerType?: string;

    /**
     * Traveler reference from the previous response.
     * On AirShopping, this field is not needed to set.
     *
     * @example "000123123"
     */
    travelerReference: string;
}

/**
 * Represents the personal data of a passenger.
 */
interface PassengerData {
    /**
     * Address information of the passenger.
     */
    address: Address;

    /**
     * List of addresses associated with the passenger.
     */
    addresses?: Address;

    /**
     * Birthdate of the passenger.
     * Format: YYYY-MM-DD
     *
     * @example "1970-01-01"
     */
    birthdate: string;

    /**
     * Email address of the passenger.
     *
     * @example "smith@airgateway.net"
     */
    email: string;

    /**
     * Frequent traveler information.
     */
    fqtvInfo?: FQTVInfo;

    /**
     * Gender of the passenger.
     * Valid values: `"Male"`, `"Female"`.
     *
     * @example "Male"
     */
    gender: "Male" | "Female";

    /**
     * First name of the passenger.
     *
     * @example "John"
     */
    name: string;

    /**
     * Last name of the passenger.
     *
     * @example "Smith"
     */
    surname: string;

    /**
     * Phone number of the passenger.
     *
     * @example "+34666123123"
     */
    phone: string;

    /**
     * Title of the passenger.
     * Valid values: `"MR"`, `"MS"`, `"MRS"`, `"MSTR"`, `"CHD"`, `"INF"`, `"MISS"`, `"CAPT"`, `"PROF"`, `"DR"`, `"DAME"`, `"LADY"`, `"LORD"`, `"THE RT HON"`, `"RABBI"`, `"REV"`, `"SIR"`, `"BARONESS"`, `"BARON"`, `"VISCOUNT"`, `"VISCOUNTESS"`.
     *
     * @example "MR"
     */
    title:
        | "MR"
        | "MS"
        | "MRS"
        | "MSTR"
        | "CHD"
        | "INF"
        | "MISS"
        | "CAPT"
        | "PROF"
        | "DR"
        | "DAME"
        | "LADY"
        | "LORD"
        | "THE RT HON"
        | "RABBI"
        | "REV"
        | "SIR"
        | "BARONESS"
        | "BARON"
        | "VISCOUNT"
        | "VISCOUNTESS";
}

/**
 * Represents an address associated with a passenger.
 */
interface Address {
    /**
     * City name where the address is located.
     *
     * @example "Madrid"
     */
    cityName: string;

    /**
     * Country code of the address.
     *
     * @example "GB"
     */
    countryCode: string;

    /**
     * Label for the type of address.
     * E.g., "addressAtDestination"
     *
     * @example "addressAtDestination"
     */
    label?: string;

    /**
     * Postal code for the address.
     *
     * @example "28001"
     */
    postalCode: string;

    /**
     * Street address.
     *
     * @example "Gran Via 25"
     */
    street: string;
}

/**
 * Represents frequent traveler information.
 */
interface FQTVInfo {
    /**
     * Frequent traveler account details.
     */
    account: FQTVAccount;

    /**
     * Airline ID associated with the frequent traveler.
     *
     * @example "IB"
     */
    airlineID: string;
}

/**
 * Represents a frequent traveler account.
 */
interface FQTVAccount {
    /**
     * Frequent traveler account number.
     *
     * @example "23676950"
     */
    number: string;
}

/**
 * Represents document information for a passenger.
 */
interface Document {
    /**
     * The code (ISO Alpha-2) of the country of the traveler's citizenship.
     *
     * @example "GB"
     */
    citizenshipCountryCode: string;

    /**
     * The ID of the document sent to the airline.
     *
     * @example "115233245A"
     */
    documentID: string;

    /**
     * The type of the document.
     * Valid values: `"PP"`, `"NI"`, `"V"`, `"GC"`, `"RDS"`, `"KT"`, `"CUIL"`, `"CUIT"`, `"CDI"`, `"VCI"`, `"RUC"`, `"RUT"`, `"RUN"`, `"D"`, `"DNI"`, `"CI"`, `"CE"`, `"VP"`, `"EP"`, `"ECI"`, `"VAT"`, `"NIT"`, `"AC"`, `"MI"`, `"N1"`, `"IP"`, `"710"`, `"GSTP"`, `"GSTN"`.
     *
     * @example "PP"
     */
    documentType: string;

    /**
     * The expiration date of the document.
     * Format: YYYY-MM-DD
     *
     * @example "2019-10-19"
     */
    expirationDate: string;

    /**
     * The name of the business, in case of fiscal document type.
     *
     * @example "1234567"
     */
    fiscalName: string;

    /**
     * The code (ISO Alpha-2) of the country where the document has been issued.
     *
     * @example "GB"
     */
    issuingCountryCode: string;

    /**
     * The code (ISO Alpha-2) of the country where the traveler lives.
     *
     * @example "ES"
     */
    residenceCountryCode: string;

    /**
     * A unique string used to identify a document. Set during document creation.
     *
     */
    token: string;
}

/**
 * Represents document correction details for a passenger.
 */
interface DocumentCorrection {
    /**
     * List of tokens for documents to be deleted.
     * Only used with the 'documents' action type for OrderUpdate.
     */
    delete: string[];

    /**
     * List of documents to add.
     *
     * @example [
     *  {
     *      "citizenshipCountryCode": "Omnis eum aut omnis.",
     *      "documentID": "115233245A",
     *      "documentType": "D",
     *      "expirationDate": "2019-10-19",
     *      "fiscalName": "Quis quod.",
     *      "issuingCountryCode": "Repellendus vero nulla.",
     *      "residenceCountryCode": "Mollitia et dignissimos atque quod.",
     *      "token": "Eum doloremque ex molestiae cupiditate expedita."
     *  }
     * ]
     */
    new: Document[];
}

/**
 * Represents a flight segment with departure and arrival details.
 */
export interface Flight {
    /**
     * Information about the departure point of the flight.
     */
    departure: FlightPointData;

    /**
     * Information about the arrival point of the flight.
     */
    arrival: FlightPointData;

    /**
     * Information about the baggage allowance for the flight.
     */
    baggageAllowance: BaggageAllowance;

    /**
     * Duration of the flight.
     *
     * @example "11h35m"
     */
    duration: string;

    /**
     * Key identifier for the flight segment.
     *
     * @example "F1"
     */
    key: string;

    /**
     * List of flight segments for this particular flight.
     */
    segments: FlightSegment[];
}

/**
 * Represents the flight point data for arrival or departure.
 */
export interface FlightPointData {
    /**
     * Departure/Arrival airport IATA three-letter code.
     *
     * @example "MAD"
     */
    airportCode: string;

    /**
     * Departure/Arrival airport name.
     *
     * @example "MADRID"
     */
    airportName: string;

    /**
     * Airport city name.
     *
     * @example "Madrid"
     */
    city: string;

    /**
     * Two-letter country code for the airport's country.
     *
     * @example "ES"
     */
    countryCode: string;

    /**
     * Departure/Arrival date in format YYYY-MM-DD.
     *
     * @example "2019-08-15"
     */
    date: string;

    /**
     * Departure/Arrival terminal name.
     *
     * @example "2"
     */
    terminalName: string;

    /**
     * Preferred departure time in format HH:MM (24h).
     *
     * @example "08:30"
     */
    time: string;

    /**
     * Location time zone.
     *
     * @example "Europe/Madrid"
     */
    timezone: string;
}

/**
 * Represents the baggage allowance for a flight.
 */
interface BaggageAllowance {
    /**
     * Carry-on baggage available for the flight.
     */
    carryOn: BaggageAllowanceItem[];

    /**
     * Checked baggage available for the flight.
     */
    checked: BaggageAllowanceItem[];
}

/**
 * Represents an item in the baggage allowance.
 */
interface BaggageAllowanceItem {
    /**
     * Options choose type for baggage.
     * Possible values: "one" (select one of suggested options), "many" (select multiple suggested options).
     *
     * @example "many"
     */
    chooseType: "one" | "many";

    /**
     * List of options to choose from.
     */
    options: BaggageAllowanceItemOption[];

    /**
     * Passenger references that access this baggage condition.
     *
     * @example "T2"
     */
    passengerRefs: string[];

    /**
     * The type of carry-on baggage.
     * Used specifically to separate hand baggage from cabin baggage.
     */
    type: string;
}

/**
 * Represents an option for baggage allowance item.
 */
interface BaggageAllowanceItemOption {
    /**
     * Description of the baggage allowance item.
     */
    description: string;

    /**
     * Indicates if multiple bags are allowed for this option.
     *
     * @example true
     */
    multipleBagsAllowed: boolean;

    /**
     * List of properties associated with the baggage allowance option.
     * For example, weight in different units (KG, LB) and other related info.
     */
    properties: DisclosureProperty[];

    /**
     * Quantity of baggage allowed for this option.
     *
     * @example 1
     */
    quantity: number;

    /**
     * Text description for the baggage allowance option.
     *
     * @example "1 carry-on bag up to 8kg/18lbs"
     */
    text: string;
}

/**
 * Represents a property associated with baggage allowance, such as weight in different units.
 */
interface DisclosureProperty {
    /**
     * Unit of Measurement (UOM) for the property, e.g., "KG" or "LB".
     *
     * @example "KG"
     */
    UOM: string;

    /**
     * Type of property (e.g., "Weight").
     *
     * @example "Weight"
     */
    type: string;

    /**
     * Value of the property (e.g., weight in the specified unit).
     *
     * @example "10"
     */
    value: string;
}

/**
 * Represents a segment of the flight, including details about the origin-destination pair and related flight information.
 */
export interface FlightSegment {
    /**
     * Origin-Destination reference. A unique reference for the origin and destination pair.
     *
     * @example "OD1"
     */
    ODRef: string;

    /**
     * Detailed information about the flight segment.
     */
    detail: FlightDetail;

    /**
     * The flight number for this segment.
     *
     * @example "BA7289"
     */
    flightNumber: string;

    /**
     * Indicates if the flight requires special documents or information (e.g., passport, birthdate).
     *
     * @example false
     */
    isSecureFlight: boolean;

    /**
     * A unique segment ID for this flight segment.
     *
     * @example "SEGMENT-BA7289"
     */
    segmentID: string;
}

/**
 * Detailed information about the flight segment.
 */
interface FlightDetail {
    /**
     * Class of service information.
     */
    classOfService: ClassOfService;

    /**
     * Duration of the flight segment.
     *
     * @example "PT7H15M"
     */
    duration: string;

    /**
     * The flight distance from the origin to the destination.
     *
     * @example "200"
     */
    flightDistance: string;

    /**
     * The number of seats left on this flight segment.
     *
     * @example "10"
     */
    seatsLeft: string;

    /**
     * The status of the segment.
     * Values can be:
     * - "UN" (Unconfirmed)
     * - "TK" (Change scheduled, contact center will confirm)
     * - "HK" (Confirmed)
     *
     * @example "HK"
     */
    segmentType: string;

    /**
     * The definition of the segment status.
     *
     * @example "Confirmed"
     */
    segmentTypeDefinition: string;

    /**
     * List of stop locations, if any, on this flight segment.
     */
    stopLocations: StopLocation[];

    /**
     * The number of extra stops from origin to destination.
     *
     * @example "1"
     */
    stopQuantity: string;
}

/**
 * Information about a stop location during a flight segment.
 */
interface StopLocation {
    /**
     * The airport code for the stop location.
     *
     * @example "KGL"
     */
    airportCode: string;

    /**
     * The name of the airport for the stop location.
     *
     * @example "Kigali International"
     */
    airportName: string;

    /**
     * The arrival date at the stop location.
     *
     * @example "2019-09-06"
     */
    arrivalDate: string;

    /**
     * The arrival time at the stop location.
     *
     * @example "18:05"
     */
    arrivalTime: string;

    /**
     * The city name for the stop location.
     *
     * @example "Madrid"
     */
    city: string;

    /**
     * The two-letter country code for the stop location.
     *
     * @example "ES"
     */
    countryCode: string;

    /**
     * The departure date from the stop location.
     *
     * @example "2019-09-06"
     */
    departureDate: string;

    /**
     * The departure time from the stop location.
     *
     * @example "20:05"
     */
    departureTime: string;

    /**
     * The time zone of the stop location.
     *
     * @example "Europe/Madrid"
     */
    timezone: string;
}

/**
 * Information about the class of service for the flight.
 */
interface ClassOfService {
    /**
     * The cabin type for the class of service.
     *
     * @example "ECONOMY"
     */
    cabinDesignator: string;

    /**
     * The code for the class of service.
     *
     * @example "Y"
     */
    code: string;

    /**
     * List of disclosure references for the class of service.
     *
     * @example "TBEUKES"
     */
    disclosureRefs: string[];

    /**
     * Fare details for this class of service.
     */
    fare: FlightDetailFare;

    /**
     * Fare rules for cancelability, changeability, and penalties.
     */
    fareRules: FareRule[];

    /**
     * The general class code for the class of service.
     *
     * @example "B"
     */
    generalClassCode: string;

    /**
     * Reference for the class of service.
     *
     * @example "FBCODE2ADT"
     */
    refs: string;
}

/**
 * Fare information for the flight segment.
 */
interface FlightDetailFare {
    /**
     * The fare basis code for this class of service.
     *
     * @example "PEUBXXP9"
     */
    basisCode: string;

    /**
     * The cabin type for the fare.
     *
     * @example "B"
     */
    cabin: string;

    /**
     * The code for the fare.
     *
     * @example "FLE"
     */
    code: string;

    /**
     * Marketing name for the fare.
     *
     * @example "Light"
     */
    marketingName: string;

    /**
     * The price class name for the fare.
     *
     * @example "Economy Basic"
     */
    priceClassName: string;

    /**
     * The type of fare (e.g., Published, Negotiated, etc.).
     *
     * @example "Published"
     */
    type: string;
}

/**
 * Fare rules for cancelability, changeability, and penalties.
 */
interface FareRule {
    /**
     * The fare rule for cancelability.
     *
     * Enum values:
     * - "Allowed"
     * - "For Fee"
     * - "Not Allowed"
     *
     * @example "For Fee"
     */
    cancel: string;

    /**
     * The fare rule for cancelability in a structured format.
     *
     * Enum values:
     * - "allowed"
     * - "for_fee"
     * - "not_allowed"
     *
     * @example "allowed"
     */
    cancelEnum: string;

    /**
     * The fare rule for changeability.
     *
     * Enum values:
     * - "Allowed"
     * - "For Fee"
     * - "Not Allowed"
     *
     * @example "Allowed"
     */
    change: string;

    /**
     * The fare rule for changeability in a structured format.
     *
     * Enum values:
     * - "allowed"
     * - "for_fee"
     * - "not_allowed"
     *
     * @example "not_allowed"
     */
    changeEnum: string;

    /**
     * The reference for passengers involved in the group of fare rules.
     *
     * @example "T1"
     */
    passengerRef: string;

    /**
     * The type of passengers related to this group of fare rules.
     *
     * @example "ADT"
     */
    passengerType: string;

    /**
     * List of penalties associated with this fare rule.
     */
    penalties: Penalty[];
}

/**
 * Fare rule penalties.
 */
interface Penalty {
    /**
     * The list of amounts and their associated values for the penalty.
     */
    amounts: PenaltyAmount[];

    /**
     * A more extensive and explicit explanation of the penalty.
     *
     * @example "See cancelation policy"
     */
    description: string;

    /**
     * The code of the penalty.
     *
     * @example "ADE"
     */
    type: string;
}

/**
 * The amount and application of the penalty.
 */
interface PenaltyAmount {
    /**
     * The penalty amount.
     *
     * @example 35.65
     */
    amount: number;

    /**
     * The currency of the penalty amount.
     *
     * @example "EUR"
     */
    currency: string;

    /**
     * The provider's penalty amount.
     *
     * @example 30.7
     */
    providerAmount: number;

    /**
     * The provider's currency for the penalty.
     *
     * @example "SGD"
     */
    providerCurrency: string;

    /**
     * A remark about the penalty amount.
     *
     * @example "MaximumPenaltyAmount"
     */
    remark: string;
}

/**
 * Represents a service request for an offer pricing operation.
 */
export interface ServiceRequest {
    /**
     * Action to be performed on the service (Create or Cancel).
     *
     * Possible values:
     * - `"Create"`: Add a new service
     * - `"Cancel"`: Remove an existing service
     *
     * @example "Cancel"
     */
    action: "Create" | "Cancel";

    /**
     * The airline or service provider that owns the service.
     *
     * @example "AF"
     */
    owner?: string;

    /**
     * The quantity of the requested service.
     *
     * @example 1
     */
    quantity: number;

    /**
     * The location details for seat selection (if applicable).
     */
    seatLocation?: SeatLocation;

    /**
     * A reference to the flight segment associated with this service.
     *
     * @example "IB625120180219"
     */
    segmentReference?: string;

    /**
     * The unique identifier of the requested service type.
     *
     * @example "1234"
     */
    serviceID?: string;

    /**
     * Additional details for certain services, such as extra baggage weight or pet type.
     *
     * @example "DOG"
     */
    text?: string;

    /**
     * The reference to the traveler associated with this service.
     *
     * @example "485560180219"
     */
    travelerReference?: string;

    /**
     * The type of service object. This field is required for service validation.
     *
     * Possible values:
     * - `"seat"`: Indicates a seat selection service
     * - `"service"`: A general service (e.g., extra baggage, pet transport)
     *
     * @example "service"
     */
    type: "seat" | "service";
}

/**
 * Represents the location of a seat in an aircraft.
 */
interface SeatLocation {
    /**
     * The column of the selected seat.
     *
     * @example "3"
     */
    column: string;

    /**
     * The row number of the selected seat.
     *
     * @example 13
     */
    row: number;
}

/**
 * Represents a qualifier associated with the preset.
 */
export interface Qualifier {
    /**
     * The airline associated with the qualifier.
     *
     * @example "LH"
     */
    airline: string;

    /**
     * The qualifier code.
     *
     * @example "001043"
     */
    code: string;

    /**
     * The type of qualifier.
     *
     * @example "account_id"
     */
    type: "contract_id" | "promo_code" | "account_id";
}

/**
 * Represents a tax exemption applied to the preset.
 */
export interface TaxExemption {
    /**
     * The tax code to be exempted.
     *
     * @example "CO"
     */
    code: string;
}

/**
 * Metadata information for OfferPrice requests.
 * This includes preferences such as country, currency, language, and additional service information.
 */
export interface Metadata {
    /**
     * Country code preference for shopping in ISO 3166-1 alpha-2 format.
     *
     * @example "DE"
     * @minLength 2
     * @maxLength 2
     */
    country: string;

    /**
     * Currency for the results in ISO 4217 format.
     *
     * @example "EUR"
     */
    currency: string;

    /**
     * Language preference in locale format.
     *
     * @example "de_DE"
     */
    locale: string;

    /**
     * Other Service Information (OSI) details provided by the traveler or agent.
     * OSI messages are used to communicate special instructions to airlines.
     */
    otherServiceInformation?: OtherServiceInformation[];
}

/**
 * Represents Other Service Information (OSI) messages.
 * These are additional service requests sent to the airline.
 */
export interface OtherServiceInformation {
    /**
     * Action code from the traveler or agent.
     */
    actionCode: string;

    /**
     * OSI (Other Service Information) code from the traveler or agent.
     */
    osiCode: string;

    /**
     * Reference to the passenger this OSI message belongs to.
     *
     * @example "T1"
     */
    passengerRef: string;

    /**
     * Free-text description provided by the traveler or agent.
     */
    text: string;
}

/**
 * Represents agency-level data included in all orders.
 */
export interface AgencyData {
    /**
     * Agency alert message.
     *
     * @example "Flights must be boarded 2 hours before departure."
     */
    alert: string;

    /**
     * Agency brand color.
     *
     * @example "#CD0005"
     */
    brandColor: string;

    /**
     * City name of the agency.
     *
     * @example "Madrid"
     */
    cityName: string;

    /**
     * Country code of the agency.
     *
     * @example "ES"
     */
    countryCode: string;

    /**
     * Contact email of the agency.
     *
     * @example "john@doe.com"
     */
    email: string;

    /**
     * IATA number of the agency.
     *
     * @example "33842201"
     */
    iataCode: string;

    /**
     * Image URL for the agency.
     */
    imageUrl: string;

    /**
     * Name of the agency.
     *
     * @example "AirGateway GbmH"
     */
    name: string;

    /**
     * Phone contact of the agency.
     *
     * @example "+491570000000"
     */
    phoneContact: string;

    /**
     * Postal code of the agency.
     *
     * @example "10827"
     */
    postalCode: string;

    /**
     * State or province of the agency.
     *
     * @example "Berlin"
     */
    stateProv: string;

    /**
     * Street address of the agency.
     *
     * @example "Gutzkowstr. 8"
     */
    street: string;
}

/**
 * Represents allowed extra fields.
 */
export interface AllowedExtraFields {
    /**
     * Indicates whether the provider allows the use of Frequent Flyer Number.
     *
     * @example true
     */
    frequentFlyerNumber: boolean;

    /**
     * Indicates whether the provider allows OtherServiceInformation in metadata.
     *
     * @example true
     */
    otherServiceInformation: boolean;
}

/**
 * Represents allowed payment methods.
 */
export interface AllowedPaymentMethods {
    /**
     * Indicates whether agency card payment is allowed.
     *
     * @example false
     */
    agencyCard: boolean;

    /**
     * Indicates whether agency cash payment is allowed.
     *
     * @example true
     */
    agencyCash: boolean;

    /**
     * Indicates whether regular card payment is allowed.
     *
     * @example false
     */
    card: boolean;

    /**
     * Indicates whether no payment method is allowed.
     *
     * @example true
     */
    none: boolean;

    /**
     * Indicates whether unused ticket payment is allowed.
     *
     * @example true
     */
    unusedTicket: boolean;
}

/**
 * Represents allowed requests.
 */
export interface AllowedRequests {
    /**
     * Indicates whether adding seats without payment is allowed.
     *
     * @example false
     */
    AddSeatsWithoutPayment: boolean;

    /**
     * Indicates whether adding services without payment is allowed.
     *
     * @example true
     */
    AddServicesWithoutPayment: boolean;

    /**
     * Indicates whether order creation with payment is allowed.
     *
     * @example true
     */
    OrderCreateWithPayment: boolean;

    /**
     * Indicates whether seat availability check is allowed.
     *
     * @example false
     */
    SeatAvailability: boolean;

    /**
     * Indicates whether the service list request is allowed.
     *
     * @example true
     */
    ServiceList: boolean;
}

/**
 * Represents a disclosure with relevant details.
 */
export interface Disclosure {
    /**
     * List of disclosure descriptions providing detailed information.
     */
    descriptions: DisclosureDescription[];

    /**
     * A reference key for the disclosure.
     *
     * @example "TBEUKES"
     */
    listKey: string;
}

/**
 * Represents a detailed description of a disclosure.
 */
interface DisclosureDescription {
    /**
     * Category of the disclosure.
     *
     * @example "BAGGAGE"
     */
    category: string;

    /**
     * Item related to the disclosure.
     *
     * @example "CARRYON"
     */
    item: string;

    /**
     * Media information related to the disclosure.
     */
    media?: MediaData;

    /**
     * Metadata token for the disclosure.
     */
    metadataToken: string;

    /**
     * A reference to the origin-destination.
     *
     * @example "OD1"
     */
    originDestinationReference: string;

    /**
     * Additional properties related to the disclosure.
     */
    properties: DisclosureProperty[];

    /**
     * Text description of the disclosure.
     *
     * @example "1 carry-on bag up to 8kg/18lbs"
     */
    text: string;

    /**
     * Number of units related to the disclosure.
     *
     * @example "1"
     */
    units: string;
}

/**
 * Represents media data associated with a disclosure.
 */
interface MediaData {
    /**
     * ID of the media resource.
     *
     * @example "#0001"
     */
    id: string;

    /**
     * Link to the media resource.
     *
     * @example "http://test.com"
     */
    link: string;

    /**
     * Description of the media resource.
     */
    description: string;
}

/**
 * Represents discount preferences associated with the offer.
 */
export interface DiscountPreferences {
    /**
     * The discount code for large family.
     *
     * @example "F1"
     */
    largeFamily: string;

    /**
     * The discount code for residents.
     *
     * @example "BR"
     */
    residentCode: string;
}

/**
 * Represents an individual offer.
 */
export interface Offer {
    /**
     * The error code (if applicable).
     *
     * @example "AGW_malformed_response"
     */
    code: string;

    /**
     * Unix timestamp of when the offer was created.
     *
     * @example 1618480712
     */
    createdAt: number;

    /**
     * The details of the error (if applicable).
     *
     * @example "malformed response from airline"
     */
    detail: string;

    /**
     * List of disclosures corresponding to the offer.
     */
    disclosures: Disclosure[];

    /**
     * Flight segment information, including departure, arrival, and airline details.
     */
    flights: Flight[];

    /**
     * The group of error (if applicable).
     *
     * @example "provider_error"
     */
    group: string;

    /**
     * The maximum number of stops for the offer.
     *
     * @example 1
     */
    maxNumberOfStops: number;

    /**
     * Expiration time for the offer.
     *
     * @example "2020-05-31T21:59:59Z"
     */
    offerExpiration: string;

    /**
     * The identifier for the offer.
     *
     * @example "2r5t6w"
     */
    offerID: string;

    /**
     * The type of offer (one-way, round-trip, multi-city).
     *
     * @example "oneWay"
     */
    offerType: "oneWay" | "roundTrip" | "multiCity";

    /**
     * Two-letter airline abbreviation.
     *
     * @example "AA"
     */
    owner: string;

    /**
     * The time limit for payment of the offer.
     *
     * @example "2021-04-16T23:59:59Z"
     */
    paymentTimeLimit: string;

    /**
     * Price details for the offer.
     */
    price: Price;

    /**
     * The provider of the flight offer, represented by a 2-letter airline abbreviation.
     *
     * @example "AA"
     * @minLength 2
     * @maxLength 2
     */
    provider: string;
}

/**
 * Represents the price details for the offer.
 */
export interface Price {
    /**
     * Consumer price details.
     */
    consumer: PriceDetail;

    /**
     * Provider price details.
     */
    provider: PriceDetail;
}

/**
 * Represents the detailed price information for a specific offer.
 */
interface PriceDetail {
    /**
     * The base price without any taxes.
     *
     * @example 0.1995867234709195
     */
    base: number;

    /**
     * A list of price breakdown details for the offer.
     */
    breakdown: PriceDetailBreakdown[];

    /**
     * The currency code used for this price.
     *
     * @example "EUR"
     */
    currency: string;

    /**
     * Discount details applied to the price.
     */
    discount: Discount;

    /**
     * Fee details for the offer.
     */
    fee: PriceDetailRate;

    /**
     * Penalty fee details.
     */
    penalty: PriceDetailRate;

    /**
     * The total sum of all surcharges for the flight offer.
     *
     * @example 6.05
     */
    surcharge: number;

    /**
     * Tax details applied to the price.
     */
    tax: PriceDetailRate;

    /**
     * The total price, including all taxes, fees, and surcharges.
     *
     * @example 0.17794380253566938
     */
    total: number;
}

/**
 * Represents the price breakdown for a specific passenger type (ADT, CHD, INF).
 */
interface PriceDetailBreakdown {
    /**
     * The base price (without any taxes).
     *
     * @example 300.32
     */
    base: number;

    /**
     * Discount applied to this breakdown.
     */
    discount: Discount;

    /**
     * Fee breakdown.
     */
    fee: PriceDetailRate;

    /**
     * ID for each offer item.
     *
     * @example "389a5b6e6a464d958ba89a065724eb8b_01-1"
     */
    offerItemID: string;

    /**
     * Passenger references for the offer.
     *
     * @example "ADT0 ADT1"
     */
    passengerRefs: string;

    /**
     * Passenger type for the offer.
     *
     * @example "ADT"
     */
    passengerType: string;

    /**
     * Total sum of all surcharges.
     *
     * @example 6.05
     */
    surcharge: number;

    /**
     * Tax details for the offer.
     */
    tax: PriceDetailRate;
}

/**
 * Represents a discount applied to the price.
 */
interface Discount {
    /**
     * Application of the discount.
     */
    application: string;

    /**
     * Description of the discount.
     */
    description: string;

    /**
     * The value of the discount.
     *
     * @example 0.899959208104319
     */
    value: number;
}

/**
 * Represents a price detail rate (tax/rate/fee) applied to the price.
 */
interface PriceDetailRate {
    /**
     * Breakdown of the rate (tax/rate/fee).
     */
    breakdown: PriceDetailRateBreakdown[];

    /**
     * The total price for this rate (tax/rate/fee).
     *
     * @example 12.09
     */
    total: number;
}

/**
 * Represents the breakdown of a price detail rate.
 */
interface PriceDetailRateBreakdown {
    /**
     * The code used for the tax/rate/fee.
     *
     * @example "RA"
     */
    code: string;

    /**
     * The currency code used for the tax/rate/fee.
     *
     * @example "EUR"
     */
    currency: string;

    /**
     * The description of the tax/rate/fee.
     *
     * @example "Carrier imposed charge"
     */
    description: string;

    /**
     * The total price for this tax/rate/fee.
     *
     * @example 12.09
     */
    total: number;
}

/**
 * Represents the offer price remarks.
 */
export interface OfferPriceRemarks {
    /**
     * A list of remark templates for the offer price.
     */
    templates: OrderRemarkTemplate[];
}

/**
 * Represents an order remark template.
 */
interface OrderRemarkTemplate {
    /**
     * The description of the remark.
     */
    description: string;

    /**
     * The multiline template data.
     *
     * @example "some multiline template"
     */
    data: string;

    /**
     * The name of the remark template.
     *
     * @example "FirstRemarkProfile"
     */
    name: string;

    /**
     * Indicates if the remark is needed during the creation of the order.
     *
     * @example true
     */
    neededOnCreation: boolean;
}

/**
 * Represents a special service request (SSR).
 */
export interface SSR {
    /**
     * The booking instructions associated with the SSR.
     */
    bookingInstructions: BookingInstructions;

    /**
     * The special service request code.
     *
     * @example "WCBW"
     */
    code: string;

    /**
     * The special service request description.
     *
     * @example "WHEELCHAIR - WET CELL BATTERY"
     */
    desc: string;

    /**
     * The passenger type for which this SSR applies.
     *
     * @example "ADT"
     */
    passengerType: string;

    /**
     * A flag indicating whether text input is required for the SSR.
     *
     * @example true
     */
    text_required: boolean;
}

/**
 * Represents the booking instructions for a special service request (SSR).
 */
interface BookingInstructions {
    /**
     * The description of the booking instructions.
     */
    description: string;

    /**
     * The list of instructions for various fields related to the service.
     */
    instructions: Instruction[];

    /**
     * The mandatory text requirement (e.g., not_allowed, mandatory, optional).
     *
     * @example "not_allowed"
     */
    mandatoryText: "not_allowed" | "mandatory" | "optional";

    /**
     * The pattern the text introduced by the customer should match.
     *
     * @example "[0-9]{1,2}(?:CAT|DOG|FERRET)\s?[0-9]{1,2}"
     */
    pattern: string;

    /**
     * The placeholder text to guide the customer in the input field.
     *
     * @example "%NUMB%%TYPE%\s?%WVAL%"
     */
    placeHolder: string;

    /**
     * A flag indicating if the price is based on weight.
     *
     * @example true
     */
    priceBaseOnWeight: boolean;
}

/**
 * Represents an instruction for a field within the booking instructions.
 */
interface Instruction {
    /**
     * The pattern that the customer input should match.
     *
     * @example "[0-9]{1,2}"
     */
    pattern: string;

    /**
     * The text for the instruction.
     *
     * @example "weight value"
     */
    text: string;

    /**
     * The variable key for the instruction.
     *
     * @example "WVAL"
     */
    varkey: string;
}

/**
 * Represents trace details for the offer price response.
 */
export interface Trace {
    /**
     * The request ID associated with this response.
     *
     * @example "e5155821ac954cc9ae8a5f6c934ee33a"
     */
    requestID: string;

    /**
     * The session ID associated with this response.
     *
     * @example "219f08f595f9404088cf7b70fc8d666c"
     */
    sessionID: string;
}

/**
 * Represents the details of an order log.
 */
export interface OrderLog {
    /**
     * The name of the app that triggered the log (if source is 'app').
     */
    app: string;

    /**
     * The unique request ID for the specific request call.
     *
     * @example "438943989834949834943989"
     */
    requestID: string;

    /**
     * The source of the log, indicating what triggered it (e.g., API, task, third-party).
     *
     * @example "app"
     */
    source: "api" | "task" | "app";

    /**
     * The severity level of the log.
     *
     * @example "ok"
     */
    status: "ok" | "error" | "warning";

    /**
     * A further description of the log.
     *
     * @example "OB Fees of 25.00 for OPC JC DE FCA may be applied for traveler T1,T2."
     */
    text: string;

    /**
     * The UTC timestamp when the order was created.
     *
     * @example "2019-08-15 14:05:33"
     */
    timestamp: string;

    /**
     * The type of request that generated this warning (e.g., FP, OC).
     *
     * @example "OrderCreate"
     */
    title: string;
}

/**
 * Represents surcharge details for a card type.
 */
export interface CardSurcharge {
    Consumer: SurchargeDetail;
    Corporate: SurchargeDetail;
}

/**
 * Represents surcharge details for consumer and corporate payments.
 */
interface SurchargeDetail {
    consumer: PriceDetail;
    provider: PriceDetail;
}

/**
 * Represents payment details.
 */
export interface Payment {
    /**
     * The approval code in case it is required.
     * @example "1234"
     */
    approvalCode?: string;

    /**
     * The credit card code (e.g., Visa, MasterCard, etc.).
     * Required if method == "card".
     * @example "VI"
     */
    cardCode?: string;

    /**
     * The email address of the cardholder.
     * @example "smith@airgateway.com"
     */
    cardHolderEmail?: string;

    /**
     * The full name of the cardholder.
     * @example "John Smith"
     */
    cardHolderName?: string;

    /**
     * The surname of the cardholder.
     * @example "Smith"
     */
    cardHolderSurname?: string;

    /**
     * The title of the cardholder (e.g., MR, MS).
     */
    cardHolderTitle?: string;

    /**
     * The card number.
     * Required if method == "card".
     * @example "1234 1234 1234 1234"
     */
    cardNumber?: string;

    /**
     * The type of card (Credit or Debit).
     * Required if method == "card".
     * @example "Credit"
     */
    cardType?: string;

    /**
     * The city of the cardholder's billing address.
     * Required if method == "card".
     * @example "London"
     */
    cityName?: string;

    /**
     * The country code of the cardholder's billing address.
     * Required if method == "card".
     * @example "34"
     */
    countryCode?: string;

    /**
     * The expiration date of the card in MMYY format.
     * @example "0225"
     */
    expiration?: string;

    /**
     * The installment ID, if applicable.
     * @example "XP_SABRE_23092016"
     */
    installmentID?: string;

    /**
     * The payment method. Possible values: "card", "agencyCard", "agencyCash".
     * @example "card"
     */
    method: string;

    /**
     * The passenger type (e.g., ADT for adult).
     * @example "ADT"
     */
    passengerType?: string;

    /**
     * The phone number of the payer.
     * @example "+34666123123"
     */
    phone?: string;

    /**
     * The postal code of the cardholder's billing address.
     * Required if method == "card".
     * @example "001235"
     */
    postalCode?: string;

    /**
     * A special remark code for payment processing.
     * @example "WP0000001101"
     */
    remark?: string;

    /**
     * The CVV/CVC security code.
     * Required if method == "card".
     * @example "123"
     */
    seriesCode?: string;

    /**
     * The state or province where the card was issued.
     * Required if method == "card".
     * @example "WA"
     */
    stateProv?: string;

    /**
     * The primary billing address street.
     * Required if method == "card".
     * @example "Oxford Street"
     */
    street1?: string;

    /**
     * The secondary address line (if applicable).
     * @example "N15"
     */
    street2?: string;

    /**
     * The type of surcharge applied (e.g., Personal, Corporate).
     * Required if method == "card" and surcharge is applicable.
     * @example "Personal"
     */
    surchargeType?: string;
}

export interface AccountDetail {
    /**
     * Unique ID for the account.
     *
     * @example "ef5528ea-8a25-4aea-995e-390086ddf3bc"
     */
    id: string;

    /**
     * Id of independent traveler.
     *
     * @example "6393cb63-54f4-48bd-8d6e-82a0a17e096c"
     */
    mainProfileID: string;

    /**
     * Name of the corporate.
     *
     * @example "AirGateway Corp."
     */
    name: string;

    /**
     * Corporate account number or ID.
     * This is not the UUID.
     *
     * @example "C-123456"
     */
    number: string;
}

/**
 * Represents a notification received from the airline about changes to an order.
 */
export interface AirlineNotification {
    /**
     * List of possible actions required/allowed to handle the airline’s involuntary change.
     */
    actionRequired: string[];

    /**
     * List of amendments related to the notification.
     */
    amendments: Amendment[];

    /**
     * The unique identifier for the airline notification.
     *
     * @example 0.3954950234443927
     */
    id: number;

    /**
     * The message associated with the airline notification.
     */
    message: string;

    /**
     * Indicates whether the airline notification has been seen by an agent.
     *
     * @example false
     */
    seen: boolean;

    /**
     * The agent who saw the notification.
     *
     * @example "agent@airgateway.com"
     */
    seenBy: string;

    /**
     * Timestamp when the airline notification was received.
     *
     * @example 0.47060299475328143
     */
    timestamp: number;

    /**
     * List of warnings related to the airline notification.
     */
    warnings: Warning[];
}

/**
 * Represents an amendment in an airline notification.
 */
interface Amendment {
    /**
     * The code of the notification from the airline.
     */
    context: string;

    /**
     * The literal meaning of the notification code.
     */
    contextMeaning: string;

    /**
     * Remarks sent by the airline on the notification.
     */
    remarks: string[];

    /**
     * A definition from the airline about the type of notification.
     */
    type: string;
}

/**
 * Represents a warning related to an airline notification.
 */
interface Warning {
    /**
     * A code from the airline about the warning.
     */
    code: string;

    /**
     * A brief summary of the warning.
     */
    shortText: string;

    /**
     * The value of the warning.
     */
    value: string;
}

/**
 * Represents allowed passenger updates in an order.
 */
export interface AllowedUpdates {
    /**
     * Allowed updates for address correction.
     */
    address_correction: UpdateTypesAllowed;

    /**
     * Allowed updates for birthdate correction.
     */
    birthdate_correction: UpdateTypesAllowed;

    /**
     * Allowed updates for document correction.
     */
    document_correction: UpdateTypesAllowed;

    /**
     * Allowed updates for adding documents.
     */
    documents_adding_correction: UpdateTypesAllowed;

    /**
     * Allowed updates for removing documents.
     */
    documents_removing: UpdateTypesAllowed;

    /**
     * Allowed updates for adding frequent flyer information.
     */
    fqtv_ob_adding_correction: UpdateTypesAllowed;

    /**
     * Allowed updates for general passenger information correction.
     */
    pax_info_correction: UpdateTypesAllowed;
}

/**
 * Represents the types of allowed updates for passenger information.
 */
interface UpdateTypesAllowed {
    /**
     * Indicates whether the update is allowed.
     *
     * @example false
     */
    allowed: boolean;

    /**
     * Specifies if updates are allowed per passenger type.
     *
     * @example { "ADT": true, "CHD": false }
     */
    allowedPerPassengerType?: Record<string, boolean>;

    /**
     * List of fields that can be updated.
     *
     * @example [
     *   "documentID",
     *   "documentType",
     *   "fiscalName",
     *   "citizenshipCountryCode",
     *   "residenceCountryCode",
     *   "issuingCountryCode",
     *   "expirationDate"
     * ]
     */
    fieldsToUpdate: string[];

    /**
     * Maximum number of characters allowed for each updated field (-1 means no limitation).
     *
     * @example 5577938219623215000
     */
    maxCharsAllowed: number;
}

/**
 * Represents allowed requests in an order at different stages.
 */
export interface AllowedRequests {
    /**
     * Requests that are allowed but pending.
     */
    pending: AllowedRequestsPending;

    /**
     * Requests that have been started and are allowed.
     */
    started: AllowedRequestsStarted;

    /**
     * Requests that are allowed once the order is ticketed.
     */
    ticketed: AllowedRequestsTicketed;
}

/**
 * Represents allowed requests that are pending.
 */
interface AllowedRequestsPending {
    /**
     * Indicates whether order cancellation is allowed.
     *
     * @example true
     */
    OrderCancel: boolean;

    /**
     * Indicates whether order re-pricing is allowed.
     *
     * @example false
     */
    OrderReprice: boolean;

    /**
     * Indicates whether order splitting is allowed.
     *
     * @example true
     */
    OrderSplit: boolean;

    /**
     * Indicates whether seat availability requests are allowed.
     *
     * @example false
     */
    SeatAvailability: boolean;

    /**
     * Indicates whether service list requests are allowed.
     *
     * @example false
     */
    ServiceList: boolean;

    /**
     * Indicates whether ticket issuance is allowed.
     *
     * @example true
     */
    TicketIssue: boolean;
}

/**
 * Represents allowed requests that have been started.
 */
interface AllowedRequestsStarted {
    AncillariesOnHold: boolean; // @example true
    OrderCancel: boolean; // @example true
    OrderCancelToVoucher: boolean; // @example false
    OrderReshop: boolean; // @example false
    OrderReshopRefund: boolean; // @example true
    OrderReshopRouteChange: boolean; // @example false
    OrderSplit: boolean; // @example true
    OrderVoid: boolean; // @example true
    RebookingOnHold: boolean; // @example false
    SeatAvailability: boolean; // @example true
    ServiceList: boolean; // @example false
}

/**
 * Represents allowed requests once the order is ticketed.
 */
interface AllowedRequestsTicketed {
    AncillariesOnHold: boolean; // @example false
    OrderCancel: boolean; // @example false
    OrderCancelToVoucher: boolean; // @example true
    OrderReshop: boolean; // @example false
    OrderReshopRefund: boolean; // @example true
    OrderReshopRouteChange: boolean; // @example false
    OrderSplit: boolean; // @example false
    OrderVoid: boolean; // @example false
    RebookingOnHold: boolean; // @example true
    SeatAvailability: boolean; // @example true
    ServiceList: boolean; // @example true
}

/**
 * Represents the booking reference details.
 */
export interface BookingReference {
    /**
     * Airline ID associated with the booking.
     *
     * @example "AA"
     */
    airlineID: string;

    /**
     * Alternative booking references not owned by the airline but by third parties.
     */
    alternativeIDs: AlternativePNR[];

    /**
     * The primary booking reference ID.
     *
     * @example "DE4LPT"
     */
    id: string;

    /**
     * Other associated ID.
     *
     * @example "F1"
     */
    otherID: string;
}

/**
 * Represents an alternative Passenger Name Record (PNR) used by third parties.
 */
interface AlternativePNR {
    /**
     * The value of the PNR.
     *
     * @example "V7QGVD"
     */
    id: string;

    /**
     * The ID of the third-party provider.
     *
     * @example "F1"
     */
    providerID: string;
}

/**
 * Represents a file associated with the order.
 */
export interface OrderFile {
    /**
     * File ID.
     *
     * @example "f2js73ks1"
     */
    id: string;

    /**
     * File type.
     *
     * @example "galor"
     */
    type: string;
}

/**
 * Represents an item in the order history.
 */
export interface OrderHistoryItem {
    /**
     * The name of the agency managing the order.
     *
     * @example "airgateway"
     */
    agency: string;

    /**
     * The name of the agent handling the order.
     *
     * @example "eugene"
     */
    agent: string;

    /**
     * Notification details from the airline.
     */
    airlineNotification: AirlineNotification;

    /**
     * Additional order details.
     */
    details: any;

    /**
     * Unique event identifier.
     *
     * @example "OrderCreated"
     */
    eventID: string;

    /**
     * The timestamp of the event in YYYY-MM-DD HH:mm:ss format.
     *
     * @example "2019-01-01 15:40:10"
     */
    eventTime: string;

    /**
     * List of flights related to the order.
     */
    flights: Flight[];

    /**
     * AirGateway order ID.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * Price details for the order.
     */
    price: Price;

    /**
     * Current status of the order.
     *
     * @example "Ticketed"
     */
    status: string;

    /**
     * List of tickets issued within this history entry.
     */
    tickets: TicketHistoryInfo[];

    /**
     * The type of transaction performed.
     *
     * @example "Payment"
     */
    transactionType: string;
}

/**
 * Represents ticket history information.
 */
interface TicketHistoryInfo {
    /**
     * The date the ticket was issued in YYYY-MM-DD format.
     *
     * @example "2019-10-15"
     * @pattern (\d{4})-(\d{2})-(\d{2})
     */
    dateOfIssue: string;

    /**
     * Title, name, and surname of the passenger.
     *
     * @example "Mrs Smith Sarah"
     */
    passengerDetails: string;

    /**
     * Reference identifier for the passenger.
     *
     * @example "ADULT_01"
     */
    passengerRef: string;

    /**
     * Unique ticket number assigned to the passenger.
     *
     * @example "71923175212s"
     */
    ticketNumber: string;
}

/**
 * Represents payment information for the order.
 */
export interface OrderCreatePayment {
    /**
     * The payment amount.
     * Can be in dollars or any other currency, including fractional amounts.
     *
     * @example 1000.5
     */
    amount: number;

    /**
     * Card information for the payment.
     */
    cardInformation: CardInformation;

    /**
     * The currency used for the payment.
     *
     * @example "EUR"
     */
    currency: string;

    /**
     * The payment status.
     * Example status could be "401" for failed payment or other similar codes.
     *
     * @example "401"
     */
    status: string;

    /**
     * The type of the payment.
     * Example: "CC" for Credit Card.
     *
     * @example "CC"
     */
    type: string;
}

/**
 * Represents card information for the payment.
 */
interface CardInformation {
    /**
     * The type of the card (e.g., "MA" for MasterCard, "VI" for Visa).
     *
     * @example "MA"
     */
    cardCode: string;

    /**
     * The last four digits of the card number.
     *
     * @example "0004"
     */
    cardNumber: string;

    /**
     * The expiration date of the card in MMYY format.
     *
     * @example "1225"
     */
    expirationDate: string;
}

/**
 * Represents the order remarks object.
 * This includes the description and generated remark text.
 */
export interface OrderRemarks {
    /**
     * Plain text description of the order remarks.
     */
    description: string;

    /**
     * Order remarks data.
     */
    data: OrderRemarkData;

    /**
     * The generated result of the remarks, which is a formatted text.
     */
    result: string;

    /**
     * List of remark templates used for generating standard remarks.
     * These templates may be predefined for consistent remarks generation.
     */
    templates: OrderRemarkTemplate[];
}

/**
 * Represents the order create remarks object.
 */
export interface OrderCreateRemarks {
    /**
     * Order remarks data.
     */
    data: OrderRemarkData;

    /**
     * The generated result of the remarks, which is a formatted text.
     */
    result: string;
}

/**
 * Represents the structure of the order remarks data.
 */
export interface OrderRemarkData {
    /**
     * The name of the selected template.
     *
     * @example "multiline template"
     */
    template: string;

    /**
     * The name associated with the template.
     */
    name: string;

    /**
     * The variables used within the selected template.
     */
    variables: Record<string, any>;
}

/**
 * Represents a ticket in the order, containing details about ticket issuance.
 */
export interface TicketInfo {
    /**
     * The ticket number of a ticket that has been rebooked.
     * This field is only relevant for tickets that have been exchanged or reissued.
     */
    TicketExchangeNumber: string;

    /**
     * List of coupons associated with the ticket.
     */
    coupons: TicketCoupon[];

    /**
     * The date when the ticket was issued.
     * The date format is YYYY-MM-DD.
     *
     * @example "2019-10-15"
     * @pattern (\d{4})-(\d{2})-(\d{2})
     */
    dateOfIssue: string;

    /**
     * The linked ticket number for conjunction tickets.
     * When the ticket is part of a conjunction (linked) pair, this field will contain the reference to the primary ticket.
     *
     * @example "Sapiente neque et."
     */
    linkedTo: string;

    /**
     * The number of tickets for the passenger.
     * This represents how many tickets are issued for a particular passenger.
     *
     * @example 1
     */
    numberOfBooklets: number;

    /**
     * The reference ID for the passenger associated with the ticket.
     * This is typically used to track which passenger the ticket belongs to.
     *
     * @example "ADULT_01"
     */
    passengerRef: string;

    /**
     * The price information associated with the ticket.
     * This object should contain details like price amount, currency, etc.
     */
    price: Price;

    /**
     * Remark text for the ticket.
     * This could contain any additional information related to the ticket issuance.
     *
     * @example "BWC ticket issue until APR 23"
     */
    remark: string;

    /**
     * The unique ticket number for the passenger.
     *
     * @example "71923175212s"
     */
    ticketNumber: string;

    /**
     * The time when the ticket was issued.
     * The time format is HH:mm.
     *
     * @example "10:30"
     * @pattern (\d{2}):(\d{2})
     */
    timeOfIssue: string;

    /**
     * The type of the ticket.
     * This could refer to the ticket’s nature (e.g., electronic, paper).
     *
     * @example "ET"
     */
    typeCode: string;

    /**
     * The definition of the ticket type.
     * This provides a more detailed description of the ticket type (e.g., electronic, paper).
     *
     * @example "Ticket (electronic)"
     */
    typeCodeDefinition: string;
}

/**
 * Represents a coupon in the ticket.
 */
interface TicketCoupon {
    /**
     * The date of service for the coupon.
     * This date indicates when the coupon service will take place.
     */
    dateOfService: string;

    /**
     * The fare basis code for the coupon.
     * The fare basis code can be used to reference the type of fare associated with the coupon.
     *
     * @example "V03LGTEH"
     */
    fareBasisCode: string;

    /**
     * The media type for the coupon.
     * This indicates how the coupon is issued (e.g., Electronic).
     *
     * @example "Electronic"
     */
    media: string;

    /**
     * The coupon number.
     * This number identifies the specific coupon in the ticket.
     *
     * @example "1"
     */
    number: string;

    /**
     * The price details for the coupon.
     * This contains the price associated with the coupon.
     */
    price: Price;

    /**
     * The reference for the coupon.
     * This is used to link the coupon to a specific reference.
     *
     * @example "S2"
     */
    reference: string;

    /**
     * The remark text for the coupon.
     * This field contains additional remarks regarding the coupon.
     */
    remark: string;

    /**
     * Flight segment information associated with the coupon.
     * Contains details about the arrival and departure points, equipment, and the marketing carrier.
     */
    segment: TicketCouponAirlineInfo;

    /**
     * Service references for the coupon.
     * This could be used to identify services related to the coupon.
     */
    serviceReferences: string;

    /**
     * The status of the coupon.
     * The status can indicate the coupon’s current state, such as active, used, or refunded.
     * The status values can be one of the following:
     * - 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710
     * - A, AC, AL, ALL, AVA, B, BD, C, CK, CLO, CTRL, D, DB, DN, E, F, G, I, IF, INU, IO
     * - K, LIM, NAV, NC, NOGO, NS, OF, OK, OLD, OPE, P, PAV, PE, PR, PRF, PRFD, PRP, PRTX
     * - R, RD, REP, REV, RF, RQ, S, SA, SB, SRV, T, UNS, UTL, V, WL, X
     *
     * @example "O"
     */
    status: string;

    /**
     * The definition of the coupon’s status.
     * This provides more detailed information about the coupon’s current status.
     * Example values include "Confirmed", "Active", "Refunded", "On hold", etc.
     *
     * @example "Confirmed"
     */
    statusDefinition: string;

    /**
     * Validity details of the coupon.
     * Contains information about the effective and expiration dates of the coupon.
     */
    valid: TicketCouponValid;

    /**
     * The validating airline for the coupon.
     * This is the airline responsible for validating the coupon.
     *
     * @example "LH"
     */
    validatingAirline: string;
}

/**
 * Represents detailed information about the airline for the coupon's segment.
 */
interface TicketCouponAirlineInfo {
    /**
     * Arrival details of the flight segment.
     * Contains airport code, name, city, country code, date, terminal, etc.
     */
    arrival: FlightPointData;

    /**
     * Arrival date and time for the flight segment.
     * This contains the specific date and time of the arrival.
     */
    arrivalDateTime: TicketCouponAirlineInfoDepartureArrivalDateTime;

    /**
     * Departure details of the flight segment.
     * Contains airport code, name, city, country code, date, terminal, etc.
     */
    departure: FlightPointData;

    /**
     * Departure date and time for the flight segment.
     * This contains the specific date and time of the departure.
     */
    departureDateTime: TicketCouponAirlineInfoDepartureArrivalDateTime;

    /**
     * Equipment details associated with the flight segment.
     * Contains aircraft code, name, and the associated airport.
     */
    equipment: Equipment;

    /**
     * Marketing carrier for the flight segment.
     * Contains airline ID, flight number, and the airline's name.
     */
    marketingCarrier: MarketingCarrier;

    /**
     * The status of the flight segment.
     * Represents the current status of the flight segment.
     *
     * @example "HK" (Confirmed)
     */
    status: string;
}

/**
 * Represents the departure and arrival date-time for the flight segment.
 */
interface TicketCouponAirlineInfoDepartureArrivalDateTime {
    /**
     * The date of the flight segment's arrival or departure.
     * Format: YYYY-MM-DD
     *
     * @example "2021-08-15"
     */
    date: string;

    /**
     * The time of arrival or departure for the flight segment.
     * Format: HH:MM 24-hour
     *
     * @example "17:30"
     */
    time: string;
}

/**
 * Represents data related to a flight point (either departure or arrival).
 */
export interface FlightPointData {
    /**
     * The IATA three-letter airport code.
     * This represents the airport for either departure or arrival.
     *
     * @example "MAD"
     */
    airportCode: string;

    /**
     * The airport name.
     * This is the full name of the airport.
     *
     * @example "MADRID"
     */
    airportName: string;

    /**
     * The city name for the airport.
     *
     * @example "Madrid"
     */
    city: string;

    /**
     * The two-letter country code for the airport.
     *
     * @example "ES"
     */
    countryCode: string;

    /**
     * Departure or arrival date in YYYY-MM-DD format.
     *
     * @example "2019-08-15"
     */
    date: string;

    /**
     * The terminal name for the departure or arrival.
     *
     * @example "2"
     */
    terminalName: string;

    /**
     * The preferred departure or arrival time in HH:MM format (24-hour).
     *
     * @example "08:30"
     */
    time: string;

    /**
     * The timezone for the airport's location.
     *
     * @example "Europe/Madrid"
     */
    timezone: string;
}

/**
 * Represents the equipment used for the flight segment.
 */
interface Equipment {
    /**
     * The aircraft code for the flight segment.
     * This identifies the specific aircraft used.
     *
     * @example "JFK"
     */
    aircraftCode: string;

    /**
     * The name of the aircraft.
     * This is the full name or description of the aircraft.
     */
    aircraftName: string;

    /**
     * The airport name associated with the equipment.
     *
     * @example "New York J F Kennedy International Apt, US"
     */
    name: string;
}

/**
 * Represents the marketing carrier for the flight segment.
 */
interface MarketingCarrier {
    /**
     * The two-letter airline ID code.
     * This represents the airline issuing the marketing flight.
     *
     * @example "CA"
     */
    airlineID: string;

    /**
     * The flight number for the marketing carrier.
     *
     * @example "BA1324"
     */
    flightNumber: string;

    /**
     * The airline name.
     *
     * @example "Common Airline"
     */
    name: string;
}

/**
 * Represents the validity details of a ticket coupon.
 */
interface TicketCouponValid {
    /**
     * The effective date of the coupon.
     * The date when the coupon becomes valid.
     *
     * @example "2021-08-15"
     */
    effective: string;

    /**
     * The expiration date of the coupon.
     * The date when the coupon expires and is no longer valid.
     *
     * @example "2021-08-15"
     */
    expiration: string;
}

/**
 * Represents a service in the order, containing details like name, quantity, price, and service references.
 */
export interface Service {
    /**
     * Booking instructions associated with the service.
     * This includes details like how to book the service, cancellation policies, etc.
     */
    bookingInstructions: BookingInstructions;

    /**
     * List of descriptions for the service.
     * Each service can have multiple descriptions providing more details about the service.
     *
     * @example ["Example service 1", "Example service 2"]
     */
    descriptions: string[];

    /**
     * Flag indicating if the service is an SSR (Special Service Request).
     * This is used only in OrderViewRS.
     *
     * @example true
     */
    isSSR: boolean;

    /**
     * Maximum quantity of the service that can be booked.
     *
     * @example 10
     */
    maximumQuantity: number;

    /**
     * Minimum quantity of the service that can be booked.
     *
     * @example 1
     */
    minimumQuantity: number;

    /**
     * Name of the service.
     * This represents the type or name of the service (e.g., luggage, meal, etc.).
     *
     * @example "Luggage"
     */
    name: string;

    /**
     * Unique identifier for the service object.
     * This object key is used to identify the service.
     *
     * @example "cddb2e0d-908f-4730-9604-c1f6b5e3b9c1"
     */
    objectKey: string;

    /**
     * Flag indicating if the service is pending payment.
     * Some airlines allow to leave the services on hold, and this flag indicates if the service has been paid for.
     *
     * @example true
     */
    pendingPayment: boolean;

    /**
     * Price information for the service.
     * Contains details like amount, currency, etc.
     */
    price: Price;

    /**
     * List of properties for the service.
     * Properties can include various characteristics of the service, such as weight, type, unit of measure, etc.
     *
     * @example [
     *   { "UOM": "Kg", "type": "Weight", "value": "8" },
     *   { "UOM": "Lbs", "type": "Weight", "value": "18" }
     * ]
     */
    properties: DisclosureProperty[];

    /**
     * Unique reference for the service.
     * This can be used to track the specific service request or booking reference.
     *
     * @example "98934121201834654"
     */
    ref: string;

    /**
     * Flag indicating if the service is removable.
     * This determines if the service can be removed from the order.
     *
     * @example true
     */
    removable: boolean;

    /**
     * Reference to the first segment where the service is included.
     * This is the segment reference associated with the service.
     *
     * @example "IB625120180219"
     */
    segmentReferences: string;

    /**
     * List of segment references where the service is included.
     * This provides a list of segments where the service is present.
     *
     * @example ["IB625120180219", "IB625120180218"]
     */
    segmentReferencesIncluded: string[];

    /**
     * Unique ID for the service.
     * This ID helps to identify the specific service.
     *
     * @example "1234"
     */
    serviceID: string;

    /**
     * List of traveler references associated with the service.
     * Each traveler reference identifies the traveler who is associated with the service.
     *
     * @example ["485560180219"]
     */
    travelerReferences: string[];
}

/**
 * Represents a seat in the order, containing details like location, characteristics, price, and more.
 */
export interface Seat {
    /**
     * List of characteristics about the seat.
     * Each characteristic provides information about the seat's features.
     */
    characteristics: Characteristics[];

    /**
     * Description of the seat.
     * This could include details like seat size, comfort level, etc.
     *
     * @example "Seat extra large"
     */
    description: string;

    /**
     * A unique key for the seat.
     * This is an identifier used for each seat.
     *
     * @example "SEAT_SERVICE_cddb2e0d-908f-4730-9604-c1f6b5e3b9c1_22A"
     */
    listKey: string;

    /**
     * Location of the seat on the aircraft.
     * Includes information about the seat's column (e.g., aisle, window) and row.
     */
    location: SeatLocation;

    /**
     * Reference to the passenger who can select the seat.
     * This is used to indicate which passenger can select this seat.
     *
     * @example "ADT01"
     */
    passengerRefs: string;

    /**
     * Type of passenger who can select the seat.
     * Different seat prices might apply based on the passenger type.
     *
     * @example "ADT"
     */
    passengerType: string;

    /**
     * Flag indicating if the seat is pending payment.
     * Some airlines allow to leave seats on hold, and this flag indicates if the seat is paid for.
     *
     * @example true
     */
    pendingPayment: boolean;

    /**
     * Price information for the seat.
     * This contains the amount and currency details for the seat.
     */
    price: Price;

    /**
     * Unique reference for the seat.
     * This reference helps to track the specific seat within the system.
     *
     * @example "SEAT_SERVICE_cddb2e0d-908f-4730-9604-c1f6b5e3b9c1"
     */
    refs: string;

    /**
     * List of remarks about the seat.
     * This includes restrictions on seat usage (e.g., "Children not allowed", "Special needs").
     *
     * @example ["Children not allowed"]
     */
    remarks: string[];

    /**
     * Flag indicating whether the seat is removable.
     * This is used in OrderViewRS to determine if the seat can be removed.
     *
     * @example true
     */
    removable: boolean;

    /**
     * Reference to the flight segment where the seat is located.
     * This helps associate the seat with a specific flight segment.
     *
     * @example "IB625120180219"
     */
    segment: string;
}

/**
 * Represents characteristics of a seat.
 * Each characteristic describes a feature or attribute of the seat.
 */
interface Characteristics {
    /**
     * Description of the characteristic.
     * This explains the feature or attribute of the seat.
     *
     * @example "Left side of aircraft"
     */
    description: string;

    /**
     * Code representing the characteristic.
     * This can be used as a shorthand identifier for the characteristic.
     *
     * @example "LS"
     */
    code: string;

    /**
     * Definition of the characteristic.
     * This provides a more detailed explanation of the seat's feature.
     *
     * @example "Left side of aircraft"
     */
    definition: string;
}

/**
 * Represents an ancillary item that needs to be rebooked for a specific flight segment.
 */
export interface AncillariesToRebook {
    /**
     * The flight key associated with the ancillary item.
     */
    flightKey: string;

    /**
     * Indicates whether the ancillary item should be rebooked.
     * @example true
     */
    rebook: boolean;
}

/**
 * Represents an origin-destination pair in a shopping search scenario.
 */
export interface OriginDestinationASRQ {
    /**
     * Origin airport code.
     * @example "JFK"
     */
    origin?: string;

    /**
     * Destination airport code.
     * @example "LHR"
     */
    destination?: string;

    /**
     * Departure date in YYYY-MM-DD format.
     * @example "2025-06-15"
     */
    departureDate?: string;

    /**
     * Arrival details of the flight segment.
     */
    arrival?: DepartureArrivalASRQ;

    /**
     * Departure details of the flight segment.
     */
    departure?: DepartureArrivalASRQ;

    /**
     * List of flight numbers to not filter out.
     */
    flightNumbers?: string[];

    /**
     * Indicator for whether the origin-destination should be retained in the reshop process.
     * @example "keep"
     * Enum: ["keep", ""]
     */
    type?: string;

    /**
     * Name of the terminal for the departure or arrival airport.
     * @example "Terminal 1"
     */
    terminalName?: string;
}

/**
 * Represents the departure or arrival details of a flight segment.
 */
export interface DepartureArrivalASRQ {
    /**
     * Departure or arrival airport IATA three-letter code.
     * @example "LHR"
     */
    airportCode: string;

    /**
     * Departure or arrival date in the format YYYY-MM-DD.
     * @example "2019-10-15"
     */
    date?: string;

    /**
     * Departure or arrival time in the format HH:MM.
     * @example "23:20"
     */
    time?: string;

    /**
     * Name of the terminal for the departure or arrival airport.
     * @example "Terminal 1"
     */
    terminalName?: string;
}

/**
 * Represents user-defined preferences for the OrderReshop request.
 */
export interface Preferences {
    /**
     * Cabin preference from PADIS 9873.
     * 1 - First Class
     * 2 - Business Class
     * 3 - Economy Class
     * 4 - Premium Economy
     * 5 - Economy/Coach
     * 6 - Discounted Economy/Coach
     * 7 - All
     * @example ["5"]
     */
    cabin?: string[];

    /**
     * Discount preferences for large family or resident codes.
     */
    discounts?: DiscountPreferences;

    /**
     * Specific fare preferences.
     */
    fare?: Fare;

    /**
     * List of fare preferences from PADIS 9910.
     */
    fareList?: Fare[];

    /**
     * Indicates whether only non-stop flights should be searched.
     * @example true
     */
    nonStop?: boolean;
}

/**
 * Represents fare details in the reshop request.
 */
export interface Fare {
    /**
     * Fare code.
     * @example "70E"
     */
    Code: string;

    /**
     * Fare definition code.
     * @example "TO"
     */
    Definition: string;
}

/**
 * Represents an exit row's position in the aircraft.
 */
export interface ExitSeat {
    /**
     * Indicates whether the exit is on the left (L) or right (R) side of the plane.
     *
     * @example "L"
     */
    position: string;

    /**
     * The row number where the exit is located.
     *
     * @example 19
     */
    row: number;

    /**
     * The reference to the flight segment where this exit is positioned.
     *
     * @example "XX1007"
     */
    segmentID: string;
}

/**
 * Represents the seat display layout for a flight segment.
 */
export interface SeatDisplay {
    /**
     * Seat columns available for selection.
     *
     * @example "ABC-DEF"
     */
    columns: string;

    /**
     * The row range available for seat selection.
     */
    rows: Rows;

    /**
     * Reference to the flight segment for which these seats are available.
     *
     * @example "IB625120180219"
     */
    segment: string;
}

/**
 * Represents the range of rows available for seat selection.
 */
interface Rows {
    /**
     * The first row in the available seat range.
     *
     * @example 5
     */
    first: number;

    /**
     * The last row in the available seat range.
     *
     * @example 30
     */
    last: number;
}
