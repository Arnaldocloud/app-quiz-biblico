import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { supabase } from './supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const login = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setMensaje('Error al enviar el enlace');
    else setMensaje('¡Revisa tu correo!');
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <Button title="Iniciar sesión" onPress={login} />
      {mensaje && <Text>{mensaje}</Text>}
    </View>
  );
}
