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
              <tr key={item.riskTitle}>
                <th scope="row">{item.riskTitle}</th>
                <td>{item.riskDescription}</td>
                <td>{item.riskCategory}</td>
                <td>
                  <ul>
                    {item.riskControls.map((control) => (
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
