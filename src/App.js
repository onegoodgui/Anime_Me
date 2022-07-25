import { Route, Routes, BrowserRouter } from "react-router-dom";
import Container from "./components/Container/Container.js";
import Header from "./components/Header/Header.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import SignIn from "./pages/AuthPages/SignIn/SignIn.js";
import SignUp from "./pages/AuthPages/SignUp/SignUp.js";
import Homepage from "./pages/Homepage/Homepage.js";

function App() {
  return (
    <Container>
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Container>
  );
}

export default App;
