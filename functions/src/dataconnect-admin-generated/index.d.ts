import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface AcademicData_Key {
  id: UUIDString;
  __typename?: 'AcademicData_Key';
}

export interface BehavioralEngagement_Key {
  id: UUIDString;
  __typename?: 'BehavioralEngagement_Key';
}

export interface CreateNewStudentData {
  student_insert: Student_Key;
}

export interface CreateNewStudentVariables {
  firstName: string;
  lastName: string;
  studentId: string;
  enrollmentDate: DateString;
  currentRiskLevel: string;
  contactEmail?: string | null;
  contactPhone?: string | null;
  dateOfBirth?: DateString | null;
}

export interface Intervention_Key {
  id: UUIDString;
  __typename?: 'Intervention_Key';
}

export interface ListAllStudentsData {
  students: ({
    id: UUIDString;
    firstName: string;
    lastName: string;
    studentId: string;
    currentRiskLevel: string;
    enrollmentDate: DateString;
    academicDatas_on_student: ({
      gpa: number;
      attendanceRate: number;
    })[];
      behavioralEngagements_on_student: ({
        indicatorType: string;
        scoreOrDescription: string;
      })[];
  } & Student_Key)[];
}

export interface LogStudentInterventionData {
  intervention_insert: Intervention_Key;
}

export interface LogStudentInterventionVariables {
  studentId: UUIDString;
  interventionDate: DateString;
  interventionType: string;
  effectiveness: string;
  description?: string | null;
  followUpDate?: DateString | null;
}

export interface SocioeconomicFactor_Key {
  id: UUIDString;
  __typename?: 'SocioeconomicFactor_Key';
}

export interface Student_Key {
  id: UUIDString;
  __typename?: 'Student_Key';
}

export interface UpdateStudentRiskLevelData {
  student_update?: Student_Key | null;
}

export interface UpdateStudentRiskLevelVariables {
  studentId: UUIDString;
  newRiskLevel: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

/** Generated Node Admin SDK operation action function for the 'ListAllStudents' Query. Allow users to execute without passing in DataConnect. */
export function listAllStudents(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<ListAllStudentsData>>;
/** Generated Node Admin SDK operation action function for the 'ListAllStudents' Query. Allow users to pass in custom DataConnect instances. */
export function listAllStudents(options?: OperationOptions): Promise<ExecuteOperationResponse<ListAllStudentsData>>;

/** Generated Node Admin SDK operation action function for the 'CreateNewStudent' Mutation. Allow users to execute without passing in DataConnect. */
export function createNewStudent(dc: DataConnect, vars: CreateNewStudentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateNewStudentData>>;
/** Generated Node Admin SDK operation action function for the 'CreateNewStudent' Mutation. Allow users to pass in custom DataConnect instances. */
export function createNewStudent(vars: CreateNewStudentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateNewStudentData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateStudentRiskLevel' Mutation. Allow users to execute without passing in DataConnect. */
export function updateStudentRiskLevel(dc: DataConnect, vars: UpdateStudentRiskLevelVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateStudentRiskLevelData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateStudentRiskLevel' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateStudentRiskLevel(vars: UpdateStudentRiskLevelVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateStudentRiskLevelData>>;

/** Generated Node Admin SDK operation action function for the 'LogStudentIntervention' Mutation. Allow users to execute without passing in DataConnect. */
export function logStudentIntervention(dc: DataConnect, vars: LogStudentInterventionVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<LogStudentInterventionData>>;
/** Generated Node Admin SDK operation action function for the 'LogStudentIntervention' Mutation. Allow users to pass in custom DataConnect instances. */
export function logStudentIntervention(vars: LogStudentInterventionVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<LogStudentInterventionData>>;

