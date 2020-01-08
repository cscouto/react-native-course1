import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconsStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 44,
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 17
  },
  iconsStyle: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 8
  }
});
export default SearchBar;
