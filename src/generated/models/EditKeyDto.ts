/* tslint:disable */
/* eslint-disable */
/**
 * Tolgee API 
 * Tolgee Server API reference
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface EditKeyDto
 */
export interface EditKeyDto {
    /**
     * 
     * @type {string}
     * @memberof EditKeyDto
     */
    name: string;
}

export function EditKeyDtoFromJSON(json: any): EditKeyDto {
    return EditKeyDtoFromJSONTyped(json, false);
}

export function EditKeyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditKeyDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function EditKeyDtoToJSON(value?: EditKeyDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}
