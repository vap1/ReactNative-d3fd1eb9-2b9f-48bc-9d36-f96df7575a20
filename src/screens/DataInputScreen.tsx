
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { DataInputRequest } from '../types/UserTypes';
import { dataInputApi } from '../apis/DataInputApi';

const DataInputScreen: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleDataInput = async () => {
    try {
      const requestData: DataInputRequest = {
        user: {
          firstName,
          lastName,
          email,
          phone,
          address,
        },
      };

      // Make API call to submit data input
      const response = await dataInputApi(requestData);

      // Handle success response
      // Display confirmation message to the user
      Alert.alert('Success', 'Data input submitted successfully');

      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setAddress('');
    } catch (error) {
      // Handle error response
      // Display error message to the user
      Alert.alert('Error', 'Failed to submit data input');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Submit" onPress={handleDataInput} />
    </View>
  );
};

export default DataInputScreen;