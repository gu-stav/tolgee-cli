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
import {
    ScreenshotModel,
    ScreenshotModelFromJSON,
    ScreenshotModelFromJSONTyped,
    ScreenshotModelToJSON,
} from './ScreenshotModel';
import {
    TagModel,
    TagModelFromJSON,
    TagModelFromJSONTyped,
    TagModelToJSON,
} from './TagModel';
import {
    TranslationModel,
    TranslationModelFromJSON,
    TranslationModelFromJSONTyped,
    TranslationModelToJSON,
} from './TranslationModel';

/**
 * 
 * @export
 * @interface KeyWithDataModel
 */
export interface KeyWithDataModel {
    /**
     * Id of key record
     * @type {number}
     * @memberof KeyWithDataModel
     */
    id: number;
    /**
     * Name of key
     * @type {string}
     * @memberof KeyWithDataModel
     */
    name: string;
    /**
     * Translations object containing values updated in this request
     * @type {{ [key: string]: TranslationModel; }}
     * @memberof KeyWithDataModel
     */
    translations: { [key: string]: TranslationModel; };
    /**
     * Tags of key
     * @type {Set<TagModel>}
     * @memberof KeyWithDataModel
     */
    tags: Set<TagModel>;
    /**
     * Screenshots of the key
     * @type {Array<ScreenshotModel>}
     * @memberof KeyWithDataModel
     */
    screenshots: Array<ScreenshotModel>;
}

export function KeyWithDataModelFromJSON(json: any): KeyWithDataModel {
    return KeyWithDataModelFromJSONTyped(json, false);
}

export function KeyWithDataModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyWithDataModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'translations': (mapValues(json['translations'], TranslationModelFromJSON)),
        'tags': (new Set((json['tags'] as Array<any>).map(TagModelFromJSON))),
        'screenshots': ((json['screenshots'] as Array<any>).map(ScreenshotModelFromJSON)),
    };
}

export function KeyWithDataModelToJSON(value?: KeyWithDataModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'translations': (mapValues(value.translations, TranslationModelToJSON)),
        'tags': (Array.from(value.tags as Set<any>).map(TagModelToJSON)),
        'screenshots': ((value.screenshots as Array<any>).map(ScreenshotModelToJSON)),
    };
}
