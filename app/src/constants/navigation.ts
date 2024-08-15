import HomeScreen from "../screens/Home";
import TransactionHistoryScreen from "../screens/TransactionHistory";
import TransactionDetailsScreen from "../screens/TransactionDetails";

export const HOME = "Home";
export const HISTORY = "History";
export const DETAILS = "Details";

export const navigationScreens = [
    { name: HOME, component: HomeScreen },
    { name: HISTORY, component: TransactionHistoryScreen },
    { name: DETAILS, component: TransactionDetailsScreen }
];
