export enum AppPath {
    TWITCH_AUTH_REDIRECT = '/auth/twitch',
    PROFILE = '/profile/:login',
}

export function genProfileUrl(login: string) {
    return AppPath.PROFILE.replace(':login', login);
}