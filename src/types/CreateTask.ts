/**
 * Represents the request payload for the Create Task endpoint.
 */
export interface CreateTaskPayload {
    /**
     * The name of the task to be executed.
     * Available options: "GeneratePDF", "GenerateAIR", "GenerateMIR", "GenerateGalorPax".
     *
     * @example "GeneratePDF"
     */
    eventName: "GeneratePDF" | "GenerateAIR" | "GenerateMIR" | "GenerateGalorPax";

    /**
     * The AirGateway order ID for which the task is being created.
     *
     * @example "AGW-JHTE1543KJ"
     */
    orderID: string;

    /**
     * Optional parameters for the task execution.
     *
     * @example { "includeDetails": true }
     */
    params?: Record<string, any>;
}

/**
 * Represents the response for the Create Task endpoint.
 */
export interface CreateTaskResponse {
    /**
     * Indicates whether the operation was successful.
     */
    ok: boolean;
}
