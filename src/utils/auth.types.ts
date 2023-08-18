export enum AuthError {
    CORRUPTED_RESPONSE= 1,
    ACCESS_DENIED,
    UNKNOWN_ERROR
}

export type AuthState = {
    noise: string;
};