import { TransactionSchema } from '../repository/TransactionRepository.js';

export default {
    getAllTransactions: async (count) => {
        const numberOfRefresh = parseInt(count);

        try {
            const transactions = await TransactionSchema.find({}).limit(numberOfRefresh <= 25 ? numberOfRefresh * 10 : 250)
            console.log("transactions  data: ", JSON.stringify(transactions));
            return { success: true, transactions };
            
        } catch (err) {
            console.log("transactions  err: ", JSON.stringify(err));
            throw err
        }
    }
}