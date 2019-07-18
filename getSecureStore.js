import * as SecureStore from 'expo-secure-store';

export async function getSecureStore() {
    return await SecureStore.getItemAsync('test');
};
