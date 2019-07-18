import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getSecureStore } from './getSecureStore';
import { setSecureStore } from './setSecureStore';

export default function App() {
  const [status, setStatus] = useState('waiting...');

  return (
    <View style={styles.container}>
      <Button
        onPress={async () => {
          await setSecureStore('you did it');
          setStatus(await getSecureStore());
        }}
        color='#841584'
        title='Set It'
      />
      <Text>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
