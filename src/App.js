import "./App.css";
import Header from "./components/Header";
import MessageBox from "./components/MessageBox";


// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <MessageBox></MessageBox>
      </div>
    </ChakraProvider>
  );
}

export default App;
