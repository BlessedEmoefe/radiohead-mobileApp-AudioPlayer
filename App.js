import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {Navigation} from './src/infrastructure/navigation/index';
import {Text, View} from 'react-native';
import {Header} from './src/components/header/header.component';
import {Loader} from './src/components/loader/loader.component';
import {Container} from './src/components/container/container.component';
import Home from './src/screens/home/home.screen';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
   <Navigation/>
    </ThemeProvider>
  );
};

export default App;



  // <Container background="pink">
  //       <Text style={{backgroundColor: 'blue'}}>Title</Text>
  //       <Text style={{backgroundColor: 'teal'}}>Children</Text>
  //         <Home />
  //     </Container>