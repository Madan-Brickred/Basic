import React, { useState } from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';
import CustomButton from './src/components/CustomButton';
import CustomModal from './src/components/CustomModal';
import AppImage from './src/components/AppImage';
import Firstscreen from './src/screens/Firstscreen';


const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const queryClient = new QueryClient();

  
  return (
    <SafeAreaProvider>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="transparent" 
        translucent={false} 
      />
      <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <Firstscreen/>
        
        </Provider>
      </SafeAreaView>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;