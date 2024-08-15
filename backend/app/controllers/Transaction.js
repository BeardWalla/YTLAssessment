import transactionsService from '../services/TransactionService.js'

export const controller = {
    getAllTransactions: async (req, res) => {
        console.log("getAllTransactions: ", req.query.count);
        try {
            const data = await transactionsService.getAllTransactions(req.query.count);
            console.log("data rarash: ", JSON.stringify(data));

            return res.send({ data })


        } catch (ex) {
            return res.send({ status: "string", message: "ex" })
        }
    }
};