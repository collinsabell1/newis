# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListAllStudents*](#listallstudents)
- [**Mutations**](#mutations)
  - [*CreateNewStudent*](#createnewstudent)
  - [*UpdateStudentRiskLevel*](#updatestudentrisklevel)
  - [*LogStudentIntervention*](#logstudentintervention)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListAllStudents
You can execute the `ListAllStudents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listAllStudents(): QueryPromise<ListAllStudentsData, undefined>;

interface ListAllStudentsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllStudentsData, undefined>;
}
export const listAllStudentsRef: ListAllStudentsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listAllStudents(dc: DataConnect): QueryPromise<ListAllStudentsData, undefined>;

interface ListAllStudentsRef {
  ...
  (dc: DataConnect): QueryRef<ListAllStudentsData, undefined>;
}
export const listAllStudentsRef: ListAllStudentsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listAllStudentsRef:
```typescript
const name = listAllStudentsRef.operationName;
console.log(name);
```

### Variables
The `ListAllStudents` query has no variables.
### Return Type
Recall that executing the `ListAllStudents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListAllStudentsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListAllStudents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listAllStudents } from '@dataconnect/generated';


// Call the `listAllStudents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listAllStudents();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listAllStudents(dataConnect);

console.log(data.students);

// Or, you can use the `Promise` API.
listAllStudents().then((response) => {
  const data = response.data;
  console.log(data.students);
});
```

### Using `ListAllStudents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listAllStudentsRef } from '@dataconnect/generated';


// Call the `listAllStudentsRef()` function to get a reference to the query.
const ref = listAllStudentsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listAllStudentsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.students);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.students);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateNewStudent
You can execute the `CreateNewStudent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createNewStudent(vars: CreateNewStudentVariables): MutationPromise<CreateNewStudentData, CreateNewStudentVariables>;

interface CreateNewStudentRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewStudentVariables): MutationRef<CreateNewStudentData, CreateNewStudentVariables>;
}
export const createNewStudentRef: CreateNewStudentRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createNewStudent(dc: DataConnect, vars: CreateNewStudentVariables): MutationPromise<CreateNewStudentData, CreateNewStudentVariables>;

interface CreateNewStudentRef {
  ...
  (dc: DataConnect, vars: CreateNewStudentVariables): MutationRef<CreateNewStudentData, CreateNewStudentVariables>;
}
export const createNewStudentRef: CreateNewStudentRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createNewStudentRef:
```typescript
const name = createNewStudentRef.operationName;
console.log(name);
```

### Variables
The `CreateNewStudent` mutation requires an argument of type `CreateNewStudentVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateNewStudent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateNewStudentData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateNewStudentData {
  student_insert: Student_Key;
}
```
### Using `CreateNewStudent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createNewStudent, CreateNewStudentVariables } from '@dataconnect/generated';

// The `CreateNewStudent` mutation requires an argument of type `CreateNewStudentVariables`:
const createNewStudentVars: CreateNewStudentVariables = {
  firstName: ..., 
  lastName: ..., 
  studentId: ..., 
  enrollmentDate: ..., 
  currentRiskLevel: ..., 
  contactEmail: ..., // optional
  contactPhone: ..., // optional
  dateOfBirth: ..., // optional
};

// Call the `createNewStudent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createNewStudent(createNewStudentVars);
// Variables can be defined inline as well.
const { data } = await createNewStudent({ firstName: ..., lastName: ..., studentId: ..., enrollmentDate: ..., currentRiskLevel: ..., contactEmail: ..., contactPhone: ..., dateOfBirth: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createNewStudent(dataConnect, createNewStudentVars);

console.log(data.student_insert);

// Or, you can use the `Promise` API.
createNewStudent(createNewStudentVars).then((response) => {
  const data = response.data;
  console.log(data.student_insert);
});
```

### Using `CreateNewStudent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createNewStudentRef, CreateNewStudentVariables } from '@dataconnect/generated';

// The `CreateNewStudent` mutation requires an argument of type `CreateNewStudentVariables`:
const createNewStudentVars: CreateNewStudentVariables = {
  firstName: ..., 
  lastName: ..., 
  studentId: ..., 
  enrollmentDate: ..., 
  currentRiskLevel: ..., 
  contactEmail: ..., // optional
  contactPhone: ..., // optional
  dateOfBirth: ..., // optional
};

// Call the `createNewStudentRef()` function to get a reference to the mutation.
const ref = createNewStudentRef(createNewStudentVars);
// Variables can be defined inline as well.
const ref = createNewStudentRef({ firstName: ..., lastName: ..., studentId: ..., enrollmentDate: ..., currentRiskLevel: ..., contactEmail: ..., contactPhone: ..., dateOfBirth: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createNewStudentRef(dataConnect, createNewStudentVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.student_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.student_insert);
});
```

## UpdateStudentRiskLevel
You can execute the `UpdateStudentRiskLevel` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateStudentRiskLevel(vars: UpdateStudentRiskLevelVariables): MutationPromise<UpdateStudentRiskLevelData, UpdateStudentRiskLevelVariables>;

interface UpdateStudentRiskLevelRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateStudentRiskLevelVariables): MutationRef<UpdateStudentRiskLevelData, UpdateStudentRiskLevelVariables>;
}
export const updateStudentRiskLevelRef: UpdateStudentRiskLevelRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateStudentRiskLevel(dc: DataConnect, vars: UpdateStudentRiskLevelVariables): MutationPromise<UpdateStudentRiskLevelData, UpdateStudentRiskLevelVariables>;

interface UpdateStudentRiskLevelRef {
  ...
  (dc: DataConnect, vars: UpdateStudentRiskLevelVariables): MutationRef<UpdateStudentRiskLevelData, UpdateStudentRiskLevelVariables>;
}
export const updateStudentRiskLevelRef: UpdateStudentRiskLevelRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateStudentRiskLevelRef:
```typescript
const name = updateStudentRiskLevelRef.operationName;
console.log(name);
```

### Variables
The `UpdateStudentRiskLevel` mutation requires an argument of type `UpdateStudentRiskLevelVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateStudentRiskLevelVariables {
  studentId: UUIDString;
  newRiskLevel: string;
}
```
### Return Type
Recall that executing the `UpdateStudentRiskLevel` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateStudentRiskLevelData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateStudentRiskLevelData {
  student_update?: Student_Key | null;
}
```
### Using `UpdateStudentRiskLevel`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateStudentRiskLevel, UpdateStudentRiskLevelVariables } from '@dataconnect/generated';

// The `UpdateStudentRiskLevel` mutation requires an argument of type `UpdateStudentRiskLevelVariables`:
const updateStudentRiskLevelVars: UpdateStudentRiskLevelVariables = {
  studentId: ..., 
  newRiskLevel: ..., 
};

// Call the `updateStudentRiskLevel()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateStudentRiskLevel(updateStudentRiskLevelVars);
// Variables can be defined inline as well.
const { data } = await updateStudentRiskLevel({ studentId: ..., newRiskLevel: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateStudentRiskLevel(dataConnect, updateStudentRiskLevelVars);

console.log(data.student_update);

// Or, you can use the `Promise` API.
updateStudentRiskLevel(updateStudentRiskLevelVars).then((response) => {
  const data = response.data;
  console.log(data.student_update);
});
```

### Using `UpdateStudentRiskLevel`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateStudentRiskLevelRef, UpdateStudentRiskLevelVariables } from '@dataconnect/generated';

// The `UpdateStudentRiskLevel` mutation requires an argument of type `UpdateStudentRiskLevelVariables`:
const updateStudentRiskLevelVars: UpdateStudentRiskLevelVariables = {
  studentId: ..., 
  newRiskLevel: ..., 
};

// Call the `updateStudentRiskLevelRef()` function to get a reference to the mutation.
const ref = updateStudentRiskLevelRef(updateStudentRiskLevelVars);
// Variables can be defined inline as well.
const ref = updateStudentRiskLevelRef({ studentId: ..., newRiskLevel: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateStudentRiskLevelRef(dataConnect, updateStudentRiskLevelVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.student_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.student_update);
});
```

## LogStudentIntervention
You can execute the `LogStudentIntervention` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
logStudentIntervention(vars: LogStudentInterventionVariables): MutationPromise<LogStudentInterventionData, LogStudentInterventionVariables>;

interface LogStudentInterventionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: LogStudentInterventionVariables): MutationRef<LogStudentInterventionData, LogStudentInterventionVariables>;
}
export const logStudentInterventionRef: LogStudentInterventionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
logStudentIntervention(dc: DataConnect, vars: LogStudentInterventionVariables): MutationPromise<LogStudentInterventionData, LogStudentInterventionVariables>;

interface LogStudentInterventionRef {
  ...
  (dc: DataConnect, vars: LogStudentInterventionVariables): MutationRef<LogStudentInterventionData, LogStudentInterventionVariables>;
}
export const logStudentInterventionRef: LogStudentInterventionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the logStudentInterventionRef:
```typescript
const name = logStudentInterventionRef.operationName;
console.log(name);
```

### Variables
The `LogStudentIntervention` mutation requires an argument of type `LogStudentInterventionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface LogStudentInterventionVariables {
  studentId: UUIDString;
  interventionDate: DateString;
  interventionType: string;
  effectiveness: string;
  description?: string | null;
  followUpDate?: DateString | null;
}
```
### Return Type
Recall that executing the `LogStudentIntervention` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `LogStudentInterventionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface LogStudentInterventionData {
  intervention_insert: Intervention_Key;
}
```
### Using `LogStudentIntervention`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, logStudentIntervention, LogStudentInterventionVariables } from '@dataconnect/generated';

// The `LogStudentIntervention` mutation requires an argument of type `LogStudentInterventionVariables`:
const logStudentInterventionVars: LogStudentInterventionVariables = {
  studentId: ..., 
  interventionDate: ..., 
  interventionType: ..., 
  effectiveness: ..., 
  description: ..., // optional
  followUpDate: ..., // optional
};

// Call the `logStudentIntervention()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await logStudentIntervention(logStudentInterventionVars);
// Variables can be defined inline as well.
const { data } = await logStudentIntervention({ studentId: ..., interventionDate: ..., interventionType: ..., effectiveness: ..., description: ..., followUpDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await logStudentIntervention(dataConnect, logStudentInterventionVars);

console.log(data.intervention_insert);

// Or, you can use the `Promise` API.
logStudentIntervention(logStudentInterventionVars).then((response) => {
  const data = response.data;
  console.log(data.intervention_insert);
});
```

### Using `LogStudentIntervention`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, logStudentInterventionRef, LogStudentInterventionVariables } from '@dataconnect/generated';

// The `LogStudentIntervention` mutation requires an argument of type `LogStudentInterventionVariables`:
const logStudentInterventionVars: LogStudentInterventionVariables = {
  studentId: ..., 
  interventionDate: ..., 
  interventionType: ..., 
  effectiveness: ..., 
  description: ..., // optional
  followUpDate: ..., // optional
};

// Call the `logStudentInterventionRef()` function to get a reference to the mutation.
const ref = logStudentInterventionRef(logStudentInterventionVars);
// Variables can be defined inline as well.
const ref = logStudentInterventionRef({ studentId: ..., interventionDate: ..., interventionType: ..., effectiveness: ..., description: ..., followUpDate: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = logStudentInterventionRef(dataConnect, logStudentInterventionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.intervention_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.intervention_insert);
});
```

