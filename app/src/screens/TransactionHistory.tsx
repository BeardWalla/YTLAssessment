import moment = require('moment');
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DETAILS} from '../constants/navigation';
import {ITransactionRecordView} from '../types';
import {
  getTransactionById,
  saveTransaction,
} from '../reducers/transactionReducer';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {getTransactionHistory} from '../services';

export default function TransactionHistoryScreen({navigation}) {
  const [transactions, setTransaction] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await getTransactionHistory(
          `http://localhost:8088/transactions?count=${count}`,
        );
        if (response?.status === 200) {
          const {data} = response?.data || {};
          setTransaction(data?.transactions);
          dispatch(saveTransaction(data?.transactions));
          return;
        }
        throw new Error('Request error');
      } catch (ex) {
        Alert.alert('Error getting transactions history', ex?.message);
        navigation.goBack();
      }
    }
    fetchAPI();
  }, [count]);

  function renderRow({index, item}): React.Component<ITransactionRecordView> {
    return (
      <TouchableOpacity
        key={index + 'to'}
        style={styles.trxRow}
        onPress={(): void => {
          dispatch(getTransactionById(item));
          navigation.navigate(DETAILS, {item, verified: false});
        }}>
        <View key={index + 'view'}>
          <Text key={index + 'txt_lbl'} style={styles.text}>
            {moment(item?.date).format('DD/MM') +
              ' ' +
              String(item?.transactionDescription).substring(0, 30) +
              '***'}
          </Text>
        </View>
        <View key={index + 'view_value'}>
          <Text
            key={index + 'txt_value'}
            style={[
              styles.trxRecord,
              item?.credit ? styles.amountCredit : styles.amountDebit,
            ]}></Text>
        </View>
      </TouchableOpacity>
    );
  }

  function onRefresh(): void {
    setCount(count + 1);
  }

  return (
    <>
      <FlatList
        data={transactions}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ItemSeparatorComponent={(): React.ComponentType<any> => {
          return <View style={styles.rowSeperator} />;
        }}
        renderItem={renderRow}
      />
    </>
  );
}

const styles = StyleSheet.create({
  amountCredit: {color: '#008000'},
  amountDebit: {color: '#AA4A44'},
  rowSeperator: {height: 1, backgroundColor: '#000000'},
  text: {textTransform: 'capitalize'},
  trxRecord: {
    textAlign: 'right',
    marginRight: 20,
  },
  trxRow: {
    paddingVertical: 10,
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
