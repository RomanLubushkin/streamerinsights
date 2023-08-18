import {UserInfo} from "../types/user-info";

export function setAuthStateNoise(noise: string): void {
    localStorage.setItem(`auth-noise:${noise}`, '1')
}

export function hasAuthStateNoise(noise: string): boolean {
    return !!localStorage.getItem(`auth-noise:${noise}`)
}

export function clearAuthStateNoise(): void {
    const keys = Object.keys(localStorage);
    for (let i = 0, count = keys.length; i < count; i++) {
        const key = keys[i];
        if (key.startsWith('auth-noise:')) {
            localStorage.removeItem(key);
        }
    }
}

export function getAccessToken(): string | null {
    return localStorage.getItem('twitch-access-token') || null;
}

export function setAccessToken(value: string): void {
    localStorage.setItem('twitch-access-token', value);
}

export function clearAccessToken(): void {
    localStorage.removeItem('twitch-access-token');
}

export function getUserInfo(): UserInfo | null {
    try {
        const str = localStorage.getItem('twitch-user-info');
        if (str) {
            return JSON.parse(str);
        }
        return null;
    } catch (e) {
        console.error(`Unable to parse user info ${e}`)
        return null;
    }
}

export function setUserInfo(value: UserInfo): void {
    localStorage.setItem('twitch-user-info', JSON.stringify(value));
}

export function clearUserInfo(): void {
    localStorage.removeItem('twitch-user-info');
}