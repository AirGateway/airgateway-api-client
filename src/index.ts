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
import {OrderCreatePayload} from "./types/OrderCreate";
import {OrderResponse} from "./types/Order";
import {OrderRetrievePayload} from "./types/OrderRetrieve";

export class AirGateway {
    private client: Client;

    constructor(token: string, basePath: string) {
        this.client = new Client({ token, basePath });
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
}

export default AirGateway;
