/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountInfoByStateInit,
  GetAccountInfoByStateInitRequest,
  GetBlockDefaultResponse,
  GetTonConnectPayload200Response,
} from '../models/index';
import {
    AccountInfoByStateInitFromJSON,
    AccountInfoByStateInitToJSON,
    GetAccountInfoByStateInitRequestFromJSON,
    GetAccountInfoByStateInitRequestToJSON,
    GetBlockDefaultResponseFromJSON,
    GetBlockDefaultResponseToJSON,
    GetTonConnectPayload200ResponseFromJSON,
    GetTonConnectPayload200ResponseToJSON,
} from '../models/index';

export interface GetAccountInfoByStateInitOperationRequest {
    getAccountInfoByStateInitRequest: GetAccountInfoByStateInitRequest;
}

/**
 * ConnectApi - interface
 * 
 * @export
 * @interface ConnectApiInterface
 */
export interface ConnectApiInterface {
    /**
     * Get account info by state init
     * @param {GetAccountInfoByStateInitRequest} getAccountInfoByStateInitRequest Data that is expected
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectApiInterface
     */
    getAccountInfoByStateInitRaw(requestParameters: GetAccountInfoByStateInitOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountInfoByStateInit>>;

    /**
     * Get account info by state init
     */
    getAccountInfoByStateInit(requestParameters: GetAccountInfoByStateInitOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountInfoByStateInit>;

    /**
     * Get a payload for further token receipt
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConnectApiInterface
     */
    getTonConnectPayloadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetTonConnectPayload200Response>>;

    /**
     * Get a payload for further token receipt
     */
    getTonConnectPayload(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetTonConnectPayload200Response>;

}

/**
 * 
 */
export class ConnectApi extends runtime.BaseAPI implements ConnectApiInterface {

    /**
     * Get account info by state init
     */
    async getAccountInfoByStateInitRaw(requestParameters: GetAccountInfoByStateInitOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountInfoByStateInit>> {
        if (requestParameters.getAccountInfoByStateInitRequest === null || requestParameters.getAccountInfoByStateInitRequest === undefined) {
            throw new runtime.RequiredError('getAccountInfoByStateInitRequest','Required parameter requestParameters.getAccountInfoByStateInitRequest was null or undefined when calling getAccountInfoByStateInit.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v2/tonconnect/stateinit`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GetAccountInfoByStateInitRequestToJSON(requestParameters.getAccountInfoByStateInitRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountInfoByStateInitFromJSON(jsonValue));
    }

    /**
     * Get account info by state init
     */
    async getAccountInfoByStateInit(requestParameters: GetAccountInfoByStateInitOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountInfoByStateInit> {
        const response = await this.getAccountInfoByStateInitRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a payload for further token receipt
     */
    async getTonConnectPayloadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetTonConnectPayload200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/tonconnect/payload`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetTonConnectPayload200ResponseFromJSON(jsonValue));
    }

    /**
     * Get a payload for further token receipt
     */
    async getTonConnectPayload(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetTonConnectPayload200Response> {
        const response = await this.getTonConnectPayloadRaw(initOverrides);
        return await response.value();
    }

}