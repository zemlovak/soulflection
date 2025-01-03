import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./reset.css";
import "./index.css";

import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpSuccess from "./pages/SignUpSuccess";
import SignUpError from "./pages/SignUpError";
import MainLayout from "./pages/MainLayout";
import Dashboard from "./pages/Dashboard";
import JournalPage from "./pages/Journal";
import JournalThoughts from "./pages/JournalThoughts";
import JournalSelfReflection from "./pages/JournalSelfReflection";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up/success" element={<SignUpSuccess />} />
        <Route path="/sign-up/error" element={<SignUpError />} />
        <Route path="/home" element={<LandingPage />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="journal" element={<JournalPage />}>
            <Route index element={<JournalThoughts />} />
            <Route
              path="self-reflection" element={<JournalSelfReflection />}
            />
            <Route
              path="emotional-processing" /* element={<JournalEmotionalProcessing />} */
            />
            <Route path="goals" /* element={<JournalGoals />} */ />
            <Route path="grounding" /* element={<JournalGrounding />} */ />
          </Route>
          <Route path="meditation" /* element={<MeditationPage />} */ />
          <Route path="breathwork" /* element={<BreathworkPage />} */ />
          <Route path="yoga" /* element={<YogaPage />} */ />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
