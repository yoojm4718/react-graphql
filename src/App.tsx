import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { ApolloProvider } from "@apollo/client";
import client from "./client";

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
