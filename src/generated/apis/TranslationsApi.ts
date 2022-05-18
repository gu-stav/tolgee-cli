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


import * as runtime from '../runtime';
import {
    KeysWithTranslationsPageModel,
    KeysWithTranslationsPageModelFromJSON,
    KeysWithTranslationsPageModelToJSON,
    PagedModelTranslationHistoryModel,
    PagedModelTranslationHistoryModelFromJSON,
    PagedModelTranslationHistoryModelToJSON,
    SelectAllResponse,
    SelectAllResponseFromJSON,
    SelectAllResponseToJSON,
    SetTranslationsResponseModel,
    SetTranslationsResponseModelFromJSON,
    SetTranslationsResponseModelToJSON,
    SetTranslationsWithKeyDto,
    SetTranslationsWithKeyDtoFromJSON,
    SetTranslationsWithKeyDtoToJSON,
    TranslationModel,
    TranslationModelFromJSON,
    TranslationModelToJSON,
} from '../models';

export interface TranslationsApiCreateOrUpdateTranslations1Request {
    setTranslationsWithKeyDto: SetTranslationsWithKeyDto;
    ak?: string;
}

export interface TranslationsApiDismissAutoTranslatedState1Request {
    translationId: number;
    ak?: string;
}

export interface TranslationsApiGetAllTranslations1Request {
    languages: Set<string>;
    ak?: string;
}

export interface TranslationsApiGetSelectAllKeyIds1Request {
    filterState?: Array<string>;
    languages?: Set<string>;
    search?: string;
    filterKeyName?: string;
    filterKeyId?: Array<number>;
    filterUntranslatedAny?: boolean;
    filterTranslatedAny?: boolean;
    filterUntranslatedInLang?: string;
    filterTranslatedInLang?: string;
    filterHasScreenshot?: boolean;
    filterHasNoScreenshot?: boolean;
    filterTag?: Array<string>;
    ak?: string;
}

export interface TranslationsApiGetTranslationHistory1Request {
    translationId: number;
    page?: number;
    size?: number;
    sort?: Array<string>;
    ak?: string;
}

export interface TranslationsApiGetTranslations1Request {
    cursor?: string;
    filterState?: Array<string>;
    languages?: Set<string>;
    search?: string;
    filterKeyName?: string;
    filterKeyId?: Array<number>;
    filterUntranslatedAny?: boolean;
    filterTranslatedAny?: boolean;
    filterUntranslatedInLang?: string;
    filterTranslatedInLang?: string;
    filterHasScreenshot?: boolean;
    filterHasNoScreenshot?: boolean;
    filterTag?: Array<string>;
    page?: number;
    size?: number;
    sort?: Array<string>;
    ak?: string;
}

export interface TranslationsApiSetTranslationState1Request {
    translationId: number;
    state: SetTranslationState1StateEnum;
    ak?: string;
}

export interface TranslationsApiSetTranslations1Request {
    setTranslationsWithKeyDto: SetTranslationsWithKeyDto;
    ak?: string;
}

/**
 * 
 */
export class TranslationsApi extends runtime.BaseAPI {

    /**
     * Sets translations for existing or not existing key
     */
    async createOrUpdateTranslations1Raw(requestParameters: TranslationsApiCreateOrUpdateTranslations1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SetTranslationsResponseModel>> {
        if (requestParameters.setTranslationsWithKeyDto === null || requestParameters.setTranslationsWithKeyDto === undefined) {
            throw new runtime.RequiredError('setTranslationsWithKeyDto','Required parameter requestParameters.setTranslationsWithKeyDto was null or undefined when calling createOrUpdateTranslations1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v2/projects/translations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetTranslationsWithKeyDtoToJSON(requestParameters.setTranslationsWithKeyDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SetTranslationsResponseModelFromJSON(jsonValue));
    }

    /**
     * Sets translations for existing or not existing key
     */
    async createOrUpdateTranslations1(requestParameters: TranslationsApiCreateOrUpdateTranslations1Request, initOverrides?: RequestInit): Promise<SetTranslationsResponseModel> {
        const response = await this.createOrUpdateTranslations1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes \"auto translated\" indication
     */
    async dismissAutoTranslatedState1Raw(requestParameters: TranslationsApiDismissAutoTranslatedState1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TranslationModel>> {
        if (requestParameters.translationId === null || requestParameters.translationId === undefined) {
            throw new runtime.RequiredError('translationId','Required parameter requestParameters.translationId was null or undefined when calling dismissAutoTranslatedState1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/translations/{translationId}/dismiss-auto-translated-state`.replace(`{${"translationId"}}`, encodeURIComponent(String(requestParameters.translationId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TranslationModelFromJSON(jsonValue));
    }

    /**
     * Removes \"auto translated\" indication
     */
    async dismissAutoTranslatedState1(requestParameters: TranslationsApiDismissAutoTranslatedState1Request, initOverrides?: RequestInit): Promise<TranslationModel> {
        const response = await this.dismissAutoTranslatedState1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns all translations for specified languages
     */
    async getAllTranslations1Raw(requestParameters: TranslationsApiGetAllTranslations1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.languages === null || requestParameters.languages === undefined) {
            throw new runtime.RequiredError('languages','Required parameter requestParameters.languages was null or undefined when calling getAllTranslations1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/translations/{languages}`.replace(`{${"languages"}}`, encodeURIComponent(String(requestParameters.languages))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Returns all translations for specified languages
     */
    async getAllTranslations1(requestParameters: TranslationsApiGetAllTranslations1Request, initOverrides?: RequestInit): Promise<string> {
        const response = await this.getAllTranslations1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get select all keys
     */
    async getSelectAllKeyIds1Raw(requestParameters: TranslationsApiGetSelectAllKeyIds1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SelectAllResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filterState) {
            queryParameters['filterState'] = requestParameters.filterState;
        }

        if (requestParameters.languages) {
            queryParameters['languages'] = requestParameters.languages;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.filterKeyName !== undefined) {
            queryParameters['filterKeyName'] = requestParameters.filterKeyName;
        }

        if (requestParameters.filterKeyId) {
            queryParameters['filterKeyId'] = requestParameters.filterKeyId;
        }

        if (requestParameters.filterUntranslatedAny !== undefined) {
            queryParameters['filterUntranslatedAny'] = requestParameters.filterUntranslatedAny;
        }

        if (requestParameters.filterTranslatedAny !== undefined) {
            queryParameters['filterTranslatedAny'] = requestParameters.filterTranslatedAny;
        }

        if (requestParameters.filterUntranslatedInLang !== undefined) {
            queryParameters['filterUntranslatedInLang'] = requestParameters.filterUntranslatedInLang;
        }

        if (requestParameters.filterTranslatedInLang !== undefined) {
            queryParameters['filterTranslatedInLang'] = requestParameters.filterTranslatedInLang;
        }

        if (requestParameters.filterHasScreenshot !== undefined) {
            queryParameters['filterHasScreenshot'] = requestParameters.filterHasScreenshot;
        }

        if (requestParameters.filterHasNoScreenshot !== undefined) {
            queryParameters['filterHasNoScreenshot'] = requestParameters.filterHasNoScreenshot;
        }

        if (requestParameters.filterTag) {
            queryParameters['filterTag'] = requestParameters.filterTag;
        }

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/translations/select-all`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SelectAllResponseFromJSON(jsonValue));
    }

    /**
     * Get select all keys
     */
    async getSelectAllKeyIds1(requestParameters: TranslationsApiGetSelectAllKeyIds1Request = {}, initOverrides?: RequestInit): Promise<SelectAllResponse> {
        const response = await this.getSelectAllKeyIds1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns history of specific translation.   Sorting is not supported for supported. It is automatically sorted from newest to oldest.
     */
    async getTranslationHistory1Raw(requestParameters: TranslationsApiGetTranslationHistory1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PagedModelTranslationHistoryModel>> {
        if (requestParameters.translationId === null || requestParameters.translationId === undefined) {
            throw new runtime.RequiredError('translationId','Required parameter requestParameters.translationId was null or undefined when calling getTranslationHistory1.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/translations/{translationId}/history`.replace(`{${"translationId"}}`, encodeURIComponent(String(requestParameters.translationId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedModelTranslationHistoryModelFromJSON(jsonValue));
    }

    /**
     * Returns history of specific translation.   Sorting is not supported for supported. It is automatically sorted from newest to oldest.
     */
    async getTranslationHistory1(requestParameters: TranslationsApiGetTranslationHistory1Request, initOverrides?: RequestInit): Promise<PagedModelTranslationHistoryModel> {
        const response = await this.getTranslationHistory1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns translations in project
     */
    async getTranslations1Raw(requestParameters: TranslationsApiGetTranslations1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<KeysWithTranslationsPageModel>> {
        const queryParameters: any = {};

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.filterState) {
            queryParameters['filterState'] = requestParameters.filterState;
        }

        if (requestParameters.languages) {
            queryParameters['languages'] = requestParameters.languages;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.filterKeyName !== undefined) {
            queryParameters['filterKeyName'] = requestParameters.filterKeyName;
        }

        if (requestParameters.filterKeyId) {
            queryParameters['filterKeyId'] = requestParameters.filterKeyId;
        }

        if (requestParameters.filterUntranslatedAny !== undefined) {
            queryParameters['filterUntranslatedAny'] = requestParameters.filterUntranslatedAny;
        }

        if (requestParameters.filterTranslatedAny !== undefined) {
            queryParameters['filterTranslatedAny'] = requestParameters.filterTranslatedAny;
        }

        if (requestParameters.filterUntranslatedInLang !== undefined) {
            queryParameters['filterUntranslatedInLang'] = requestParameters.filterUntranslatedInLang;
        }

        if (requestParameters.filterTranslatedInLang !== undefined) {
            queryParameters['filterTranslatedInLang'] = requestParameters.filterTranslatedInLang;
        }

        if (requestParameters.filterHasScreenshot !== undefined) {
            queryParameters['filterHasScreenshot'] = requestParameters.filterHasScreenshot;
        }

        if (requestParameters.filterHasNoScreenshot !== undefined) {
            queryParameters['filterHasNoScreenshot'] = requestParameters.filterHasNoScreenshot;
        }

        if (requestParameters.filterTag) {
            queryParameters['filterTag'] = requestParameters.filterTag;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/translations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KeysWithTranslationsPageModelFromJSON(jsonValue));
    }

    /**
     * Returns translations in project
     */
    async getTranslations1(requestParameters: TranslationsApiGetTranslations1Request = {}, initOverrides?: RequestInit): Promise<KeysWithTranslationsPageModel> {
        const response = await this.getTranslations1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets translation state
     */
    async setTranslationState1Raw(requestParameters: TranslationsApiSetTranslationState1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<TranslationModel>> {
        if (requestParameters.translationId === null || requestParameters.translationId === undefined) {
            throw new runtime.RequiredError('translationId','Required parameter requestParameters.translationId was null or undefined when calling setTranslationState1.');
        }

        if (requestParameters.state === null || requestParameters.state === undefined) {
            throw new runtime.RequiredError('state','Required parameter requestParameters.state was null or undefined when calling setTranslationState1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/translations/{translationId}/set-state/{state}`.replace(`{${"translationId"}}`, encodeURIComponent(String(requestParameters.translationId))).replace(`{${"state"}}`, encodeURIComponent(String(requestParameters.state))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TranslationModelFromJSON(jsonValue));
    }

    /**
     * Sets translation state
     */
    async setTranslationState1(requestParameters: TranslationsApiSetTranslationState1Request, initOverrides?: RequestInit): Promise<TranslationModel> {
        const response = await this.setTranslationState1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets translations for existing key
     */
    async setTranslations1Raw(requestParameters: TranslationsApiSetTranslations1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SetTranslationsResponseModel>> {
        if (requestParameters.setTranslationsWithKeyDto === null || requestParameters.setTranslationsWithKeyDto === undefined) {
            throw new runtime.RequiredError('setTranslationsWithKeyDto','Required parameter requestParameters.setTranslationsWithKeyDto was null or undefined when calling setTranslations1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v2/projects/translations`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SetTranslationsWithKeyDtoToJSON(requestParameters.setTranslationsWithKeyDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SetTranslationsResponseModelFromJSON(jsonValue));
    }

    /**
     * Sets translations for existing key
     */
    async setTranslations1(requestParameters: TranslationsApiSetTranslations1Request, initOverrides?: RequestInit): Promise<SetTranslationsResponseModel> {
        const response = await this.setTranslations1Raw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum SetTranslationState1StateEnum {
    Untranslated = 'UNTRANSLATED',
    Translated = 'TRANSLATED',
    Reviewed = 'REVIEWED'
}