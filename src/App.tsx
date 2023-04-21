import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { ApolloProvider } from "@apollo/client";
import client from "./client";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </ApolloProvider>
  );
}

export default App;
