import { Metadata, Passenger } from "./shared";

/**
 * Represents the request payload for updating an order.
 */
export interface OrderUpdatePayload {
    /**
     * A flag indicating the type of update being performed.
     *
     * - `pax_info_correction`: Corrects basic passenger information (name, surname, title). Also used to update gender if no name-related fields are changed.
     * - `documents_adding_correction` (deprecated): Adds passenger documents (passport, visa, national ID, etc.).
     * - `fqtv_ob_adding_correction`: Adds a Frequent Flyer Number or an On Business (loyalty program) number.
     * - `documents_removing` (deprecated): Removes previously added passenger documents.
     * - `birthdate_correction`: Adds or corrects the birthdate.
     * - `document_correction`: Adds, deletes, or updates passenger documents. To update, add a new document while simultaneously removing the old one.
     * - `address_correction`: Adds or updates a passenger's address, including address at destination.
     * - `add_other_service_information`: Adds data related to Other Service Information (OSI).
     *
     * @example "pax_info_correction"
     */
    action:
        | "pax_info_correction"
        | "documents_adding_correction"
        | "documents_removing"
        | "birthdate_correction"
        | "fqtv_ob_adding_correction"
        | "document_correction"
        | "address_correction"
        | "add_other_service_information";

    /**
     * AirGateway order ID.
     *
     * @example "AGW-JHTE1543KJ"
     */
    id: string;

    /**
     * Loyalty program account number for corporate passengers.
     *
     * @example "1234567890"
     */
    loyaltyProgramAccount?: string;

    /**
     * Metadata associated with the order update.
     */
    metadata?: Metadata;

    /**
     * Passenger details to be updated.
     */
    passengerUpdate: Passenger;
}
