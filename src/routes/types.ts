import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export type propsNavigationStack = {
    Welcome: undefined;
    Home: undefined;
    Profile: {
      characterId: number
    }
  }
  
  export type propsStack = NativeStackNavigationProp<propsNavigationStack>
  