Introduction

TypeScript give us Union (|) and Intersection (&) types to create flexible and reusable type definitions. A Union type allows a value to have one of several possible types, while an Intersection type combines multiple types into one. Using them together helps developers model complex data structures safely.

Detailed Explanation:
A Union type means a variable can accept values from multiple types. For example:

type ID = string | number;

let userId: ID = 101;
userId = "USER101";

Here, userId can store either a string or a number.

An Intersection type combines multiple object types. For example:

type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

type Staff = Person & Employee;

Now, Staff requires all properties from both Person and Employee.

We can combine Union and Intersection types to create a practical employee management example.

type FullTime = {
    salary: number;
};

type PartTime = {
    hourlyRate: number;
};

type EmployeeInfo = Person & Employee & (FullTime | PartTime);

In this example, every employee must have personal and employee information. Additionally, the employee must have either a salary or an hourly rate.

const staffMember: EmployeeInfo = {
    name: "Rafi",
    age: 22,
    employeeId: 101,
    department: "IT",
    salary: 50000
};

This structure makes the type flexible while maintaining type safety.

Conclusion: Union and Intersection types solve different problems but work effectively together. Union provides alternatives, whereas Intersection combines requirements. Using both helps developers create flexible, maintainable, and type-safe applications.