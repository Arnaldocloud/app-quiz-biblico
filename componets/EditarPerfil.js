import React, { useContext, useEffect, useState } from 'react';
import { View, TextInput, Button, Image, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from './supabase';
import { AuthContext } from './AuthProvider';

export default function EditarPerfil() {
  const { user } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (user) {
      supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
        .then(({ data }) => {
          if (data) {
            setUsername(data.username || '');
            setAvatarUrl(data.avatar_url || '');
          }
        });
    }
  }, [user]);

  const subirImagen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      base64: false,
    });

    if (!result.canceled) {
      const image = result.assets[0];
      const fileExt = image.uri.split('.').pop();
      const fileName = `${user.id}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const response = await fetch(image.uri);
      const blob = await response.blob();

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, blob, { upsert: true });

      if (!uploadError) {
        const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
        setAvatarUrl(data.publicUrl);

        await supabase.from('profiles')
          .update({ avatar_url: data.publicUrl })
          .eq('id', user.id);

        Alert.alert('Avatar actualizado');
      } else {
        Alert.alert('Error al subir imagen');
      }
    }
  };

  const guardarCambios = async () => {
    await supabase.from('profiles')
      .update({ username })
      .eq('id', user.id);

    Alert.alert('Perfil actualizado');
  };

  return (
    <View>
      {avatarUrl ? (
        <Image source={{ uri: avatarUrl }} style={{ width: 100, height: 100, borderRadius: 50 }} />
      ) : null}
      <Button title="Cambiar avatar" onPress={subirImagen} />
      <TextInput
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
        style={{ borderBottomWidth: 1, marginVertical: 10 }}
      />
      <Button title="Guardar perfil" onPress={guardarCambios} />
    </View>
  );
}
