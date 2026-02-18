const { validateAdminArgs } = require('firebase-admin/data-connect');

const connectorConfig = {
  connector: 'example',
  serviceId: 'newis-dropout-prediction-system',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

function listAllStudents(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('ListAllStudents', undefined, inputOpts);
}
exports.listAllStudents = listAllStudents;

function createNewStudent(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateNewStudent', inputVars, inputOpts);
}
exports.createNewStudent = createNewStudent;

function updateStudentRiskLevel(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateStudentRiskLevel', inputVars, inputOpts);
}
exports.updateStudentRiskLevel = updateStudentRiskLevel;

function logStudentIntervention(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('LogStudentIntervention', inputVars, inputOpts);
}
exports.logStudentIntervention = logStudentIntervention;

