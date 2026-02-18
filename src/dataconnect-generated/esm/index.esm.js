import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'newis-dropout-prediction-system',
  location: 'us-east4'
};

export const listAllStudentsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllStudents');
}
listAllStudentsRef.operationName = 'ListAllStudents';

export function listAllStudents(dc) {
  return executeQuery(listAllStudentsRef(dc));
}

export const createNewStudentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewStudent', inputVars);
}
createNewStudentRef.operationName = 'CreateNewStudent';

export function createNewStudent(dcOrVars, vars) {
  return executeMutation(createNewStudentRef(dcOrVars, vars));
}

export const updateStudentRiskLevelRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateStudentRiskLevel', inputVars);
}
updateStudentRiskLevelRef.operationName = 'UpdateStudentRiskLevel';

export function updateStudentRiskLevel(dcOrVars, vars) {
  return executeMutation(updateStudentRiskLevelRef(dcOrVars, vars));
}

export const logStudentInterventionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'LogStudentIntervention', inputVars);
}
logStudentInterventionRef.operationName = 'LogStudentIntervention';

export function logStudentIntervention(dcOrVars, vars) {
  return executeMutation(logStudentInterventionRef(dcOrVars, vars));
}

