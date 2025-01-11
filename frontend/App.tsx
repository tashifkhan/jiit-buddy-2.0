import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import './global.css';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [enrollment, setEnrollment] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Code to handle login will go here
    console.log('Login button pressed');
    console.log('Enrollment:', enrollment);
    console.log('Password:', password);
  };
  return (
    <>
      {/* <ScreenContent title="Home" path="App.tsx" /> */}
      <StatusBar style="light" />
      <SafeAreaView className="bg- flex-1 bg-[#DFD3C3] dark:bg-[#1A1A1A]">
        <View className="flex-1 justify-center">
          <Text className="mx-auto text-3xl font-normal leading-[normal] text-[#131B1D]">
            JIIT Buddy 2.0
          </Text>
        </View>
        <View className="flex-1 justify-start">
          <TextInput
            className="mx-auto mb-5 h-[50px] w-[351px] shrink-0 rounded-[11px] border-[0.5px] border-solid border-[rgba(19,27,29,0.77)] p-5 text-base font-extralight leading-[normal] text-[#494D4B] [background:rgba(217,217,217,0.00)]"
            value={enrollment}
            onChangeText={(text) => setEnrollment(text)}
            placeholder="Enrollment No."></TextInput>
          <TextInput
            className="mx-auto mb-5 h-[50px] w-[351px] shrink-0 rounded-[11px] border-[0.5px] border-solid border-[rgba(19,27,29,0.77)] p-5 text-base font-extralight leading-[normal] text-[#494D4B] [background:rgba(217,217,217,0.00)]"
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={true}></TextInput>
          <View className="mx-auto w-[90%] flex-row justify-end">
            <TouchableOpacity
              className="h-[39px] w-[125px] justify-center rounded-[11px] bg-[#9db4cf]"
              onPress={handleLogin}>
              <Text style={{ fontSize: 16, textAlign: 'center', color: 'black' }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
