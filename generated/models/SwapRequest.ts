/* tslint:disable */
/* eslint-disable */
/**
 * Jupiter API v6
 * The core of [jup.ag](https://jup.ag). Easily get a quote and swap through Jupiter API.  ### Rate Limit The rate limit is 50 requests / 10 seconds. If you need a higher rate limit, feel free to contact us on [#developer-support](https://discord.com/channels/897540204506775583/910250162402779146) on Discord.  ### API Wrapper - Typescript [@jup-ag/api](https://github.com/jup-ag/jupiter-quote-api-node)  ### Data types - Public keys are base58 encoded strings - raw data such as Vec<u8\\> are base64 encoded strings 
 *
 * The version of the OpenAPI document: 6.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { QuoteResponse } from './QuoteResponse';
import {
    QuoteResponseFromJSON,
    QuoteResponseFromJSONTyped,
    QuoteResponseToJSON,
} from './QuoteResponse';

/**
 * 
 * @export
 * @interface SwapRequest
 */
export interface SwapRequest {
    /**
     * The user public key.
     * @type {string}
     * @memberof SwapRequest
     */
    userPublicKey: string;
    /**
     * Automatically wrap/unwrap SOL. If false, it will use wSOL token account.  Will be ignored if `destinationTokenAccount` is set because the `destinationTokenAccount` may belong to a different user that we have no authority to close.
     * @type {boolean}
     * @memberof SwapRequest
     */
    wrapAndUnwrapSol?: boolean;
    /**
     * This enables the usage of shared program accountns. That means no intermediate token accounts or open orders accounts need to be created for the users. But it also means that the likelihood of hot accounts is higher.
     * @type {boolean}
     * @memberof SwapRequest
     */
    useSharedAccounts?: boolean;
    /**
     * Fee token account for the output token, it is derived using the seeds = ["referral_ata", referral_account, mint] and the `REFER4ZgmyYx9c6He5XfaTMiGfdLwRnkV4RPp9t9iF3` referral contract (only pass in if you set a `platformFeeBps` in `/quote` and make sure that the feeAccount has been created).
     * @type {string}
     * @memberof SwapRequest
     */
    feeAccount?: string;
    /**
     * The prioritization fee to pay in addition to the signature fee to prioritize the transaction.
     * @type {any}
     * @memberof SwapRequest
     */
    prioritizationFeeLamports?: any | null;
    /**
     * The compute unit price to prioritize the transaction, the additional fee will be `computeUnitLimit * computeUnitPriceMicroLamports`. If `auto` is used, Jupiter will automatically set a priority fee and it will be capped at 5,000,000 lamports.
     * @type {any}
     * @memberof SwapRequest
     */
    computeUnitPriceMicroLamports?: any | null;
    /**
     * Request a legacy transaction rather than the default versioned transaction, needs to be paired with a quote using asLegacyTransaction otherwise the transaction might be too large.
     * @type {boolean}
     * @memberof SwapRequest
     */
    asLegacyTransaction?: boolean;
    /**
     * Restrict intermediate tokens to a top token set that has stable liquidity. This will help to ease potential high slippage error rate when swapping with minimal impact on pricing.
     * @type {boolean}
     * @memberof SwapRequest
     */
    restrictIntermediateTokens?: boolean;
    /**
     * This is useful when the instruction before the swap has a transfer that increases the input token amount. Then, the swap will just use the difference between the token ledger token amount and post token amount.
     * @type {boolean}
     * @memberof SwapRequest
     */
    useTokenLedger?: boolean;
    /**
     * Public key of the token account that will be used to receive the token out of the swap. If not provided, the user's ATA will be used. If provided, we assume that the token account is already initialized.
     * @type {string}
     * @memberof SwapRequest
     */
    destinationTokenAccount?: string;
    /**
     * Simulate the swap transaction to get the compute unit consumed, factor in a margin and set the ComputeBudget's compute unit limit.
     * @type {boolean}
     * @memberof SwapRequest
     */
    dynamicComputeUnitLimit?: boolean;
    /**
     * 
     * @type {QuoteResponse}
     * @memberof SwapRequest
     */
    quoteResponse: QuoteResponse;
}

/**
 * Check if a given object implements the SwapRequest interface.
 */
export function instanceOfSwapRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userPublicKey" in value;
    isInstance = isInstance && "quoteResponse" in value;

    return isInstance;
}

export function SwapRequestFromJSON(json: any): SwapRequest {
    return SwapRequestFromJSONTyped(json, false);
}

export function SwapRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SwapRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userPublicKey': json['userPublicKey'],
        'wrapAndUnwrapSol': !exists(json, 'wrapAndUnwrapSol') ? undefined : json['wrapAndUnwrapSol'],
        'useSharedAccounts': !exists(json, 'useSharedAccounts') ? undefined : json['useSharedAccounts'],
        'feeAccount': !exists(json, 'feeAccount') ? undefined : json['feeAccount'],
        'prioritizationFeeLamports': !exists(json, 'prioritizationFeeLamports') ? undefined : json['prioritizationFeeLamports'],
        'computeUnitPriceMicroLamports': !exists(json, 'computeUnitPriceMicroLamports') ? undefined : json['computeUnitPriceMicroLamports'],
        'asLegacyTransaction': !exists(json, 'asLegacyTransaction') ? undefined : json['asLegacyTransaction'],
        'restrictIntermediateTokens': !exists(json, 'restrictIntermediateTokens') ? undefined : json['restrictIntermediateTokens'],
        'useTokenLedger': !exists(json, 'useTokenLedger') ? undefined : json['useTokenLedger'],
        'destinationTokenAccount': !exists(json, 'destinationTokenAccount') ? undefined : json['destinationTokenAccount'],
        'dynamicComputeUnitLimit': !exists(json, 'dynamicComputeUnitLimit') ? undefined : json['dynamicComputeUnitLimit'],
        'quoteResponse': QuoteResponseFromJSON(json['quoteResponse']),
    };
}

export function SwapRequestToJSON(value?: SwapRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userPublicKey': value.userPublicKey,
        'wrapAndUnwrapSol': value.wrapAndUnwrapSol,
        'useSharedAccounts': value.useSharedAccounts,
        'feeAccount': value.feeAccount,
        'prioritizationFeeLamports': value.prioritizationFeeLamports,
        'computeUnitPriceMicroLamports': value.computeUnitPriceMicroLamports,
        'asLegacyTransaction': value.asLegacyTransaction,
        'restrictIntermediateTokens': value.restrictIntermediateTokens,
        'useTokenLedger': value.useTokenLedger,
        'destinationTokenAccount': value.destinationTokenAccount,
        'dynamicComputeUnitLimit': value.dynamicComputeUnitLimit,
        'quoteResponse': QuoteResponseToJSON(value.quoteResponse),
    };
}

