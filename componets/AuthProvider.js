import { createContext, useEffect, useState } from 'react';
import { supabase } from './supabase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(async (_, session) => {
      const currentUser = session?.user || null;
      setUser(currentUser);

      if (currentUser) {
        // Revisa si ya tiene perfil
        const { data: existing } = await supabase
          .from('profiles')
          .select('id')
          .eq('id', currentUser.id)
          .single();

        if (!existing) {
          // Crear perfil por defecto
          await supabase.from('profiles').insert([
            {
              id: currentUser.id,
              username: 'Invitado',
              avatar_url: '',
              score: 0,
              online: true,
            }
          ]);
        } else {
          // Marcar como online
          await supabase.from('profiles')
            .update({ online: true })
            .eq('id', currentUser.id);
        }
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
