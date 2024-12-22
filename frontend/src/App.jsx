import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import RightPanel from "./components/common/RightPanel";
import Sidebar from "./components/common/Sidebar";
import NotificationPage from "./pages/notification/NotificationPage";

function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      {/* Common component, bc it's not wrapped with routes */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="notifications" element={<NotificationPage />} />
      </Routes>
      <RightPanel />
    </div>
  );
}

export default App;
