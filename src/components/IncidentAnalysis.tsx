import React from "react";
import { useEffect, useState } from "react";
import { RiskData, RiskGap } from "../services/risk-service";
import riskService from "../services/risk-service";
import RiskList from "./RiskList";
import RiskGaps from "./RiskGaps";

const IncidentAnalysis = () => {
  const [riskItems, setRiskItems] = useState<RiskData[]>([]);
  const [riskGaps, setRiskGaps] = useState<RiskGap[]>([]);
  const [opEventDescription, setOpEventDescription] = useState("");

  const [isLoading, setLoading] = useState(false);

  //test data for now
  // const testRiskItems: RiskData[] = [
  //   {
  //     RiskTitle: "Risk1",
  //     RiskDescription: "",
  //     RiskControls: [],
  //     RiskCategory: "",
  //   },
  //   {
  //     RiskTitle: "Risk2",
  //     RiskDescription: "",
  //     RiskControls: [],
  //     RiskCategory: "",
  //   },
  // ];

  // const testRiskGaps: RiskGap[] = [
  //   {
  //     RiskTitle: "Risk1",
  //     WeakArea: "Weak Area 1",
  //     WeakControls: "",
  //     NewControls: "",
  //   },
  //   {
  //     RiskTitle: "Risk2",
  //     WeakArea: "Weak Area 2",
  //     WeakControls: "",
  //     NewControls: "",
  //   },
  // ];

  //get current risks and controls and put in a state
  useEffect(() => {
    setLoading(true);
    const { request } = riskService.getCurrentRisksAndControls();
    request
      .then((res) => {
        setRiskItems(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    //setRiskItems(testRiskItems);
    setRiskGaps([]);
  }, []);

  const identifyRisks = () => {
    //setRiskGaps(testRiskGaps);
    setLoading(true);
    const { request } = riskService.getRCSAGaps(opEventDescription);
    request
      .then((res) => {
        setRiskGaps(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="mb-5">
      <h5>Current Risks and Controls</h5>
      {isLoading && <div className="spinner-border" role="status"></div>}
      <div className="mb-3">
        <RiskList riskItems={riskItems} />
      </div>
      <div className="mb-5">
        <label htmlFor="opEventDescription" className="form-label">
          <h5>Describe Operating Event</h5>
        </label>
        <textarea
          className="form-control"
          id="opEventDescription"
          rows={5}
          onChange={(event) => setOpEventDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={identifyRisks}
        >
          Identify Risk Gaps
        </button>
        {isLoading && <div className="spinner-border" role="status"></div>}
      </div>
      <div className="mb-3">
        <RiskGaps riskGaps={riskGaps} />
      </div>
    </div>
  );
};

export default IncidentAnalysis;
