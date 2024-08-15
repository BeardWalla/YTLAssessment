export interface ITransactionRecord {
    _id: String;
    "accountName": String;
    "accountNumber": number;
    "amount": String;
    "bic": String;
    "credit": Boolean;
    "currencyCode": String;
    "date": Date;
    "transactionDescription": String;
    "transactionType": String;
}

export interface ITransactionRecordView {
    index: string | number; item: ITransactionRecord
}

export interface ITransactionState {
    transactions: [ITransactionRecord] | [];
    transactionInfo: ITransactionRecord | {};
  }
  