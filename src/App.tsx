import React, { useState } from "react";

import NavBar from "./components/NavBar";
import GenerateRisks from "./components/GenerateRisks";
import RCSAGaps from "./components/RCSAGaps";
import IncidentAnalysis from "./components/IncidentAnalysis";

const App = () => {
  const navItems = ["Generate Risks", "RCSA Gaps", "Incident Analysis"];

  //State hooks to show/hide menu components
  const [generateRiskVisible, setGenerateRiskVisibility] = useState(true);
  const [RCSAGapsVisible, setRCSAGapsVisibility] = useState(false);
  const [incidentAnalysisVisible, setIncidentAnalysisVisiblity] =
    useState(false);

  const handleMenuItemSelect = (menuItem: string) => {
    if (menuItem === "Generate Risks") {
      setGenerateRiskVisibility(true);
      setRCSAGapsVisibility(false);
      setIncidentAnalysisVisiblity(false);
    } else if (menuItem === "RCSA Gaps") {
      setGenerateRiskVisibility(false);
      setRCSAGapsVisibility(true);
      setIncidentAnalysisVisiblity(false);
    } else if (menuItem === "Incident Analysis") {
      setGenerateRiskVisibility(false);
      setRCSAGapsVisibility(false);
      setIncidentAnalysisVisiblity(true);
    }
  };

  return (
    <div className="mb-3">
      <NavBar
        items={navItems}
        heading="Operational Risk Copilot"
        onNavItemSelect={handleMenuItemSelect}
      />
      {generateRiskVisible && <GenerateRisks />}
      {RCSAGapsVisible && <RCSAGaps />}
      {incidentAnalysisVisible && <IncidentAnalysis />}
    </div>
  );
};

export default App;
