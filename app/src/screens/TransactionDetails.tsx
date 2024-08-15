import moment = require('moment');
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {ITransactionRecord, ITransactionState} from '../types';
import utils from '../utils';
import {HOME} from '../constants';

export default function TransactionDetailScreen({navigation, route}) {
  const [verified, setVerified] = useState(route?.params?.verified);
  const bioLogin = async () => {
    try {
      const auth = await utils.requestBioLogin();
      console.log('auth: ', auth);
      if (auth) {
        setVerified(true);
      }
    } catch (ex) {
      Alert.alert('YTL Bank', ex?.message);
      navigation.navigate(HOME);
    }
  };

  const {
    accountName,
    accountNumber,
    amount,
    credit,
    currencyCode,
    date,
    transactionType,
    transactionDescription,
  } = route?.params?.item || {};
  return (
    <View style={styles.outerContainer}>
      <View style={styles.topContainer}>
        <Text
          onPress={bioLogin}
          style={[
            styles.amount,
            credit ? styles.amountCredit : styles.amountDebit,
          ]}>
          {verified
            ? `${credit ? '+' : '-'}${currencyCode} ${amount}`
            : "XXX"}
        </Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.txtLeft}>Account name</Text>
        <Text
          style={{
            textAlign: 'right',
          }}>{`${accountName}\n(${accountNumber})`}</Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.txtLeft}>Type</Text>
        <Text style={[styles.txtRight, styles.text]}>
          {`${transactionType}\n(${credit ? 'Credit' : 'Debit'})`}
        </Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.txtLeft}>Date</Text>
        <Text style={styles.txtRight}>
          {moment(date).format('DD/MMM/YYYY')}
        </Text>
      </View>

      <View style={styles.detailRow}>
        <Text style={styles.txtLeft}>Description</Text>
        <Text style={[styles.txtRight, styles.text]}>
          {transactionDescription}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  amount: {
    fontWeight: '600',
    fontSize: 34,
    textAlign: 'center',
  },
  amountCredit: {color: '#008000'},
  amountDebit: {color: '#AA4A44'},
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  text: {textTransform: 'capitalize'},
  txtLeft: {
    fontWeight: 'bold',
    width: '50%',
  },
  txtRight: {textAlign: 'right', width: '50%'},
  outerContainer: {paddingHorizontal: 24},
  topContainer: {paddingVertical: 30},
});
