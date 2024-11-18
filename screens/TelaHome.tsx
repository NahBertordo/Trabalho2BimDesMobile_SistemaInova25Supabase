import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { supabase } from '../lib/supabase';

interface Grupo {
    idgrupo: number;
    nomegrupo: string;
    integrante: string;
}

export default function TelaHome({ navigation }: { navigation: any }) {
    const [grupos, setGrupos] = useState<Grupo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchGrupos = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('grupo').select(`
            idgrupo,
            nomegrupo,
            integrante
        `);
        if (error) {
            setError(error.message);
        } else {
            setGrupos(data as Grupo[]);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchGrupos();
    }, []);

    const renderGrupoItem = ({ item }:{item: Grupo}) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18 }}>{item.nomegrupo}</Text>
            <Text>Integrantes: {item.integrante}</Text>
            <Button title="Ver Detalhes" onPress={() => navigation.navigate('TelaDetalhes', { groupId: item.idgrupo })} />
        </View>
    );

    if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
    if (error) return <Text>Error: {error}</Text>;

  return (
    <View>
            <FlatList
                data={grupos}
                keyExtractor={(item) => item.idgrupo.toString()}
                renderItem={renderGrupoItem}
            />
        </View>
  );
}