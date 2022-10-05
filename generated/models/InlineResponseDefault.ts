/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API
 * Jupiter quote and swap API
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponseDefaultData,
    InlineResponseDefaultDataFromJSON,
    InlineResponseDefaultDataFromJSONTyped,
    InlineResponseDefaultDataToJSON,
} from './InlineResponseDefaultData';

/**
 * Default response
 * @export
 * @interface InlineResponseDefault
 */
export interface InlineResponseDefault {
    /**
     * 
     * @type {Array<InlineResponseDefaultData>}
     * @memberof InlineResponseDefault
     */
    data?: Array<InlineResponseDefaultData>;
    /**
     * 
     * @type {number}
     * @memberof InlineResponseDefault
     */
    timeTaken?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponseDefault
     */
    contextSlot?: number;
}

export function InlineResponseDefaultFromJSON(json: any): InlineResponseDefault {
    return InlineResponseDefaultFromJSONTyped(json, false);
}

export function InlineResponseDefaultFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponseDefault {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(InlineResponseDefaultDataFromJSON)),
        'timeTaken': !exists(json, 'timeTaken') ? undefined : json['timeTaken'],
        'contextSlot': !exists(json, 'contextSlot') ? undefined : json['contextSlot'],
    };
}

export function InlineResponseDefaultToJSON(value?: InlineResponseDefault | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(InlineResponseDefaultDataToJSON)),
        'timeTaken': value.timeTaken,
        'contextSlot': value.contextSlot,
    };
}

