import policies from "../policies";

interface Props {
  onSelectPolicy: (policy: string) => void;
  displayText: string;
}

const PolicyFilter = ({ onSelectPolicy, displayText }: Props) => {
  return (
    <div className="mb-3">
      <h5>{displayText}</h5>
      <div className="mb-3"></div>
      <div>
        <select
          className="form-select"
          onChange={(event) => onSelectPolicy(event.target.value)}
        >
          <option value="">All Policies</option>
          {policies.map((policy) => (
            <option key={policy}>{policy}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PolicyFilter;
