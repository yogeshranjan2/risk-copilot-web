import React from "react";
import { RiskData } from "../services/risk-service";

interface Props {
  riskItems: RiskData[];
}

const RiskList = ({ riskItems }: Props) => {
  return (
    <>
      <div className="table-wrap">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Risk Title</th>
              <th scope="col">Risk Description</th>
              <th scope="col">Category</th>
              <th scope="col">Controls</th>
            </tr>
          </thead>
          <tbody>
            {riskItems.map((item) => (
              <tr key={item.RiskTitle}>
                <th scope="row">{item.RiskTitle}</th>
                <td>{item.RiskDescription}</td>
                <td>{item.RiskCategory}</td>
                <td>
                  <ul>
                    {item.RiskControls.map((control) => (
                      <li key={control}>{control}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RiskList;
