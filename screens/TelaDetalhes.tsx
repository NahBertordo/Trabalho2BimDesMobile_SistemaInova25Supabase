// screens/EspecificacaoGrupo.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { supabase } from '../lib/supabase';

export default function TelaDetalhes({ route }: { route: any }) {
  const { groupId } = route.params;
  const [group, setGroup] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const fetchGroupDetails = async () => {
    const { data, error } = await supabase
        .from('grupo')
        .select(`
            idgrupo,
            nomegrupo,
            descgrupo,
            integrante,
            nota_apresentacao
        `)
        .eq('idgrupo', groupId)
        .single();

    if (error) {
        setError(error.message);
    } else {
        setGroup(data);
    }
    setLoading(false);
};

useEffect(() => {
    fetchGroupDetails();
}, []);

if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
if (error) return <Text>Error: {error}</Text>;
if (!group) return <Text>No group found.</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{group.nomegrupo}</Text>
      <Text style={{ marginVertical: 10 }}>{group.descgrupo}</Text>
      <Text><strong>Integrantes:</strong> {group.integrante}</Text>
      <Text><strong>Nota de Apresentação:</strong> {group.nota_apresentacao}</Text>
    </View>
  );
}