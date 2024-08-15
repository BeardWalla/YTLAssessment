import { Schema, model, set } from 'mongoose';
set('debug', true)

const transactionSchema = new Schema({
    accountName: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: Number,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    credit: {
        type: Boolean,
    },
    bic: {
        type: String,
        required: true,
    }, currencyCode: {
        type: String,
        required: true,
    }, transactionDescription: {
        type: String,
    },
    transactionType: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    },
})

export const TransactionSchema = model("Transaction", transactionSchema);