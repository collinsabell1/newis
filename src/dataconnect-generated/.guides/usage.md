# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { listAllStudents, createNewStudent, updateStudentRiskLevel, logStudentIntervention } from '@dataconnect/generated';


// Operation ListAllStudents: 
const { data } = await ListAllStudents(dataConnect);

// Operation CreateNewStudent:  For variables, look at type CreateNewStudentVars in ../index.d.ts
const { data } = await CreateNewStudent(dataConnect, createNewStudentVars);

// Operation UpdateStudentRiskLevel:  For variables, look at type UpdateStudentRiskLevelVars in ../index.d.ts
const { data } = await UpdateStudentRiskLevel(dataConnect, updateStudentRiskLevelVars);

// Operation LogStudentIntervention:  For variables, look at type LogStudentInterventionVars in ../index.d.ts
const { data } = await LogStudentIntervention(dataConnect, logStudentInterventionVars);


```