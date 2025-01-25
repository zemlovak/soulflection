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
import JournalGrounding from "./pages/JournalGrounding";

import MeditationPage from "./pages/Meditation";
import MeditationTimer from "./pages/MeditationTimer";
import MeditationSounds from "./pages/MeditationSounds";
import MeditationGuided from "./pages/MeditationGuided";

import BreathworkPage from "./pages/Breathwork";
import YogaPage from "./pages/Yoga";

import CenteredLayout from "./pages/Layout/CenteredLayout";
import { AuthProvider } from "./context/AuthContext";
import LogOutSuccess from "./pages/AuthPages/LogOutSuccess";
import SettingsPage from "./pages/AuthPages/SettingsPage";
import AuthRoutePage from "./pages/AuthPages/AuthRoutePage";
import MeditationExercises from "./pages/MeditationExercises";

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

          <Route element={<AuthRoutePage />}>
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
                <Route path="grounding" element={<JournalGrounding />} />
              </Route>
              <Route path="/:userId/meditation" element={<MeditationPage />}>
                <Route index element={<MeditationTimer />} />
                <Route path="sounds" element={<MeditationSounds />} />
                <Route path="guided" element={<MeditationGuided />} />
                <Route path="exercises" element={<MeditationExercises />} />
              </Route>
              <Route path="breathwork" element={<BreathworkPage />} />
              <Route path="yoga" element={<YogaPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
