import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useApi } from '../hooks/useApi';
import { commonStyles } from '../theme/CommonStyles';

export default function HomeScreen() {
  const { data, isLoading, isError, refetch } = useApi({
    key: 'todos',
    url: '/todos',
  });

  if (isLoading) return <ActivityIndicator size="large" />;
  if (isError) return <Text>Error loading users</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text>{item.title}</Text>
          <Text>{item.userId}</Text>
        </View>
      )}
      refreshing={isLoading}
      onRefresh={refetch}
    />
  );
}
