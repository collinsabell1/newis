import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

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

interface ListAllStudentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllStudentsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllStudentsData, undefined>;
  operationName: string;
}
export const listAllStudentsRef: ListAllStudentsRef;

export function listAllStudents(): QueryPromise<ListAllStudentsData, undefined>;
export function listAllStudents(dc: DataConnect): QueryPromise<ListAllStudentsData, undefined>;

interface CreateNewStudentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewStudentVariables): MutationRef<CreateNewStudentData, CreateNewStudentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewStudentVariables): MutationRef<CreateNewStudentData, CreateNewStudentVariables>;
  operationName: string;
}
export const createNewStudentRef: CreateNewStudentRef;

export function createNewStudent(vars: CreateNewStudentVariables): MutationPromise<CreateNewStudentData, CreateNewStudentVariables>;
export function createNewStudent(dc: DataConnect, vars: CreateNewStudentVariables): MutationPromise<CreateNewStudentData, CreateNewStudentVariables>;

interface UpdateStudentRiskLevelRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStudentRiskLevelVariables): MutationRef<UpdateStudentRiskLevelData, UpdateStudentRiskLevelVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateStudentRiskLevelVariables): MutationRef<UpdateStudentRiskLevelData, UpdateStudentRiskLevelVariables>;
  operationName: string;
}
export const updateStudentRiskLevelRef: UpdateStudentRiskLevelRef;

export function updateStudentRiskLevel(vars: UpdateStudentRiskLevelVariables): MutationPromise<UpdateStudentRiskLevelData, UpdateStudentRiskLevelVariables>;
export function updateStudentRiskLevel(dc: DataConnect, vars: UpdateStudentRiskLevelVariables): MutationPromise<UpdateStudentRiskLevelData, UpdateStudentRiskLevelVariables>;

interface LogStudentInterventionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: LogStudentInterventionVariables): MutationRef<LogStudentInterventionData, LogStudentInterventionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: LogStudentInterventionVariables): MutationRef<LogStudentInterventionData, LogStudentInterventionVariables>;
  operationName: string;
}
export const logStudentInterventionRef: LogStudentInterventionRef;

export function logStudentIntervention(vars: LogStudentInterventionVariables): MutationPromise<LogStudentInterventionData, LogStudentInterventionVariables>;
export function logStudentIntervention(dc: DataConnect, vars: LogStudentInterventionVariables): MutationPromise<LogStudentInterventionData, LogStudentInterventionVariables>;

