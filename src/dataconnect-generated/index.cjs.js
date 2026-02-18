const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'newis-dropout-prediction-system',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const listAllStudentsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListAllStudents');
}
listAllStudentsRef.operationName = 'ListAllStudents';
exports.listAllStudentsRef = listAllStudentsRef;

exports.listAllStudents = function listAllStudents(dc) {
  return executeQuery(listAllStudentsRef(dc));
};

const createNewStudentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateNewStudent', inputVars);
}
createNewStudentRef.operationName = 'CreateNewStudent';
exports.createNewStudentRef = createNewStudentRef;

exports.createNewStudent = function createNewStudent(dcOrVars, vars) {
  return executeMutation(createNewStudentRef(dcOrVars, vars));
};

const updateStudentRiskLevelRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateStudentRiskLevel', inputVars);
}
updateStudentRiskLevelRef.operationName = 'UpdateStudentRiskLevel';
exports.updateStudentRiskLevelRef = updateStudentRiskLevelRef;

exports.updateStudentRiskLevel = function updateStudentRiskLevel(dcOrVars, vars) {
  return executeMutation(updateStudentRiskLevelRef(dcOrVars, vars));
};

const logStudentInterventionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'LogStudentIntervention', inputVars);
}
logStudentInterventionRef.operationName = 'LogStudentIntervention';
exports.logStudentInterventionRef = logStudentInterventionRef;

exports.logStudentIntervention = function logStudentIntervention(dcOrVars, vars) {
  return executeMutation(logStudentInterventionRef(dcOrVars, vars));
};
