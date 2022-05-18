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
 * @interface SuggestResultModel
 */
export interface SuggestResultModel {
    /**
     * Results provided by enabled services
     * @type {{ [key: string]: string; }}
     * @memberof SuggestResultModel
     */
    machineTranslations?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof SuggestResultModel
     */
    translationCreditsBalanceBefore: number;
    /**
     * 
     * @type {number}
     * @memberof SuggestResultModel
     */
    translationCreditsBalanceAfter: number;
}

export function SuggestResultModelFromJSON(json: any): SuggestResultModel {
    return SuggestResultModelFromJSONTyped(json, false);
}

export function SuggestResultModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestResultModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'machineTranslations': !exists(json, 'machineTranslations') ? undefined : json['machineTranslations'],
        'translationCreditsBalanceBefore': json['translationCreditsBalanceBefore'],
        'translationCreditsBalanceAfter': json['translationCreditsBalanceAfter'],
    };
}

export function SuggestResultModelToJSON(value?: SuggestResultModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'machineTranslations': value.machineTranslations,
        'translationCreditsBalanceBefore': value.translationCreditsBalanceBefore,
        'translationCreditsBalanceAfter': value.translationCreditsBalanceAfter,
    };
}
