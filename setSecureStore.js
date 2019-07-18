import * as SecureStore from 'expo-secure-store';

export async function setSecureStore(value) {
    return await SecureStore.setItemAsync('test', value);
};
