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

import { exists, mapValues } from '../runtime';
import type { BlockRaw } from './BlockRaw';
import {
    BlockRawFromJSON,
    BlockRawFromJSONTyped,
    BlockRawToJSON,
} from './BlockRaw';

/**
 * 
 * @export
 * @interface GetAllShardsInfoLiteServer200Response
 */
export interface GetAllShardsInfoLiteServer200Response {
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetAllShardsInfoLiteServer200Response
     */
    id: BlockRaw;
    /**
     * 
     * @type {string}
     * @memberof GetAllShardsInfoLiteServer200Response
     */
    proof: string;
    /**
     * 
     * @type {string}
     * @memberof GetAllShardsInfoLiteServer200Response
     */
    data: string;
}

/**
 * Check if a given object implements the GetAllShardsInfoLiteServer200Response interface.
 */
export function instanceOfGetAllShardsInfoLiteServer200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "proof" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetAllShardsInfoLiteServer200ResponseFromJSON(json: any): GetAllShardsInfoLiteServer200Response {
    return GetAllShardsInfoLiteServer200ResponseFromJSONTyped(json, false);
}

export function GetAllShardsInfoLiteServer200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllShardsInfoLiteServer200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': BlockRawFromJSON(json['id']),
        'proof': json['proof'],
        'data': json['data'],
    };
}

export function GetAllShardsInfoLiteServer200ResponseToJSON(value?: GetAllShardsInfoLiteServer200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': BlockRawToJSON(value.id),
        'proof': value.proof,
        'data': value.data,
    };
}
