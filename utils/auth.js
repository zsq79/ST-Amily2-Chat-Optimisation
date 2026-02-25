// Auth module stub — DRM removed, always authorized.

export const pluginAuthStatus = { authorized: true, expired: false };

export function checkAuthorization() {
    return true;
}

export function activatePluginAuthorization() {
    return true;
}

export function displayExpiryInfo() {
    return '';
}

export async function refreshUserInfo() {
    return null;
}

export function getPasswordForDate() {
    return '';
}
