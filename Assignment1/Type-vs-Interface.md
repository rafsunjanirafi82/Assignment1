Introduction:
TypeScript give us two important ways to define custom types: type aliases and interface. Both help developers describe the structure of data and improve type safety. However, they have some important differences that affect how and when they should be used.

Detailed Explanation:
An interface is mainly used to define the structure of objects. It supports declaration merging, meaning multiple declarations with the same interface name can be combined.

interface User {
    name: string;
    age: number;
}

interface User {
    email: string;
}

const student: User = {
    name: "Rafi",
    age: 22,
    email: "rafi@gmail.com"
};

Here, TypeScript combines both interface declarations into one structure.

On the other hand, a type alias can represent more than object structures. It can define primitive types, union types, intersection types, tuples, and function types.

type ID = string | number;

type Product = {
    name: string;
    price: number;
};

const product: Product = {
    name: "Laptop",
    price: 50000
};

Another important difference is that interfaces can be extended using extends, while types can combine structures using intersection (&). Both can support inheritance-like composition.

Conclusion:
In conclusion, both type and interface are useful for defining custom types in TypeScript. I prefer interface when designing object structures, especially when declaration merging or extension is needed. I prefer type when working with unions, intersections, primitives, or more complex type combinations. The choice depends on the requirements of the project.