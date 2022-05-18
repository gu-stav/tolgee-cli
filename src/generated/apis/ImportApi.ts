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
    ImportAddFilesResultModel,
    ImportAddFilesResultModelFromJSON,
    ImportAddFilesResultModelToJSON,
    ImportLanguageModel,
    ImportLanguageModelFromJSON,
    ImportLanguageModelToJSON,
    PagedModelEntityModelImportFileIssueView,
    PagedModelEntityModelImportFileIssueViewFromJSON,
    PagedModelEntityModelImportFileIssueViewToJSON,
    PagedModelImportLanguageModel,
    PagedModelImportLanguageModelFromJSON,
    PagedModelImportLanguageModelToJSON,
    PagedModelImportTranslationModel,
    PagedModelImportTranslationModelFromJSON,
    PagedModelImportTranslationModelToJSON,
    PagedModelLanguageModel,
    PagedModelLanguageModelFromJSON,
    PagedModelLanguageModelToJSON,
} from '../models';

export interface ImportApiAddFiles1Request {
    files: Array<Blob>;
    ak?: string;
}

export interface ImportApiApplyImport1Request {
    forceMode?: ApplyImport1ForceModeEnum;
    ak?: string;
}

export interface ImportApiCancelImport1Request {
    ak?: string;
}

export interface ImportApiDeleteLanguage1Request {
    languageId: number;
    ak?: string;
}

export interface ImportApiGetAll6Request {
    page?: number;
    size?: number;
    sort?: Array<string>;
    ak?: string;
}

export interface ImportApiGetImportFileIssues1Request {
    importFileId: number;
    page?: number;
    size?: number;
    sort?: Array<string>;
    ak?: string;
}

export interface ImportApiGetImportLanguage1Request {
    languageId: number;
    ak?: string;
}

export interface ImportApiGetImportResult1Request {
    page?: number;
    size?: number;
    sort?: Array<string>;
    ak?: string;
}

export interface ImportApiGetImportTranslations1Request {
    languageId: number;
    onlyConflicts?: boolean;
    onlyUnresolved?: boolean;
    search?: string;
    page?: number;
    size?: number;
    sort?: Array<string>;
    ak?: string;
}

export interface ImportApiResetExistingLanguage1Request {
    importLanguageId: number;
    ak?: string;
}

export interface ImportApiResolveTranslationSetKeepExisting1Request {
    languageId: number;
    translationId: number;
    ak?: string;
}

export interface ImportApiResolveTranslationSetKeepExisting3Request {
    languageId: number;
    ak?: string;
}

export interface ImportApiResolveTranslationSetOverride1Request {
    languageId: number;
    translationId: number;
    ak?: string;
}

export interface ImportApiResolveTranslationSetOverride3Request {
    languageId: number;
    ak?: string;
}

export interface ImportApiSelectExistingLanguage1Request {
    importLanguageId: number;
    existingLanguageId: number;
    ak?: string;
}

/**
 * 
 */
export class ImportApi extends runtime.BaseAPI {

    /**
     * Prepares provided files to import
     */
    async addFiles1Raw(requestParameters: ImportApiAddFiles1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ImportAddFilesResultModel>> {
        if (requestParameters.files === null || requestParameters.files === undefined) {
            throw new runtime.RequiredError('files','Required parameter requestParameters.files was null or undefined when calling addFiles1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.files) {
            requestParameters.files.forEach((element) => {
                formParams.append('files', element as any);
            })
        }

        const response = await this.request({
            path: `/v2/projects/import`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImportAddFilesResultModelFromJSON(jsonValue));
    }

    /**
     * Prepares provided files to import
     */
    async addFiles1(requestParameters: ImportApiAddFiles1Request, initOverrides?: RequestInit): Promise<ImportAddFilesResultModel> {
        const response = await this.addFiles1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Imports the data prepared in previous step
     */
    async applyImport1Raw(requestParameters: ImportApiApplyImport1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.forceMode !== undefined) {
            queryParameters['forceMode'] = requestParameters.forceMode;
        }

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/import/apply`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Imports the data prepared in previous step
     */
    async applyImport1(requestParameters: ImportApiApplyImport1Request = {}, initOverrides?: RequestInit): Promise<void> {
        await this.applyImport1Raw(requestParameters, initOverrides);
    }

    /**
     */
    async cancelImport1Raw(requestParameters: ImportApiCancelImport1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/import`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async cancelImport1(requestParameters: ImportApiCancelImport1Request = {}, initOverrides?: RequestInit): Promise<void> {
        await this.cancelImport1Raw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteLanguage1Raw(requestParameters: ImportApiDeleteLanguage1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.languageId === null || requestParameters.languageId === undefined) {
            throw new runtime.RequiredError('languageId','Required parameter requestParameters.languageId was null or undefined when calling deleteLanguage1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/import/result/languages/{languageId}`.replace(`{${"languageId"}}`, encodeURIComponent(String(requestParameters.languageId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteLanguage1(requestParameters: ImportApiDeleteLanguage1Request, initOverrides?: RequestInit): Promise<void> {
        await this.deleteLanguage1Raw(requestParameters, initOverrides);
    }

    /**
     * Returns all project languages
     */
    async getAll6Raw(requestParameters: ImportApiGetAll6Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PagedModelLanguageModel>> {
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
            path: `/v2/projects/languages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedModelLanguageModelFromJSON(jsonValue));
    }

    /**
     * Returns all project languages
     */
    async getAll6(requestParameters: ImportApiGetAll6Request = {}, initOverrides?: RequestInit): Promise<PagedModelLanguageModel> {
        const response = await this.getAll6Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getImportFileIssues1Raw(requestParameters: ImportApiGetImportFileIssues1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PagedModelEntityModelImportFileIssueView>> {
        if (requestParameters.importFileId === null || requestParameters.importFileId === undefined) {
            throw new runtime.RequiredError('importFileId','Required parameter requestParameters.importFileId was null or undefined when calling getImportFileIssues1.');
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
            path: `/v2/projects/import/result/files/{importFileId}/issues`.replace(`{${"importFileId"}}`, encodeURIComponent(String(requestParameters.importFileId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedModelEntityModelImportFileIssueViewFromJSON(jsonValue));
    }

    /**
     */
    async getImportFileIssues1(requestParameters: ImportApiGetImportFileIssues1Request, initOverrides?: RequestInit): Promise<PagedModelEntityModelImportFileIssueView> {
        const response = await this.getImportFileIssues1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getImportLanguage1Raw(requestParameters: ImportApiGetImportLanguage1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ImportLanguageModel>> {
        if (requestParameters.languageId === null || requestParameters.languageId === undefined) {
            throw new runtime.RequiredError('languageId','Required parameter requestParameters.languageId was null or undefined when calling getImportLanguage1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/import/result/languages/{languageId}`.replace(`{${"languageId"}}`, encodeURIComponent(String(requestParameters.languageId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImportLanguageModelFromJSON(jsonValue));
    }

    /**
     */
    async getImportLanguage1(requestParameters: ImportApiGetImportLanguage1Request, initOverrides?: RequestInit): Promise<ImportLanguageModel> {
        const response = await this.getImportLanguage1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getImportResult1Raw(requestParameters: ImportApiGetImportResult1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PagedModelImportLanguageModel>> {
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
            path: `/v2/projects/import/result`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedModelImportLanguageModelFromJSON(jsonValue));
    }

    /**
     */
    async getImportResult1(requestParameters: ImportApiGetImportResult1Request = {}, initOverrides?: RequestInit): Promise<PagedModelImportLanguageModel> {
        const response = await this.getImportResult1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getImportTranslations1Raw(requestParameters: ImportApiGetImportTranslations1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PagedModelImportTranslationModel>> {
        if (requestParameters.languageId === null || requestParameters.languageId === undefined) {
            throw new runtime.RequiredError('languageId','Required parameter requestParameters.languageId was null or undefined when calling getImportTranslations1.');
        }

        const queryParameters: any = {};

        if (requestParameters.onlyConflicts !== undefined) {
            queryParameters['onlyConflicts'] = requestParameters.onlyConflicts;
        }

        if (requestParameters.onlyUnresolved !== undefined) {
            queryParameters['onlyUnresolved'] = requestParameters.onlyUnresolved;
        }

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
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
            path: `/v2/projects/import/result/languages/{languageId}/translations`.replace(`{${"languageId"}}`, encodeURIComponent(String(requestParameters.languageId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedModelImportTranslationModelFromJSON(jsonValue));
    }

    /**
     */
    async getImportTranslations1(requestParameters: ImportApiGetImportTranslations1Request, initOverrides?: RequestInit): Promise<PagedModelImportTranslationModel> {
        const response = await this.getImportTranslations1Raw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async resetExistingLanguage1Raw(requestParameters: ImportApiResetExistingLanguage1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.importLanguageId === null || requestParameters.importLanguageId === undefined) {
            throw new runtime.RequiredError('importLanguageId','Required parameter requestParameters.importLanguageId was null or undefined when calling resetExistingLanguage1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/import/result/languages/{importLanguageId}/reset-existing`.replace(`{${"importLanguageId"}}`, encodeURIComponent(String(requestParameters.importLanguageId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async resetExistingLanguage1(requestParameters: ImportApiResetExistingLanguage1Request, initOverrides?: RequestInit): Promise<void> {
        await this.resetExistingLanguage1Raw(requestParameters, initOverrides);
    }

    /**
     */
    async resolveTranslationSetKeepExisting1Raw(requestParameters: ImportApiResolveTranslationSetKeepExisting1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.languageId === null || requestParameters.languageId === undefined) {
            throw new runtime.RequiredError('languageId','Required parameter requestParameters.languageId was null or undefined when calling resolveTranslationSetKeepExisting1.');
        }

        if (requestParameters.translationId === null || requestParameters.translationId === undefined) {
            throw new runtime.RequiredError('translationId','Required parameter requestParameters.translationId was null or undefined when calling resolveTranslationSetKeepExisting1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/import/result/languages/{languageId}/translations/{translationId}/resolve/set-keep-existing`.replace(`{${"languageId"}}`, encodeURIComponent(String(requestParameters.languageId))).replace(`{${"translationId"}}`, encodeURIComponent(String(requestParameters.translationId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async resolveTranslationSetKeepExisting1(requestParameters: ImportApiResolveTranslationSetKeepExisting1Request, initOverrides?: RequestInit): Promise<void> {
        await this.resolveTranslationSetKeepExisting1Raw(requestParameters, initOverrides);
    }

    /**
     */
    async resolveTranslationSetKeepExisting3Raw(requestParameters: ImportApiResolveTranslationSetKeepExisting3Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.languageId === null || requestParameters.languageId === undefined) {
            throw new runtime.RequiredError('languageId','Required parameter requestParameters.languageId was null or undefined when calling resolveTranslationSetKeepExisting3.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/import/result/languages/{languageId}/resolve-all/set-keep-existing`.replace(`{${"languageId"}}`, encodeURIComponent(String(requestParameters.languageId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async resolveTranslationSetKeepExisting3(requestParameters: ImportApiResolveTranslationSetKeepExisting3Request, initOverrides?: RequestInit): Promise<void> {
        await this.resolveTranslationSetKeepExisting3Raw(requestParameters, initOverrides);
    }

    /**
     */
    async resolveTranslationSetOverride1Raw(requestParameters: ImportApiResolveTranslationSetOverride1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.languageId === null || requestParameters.languageId === undefined) {
            throw new runtime.RequiredError('languageId','Required parameter requestParameters.languageId was null or undefined when calling resolveTranslationSetOverride1.');
        }

        if (requestParameters.translationId === null || requestParameters.translationId === undefined) {
            throw new runtime.RequiredError('translationId','Required parameter requestParameters.translationId was null or undefined when calling resolveTranslationSetOverride1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/import/result/languages/{languageId}/translations/{translationId}/resolve/set-override`.replace(`{${"languageId"}}`, encodeURIComponent(String(requestParameters.languageId))).replace(`{${"translationId"}}`, encodeURIComponent(String(requestParameters.translationId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async resolveTranslationSetOverride1(requestParameters: ImportApiResolveTranslationSetOverride1Request, initOverrides?: RequestInit): Promise<void> {
        await this.resolveTranslationSetOverride1Raw(requestParameters, initOverrides);
    }

    /**
     */
    async resolveTranslationSetOverride3Raw(requestParameters: ImportApiResolveTranslationSetOverride3Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.languageId === null || requestParameters.languageId === undefined) {
            throw new runtime.RequiredError('languageId','Required parameter requestParameters.languageId was null or undefined when calling resolveTranslationSetOverride3.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/import/result/languages/{languageId}/resolve-all/set-override`.replace(`{${"languageId"}}`, encodeURIComponent(String(requestParameters.languageId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async resolveTranslationSetOverride3(requestParameters: ImportApiResolveTranslationSetOverride3Request, initOverrides?: RequestInit): Promise<void> {
        await this.resolveTranslationSetOverride3Raw(requestParameters, initOverrides);
    }

    /**
     */
    async selectExistingLanguage1Raw(requestParameters: ImportApiSelectExistingLanguage1Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.importLanguageId === null || requestParameters.importLanguageId === undefined) {
            throw new runtime.RequiredError('importLanguageId','Required parameter requestParameters.importLanguageId was null or undefined when calling selectExistingLanguage1.');
        }

        if (requestParameters.existingLanguageId === null || requestParameters.existingLanguageId === undefined) {
            throw new runtime.RequiredError('existingLanguageId','Required parameter requestParameters.existingLanguageId was null or undefined when calling selectExistingLanguage1.');
        }

        const queryParameters: any = {};

        if (requestParameters.ak !== undefined) {
            queryParameters['ak'] = requestParameters.ak;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/projects/import/result/languages/{importLanguageId}/select-existing/{existingLanguageId}`.replace(`{${"importLanguageId"}}`, encodeURIComponent(String(requestParameters.importLanguageId))).replace(`{${"existingLanguageId"}}`, encodeURIComponent(String(requestParameters.existingLanguageId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async selectExistingLanguage1(requestParameters: ImportApiSelectExistingLanguage1Request, initOverrides?: RequestInit): Promise<void> {
        await this.selectExistingLanguage1Raw(requestParameters, initOverrides);
    }

}

/**
    * @export
    * @enum {string}
    */
export enum ApplyImport1ForceModeEnum {
    Override = 'OVERRIDE',
    Keep = 'KEEP',
    NoForce = 'NO_FORCE'
}