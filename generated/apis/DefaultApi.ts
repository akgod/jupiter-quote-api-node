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


import * as runtime from '../runtime';
import {
    InlineObject,
    InlineObjectFromJSON,
    InlineObjectToJSON,
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    InlineResponse409,
    InlineResponse409FromJSON,
    InlineResponse409ToJSON,
    InlineResponseDefault,
    InlineResponseDefaultFromJSON,
    InlineResponseDefaultToJSON,
    InlineResponseDefault1,
    InlineResponseDefault1FromJSON,
    InlineResponseDefault1ToJSON,
    InlineResponseDefault2,
    InlineResponseDefault2FromJSON,
    InlineResponseDefault2ToJSON,
} from '../models';

export interface V3IndexedRouteMapGetRequest {
    onlyDirectRoutes?: boolean;
}

export interface V3PriceGetRequest {
    ids: string;
    vsToken?: string;
    vsAmount?: number;
}

export interface V3QuoteGetRequest {
    inputMint: string;
    outputMint: string;
    amount: number;
    swapMode?: V3QuoteGetSwapModeEnum;
    slippageBps?: number;
    feeBps?: number;
    onlyDirectRoutes?: boolean;
    userPublicKey?: string;
}

export interface V3SwapPostRequest {
    body?: InlineObject;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Returns a hash map, input mint as key and an array of valid output mint as values, token mints are indexed to reduce the file size
     */
    async v3IndexedRouteMapGetRaw(requestParameters: V3IndexedRouteMapGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponseDefault2>> {
        const queryParameters: any = {};

        if (requestParameters.onlyDirectRoutes !== undefined) {
            queryParameters['onlyDirectRoutes'] = requestParameters.onlyDirectRoutes;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/indexed-route-map`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponseDefault2FromJSON(jsonValue));
    }

    /**
     * Returns a hash map, input mint as key and an array of valid output mint as values, token mints are indexed to reduce the file size
     */
    async v3IndexedRouteMapGet(requestParameters: V3IndexedRouteMapGetRequest = {}, initOverrides?: RequestInit): Promise<InlineResponseDefault2> {
        const response = await this.v3IndexedRouteMapGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get simple price for a given input mint, output mint and amount
     * Return simple price
     */
    async v3PriceGetRaw(requestParameters: V3PriceGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling v3PriceGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids !== undefined) {
            queryParameters['ids'] = requestParameters.ids;
        }

        if (requestParameters.vsToken !== undefined) {
            queryParameters['vsToken'] = requestParameters.vsToken;
        }

        if (requestParameters.vsAmount !== undefined) {
            queryParameters['vsAmount'] = requestParameters.vsAmount;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/price`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

    /**
     * Get simple price for a given input mint, output mint and amount
     * Return simple price
     */
    async v3PriceGet(requestParameters: V3PriceGetRequest, initOverrides?: RequestInit): Promise<InlineResponse200> {
        const response = await this.v3PriceGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get quote for a given input mint, output mint and amount
     * Return route
     */
    async v3QuoteGetRaw(requestParameters: V3QuoteGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponseDefault>> {
        if (requestParameters.inputMint === null || requestParameters.inputMint === undefined) {
            throw new runtime.RequiredError('inputMint','Required parameter requestParameters.inputMint was null or undefined when calling v3QuoteGet.');
        }

        if (requestParameters.outputMint === null || requestParameters.outputMint === undefined) {
            throw new runtime.RequiredError('outputMint','Required parameter requestParameters.outputMint was null or undefined when calling v3QuoteGet.');
        }

        if (requestParameters.amount === null || requestParameters.amount === undefined) {
            throw new runtime.RequiredError('amount','Required parameter requestParameters.amount was null or undefined when calling v3QuoteGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.inputMint !== undefined) {
            queryParameters['inputMint'] = requestParameters.inputMint;
        }

        if (requestParameters.outputMint !== undefined) {
            queryParameters['outputMint'] = requestParameters.outputMint;
        }

        if (requestParameters.amount !== undefined) {
            queryParameters['amount'] = requestParameters.amount;
        }

        if (requestParameters.swapMode !== undefined) {
            queryParameters['swapMode'] = requestParameters.swapMode;
        }

        if (requestParameters.slippageBps !== undefined) {
            queryParameters['slippageBps'] = requestParameters.slippageBps;
        }

        if (requestParameters.feeBps !== undefined) {
            queryParameters['feeBps'] = requestParameters.feeBps;
        }

        if (requestParameters.onlyDirectRoutes !== undefined) {
            queryParameters['onlyDirectRoutes'] = requestParameters.onlyDirectRoutes;
        }

        if (requestParameters.userPublicKey !== undefined) {
            queryParameters['userPublicKey'] = requestParameters.userPublicKey;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v3/quote`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponseDefaultFromJSON(jsonValue));
    }

    /**
     * Get quote for a given input mint, output mint and amount
     * Return route
     */
    async v3QuoteGet(requestParameters: V3QuoteGetRequest, initOverrides?: RequestInit): Promise<InlineResponseDefault> {
        const response = await this.v3QuoteGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get swap serialized transactions for a route
     * Return setup, swap and cleanup transactions
     */
    async v3SwapPostRaw(requestParameters: V3SwapPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<InlineResponseDefault1>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v3/swap`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InlineObjectToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponseDefault1FromJSON(jsonValue));
    }

    /**
     * Get swap serialized transactions for a route
     * Return setup, swap and cleanup transactions
     */
    async v3SwapPost(requestParameters: V3SwapPostRequest = {}, initOverrides?: RequestInit): Promise<InlineResponseDefault1> {
        const response = await this.v3SwapPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum V3QuoteGetSwapModeEnum {
    ExactIn = 'ExactIn',
    ExactOut = 'ExactOut'
}
