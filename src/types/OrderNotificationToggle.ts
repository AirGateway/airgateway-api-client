/**
 * Represents the request payload for the Order Notification Toggle endpoint.
 */
export interface OrderNotificationSeenTogglePayload {
    /**
     * AirGateway order ID.
     */
    id: string;

    /**
     * List of notification IDs to be marked as seen.
     */
    notificationIds: number[];
}
