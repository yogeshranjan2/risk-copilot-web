import apiClient from "./api-client";

export interface RiskData {
    riskTitle: string;
    riskDescription: string;
    riskControls: string [];
    riskCategory: string;
}

export interface RiskGap {
    RiskTitle: string;
    WeakArea: string;
    WeakControls: string;
    NewControls: string;
}

class RiskService {

    generateRisks(riskCount: string, policyName: string) {
        const request = apiClient.get<RiskData[]>("/generate-risks", { 
            params: { count: riskCount, policy: policyName},
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
              }
        });
        return {request}
    }

    getCurrentRisksAndControls() {
        const request = apiClient.get<RiskData[]>("/get-current-risks", { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
              }
        });
        return {request}
    }
    
    generateMissingRisks(policyName: string) {
        const request = apiClient.get<RiskData[]>("/generate-missing-risks", { 
            params: { policy: policyName},
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
              }
        });
        return {request}
    }

    getRCSAGaps(opEventDescription: string) {
        const opEventJson= { "opEventDescription": opEventDescription }

        const request = apiClient.post<RiskGap[]>("/analyse-incident", opEventJson, { 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
              }
        
        });
        return {request}
    }
}

export default new RiskService();