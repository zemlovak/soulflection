import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./reset.css";
import "./index.css";

import LandingPage from "./pages/AuthPages/LandingPage";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import SignUpSuccess from "./pages/AuthPages/SignUpSuccess";
import SignUpError from "./pages/AuthPages/SignUpError";
import MainLayout from "./pages/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import JournalPage from "./pages/Journal";
import JournalThoughts from "./pages/JournalThoughts";
import JournalSelfReflection from "./pages/JournalSelfReflection";
import JournalEmotionalProcessing from "./pages/JournalEmotionalProcessing";
import JournalGoals from "./pages/JournalGoals";
import CenteredLayout from "./pages/Layout/CenteredLayout";
import { AuthProvider } from "./context/AuthContext";
import LogOutSuccess from "./pages/AuthPages/LogOutSuccess";
import SettingsPage from "./pages/AuthPages/SettingsPage";
import AuthRoutePage from "./pages/AuthPages/AuthRoutePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<CenteredLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-up/success" element={<SignUpSuccess />} />
            <Route path="/sign-up/error" element={<SignUpError />} />
            <Route path="/logout" element={<LogOutSuccess />} />
          </Route>

          <Route element={<AuthRoutePage/>}>
            <Route path="/:userId" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/:userId/settings" element={<SettingsPage />} />

              <Route path="/:userId/journal" element={<JournalPage />}>
                <Route index element={<JournalThoughts />} />
                <Route
                  path="self-reflection"
                  element={<JournalSelfReflection />}
                />
                <Route
                  path="emotional-processing"
                  element={<JournalEmotionalProcessing />}
                />
                <Route path="goals" element={<JournalGoals />} />
                <Route path="grounding" /* element={<JournalGrounding />} */ />
              </Route>
              <Route path="meditation" /* element={<MeditationPage />} */ />
              <Route path="breathwork" /* element={<BreathworkPage />} */ />
              <Route path="yoga" /* element={<YogaPage />} */ />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
