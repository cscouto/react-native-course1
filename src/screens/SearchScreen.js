import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const filterResultsByPrice = (price) => {
    return businesses.filter(business => {
      return business.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          businesses={filterResultsByPrice('$')}
          title="Cost Effective"
         />
        <ResultsList
          businesses={filterResultsByPrice('$$')}
          title="Bit Pricier"
        />
        <ResultsList
          businesses={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({});
export default SearchScreen;
