import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import PostScreen  from './screens/PostScreen/container/PostContainer';


class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <PostScreen />
        </SafeAreaView>
      </>
    );
  }
};

export default App;
