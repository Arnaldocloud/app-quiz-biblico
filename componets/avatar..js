import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { supabase } from './supabase';
import { AuthContext } from './AuthProvider';

export default function Perfil() {
  const { user } = useContext(AuthContext);
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    if (user) {
      supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
        .then(({ data }) => setPerfil(data));
    }
  }, [user]);

  if (!perfil) return null;

  return (
    <View>
      {perfil.avatar_url ? (
        <Image source={{ uri: perfil.avatar_url }} style={{ width: 100, height: 100 }} />
      ) : null}
      <Text>Usuario: {perfil.username}</Text>
      <Text>Puntaje: {perfil.score}</Text>
    </View>
  );
}
