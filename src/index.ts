import { Client } from "./Client";
import { OrderListParams, OrderListResponse } from "./types/OrderList";
import { ProviderListResponse } from "./types/ProviderList";
import { StatusResponse } from "./types/Status";
import { AgencyPresetsResponse } from "./types/AgencyPresets";
import { OrderPDFPayload, OrderPDFResponse } from "./types/OrderPDF";
import { CreateTaskPayload, CreateTaskResponse } from "./types/CreateTask";
import { OrderCommentsPayload, OrderCommentsResponse } from "./types/OrderComments";
import { OrderExportPayload, OrderExportResponse } from "./types/OrderExport";
import { OrderRemarksPayload, OrderRemarksResponse } from "./types/OrderRemarks";
import { OfferPricePayload, OfferPriceResponse } from "./types/OfferPrice";
import { OrderCancelPayload, OrderCancelResponse } from "./types/OrderCancel";
import { AirDocIssuePayload } from "./types/AirDocIssue";
import { OrderCreatePayload } from "./types/OrderCreate";
import { OrderResponse } from "./types/Order";
import { OrderRetrievePayload } from "./types/OrderRetrieve";
import { OrderChangePayload } from "./types/OrderChange";
import { PaymentInfoPayload, PaymentInfoResponse } from "./types/PaymentInfo";
import { OrderNotificationSeenTogglePayload } from "./types/OrderNotificationToggle";
import { OrderReshopRepricePayload, OrderReshopRepriceResponse } from "./types/OrderReshopReprice";
import { OrderReshopPayload, OrderReshopResponse } from "./types/OrderReshop";
import { OrderReshopRefundPayload, OrderReshopRefundResponse } from "./types/OrderReshopRefund";
import { OrderUpdatePayload } from "./types/OrderUpdate";
import { SeatAvailabilityPayload, SeatAvailabilityResponse } from "./types/SeatAvailability";
import { ServiceListPayload, ServiceListResponse } from "./types/ServiceList";
import { AirShoppingPayload, AirShoppingResponse } from "./types/AirShopping";

export class AirGateway {
    private client: Client;

    constructor(token: string, basePath: string, agency?: string, apiVersion?: string) {
        this.client = new Client({ token, basePath, agency, apiVersion });
    }

    // Non NDC Methods

    // GET endpoints

    /**
     * Retrieves the current status of the API.
     *
     * @returns A response object containing the API environment, status, and version.
     *
     * @see [API Status Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/Status)
     */
    public getStatus = async (): Promise<StatusResponse> => {
        return this.client.request<StatusResponse>({
            method: "GET",
            path: "/status",
        });
    };

    /**
     * Retrieves the list of available providers.
     *
     * @returns A response object containing an array of provider codes.
     *
     * @see [Provider List Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/Providers/ProviderList)
     */
    public getProviderList = async (): Promise<ProviderListResponse> => {
        return this.client.request<ProviderListResponse>({
            method: "GET",
            path: "/ProviderList",
        });
    };

    /**
     * Retrieves a list of agency presets associated with the current agency.
     *
     * @returns A response object containing a list of presets, each with various properties like airline, preferences, tax exemptions, and travelers.
     *
     * @see [Agency Presets Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/Agency%20Presets/AgencyPresets%23Get)
     */
    public getAgencyPresets = async (): Promise<AgencyPresetsResponse> => {
        return this.client.request<AgencyPresetsResponse>({
            method: "GET",
            path: "/AgencyPresets",
        });
    };

    /**
     * Fetches a list of orders with optional filters.
     *
     * @param params Optional parameters to filter the order list.
     *
     * @returns A list of orders based on the provided parameters.
     */
    public getOrderList = async (params?: OrderListParams): Promise<OrderListResponse> => {
        return this.client.request<OrderListResponse>({
            method: "GET",
            path: "/OrderList",
            params,
        });
    };

    // POST endpoints

    /**
     * Generates a PDF file for the specified order and returns the download URL.
     *
     * @param payload - The request payload containing the order ID.
     * @returns A response object containing the download URL of the generated PDF.
     *
     * @see [Order PDF Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/Non%20NDC%20Methods/OrderPDF%23Post)
     */
    public sendOrderPDF = async (payload: OrderPDFPayload): Promise<OrderPDFResponse> => {
        return this.client.request<OrderPDFResponse>({
            method: "POST",
            path: "/OrderPDF",
            data: payload,
        });
    };

    /**
     * Creates a new task for processing an order, such as generating a PDF, AIR, MIR, or GalorPax.
     *
     * @param payload - The request payload containing the task details, including the event name, order ID, and optional parameters.
     * @returns A response object indicating whether the operation was successful.
     *
     * @see [Create Task Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/Non%20NDC%20Methods/CreateTask%23Post)
     */
    public sendCreateTask = async (payload: CreateTaskPayload): Promise<CreateTaskResponse> => {
        return this.client.request<CreateTaskResponse>({
            method: "POST",
            path: "/CreateTask",
            data: payload,
        });
    };

    /**
     * OrderComments updates order with new comments.
     *
     * @param payload - The data to send to the endpoint, which includes the order ID and the comment text.
     * @returns A response object indicating whether the operation was successful.
     *
     * @see [Order Comments Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/Non%20NDC%20Methods/OrderComments%23Post)
     */
    public sendOrderComments = async (
        payload: OrderCommentsPayload
    ): Promise<OrderCommentsResponse> => {
        return this.client.request<OrderCommentsResponse>({
            method: "POST",
            path: "/OrderComments",
            data: payload,
        });
    };

    /**
     * Exports order data within a specified issuing date range and sends the generated files to the specified email recipients.
     *
     * @param payload - The request payload containing the issuing date range and recipient email addresses.
     * @returns A response object indicating whether the operation was successful.
     *
     * @see [Order Export Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/Non%20NDC%20Methods/OrderExport%23Post)
     */
    public sendOrderExport = async (payload: OrderExportPayload): Promise<OrderExportResponse> => {
        return this.client.request<OrderExportResponse>({
            method: "POST",
            path: "/OrderExport",
            data: payload,
        });
    };

    /**
     * Updates an order with remarks using a selected template and variables.
     *
     * @param payload - The request payload containing the order ID, remark template, and variables.
     * @returns A response object indicating whether the operation was successful.
     *
     * @see [Order Remarks Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/Non%20NDC%20Methods/OrderRemarks%23Post)
     */
    public sendOrderRemarks = async (
        payload: OrderRemarksPayload
    ): Promise<OrderRemarksResponse> => {
        return this.client.request<OrderRemarksResponse>({
            method: "POST",
            path: "/OrderRemarks",
            data: payload,
        });
    };

    // NDC Methods

    // POST endpoints

    /**
     * Retrieves detailed pricing information for a specific flight offer.
     * This method allows querying precise offer details, including upsell options.
     *
     * @param payload - The request payload containing the necessary offer identifiers.
     * @returns A response object containing detailed offer pricing information.
     *
     * @see [OfferPrice Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/OfferPrice%23Post)
     */
    public sendOfferPrice = async (payload: OfferPricePayload): Promise<OfferPriceResponse> => {
        return this.client.request<OfferPriceResponse>({
            method: "POST",
            path: "/OfferPrice",
            data: payload,
        });
    };

    /**
     * Cancels an existing order based on the provided order ID.
     * This method allows voiding or refunding an order, depending on the request type.
     *
     * @param payload - The request payload containing the order ID and cancellation type.
     * @returns A response object containing details of the canceled order.
     *
     * @see [OrderCancel Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/OrderCancel%23Post)
     */
    public sendOrderCancel = async (payload: OrderCancelPayload): Promise<OrderCancelResponse> => {
        return this.client.request<OrderCancelResponse>({
            method: "POST",
            path: "/OrderCancel",
            data: payload,
        });
    };

    /**
     * Issues an air document (ticketing) for a previously held booking.
     * This endpoint processes the payment and finalizes the booking.
     *
     * @param payload - The request payload containing order and payment details.
     * @returns A response object confirming the ticket issuance.
     *
     * @see [AirDocIssue Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/AirDocIssue%23Post)
     */
    public sendAirDocIssue = async (payload: AirDocIssuePayload): Promise<OrderResponse> => {
        return this.client.request<OrderResponse>({
            method: "POST",
            path: "/AirDocIssue",
            data: payload,
        });
    };

    /**
     * Creates an order for a selected flight offer.
     * This endpoint finalizes the booking and generates an order ID.
     *
     * @param payload - The request payload containing passenger, payment, and booking details.
     * @returns A response object confirming the order creation.
     *
     * @see [OrderCreate Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/OrderCreate%23Post)
     */
    public sendOrderCreate = async (payload: OrderCreatePayload): Promise<OrderResponse> => {
        return this.client.request<OrderResponse>({
            method: "POST",
            path: "/OrderCreate",
            data: payload,
        });
    };

    /**
     * Retrieves information for an existing order.
     * This endpoint fetches details of a previously created order using the AirGateway order ID.
     *
     * @param payload - The request payload containing the order ID.
     * @param mode - (Optional) Execution mode for OrderRetrieve.
     *               - `"airline"`: Sends request to airline for up-to-date content.
     *               - `"cached"` or empty: Retrieves cached order data.
     *               - `"default"`: Uses the default mode.
     * @returns A response object with order details.
     *
     * @see [OrderRetrieve Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/OrderRetrieve%23Post)
     */
    public sendOrderRetrieve = async (
        payload: OrderRetrievePayload,
        mode?: "airline" | "cached" | "default"
    ): Promise<OrderResponse> => {
        return this.client.request<OrderResponse>({
            method: "POST",
            path: "/OrderRetrieve",
            data: payload,
            headers: mode ? { "Ag-OrderRetrieve-Mode": mode } : undefined,
        });
    };

    /**
     * Amends an existing order (PNR).
     * This endpoint processes changes to the booking and returns the updated order details.
     *
     * @param payload - The request payload containing order amendment details.
     * @returns A response object confirming the order change.
     *
     * @see [OrderChange Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/OrderChange%23Post)
     */
    public sendOrderChange = async (payload: OrderChangePayload): Promise<OrderResponse> => {
        return this.client.request<OrderResponse>({
            method: "POST",
            path: "/OrderChange",
            data: payload,
        });
    };

    /**
     * Payment information for a previously created order or a newly initiated booking.
     * This endpoint processes the payment details, applies any associated services, and finalizes the payment.
     *
     * @param payload - The request payload containing payment details, associated services, and order information.
     * @returns A response object confirming the payment processing.
     *
     * @see [PaymentInfo Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/PaymentInfo%23Post)
     */
    public sendPaymentInfo = async (payload: PaymentInfoPayload): Promise<PaymentInfoResponse> => {
        return this.client.request<PaymentInfoResponse>({
            method: "POST",
            path: "/PaymentInfo",
            data: payload,
        });
    };

    /**
     * Toggles the seen status of selected notifications for a given order.
     * This endpoint updates the notification status and returns the updated order view.
     *
     * @param payload - The request payload containing the order ID and notifications to update.
     * @returns A response object with the updated order details.
     *
     * @see [OrderNotificationSeenToggle Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/OrderNotificationSeenToggle%23Post)
     */
    public sendOrderNotificationSeenToggle = async (
        payload: OrderNotificationSeenTogglePayload
    ): Promise<OrderResponse> => {
        return this.client.request<OrderResponse>({
            method: "POST",
            path: "/OrderNotificationSeenToggle",
            data: payload,
        });
    };

    /**
     * Retrieves the price for a selected OrderReshop offer.
     * This endpoint processes the reshop request and returns the updated pricing details.
     *
     * @param payload - The request payload containing the OrderReshop offer ID and related details.
     * @returns A response object with the updated pricing information.
     *
     * @see [OrderReshopReprice Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/OrderReshopReprice%23Post)
     */
    public sendOrderReshopReprice = async (
        payload: OrderReshopRepricePayload
    ): Promise<OrderReshopRepriceResponse> => {
        return this.client.request<OrderReshopRepriceResponse>({
            method: "POST",
            path: "/OrderReshopReprice",
            data: payload,
        });
    };

    /**
     * Retrieves available reshop offers for a given order ID and a different date.
     * This endpoint processes the reshop request and returns the available offers.
     *
     * @param payload - The request payload containing the order ID and reshop preferences.
     * @returns A response object with the available reshop offers.
     *
     * @see [OrderReshop Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/OrderReshop%23Post)
     */
    public sendOrderReshop = async (payload: OrderReshopPayload): Promise<OrderReshopResponse> => {
        return this.client.request<OrderReshopResponse>({
            method: "POST",
            path: "/OrderReshop",
            data: payload,
        });
    };

    /**
     * Processes an order reshop refund request.
     * This endpoint retrieves refund details, including penalties and refundable amounts.
     *
     * @param payload - The request payload containing the order ID.
     * @returns A response object with refund details.
     *
     * @see [OrderReshopRefund Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/OrderReshopRefund%23Post)
     */
    public sendOrderReshopRefund = async (
        payload: OrderReshopRefundPayload
    ): Promise<OrderReshopRefundResponse> => {
        return this.client.request<OrderReshopRefundResponse>({
            method: "POST",
            path: "/OrderReshopRefund",
            data: payload,
        });
    };

    /**
     * Updates an existing order with amended passenger details.
     * This endpoint modifies the order and returns the updated order details.
     *
     * @param payload - The request payload containing the order ID and passenger updates.
     * @returns A response object with the updated order details.
     *
     * @see [OrderUpdate Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/OrderUpdate%23Post)
     */
    public sendOrderUpdate = async (payload: OrderUpdatePayload): Promise<OrderResponse> => {
        return this.client.request<OrderResponse>({
            method: "POST",
            path: "/OrderUpdate",
            data: payload,
        });
    };

    /**
     * Retrieves seat availability for a given order.
     * This endpoint returns seat locations, prices, and restrictions (e.g., infant/adult only).
     *
     * @param payload - The request payload containing the order ID.
     * @returns A response object with seat availability details.
     *
     * @see [SeatAvailability Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/SeatAvailability%23Post)
     */
    public sendSeatAvailability = async (
        payload: SeatAvailabilityPayload
    ): Promise<SeatAvailabilityResponse> => {
        return this.client.request<SeatAvailabilityResponse>({
            method: "POST",
            path: "/SeatAvailability",
            data: payload,
        });
    };

    /**
     * Retrieves a list of services available for an existing order.
     * This endpoint provides details on additional services such as extra baggage, seat upgrades, and in-flight services.
     *
     * @param payload - The request payload containing the order ID.
     * @returns A response object with available services for the given order.
     *
     * @see [ServiceList Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/ServiceList%23Post)
     */
    public sendServiceList = async (payload: ServiceListPayload): Promise<ServiceListResponse> => {
        return this.client.request<ServiceListResponse>({
            method: "POST",
            path: "/ServiceList",
            data: payload,
        });
    };

    /**
     * Retrieves a list of available flight offers based on provided origin, destination, dates, and traveler details.
     * Supports one-way, round-trip, and multi-city searches.
     *
     * This endpoint can return results in real-time JSON streaming if `AG-Connection: keep-alive` is set.
     * Otherwise, all responses will be aggregated before returning.
     *
     * @param payload - The request payload containing search criteria.
     * @param providers - (Optional) Comma-separated provider IDs or `"*"` for all.
     * @param requestTimeout - (Optional) Request timeout in seconds.
     * @param searchMode - (Optional) Defines the search filtering mode.
     *                     - `"cheapest_flights"`: Returns the cheapest offers per itinerary.
     *                     - `"cheapest_flights_per_cabin"`: Returns the cheapest offers per itinerary and cabin.
     *                     - `"combine_same_fares_only"`: Filters offers using the same fare.
     * @param avoidDisclosures - (Optional) Flag to avoid displaying certain disclosures in the response.
     *                           - `true`: Avoids disclosures such as taxes, charges, and fees.
     *                           - `false`: Includes all disclosures (default).
     * @param keepAlive - (Optional) Flag to maintain a persistent connection for streaming large responses.
     *                    - `true`: Enables the "keep-alive" connection and returns a streamed response.
     *                    - `false`: Returns the response in a regular format.
     * @returns A response object containing available flight offers.
     *
     * @see [AirShopping Endpoint Documentation](https://api.airgateway.net/v1.2/swagger-ui/#/NDC%20Methods/AirShopping%23Post)
     */
    public sendAirShopping = async (
        payload: AirShoppingPayload,
        providers?: string,
        requestTimeout?: number,
        searchMode?: "cheapest_flights" | "cheapest_flights_per_cabin" | "combine_same_fares_only" | "",
        avoidDisclosures?: boolean,
        keepAlive?: boolean
    ): Promise<AirShoppingResponse> => {
        const headers: Record<string, string> = {};

        headers["Ag-Providers"] = providers || "*";
        headers["Ag-Request-Timeout"] = requestTimeout ? requestTimeout.toString() : "60";

        if (searchMode) {
            headers["AG-Search-Mode"] = searchMode;
        }

        if (avoidDisclosures) {
            headers["AG-Avoid-Disclosures"] = avoidDisclosures.toString();
        }

        if (keepAlive) {
            headers["AG-Connection"] = "keep-alive";
        }

        return this.client.request<AirShoppingResponse>({
            method: "POST",
            path: "/AirShopping",
            data: payload,
            headers: Object.keys(headers).length > 0 ? headers : undefined,
            keepAlive,
        });
    };
}

export default AirGateway;
