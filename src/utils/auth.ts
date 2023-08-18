import {v4 as uuidv4} from 'uuid';
import {decode, encode} from 'js-base64';
import queryString from 'query-string';
import {AppPath} from "./path";
import {clearAuthStateNoise, hasAuthStateNoise, setAuthStateNoise} from "./local-storage";
import {AuthError, AuthState} from "./auth.types";
import {TWITCH_CLIENT_ID} from "./contants";

function encodeAuthState(state: AuthState): string {
    return encode(JSON.stringify(state));
}

function decodeAuthState(state: string): AuthState {
    try {
        return JSON.parse(decode(state));
    } catch (e) {
        console.error(`Unable to decode state ${state}`);
        return null;
    }
}

// !!! This should always be used in combination with onClick callback and not as href for a link
// otherwise local-storage will be flooded with noise stings
function genAuthUrl(): string {
    const state = {noise: uuidv4()};
    const params = {
        response_type: 'token',
        client_id: TWITCH_CLIENT_ID,
        redirect_uri: location.origin + AppPath.TWITCH_AUTH_REDIRECT,
        scope: 'user:read:email',
        state: encodeAuthState(state),
    };
    setAuthStateNoise(state.noise);
    return `https://id.twitch.tv/oauth2/authorize?${queryString.stringify(params, {encode: true})}`
}

export function startAuth() {
    window.location.href = genAuthUrl();
}

// See implicit-grant-flow documentation for more details
// https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow
export function processAuthResult(): [string | null, AuthError | null] {
    if (document.location.hash) {
        // check params
        const hashParams = queryString.parse(document.location.hash.slice(1), {decode: true});
        if (
            !hashParams.access_token ||
            typeof hashParams.access_token !== 'string' ||
            !hashParams.state ||
            typeof hashParams.state !== 'string'
        ) {
            console.error(`No access_token or state in location hash ${document.location.hash}`);
            return [null, AuthError.CORRUPTED_RESPONSE];
        }

        // decode state
        const state = decodeAuthState(hashParams.state);
        if (!state) {
            console.error(`Unable to decode state ${hashParams.state}`);
            return [null, AuthError.CORRUPTED_RESPONSE];
        }

        // verify state
        if (!hasAuthStateNoise(state.noise)) {
            console.error(`Never seen noise ${state.noise}`);
            return [null, AuthError.CORRUPTED_RESPONSE];
        }

        // clear noises in case of success
        clearAuthStateNoise();

        // success authentication
        return [hashParams.access_token, null];
    }

    // process twitch error
    const queryParams = queryString.parse(document.location.search, {decode: true});
    if (queryParams.error === 'access_denied') {
        return [null, AuthError.ACCESS_DENIED];
    }

    // in none of the following conditions returned, we don't know what happened, but something is definitely wrong
    return [null, AuthError.UNKNOWN_ERROR];
}