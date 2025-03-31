import { Qualifier, TaxExemption } from "./shared";

/**
 * Represents a single preference in a preset.
 */
interface Preference {
    /**
     * The preference code.
     *
     * @example "758"
     */
    code: string;

    /**
     * The description of the preference.
     *
     * @example "TOD"
     */
    definition: string;

    /**
     * The title of the preference.
     *
     * @example "Tour Operator Deferred"
     */
    title: string;
}

/**
 * Represents a traveler associated with the preset.
 */
interface Traveler {
    /**
     * The default type of traveler.
     *
     * @example "ADT"
     */
    defaultType: string;

    /**
     * The type of traveler.
     *
     * @example "CHD"
     */
    travelerType: string;
}

/**
 * Represents a single preset associated with the agency.
 */
export interface Preset {
    /**
     * The airline associated with the preset.
     *
     * @example "LH"
     */
    airline: string;

    /**
     * Indicates if the preset is the default for the agency.
     *
     * @example false
     */
    isDefault: boolean;

    /**
     * Indicates if the preset is mandatory for the agency.
     *
     * @example true
     */
    isMandatory: boolean;

    /**
     * A list of preferences associated with the preset.
     */
    preference: Preference[];

    /**
     * A qualifier object associated with the preset.
     */
    qualifier: Qualifier;

    /**
     * A list of tax exemptions applied to the preset.
     */
    taxExemptions: TaxExemption[];

    /**
     * The title of the preset.
     *
     * @example "LH TOD"
     */
    title: string;

    /**
     * A list of travelers associated with the preset.
     */
    travelers: Traveler[];
}

/**
 * Represents the response for the Agency Presets endpoint.
 */
export interface AgencyPresetsResponse {
    presets: Preset[];
}
