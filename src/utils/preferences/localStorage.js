import { getValue, storeObject, storeValue } from "./asyncStoragePreferences";
import { PreferencesKeys } from "./preferencesKeys";


export const getAuthTokenDetails = async () => {
    let authToken = await getValue(PreferencesKeys.authToken);
    let bearerToken = authToken.value || '';
    return bearerToken;
};

export const saveLoginSessionDetails = async (tokenType, authToken) => {
    await storeValue(PreferencesKeys.authToken, tokenType + ' ' + authToken);
};

export const saveUserDetails = async data => {
    await storeObject(PreferencesKeys.userDetails, data);
  };