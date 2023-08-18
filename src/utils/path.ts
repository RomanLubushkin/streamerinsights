export enum AppPath {
    TWITCH_AUTH_REDIRECT = '/auth/twitch',
    PROFILE = '/profile/twitch/:login',
}

export function genProfileUrl(login: string) {
    return AppPath.PROFILE.replace(':login', login);
}