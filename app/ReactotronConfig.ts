import Reactotron from "reactotron-react-native";
import { reactotronRedux } from 'reactotron-redux'

Reactotron.configure({}) // controls connection & communication settings
  .useReactNative(reactotronRedux()) // add all built-in react native plugins
  .connect();