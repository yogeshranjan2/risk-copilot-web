import React, { useState } from "react";
import PolicyFilter from "./PolicyFilter";
import { RiskData } from "../services/risk-service";
import RiskList from "./RiskList";
import riskService from "../services/risk-service";

const GenerateRisks = () => {
  //State hook to store selected policy
  const [selectedPolicy, setSelectedPolicy] = useState("");
  //state hook to hold all risk items
  const [riskItems, setRiskItems] = useState<RiskData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [riskCount, setRiskCount] = useState("5");

  //test data for now
  //   const testRiskItems: RiskData[] = [
  //     {
  //       riskTitle: "Risk1",
  //       riskDescription: "",
  //       riskControls: "",
  //       riskCategory: "",
  //     },
  //     {
  //       riskTitle: "Risk2",
  //       riskDescription: "",
  //       riskControls: "",
  //       riskCategory: "",
  //     },
  //   ];

  const handleSelectedPolicy = (policy: string) => {
    setLoading(true);
    setSelectedPolicy(policy);
    const { request } = riskService.generateRisks(riskCount, policy);
    request
      .then((res) => {
        setRiskItems(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
    //setRiskItems(testRiskItems);
  };

  return (
    <div className="mb-3">
      <label htmlFor="riskCount" className="form-label">
        <h5>Number of Risks</h5>
      </label>
      <input
        id="riskCount"
        type="text"
        className="form-control"
        onChange={(event) => setRiskCount(event.target.value)}
      ></input>
      <div className="mb-3">
        <PolicyFilter
          onSelectPolicy={(policy: string) => handleSelectedPolicy(policy)}
          displayText="Select Policy to generate Risks and Controls"
        />
      </div>
      {isLoading && <div className="spinner-border" role="status"></div>}
      <RiskList riskItems={riskItems} />
    </div>
  );
};

export default GenerateRisks;
