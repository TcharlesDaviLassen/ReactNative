import { StatusBar } from 'react-native';
import ViewState from './src/screens/ViewState.js'
import ViewEfect from './src/screens/ViewEfect.js'


export default function App() {
  return (
    <>

      {/* <ViewState /> */}
      <ViewEfect />

      <StatusBar
        translucent={false}
        backgroundColor="#fff"
        style="auto"
      />

    </>
  );
}

