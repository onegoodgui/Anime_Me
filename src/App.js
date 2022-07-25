import { Route, Routes, BrowserRouter } from "react-router-dom";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import { AuthProvider } from "./contexts/AuthContext";
import SignIn from "./pages/AuthPages/SignIn/SignIn";
import SignUp from "./pages/AuthPages/SignUp/SignUp";
import Homepage from "./pages/Homepage/Homepage";

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
