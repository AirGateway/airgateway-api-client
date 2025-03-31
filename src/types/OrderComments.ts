/**
 * Represents the request payload for the Order Comments endpoint.
 */
export interface OrderCommentsPayload {
    /**
     * The unique identifier of the order.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * The text of the comment to be added to the order.
     *
     * @example "Some text comments"
     */
    comments: string;
}

/**
 * Represents the response for the Order Comments endpoint.
 */
export interface OrderCommentsResponse {
    /**
     * Indicates whether the operation was successful.
     */
    ok: boolean;
}
