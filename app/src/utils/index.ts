import { Alert } from 'react-native';
import TouchID from 'react-native-touch-id';

const utils = {
    verifyBioLogin: async () => {
        return await TouchID.isSupported();
    },
    requestBioLogin: async () => {
       try {
            return await TouchID.authenticate("to demo this react-native component", {
               title: "YTL Bank",
               imageColor: "",
               imageErrorColor: "",
               sensorDescription: "",
               cancelText: "",
               fallbackLabel: "",
               passcodeFallback: false
           });
       } catch (ex) { 
        console.log((ex))
           Alert.alert("Biometric Login failed", "Ensure you are enrolled to Biometric login feature in your device.")
       }
    }
};

export default utils;