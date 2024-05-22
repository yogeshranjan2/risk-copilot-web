import { useState, useEffect } from "react";

import RiskList from "./RiskList";
import PolicyFilter from "./PolicyFilter";
import { RiskData } from "../services/risk-service";
import riskService from "../services/risk-service";

const RCSAGaps = () => {
  const [currentRiskItems, setCurrentRiskItems] = useState<RiskData[]>([]);
  const [missignRiskItems, setMissingRiskItems] = useState<RiskData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState("");

  useEffect(() => {
    setLoading(true);
    const { request } = riskService.getCurrentRisksAndControls();
    request
      .then((res) => {
        setCurrentRiskItems(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    setMissingRiskItems([]);
  }, []);

  const handleSelectedPolicy = (policy: string) => {
    setSelectedPolicy(policy);
    setLoading(true);
    const { request } = riskService.generateMissingRisks(policy);
    request
      .then((res) => {
        setMissingRiskItems(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div className="mb-5">
      <h5>Current Risks and Controls</h5>
      {isLoading && <div className="spinner-border" role="status"></div>}
      <div className="mb-3">
        <RiskList riskItems={currentRiskItems} />
      </div>

      <div className="mb-3">
        <PolicyFilter
          onSelectPolicy={(policy: string) => handleSelectedPolicy(policy)}
          displayText="Select Policy to identify missing Risks and Controls"
        />
        {isLoading && <div className="spinner-border" role="status"></div>}
      </div>

      <div className="mb-3">
        <h5>Missing Risks and Controls</h5>
        <RiskList riskItems={missignRiskItems} />
      </div>
    </div>
  );
};

export default RCSAGaps;
