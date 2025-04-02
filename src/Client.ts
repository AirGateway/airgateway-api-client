import axios, { AxiosRequestConfig } from "axios";
import { ErrorResponse } from "./types/Error";

export interface Config {
    token: string;
    basePath?: string;
    agency?: string;
    apiVersion?: string;
}

export interface RequestOptions {
    method: "GET" | "POST" | "PUT" | "DELETE";
    path: string;
    data?: Record<string, any>;
    params?: Record<string, any>;
    headers?: Record<string, any>;
    keepAlive?: boolean;
}

export class Client {
    private token: string;
    private basePath: string;
    private agency?: string;
    private apiVersion?: string;

    constructor({ token, basePath, agency, apiVersion }: Config) {
        this.token = token;
        this.apiVersion = apiVersion || "1.2";
        this.basePath = `${basePath}/v${this.apiVersion}`;
        this.agency = agency;
    }

    public request = async <T_Data = any>({
        method,
        path,
        data,
        params,
        headers = {},
        keepAlive,
    }: RequestOptions): Promise<T_Data> => {
        const url = new URL(`${this.basePath}${path}`);

        // Add query parameters to the URL
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, String(value));
            });
        }

        const requestHeaders: Record<string, string> = {
            "Content-Type": "application/json",
            authorization: `Bearer ${this.token}`,
            Accept: "application/json",
            ...headers,
        };

        if (this.agency) {
            requestHeaders["Ag-Agency"] = this.agency;
        }

        const config: AxiosRequestConfig = {
            method,
            url: url.toString(),
            headers: requestHeaders,
            data,
            params,
            responseType: keepAlive ? "stream" : "json",
        };

        const curlCommand = `curl -X ${method} "${url}" -H "Content-Type: application/json" -H "Authorization: Bearer ${this.token}" -d '${JSON.stringify(data)}'`;

        console.log("Generated curl command: ", curlCommand);

        try {
            const response = await axios(config);

            if (keepAlive && response.data) {
                return response.data;
            }

            console.log("response.data:", response.data);

            return response.data;
        } catch (error: any) {
            const errorResponse: ErrorResponse = {
                group: error?.response?.data?.group || "internal_server_error",
                code: error?.response?.data?.code || "AGW_internal_server_error",
                status: error?.response?.status || 500,
                detail:
                    error?.response?.data?.detail ||
                    "An unexpected error occurred on the AGW server.",
                requestID: error?.response?.data?.requestID || "unknown_request_id",
                sessionID: error?.response?.data?.sessionID || "",
            };

            console.error("API request failed:", errorResponse);

            throw errorResponse;
        }
    };
}
