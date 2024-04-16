import React from "react";
import { RiskGap } from "../services/risk-service";

interface Props {
  riskGaps: RiskGap[];
}

const RiskGaps = ({ riskGaps }: Props) => {
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Risk Title</th>
              <th scope="col">Weak Area</th>
              <th scope="col">Weak Controls</th>
              <th scope="col">New Controls</th>
            </tr>
          </thead>
          <tbody>
            {riskGaps.map((item) => (
              <tr>
                <th scope="row">{item.RiskTitle}</th>
                <td>{item.WeakArea}</td>
                <td>{item.WeakControls}</td>
                <td>{item.NewControls}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RiskGaps;
