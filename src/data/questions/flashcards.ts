import { Flashcard } from "@/lib/types";

export const flashcards: Flashcard[] = [
  {
    id: "1",
    type: "flashcard",
    topic: "Utility Types",
    question: "What does `Partial<T>` do in TypeScript?",
    answer:
      "It makes all properties in T optional. Equivalent to `{ [K in keyof T]?: T[K] }`.",
  },
  {
    id: "2",
    type: "flashcard",
    topic: "Advanced Types",
    question: "What is `infer` used for in conditional types?",
    answer:
      "`infer` lets you introduce a new type variable to be inferred from a type. Used like: `T extends Promise<infer U> ? U : never`.",
  },
  {
    id: "3",
    type: "flashcard",
    topic: "Utility Types",
    question: "What does `Required<T>` do?",
    answer:
      "It makes all properties in T required (non-optional). Equivalent to `{ [K in keyof T]-?: T[K] }`.",
  },
  {
    id: "4",
    type: "flashcard",
    topic: "Utility Types",
    question: "How does `Readonly<T>` work?",
    answer:
      "It makes all properties in T read-only. Equivalent to `{ readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "5",
    type: "flashcard",
    topic: "Utility Types",
    question: "What is the purpose of `Pick<T, K>`?",
    answer:
      "It creates a new type by picking the properties K from T. Example: `Pick<User, 'id' | 'name'>`.",
  },
  {
    id: "6",
    type: "flashcard",
    topic: "Utility Types",
    question: "What does `Record<K, T>` do?",
    answer:
      "It constructs a type with keys K of type T. Example: `Record<'a' | 'b', number>` is `{ a: number; b: number }`.",
  },
  {
    id: "7",
    type: "flashcard",
    topic: "Advanced Types",
    question: "What is a conditional type in TypeScript?",
    answer:
      "A type that selects one of two possible types based on a condition. Syntax: `T extends U ? X : Y`.",
  },
  {
    id: "8",
    type: "flashcard",
    topic: "Advanced Types",
    question: "How does `Exclude<T, U>` work?",
    answer:
      "It removes from T those types that are assignable to U. Example: `Exclude<'a' | 'b', 'b'>` is `'a'`.",
  },
  {
    id: "9",
    type: "flashcard",
    topic: "Advanced Types",
    question: "What does `Extract<T, U>` do?",
    answer:
      "It extracts from T those types that are assignable to U. Example: `Extract<'a' | 'b', 'b' | 'c'>` is `'b'`.",
  },
  {
    id: "10",
    type: "flashcard",
    topic: "Keyof & Indexed Access",
    question: "What does `keyof T` produce?",
    answer:
      "It produces a union of all property names (as string literals) of type T.",
  },
  {
    id: "11",
    type: "flashcard",
    topic: "Keyof & Indexed Access",
    question: "What does `T[K]` mean in TypeScript?",
    answer:
      "It means: 'the type of property K from type T'. Used in mapped and conditional types.",
  },
  {
    id: "12",
    type: "flashcard",
    topic: "Keyof",
    question: "What does `keyof T` produce?",
    answer:
      "It creates a union of string literal types representing the keys of type T.",
  },
  {
    id: "13",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminated union in TypeScript?",
    answer:
      "A union of types that share a common literal property (discriminant), which helps TypeScript narrow the type using control flow.",
  },
  {
    id: "14",
    type: "flashcard",
    topic: "Readonly",
    question: "What does the `Readonly<T>` utility type do?",
    answer:
      "It makes all properties of type T immutable — you can't reassign them.",
  },
  {
    id: "15",
    type: "flashcard",
    topic: "Record",
    question: "What does `Record<K, T>` do?",
    answer:
      "It constructs a type with keys from K and values of type T. Useful for creating dictionaries.",
  },
  {
    id: "16",
    type: "flashcard",
    topic: "Mapped Types",
    question: "What is a mapped type in TypeScript?",
    answer:
      "A mapped type creates new types by looping over the keys of another type. Syntax: `{ [K in keyof T]: ... }`.",
  },
  {
    id: "17",
    type: "flashcard",
    topic: "Template Literal Types",
    question: "What are template literal types used for?",
    answer:
      "They allow you to construct types using string interpolation, like `${T}-suffix` or `prefix-${T}`.",
  },
  {
    id: "18",
    type: "flashcard",
    topic: "Unknown vs Any",
    question: "What is the difference between `unknown` and `any`?",
    answer:
      "`unknown` is safer — you must narrow it before use. `any` disables type checking completely.",
  },
  {
    id: "19",
    type: "flashcard",
    topic: "Function Overloads",
    question: "How are function overloads defined in TypeScript?",
    answer:
      "By declaring multiple function signatures before the implementation. The implementation must cover all declared signatures.",
  },
  {
    id: "20",
    type: "flashcard",
    topic: "Type Assertions",
    question: "When should you use type assertions (`as Type`)?",
    answer:
      "When you know more than the compiler about a value's type, and you're certain it's safe to treat it as that type.",
  },
  {
    id: "21",
    type: "flashcard",
    topic: "Intrinsic String Manipulation Types",
    question: "What does `Uppercase<T>` do in TypeScript?",
    answer:
      "It transforms every character in string literal type T to uppercase.",
  },
  {
    id: "22",
    type: "flashcard",
    topic: "Intrinsic String Manipulation Types",
    question: "What does `Capitalize<T>` do?",
    answer:
      "It transforms only the first character of a string literal type T to uppercase.",
  },
  {
    id: "23",
    type: "flashcard",
    topic: "Type Guards",
    question: "What is a user-defined type guard in TypeScript?",
    answer:
      "It's a function that returns `x is SomeType`, helping TypeScript narrow the type in conditionals.",
  },
  {
    id: "24",
    type: "flashcard",
    topic: "Type Guards",
    question: "How does `typeof` help with narrowing types?",
    answer:
      "`typeof` is a built-in type guard for primitives like 'string', 'number', etc.",
  },
  {
    id: "25",
    type: "flashcard",
    topic: "Type Guards",
    question: "How does `instanceof` help with narrowing types?",
    answer:
      "`instanceof` checks if an object is an instance of a class and narrows the type accordingly.",
  },
  {
    id: "26",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminated union?",
    answer:
      "A union of object types with a common literal property to help with type narrowing via switch statements.",
  },
  {
    id: "27",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "How does a `switch` statement help with discriminated unions?",
    answer:
      "It narrows the type by matching the discriminant key (e.g. `kind`) to a known literal value.",
  },
  {
    id: "28",
    type: "flashcard",
    topic: "Template Literal Types",
    question: "What are template literal types used for in TypeScript?",
    answer:
      "They allow building new string literal types by combining other strings, e.g. `Hello ${World}`.",
  },
  {
    id: "29",
    type: "flashcard",
    topic: "Mapped Types",
    question: "How do mapped types work in TypeScript?",
    answer:
      "Mapped types iterate over keys of a type to transform them. Example: `{ [K in keyof T]: string }` maps every property to string.",
  },
  {
    id: "30",
    type: "flashcard",
    topic: "Readonly & Mutable",
    question: "How can you make all properties in a type readonly?",
    answer:
      "Use `Readonly<T>`, which maps each property to `readonly`: `{ readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "31",
    type: "flashcard",
    topic: "Readonly & Mutable",
    question: "How to remove `readonly` modifiers from a type?",
    answer:
      "Use a mapped type with `-readonly`: `{ -readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "32",
    type: "flashcard",
    topic: "Never",
    question: "What is the purpose of the `never` type?",
    answer:
      "`never` represents values that never occur. Useful for exhaustive checks in switch statements and unreachable code.",
  },
  {
    id: "33",
    type: "flashcard",
    topic: "Tuple Types",
    question: "How is a tuple different from an array in TypeScript?",
    answer:
      "Tuples have fixed lengths and known types at each index, while arrays are dynamic in length and type.",
  },
  {
    id: "34",
    type: "flashcard",
    topic: "Type Inference",
    question: "What is contextual typing in TypeScript?",
    answer:
      "Contextual typing is when TypeScript infers the type of a variable based on its usage context.",
  },
  {
    id: "35",
    type: "flashcard",
    topic: "Extends",
    question: "What does `T extends U` mean in TypeScript?",
    answer:
      "It checks whether type `T` is assignable to `U`, and is commonly used in conditional types.",
  },
  {
    id: "36",
    type: "flashcard",
    topic: "Intersections",
    question: "What is an intersection type in TypeScript?",
    answer:
      "An intersection type `A & B` means a type that has all properties of both `A` and `B`.",
  },
  {
    id: "37",
    type: "flashcard",
    topic: "Unions",
    question: "How does TypeScript treat union types?",
    answer:
      "A union type `A | B` allows a value to be of type `A` *or* type `B`.",
  },
  {
    id: "38",
    type: "flashcard",
    topic: "Unions",
    question: "How can you narrow a union type?",
    answer:
      "Using type guards like `typeof`, `in`, or `instanceof`, or checking for discriminant properties in discriminated unions.",
  },
  {
    id: "39",
    type: "flashcard",
    topic: "Intersection Types",
    question: "What happens when two types are intersected in TypeScript?",
    answer:
      "The resulting type has all properties from both types. For example, `A & B` means an object that satisfies both A and B.",
  },
  {
    id: "40",
    type: "flashcard",
    topic: "Unions",
    question: "How do union types behave in TypeScript?",
    answer:
      "A union type `A | B` allows a value to be either A or B. TypeScript will narrow the type depending on usage context.",
  },
  {
    id: "41",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminated union in TypeScript?",
    answer:
      "A union of object types that all share a common discriminant property (like `kind`), which helps in narrowing.",
  },
  {
    id: "42",
    type: "flashcard",
    topic: "Never Type",
    question: "What is the purpose of the `never` type in TypeScript?",
    answer:
      "`never` represents values that never occur. It’s often used for functions that always throw or in exhaustive checks.",
  },
  {
    id: "43",
    type: "flashcard",
    topic: "Unknown Type",
    question: "How is `unknown` different from `any`?",
    answer:
      "`unknown` is safer than `any` because you must do some type checking before performing most operations on it.",
  },
  {
    id: "44",
    type: "flashcard",
    topic: "Tuple Types",
    question: "What is a tuple type in TypeScript?",
    answer:
      "A tuple is a fixed-length array where each element has a specific type. Example: `[string, number]`.",
  },
  {
    id: "45",
    type: "flashcard",
    topic: "Readonly Tuples",
    question: "How do you define a readonly tuple?",
    answer:
      "Prefix with `readonly`, like `readonly [string, number]`. Prevents reassignment of tuple elements.",
  },
  {
    id: "46",
    type: "flashcard",
    topic: "Spread with Tuples",
    question: "What does `[...T, number]` mean if T is a tuple?",
    answer:
      "It means a new tuple type with all elements of T followed by a number. Useful in variadic tuple types.",
  },
  {
    id: "47",
    type: "flashcard",
    topic: "Type Compatibility",
    question: "What is structural typing in TypeScript?",
    answer:
      "TypeScript uses structural typing, meaning types are compatible if their structure matches, not their names.",
  },
  {
    id: "48",
    type: "flashcard",
    topic: "Type Inference",
    question: "How does TypeScript infer the type of `const x = [1, 2]`?",
    answer:
      "The inferred type is `number[]`, but you can use `as const` to get a tuple: `readonly [1, 2]`.",
  },
  {
    id: "49",
    type: "flashcard",
    topic: "Conditional Types",
    question: "What is the structure of a conditional type in TypeScript?",
    answer:
      "It has the form `A extends B ? C : D`. If A is assignable to B, the type resolves to C; otherwise, to D.",
  },
  {
    id: "50",
    type: "flashcard",
    topic: "Key Remapping",
    question: "What does `as` do in mapped types?",
    answer:
      "It allows you to remap keys. For example: `{ [K in keyof T as Uppercase<K>]: T[K] }` creates a type with uppercased keys.",
  },
  {
    id: "51",
    type: "flashcard",
    topic: "Type Predicates",
    question: "How do you define a user-defined type guard in TypeScript?",
    answer:
      "By returning a type predicate: `function isFoo(val: any): val is Foo`.",
  },
  {
    id: "52",
    type: "flashcard",
    topic: "Recursive Types",
    question: "What is a recursive type in TypeScript?",
    answer:
      "A type that refers to itself, either directly or through another type. Useful for trees or nested structures.",
  },
  {
    id: "53",
    type: "flashcard",
    topic: "Literal Types",
    question: "What is a literal type in TypeScript?",
    answer:
      "A type that represents a specific string, number, or boolean value. Example: `'loading' | 'success' | 'error'`.",
  },
  {
    id: "54",
    type: "flashcard",
    topic: "Template Literal Types",
    question: "What does this type mean: `` `Hello, ${string}` ``?",
    answer:
      "It's a template literal type that matches any string starting with `Hello, ` followed by any string.",
  },
  {
    id: "55",
    type: "flashcard",
    topic: "Mapped Types + Conditional",
    question: "Can you combine mapped and conditional types?",
    answer:
      "Yes. For example: `{ [K in keyof T]: T[K] extends string ? number : T[K] }` replaces all string values with number.",
  },
  {
    id: "56",
    type: "flashcard",
    topic: "Mapped Types with Filtering",
    question: "How can you exclude keys from a mapped type?",
    answer:
      "Use `as` with a conditional and `never`. For example: `{ [K in keyof T as K extends 'id' ? never : K]: T[K] }`.",
  },
  {
    id: "57",
    type: "flashcard",
    topic: "Utility Types",
    question: "What does `Required<T>` do?",
    answer:
      "It makes all optional properties in T required. Equivalent to `{ [K in keyof T]-?: T[K] }`.",
  },
  {
    id: "58",
    type: "flashcard",
    topic: "Utility Types",
    question: "What does `Record<K, V>` do?",
    answer:
      "It constructs an object type with keys K and values V. Example: `Record<'a' | 'b', number>` gives `{ a: number; b: number }`.",
  },
  {
    id: "59",
    type: "flashcard",
    topic: "Intersection Types",
    question: "What does the `&` operator do in TypeScript types?",
    answer:
      "It creates an intersection type that has all properties from both types. Example: `A & B` must satisfy both A and B.",
  },
  {
    id: "60",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminated union in TypeScript?",
    answer:
      "A union of object types that share a common literal property (the discriminator), used for type narrowing.",
  },
  {
    id: "61",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "How do you narrow a discriminated union?",
    answer:
      "Using a `switch` or `if` on the discriminator property (e.g. `type`) to narrow to the correct variant.",
  },
  {
    id: "62",
    type: "flashcard",
    topic: "Function Overloads",
    question: "How are function overloads written in TypeScript?",
    answer:
      "With multiple declarations above a single implementation. Only the implementation contains code.",
  },
  {
    id: "63",
    type: "flashcard",
    topic: "Tuples",
    question: "How do tuples differ from arrays in TypeScript?",
    answer:
      "Tuples have fixed length and known types per index. Arrays have variable length and uniform element type.",
  },
  {
    id: "64",
    type: "flashcard",
    topic: "Tuple Inference",
    question: "What does `as const` do to a tuple?",
    answer:
      "It makes the tuple readonly and infers the literal types of its elements, not just `string | number`.",
  },
  {
    id: "65",
    type: "flashcard",
    topic: "Readonly Modifier",
    question: "How to make all properties in a type readonly?",
    answer:
      "Use the utility type `Readonly<T>`, which applies `readonly` to all keys in T.",
  },
  {
    id: "66",
    type: "flashcard",
    topic: "Keyof with Generics",
    question: "How does `keyof T` work when T is generic?",
    answer:
      "It evaluates to the union of property names of T — useful for enforcing access to valid keys only.",
  },
  {
    id: "67",
    type: "flashcard",
    topic: "Type Constraints",
    question: "What does `<T extends SomeType>` do?",
    answer:
      "It constrains T to only be assignable to `SomeType`. It narrows the possible instantiations of the generic.",
  },
  {
    id: "68",
    type: "flashcard",
    topic: "Keyof + Indexed Access",
    question: "How can you get the type of a property from a generic?",
    answer:
      "Use `T[K]` where `K extends keyof T`. It gives the type of property K from type T.",
  },
  {
    id: "69",
    type: "flashcard",
    topic: "Mapped Types",
    question: "How do mapped types work in TypeScript?",
    answer:
      "They let you create new types by transforming properties of an existing one. Example: `{ [K in keyof T]: T[K] }`.",
  },
  {
    id: "70",
    type: "flashcard",
    topic: "Mapped Types",
    question: "How to remove optionality in a mapped type?",
    answer:
      "Use `-?` modifier: `{ [K in keyof T]-?: T[K] }` removes optional modifiers from properties.",
  },
  {
    id: "71",
    type: "flashcard",
    topic: "Mapped Types",
    question: "How to make properties optional in a mapped type?",
    answer:
      "Use `?` modifier: `{ [K in keyof T]?: T[K] }` adds `?` to all properties, making them optional.",
  },
  {
    id: "72",
    type: "flashcard",
    topic: "Conditional Types",
    question: "How do you filter types using conditional types?",
    answer:
      "Example: `T extends string ? T : never` filters only string types from union T.",
  },
  {
    id: "73",
    type: "flashcard",
    topic: "Infer",
    question: "What happens if `infer` fails to match in a conditional type?",
    answer:
      "The false branch is used — `infer` doesn't throw, it just determines whether the type fits the pattern.",
  },
  {
    id: "74",
    type: "flashcard",
    topic: "Literal Types",
    question: "What are literal types in TypeScript?",
    answer:
      "They represent exact values like `'hello'`, `42`, or `true`, rather than general types like `string` or `number`.",
  },
  {
    id: "75",
    type: "flashcard",
    topic: "Template Literal Types",
    question: "What are template literal types used for?",
    answer:
      "They let you construct new string literal types using pattern combinations. Example: `` `data-${string}` ``.",
  },
  {
    id: "76",
    type: "flashcard",
    topic: "Template Literals",
    question: "Can template literals be used with unions?",
    answer:
      "Yes. Example: `type Size = 'sm' | 'lg'; type Class = `btn-${Size}`;` → 'btn-sm' | 'btn-lg'.",
  },
  {
    id: "77",
    type: "flashcard",
    topic: "Recursive Types",
    question: "What is a recursive type in TypeScript?",
    answer:
      "A type that references itself in its definition. Common for trees or JSON. Example: `type Tree = { value: string; children?: Tree[] }`.",
  },
  {
    id: "78",
    type: "flashcard",
    topic: "Tuple Labels",
    question: "What is a labeled tuple element in TypeScript?",
    answer:
      "You can give names to tuple elements: `[x: number, y: number]`. Useful for documentation and readability.",
  },
  {
    id: "79",
    type: "flashcard",
    topic: "Readonly Types",
    question: "How do you create a readonly object type in TypeScript?",
    answer:
      "You can use `Readonly<T>` utility or `readonly` modifier before each property: `readonly name: string`.",
  },
  {
    id: "80",
    type: "flashcard",
    topic: "Mutable vs Readonly",
    question: "How do you convert a readonly type to mutable?",
    answer:
      "Use a mapped type with `-readonly`: `{ -readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "81",
    type: "flashcard",
    topic: "Function Types",
    question:
      "How do you type a function that takes a callback and returns void?",
    answer:
      "Example: `(cb: (x: number) => void) => void` — `cb` takes a number and returns nothing.",
  },
  {
    id: "82",
    type: "flashcard",
    topic: "Optional Parameters",
    question:
      "What is the difference between `param?: T` and `param: T | undefined`?",
    answer:
      "`param?: T` means the parameter may be omitted. `param: T | undefined` means the caller must provide `undefined` explicitly if omitted.",
  },
  {
    id: "83",
    type: "flashcard",
    topic: "Void vs Undefined",
    question: "Is `void` the same as `undefined` in TypeScript?",
    answer:
      "Not exactly. `void` means a function returns nothing. In practice, `undefined` is commonly used for `void`, but they are not identical.",
  },
  {
    id: "84",
    type: "flashcard",
    topic: "Generics",
    question: "How do you constrain a generic to array?",
    answer: "Use `T extends unknown[]` to enforce that `T` is an array type.",
  },
  {
    id: "85",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminated union?",
    answer:
      "A union of object types with a shared discriminant property, like `type Animal = { kind: 'cat' } | { kind: 'dog' }`.",
  },
  {
    id: "86",
    type: "flashcard",
    topic: "Type Guards",
    question: "How can you define a custom type guard function?",
    answer:
      "With the `arg is SomeType` syntax. Example: `function isString(x: unknown): x is string { return typeof x === 'string'; }`.",
  },
  {
    id: "87",
    type: "flashcard",
    topic: "this in Types",
    question: "Can you refer to `this` in a type?",
    answer:
      "Yes. Inside classes or interfaces, `this` refers to the current type. Useful in method chaining.",
  },
  {
    id: "88",
    type: "flashcard",
    topic: "As Const",
    question: "What does `as const` do in TypeScript?",
    answer:
      "It tells the compiler to infer the narrowest (literal) types possible — useful for readonly tuples and object literals.",
  },
  {
    id: "89",
    type: "flashcard",
    topic: "Enums",
    question:
      "What is the difference between `enum` and `const enum` in TypeScript?",
    answer:
      "`const enum` is inlined at compile time (no runtime code), while `enum` generates runtime objects. Use `const enum` for performance when possible.",
  },
  {
    id: "90",
    type: "flashcard",
    topic: "Unknown vs Any",
    question: "What is the difference between `unknown` and `any`?",
    answer:
      "`unknown` is a safer alternative to `any`. You must narrow it before performing operations, while `any` disables type checking.",
  },
  {
    id: "91",
    type: "flashcard",
    topic: "Tuple Types",
    question: "How do tuple types differ from arrays?",
    answer:
      "Tuples have fixed length and types at each index, while arrays are dynamic and homogeneous.",
  },
  {
    id: "92",
    type: "flashcard",
    topic: "Constructor Parameters",
    question:
      "How can you declare class properties via constructor in TypeScript?",
    answer:
      "Use `public`/`private`/`readonly` modifiers in the constructor: `constructor(public name: string)` automatically creates a property.",
  },
  {
    id: "93",
    type: "flashcard",
    topic: "Mapped Types",
    question: "How can you create a type that makes all properties nullable?",
    answer: "Use mapped type: `{ [K in keyof T]: T[K] | null }`.",
  },
  {
    id: "94",
    type: "flashcard",
    topic: "Satisfies Operator",
    question: "What does the `satisfies` keyword do?",
    answer:
      "`satisfies` ensures a value conforms to a type but still preserves its more specific inferred type.",
  },
  {
    id: "95",
    type: "flashcard",
    topic: "Overloads",
    question: "How do function overloads work in TypeScript?",
    answer:
      "You declare multiple signatures followed by a single implementation that handles all cases.",
  },
  {
    id: "96",
    type: "flashcard",
    topic: "Utility Types",
    question: "What does `Record<K, V>` do?",
    answer:
      "It creates a type with keys `K` and values of type `V`. Example: `Record<'a' | 'b', number>`.",
  },
  {
    id: "97",
    type: "flashcard",
    topic: "typeof Type Operator",
    question: "What does `typeof` do in a type context?",
    answer:
      "It gets the type of a value. Example: `const x = { a: 1 }; type X = typeof x`.",
  },
  {
    id: "98",
    type: "flashcard",
    topic: "Const Assertions",
    question: "When would you use `as const` on an array or object?",
    answer:
      "To get readonly literal types, preserving exact values instead of widening to general types like `string` or `number`.",
  },
  {
    id: "99",
    type: "flashcard",
    topic: "Generics",
    question: "How do you specify multiple generic parameters in a function?",
    answer:
      "By separating them with commas, e.g. `function merge<T, U>(a: T, b: U): T & U {}`.",
  },
  {
    id: "100",
    type: "flashcard",
    topic: "Type Compatibility",
    question: "When is one type assignable to another in TypeScript?",
    answer:
      "When the source type has at least the same structure as the target type (structural typing).",
  },
  {
    id: "101",
    type: "flashcard",
    topic: "Readonly Tuples",
    question: "What does `readonly [number, string]` mean in TypeScript?",
    answer:
      "It defines a tuple where both elements are immutable — you cannot reassign them.",
  },
  {
    id: "102",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "How does TypeScript discriminate union types?",
    answer:
      "By using a common literal property (e.g., `kind: 'circle' | 'square'`) to narrow types with `switch` or `if` statements.",
  },
  {
    id: "103",
    type: "flashcard",
    topic: "Declaration Merging",
    question: "What is declaration merging?",
    answer:
      "When two declarations with the same name are automatically merged into one — often with interfaces or namespaces.",
  },
  {
    id: "104",
    type: "flashcard",
    topic: "Type Aliases vs Interfaces",
    question: "What's a key difference between type aliases and interfaces?",
    answer:
      "Interfaces can be extended and merged, while type aliases are more flexible but cannot be merged.",
  },
  {
    id: "105",
    type: "flashcard",
    topic: "Overloads",
    question: "How does function overloading work in TypeScript?",
    answer:
      "You declare multiple signatures and one implementation. The implementation must handle all declared cases.",
  },
  {
    id: "106",
    type: "flashcard",
    topic: "Index Signatures",
    question: "What is an index signature?",
    answer:
      "A way to describe objects with unknown property names: `{ [key: string]: number }`.",
  },
  {
    id: "107",
    type: "flashcard",
    topic: "Literal Inference",
    question: "What does `as const` do in TypeScript?",
    answer:
      "It tells the compiler to infer the most specific literal types and make them readonly.",
  },
  {
    id: "108",
    type: "flashcard",
    topic: "Exhaustiveness Checking",
    question: "How can you force exhaustive checking in a `switch` statement?",
    answer:
      "By using a `never` fallback: `default: const _exhaustiveCheck: never = value;`.",
  },
  {
    id: "109",
    type: "flashcard",
    topic: "This Parameters",
    question: "What does `this: void` mean in a function signature?",
    answer:
      "It means the function does not use `this`, helping avoid unexpected binding or context issues.",
  },
  {
    id: "110",
    type: "flashcard",
    topic: "Predicate Functions",
    question: "What is the purpose of a `value is Type` return in a function?",
    answer:
      "It's a type predicate — tells TypeScript that the value has a specific type if the function returns true.",
  },
  {
    id: "111",
    type: "flashcard",
    topic: "Mapped Types",
    question: "What does `[K in keyof T]: T[K]` represent?",
    answer:
      "A mapped type — iterates over keys in T and reconstructs the type.",
  },
  {
    id: "112",
    type: "flashcard",
    topic: "Function Types",
    question:
      "How do you define a function type that takes a string and returns a number?",
    answer:
      "`type Fn = (x: string) => number` — standard function type syntax.",
  },
  {
    id: "113",
    type: "flashcard",
    topic: "Rest Parameters",
    question:
      "How do you type a function that takes a variable number of numbers?",
    answer:
      "`(...args: number[]) => void` — rest parameters must always be arrays.",
  },
  {
    id: "114",
    type: "flashcard",
    topic: "Type Guards",
    question: "How can you write a custom type guard?",
    answer:
      "By returning `value is SomeType` from a boolean function, e.g. `function isString(val): val is string { return typeof val === 'string'; }`.",
  },
  {
    id: "115",
    type: "flashcard",
    topic: "typeof Type Queries",
    question: "What does `typeof obj` mean in a type context?",
    answer:
      "It extracts the type of the variable `obj`, useful when reusing runtime types in type declarations.",
  },
  {
    id: "116",
    type: "flashcard",
    topic: "keyof Type Operator",
    question: "What does `keyof typeof Colors` return if `Colors` is an enum?",
    answer:
      "It returns the union of keys as strings: e.g. `'Red' | 'Blue' | ...` depending on enum members.",
  },
  {
    id: "117",
    type: "flashcard",
    topic: "Template Literal Types",
    question: "What does ``type Event = `on${string}` `` represent?",
    answer:
      "It creates a union of string types that start with 'on', like 'onclick', 'onHover', etc.",
  },
  {
    id: "118",
    type: "flashcard",
    topic: "Unions vs Intersections",
    question: "What is the difference between `A | B` and `A & B`?",
    answer:
      "`A | B` is either A or B; `A & B` is both A and B combined — a type that satisfies both.",
  },
  {
    id: "119",
    type: "flashcard",
    topic: "Readonly Utility",
    question: "What does `Readonly<T>` do in TypeScript?",
    answer:
      "It makes all properties of type T immutable — equivalent to `{ readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "120",
    type: "flashcard",
    topic: "Record Utility",
    question: "What does `Record<K, T>` produce?",
    answer:
      "It creates a type with keys `K` and values of type `T`. Often used to map strings to a type.",
  },
  {
    id: "121",
    type: "flashcard",
    topic: "Pick Utility",
    question: "What does `Pick<T, K>` do?",
    answer:
      "It creates a new type by selecting a subset `K` of keys from type `T`.",
  },
  {
    id: "122",
    type: "flashcard",
    topic: "Omit Utility",
    question: "How is `Omit<T, K>` different from `Pick<T, K>`?",
    answer:
      "`Omit` removes keys `K` from type `T`, whereas `Pick` keeps only those keys.",
  },
  {
    id: "123",
    type: "flashcard",
    topic: "Awaited Utility",
    question: "What does `Awaited<T>` do?",
    answer:
      "It extracts the resolved type from a Promise, recursively if needed.",
  },
  {
    id: "124",
    type: "flashcard",
    topic: "Constructor Parameters",
    question: "What does `ConstructorParameters<typeof Class>` return?",
    answer:
      "It returns a tuple of the parameter types of the class constructor.",
  },
  {
    id: "125",
    type: "flashcard",
    topic: "ReturnType Utility",
    question: "What does `ReturnType<typeof fn>` give you?",
    answer: "It gives you the type returned by the function `fn`.",
  },
  {
    id: "126",
    type: "flashcard",
    topic: "Parameters Utility",
    question: "What does `Parameters<typeof fn>` return?",
    answer:
      "It gives you a tuple type representing the function’s parameter types.",
  },
  {
    id: "127",
    type: "flashcard",
    topic: "ThisType Utility",
    question: "What is `ThisType<T>` used for?",
    answer:
      "It sets the type of `this` within an object literal — useful for mixins or chaining APIs.",
  },
  {
    id: "128",
    type: "flashcard",
    topic: "Partial vs Required",
    question: "What’s the difference between `Partial<T>` and `Required<T>`?",
    answer:
      "`Partial<T>` makes all properties optional; `Required<T>` makes all properties mandatory.",
  },
  {
    id: "129",
    type: "flashcard",
    topic: "Literal Types",
    question: "What are literal types in TypeScript?",
    answer:
      "Types that represent exact values, like `'click'`, `42`, or `true`, allowing stricter typing.",
  },
  {
    id: "130",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "How does a discriminated union work in TypeScript?",
    answer:
      "It uses a common literal field (e.g., `kind`) to distinguish between union members at runtime.",
  },
  {
    id: "131",
    type: "flashcard",
    topic: "Exhaustiveness Checking",
    question:
      "How can you ensure all cases are handled in a switch statement on a union?",
    answer:
      "By using a `never` fallback case — TypeScript will show an error if any case is missed.",
  },
  {
    id: "132",
    type: "flashcard",
    topic: "Never Type",
    question: "What does the `never` type represent?",
    answer:
      "`never` means a value that never occurs — used in functions that throw or in exhaustive checks.",
  },
  {
    id: "133",
    type: "flashcard",
    topic: "Tuple Types",
    question: "How is a tuple type different from an array?",
    answer:
      "A tuple has a fixed length and types for each index, unlike arrays which are uniform and dynamic.",
  },
  {
    id: "134",
    type: "flashcard",
    topic: "Variadic Tuples",
    question: "What is a variadic tuple type?",
    answer:
      "A tuple type that can have a dynamic length by spreading another tuple, e.g. `[string, ...T, number]`.",
  },
  {
    id: "135",
    type: "flashcard",
    topic: "Optional Tuple Elements",
    question: "How do you define an optional element in a tuple?",
    answer:
      "Using `?` after the element: `[a: string, b?: number]` — makes the second element optional.",
  },
  {
    id: "136",
    type: "flashcard",
    topic: "Index Signatures",
    question: "What does `{ [key: string]: number }` mean?",
    answer:
      "It defines an object where all string keys must have number values — an index signature.",
  },
  {
    id: "137",
    type: "flashcard",
    topic: "Type Narrowing",
    question: "What is type narrowing?",
    answer:
      "Refining a variable’s type based on checks like `typeof`, `in`, or custom type guards.",
  },
  {
    id: "138",
    type: "flashcard",
    topic: "in Operator",
    question: "How is the `in` operator used for narrowing?",
    answer:
      "By checking if a property exists: `if ('x' in obj)`, TypeScript can infer the type based on structure.",
  },
  {
    id: "139",
    type: "flashcard",
    topic: "Readonly Properties",
    question: "How do you make a property readonly in a type?",
    answer:
      "Using the `readonly` modifier: `readonly name: string` prevents reassignment after initialization.",
  },
  {
    id: "140",
    type: "flashcard",
    topic: "Readonly Utility Type",
    question: "What does `Readonly<T>` do in TypeScript?",
    answer: `🔒 The \`Readonly<T>\` utility type makes **all properties** of type \`T\` immutable.
  
  📌 **Meaning**: Once the object is created, its properties **cannot be changed**.
  
  🧠 **Why use it?**
  Use \`Readonly<T>\` to ensure data integrity and avoid accidental mutations.
  
  🧬 **How it works**:
  \`\`\`ts
  type User = {
    name: string;
    age: number;
  };
  
  const readonlyUser: Readonly<User> = {
    name: "Alice",
    age: 30
  };
  
  // ❌ Error: Cannot assign to 'name' because it is a read-only property.
  readonlyUser.name = "Bob";
  \`\`\`
  
  🔍 **Under the hood**, it's equivalent to:
  \`\`\`ts
  { readonly [K in keyof T]: T[K] }
  \`\`\`
  
  ✅ Great for working with external data, configs, constants, or Redux states.`,
  },
  {
    id: "141",
    type: "flashcard",
    topic: "Mutable Utility Type (custom)",
    question: "How would you define a `Mutable<T>` utility type?",
    answer:
      "By removing `readonly`: `type Mutable<T> = { -readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "142",
    type: "flashcard",
    topic: "Record Utility Type",
    question: "What does `Record<K, T>` do?",
    answer:
      "It constructs a type with keys `K` of type `string | number | symbol` and values of type `T`.",
  },
  {
    id: "143",
    type: "flashcard",
    topic: "Pick Utility Type",
    question: "What does `Pick<T, K>` do?",
    answer:
      "It creates a new type by picking a set of properties `K` from type `T`.",
  },
  {
    id: "144",
    type: "flashcard",
    topic: "Omit Utility Type",
    question: "What does `Omit<T, K>` do?",
    answer:
      "It constructs a type by omitting keys `K` from type `T`. Useful for exclusions.",
  },
  {
    id: "145",
    type: "flashcard",
    topic: "Function Types",
    question: "How do you define a function type with generics?",
    answer:
      "Like `type Fn<T> = (arg: T) => void;` — generics can make the function type reusable.",
  },
  {
    id: "146",
    type: "flashcard",
    topic: "typeof Type Operator",
    question: "What does `typeof` do in types?",
    answer:
      "It retrieves the type of a variable or function: `type X = typeof someVar`.",
  },
  {
    id: "147",
    type: "flashcard",
    topic: "Indexed Access Types",
    question: "What does `T['a']` mean?",
    answer:
      "It accesses the type of property `a` from type `T` — called an indexed access type.",
  },
  {
    id: "148",
    type: "flashcard",
    topic: "Mapped Types with keyof",
    question: "What is the purpose of `[K in keyof T]`?",
    answer: "It iterates over keys of type `T` to generate new mapped types.",
  },
  {
    id: "149",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminated union in TypeScript?",
    answer:
      "A union of types that share a common literal property (e.g., `kind`) used to distinguish between them.",
  },
  {
    id: "150",
    type: "flashcard",
    topic: "Type Narrowing",
    question: "How does TypeScript narrow types using `typeof`?",
    answer:
      "TypeScript refines the type based on the result of `typeof` checks like `typeof x === 'string'`.",
  },
  {
    id: "151",
    type: "flashcard",
    topic: "Never Type",
    question: "When does TypeScript infer the `never` type?",
    answer:
      "`never` represents values that never occur, like a function that always throws or exhaustive checks.",
  },
  {
    id: "152",
    type: "flashcard",
    topic: "Type Predicates",
    question: "What is a type predicate function?",
    answer:
      "A function that returns `x is SomeType`, helping TypeScript narrow the type within conditionals.",
  },
  {
    id: "153",
    type: "flashcard",
    topic: "Tuple Types",
    question: "How do tuple types differ from arrays?",
    answer:
      "Tuples have fixed lengths and types at each index, like `[string, number]`.",
  },
  {
    id: "154",
    type: "flashcard",
    topic: "Literals vs Widened Types",
    question: "What's the difference between `'hello'` and `string`?",
    answer:
      "`'hello'` is a literal type, while `string` is the general string type. Literals are more specific.",
  },
  {
    id: "155",
    type: "flashcard",
    topic: "Const Assertion",
    question: "What does `as const` do?",
    answer:
      "It tells TypeScript to infer the narrowest possible literal types and mark the object/array as readonly.",
  },
  {
    id: "156",
    type: "flashcard",
    topic: "Exhaustiveness Checking",
    question:
      "How do you perform exhaustiveness checks in a `switch` statement?",
    answer:
      "Use a `never` variable in the `default` case: `const _: never = value;` to ensure all cases are handled.",
  },
  {
    id: "157",
    type: "flashcard",
    topic: "Custom Type Guards",
    question: "What is a custom type guard?",
    answer:
      "A function that returns a type predicate (e.g., `arg is Foo`) to help TypeScript narrow types in conditionals.",
  },
  {
    id: "158",
    type: "flashcard",
    topic: "Unions with Objects",
    question: "How does TypeScript treat unions of object types?",
    answer:
      "It allows shared properties, but access to unique properties requires narrowing (e.g., discriminated unions).",
  },
  {
    id: "159",
    type: "flashcard",
    topic: "Literal Types",
    question: "What is a string literal type in TypeScript?",
    answer:
      "A type that can only be one specific string value, e.g., 'success' | 'error'.",
  },
  {
    id: "160",
    type: "flashcard",
    topic: "Literal Types",
    question: "How do literal types help with exhaustive checks?",
    answer:
      "They allow TypeScript to enforce all cases in a switch statement are handled when using union of literals.",
  },
  {
    id: "161",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminated union in TypeScript?",
    answer:
      "A union of types that all share a common literal property (the discriminator), used for safe type narrowing.",
  },
  {
    id: "162",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What’s the purpose of a `tag` field in a discriminated union?",
    answer:
      "It acts as the discriminator to enable TypeScript to narrow types within conditionals or switch statements.",
  },
  {
    id: "163",
    type: "flashcard",
    topic: "Mapped Types",
    question: "What is a mapped type?",
    answer:
      "A type that creates new properties by mapping over the keys of an existing type, e.g., `{ [K in keyof T]: T[K] }`.",
  },
  {
    id: "164",
    type: "flashcard",
    topic: "Mapped Types",
    question: "How do you make a mapped type read-only?",
    answer:
      "By adding the `readonly` modifier: `{ readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "165",
    type: "flashcard",
    topic: "Mapped Types",
    question: "How to exclude a property in a mapped type?",
    answer:
      "Use conditional key remapping: `{ [K in keyof T as Exclude<K, 'id'>]: T[K] }`.",
  },
  {
    id: "166",
    type: "flashcard",
    topic: "Advanced Mapped Types",
    question: "What does key remapping allow you to do in mapped types?",
    answer:
      "It allows changing property keys while mapping over them using `as` syntax.",
  },
  {
    id: "167",
    type: "flashcard",
    topic: "Conditional Types",
    question: "What happens when a conditional type distributes over a union?",
    answer:
      "It evaluates the condition for each union member individually, producing a new union.",
  },
  {
    id: "168",
    type: "flashcard",
    topic: "Conditional Types",
    question: "How do you prevent distribution in conditional types?",
    answer: "Wrap the type in square brackets: `[T] extends [U] ? ... : ...`.",
  },
  {
    id: "169",
    type: "flashcard",
    topic: "Optional Properties",
    question: "How do you define an optional property in an interface?",
    answer:
      "By appending `?` to the property name, e.g., `interface User { age?: number }`.",
  },
  {
    id: "170",
    type: "flashcard",
    topic: "Required Utility",
    question: "What does the `Required<T>` utility type do?",
    answer:
      "It makes all properties in T required, even those that were optional.",
  },
  {
    id: "171",
    type: "flashcard",
    topic: "Type Compatibility",
    question: "Is TypeScript structurally typed or nominally typed?",
    answer:
      "TypeScript uses structural typing, meaning compatibility is based on shape rather than name.",
  },
  {
    id: "172",
    type: "flashcard",
    topic: "Tuple Manipulation",
    question: "What does `readonly [number, string]` represent?",
    answer:
      "A tuple where the first element is a number, second is a string, and the entire tuple is immutable.",
  },
  {
    id: "173",
    type: "flashcard",
    topic: "Conditional Types",
    question: "What will `string extends string ? true : false` evaluate to?",
    answer: "It evaluates to `true` because string extends itself.",
  },
  {
    id: "174",
    type: "flashcard",
    topic: "String Literal Types",
    question: "What is a string literal type in TypeScript?",
    answer:
      "A type that allows only specific string values, like `'success' | 'error'`.",
  },
  {
    id: "175",
    type: "flashcard",
    topic: "Readonly Utility",
    question: "What does `Readonly<T>` do?",
    answer:
      "It makes all properties in type T read-only, preventing reassignment.",
  },
  {
    id: "176",
    type: "flashcard",
    topic: "Mapped Types with Modifiers",
    question: "How do you remove optional modifier in a mapped type?",
    answer: "By using `-?`, e.g., `{ [K in keyof T]-?: T[K] }`.",
  },
  {
    id: "177",
    type: "flashcard",
    topic: "Mapped Types with Modifiers",
    question: "How do you add `readonly` modifier in a mapped type?",
    answer: "By using `+readonly`, e.g., `{ +readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "178",
    type: "flashcard",
    topic: "Infer with ReturnType",
    question: "How does `ReturnType<T>` work?",
    answer:
      "It uses `infer` internally to extract the return type of a function type.",
  },
  {
    id: "179",
    type: "flashcard",
    topic: "Never Type",
    question: "What does a function returning `never` mean?",
    answer:
      "It means the function never returns, e.g., it always throws or loops infinitely.",
  },
  {
    id: "180",
    type: "flashcard",
    topic: "Function Type Inference",
    question: "Will TypeScript infer parameter types in anonymous functions?",
    answer:
      "Yes, if used in a context where the expected types are known (e.g., callbacks).",
  },
  {
    id: "181",
    type: "flashcard",
    topic: "Type Predicates",
    question: "What is a user-defined type guard in TypeScript?",
    answer:
      "It's a function that returns a boolean and uses a `parameterName is Type` return type to narrow types. Example: `function isString(x: unknown): x is string { return typeof x === 'string' }`.",
  },
  {
    id: "182",
    type: "flashcard",
    topic: "Literal Types",
    question: "What is a string literal type?",
    answer:
      "A type that can only be a specific string value. Example: `type Direction = 'left' | 'right'`.",
  },
  {
    id: "183",
    type: "flashcard",
    topic: "Template Literal Types",
    question: "What are template literal types used for?",
    answer:
      "They construct new string literal types by concatenating or transforming other types. Example: `type EventName<T extends string> = `${T}Event``.",
  },
  {
    id: "184",
    type: "flashcard",
    topic: "Type Aliases",
    question: "What is the difference between type alias and interface?",
    answer:
      "`type` can represent primitives, unions, tuples, etc. `interface` is best for object shape and can be merged.",
  },
  {
    id: "185",
    type: "flashcard",
    topic: "Type Compatibility",
    question: "What is structural typing in TypeScript?",
    answer:
      "It means compatibility is based on structure, not on explicit declarations. If it has all required properties, it matches.",
  },
  {
    id: "186",
    type: "flashcard",
    topic: "This Parameters",
    question: "How do you explicitly type the `this` parameter in a function?",
    answer:
      "Add `this: Type` as the first argument. Example: `function say(this: HTMLInputElement) {}`.",
  },
  {
    id: "187",
    type: "flashcard",
    topic: "Function Overloads",
    question: "What is function overloading in TypeScript?",
    answer:
      "Defining multiple function signatures for a single implementation to provide better type safety based on input arguments.",
  },
  {
    id: "188",
    type: "flashcard",
    topic: "Generic Constraints",
    question: "What does `T extends U` mean in a generic?",
    answer:
      "It constrains `T` to only accept types that are assignable to `U`.",
  },
  {
    id: "189",
    type: "flashcard",
    topic: "Readonly Arrays",
    question:
      "What is the difference between `readonly T[]` and `ReadonlyArray<T>`?",
    answer:
      "They are equivalent. Both prevent mutation of the array, but `ReadonlyArray<T>` is preferred in type annotations.",
  },
  {
    id: "190",
    type: "flashcard",
    topic: "Utility Types",
    question: "What does `Required<T>` do?",
    answer:
      "It makes all properties in `T` required (removes optionality). Equivalent to `{ [K in keyof T]-?: T[K] }`.",
  },
  {
    id: "191",
    type: "flashcard",
    topic: "Utility Types",
    question: "What does `NonNullable<T>` do?",
    answer:
      "It removes `null` and `undefined` from `T`. Example: `NonNullable<string | null | undefined>` becomes `string`.",
  },
  {
    id: "192",
    type: "flashcard",
    topic: "Conditional Types",
    question:
      "What happens when a conditional type is distributed over a union?",
    answer:
      "It applies the conditional to each member of the union individually. Example: `(T extends string ? 1 : 2)` applied to `string | number` results in `1 | 2`.",
  },
  {
    id: "193",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminant property in a union?",
    answer:
      "A common literal property (like `kind: 'circle' | 'square'`) that helps TypeScript narrow the union by checking its value.",
  },
  {
    id: "194",
    type: "flashcard",
    topic: "Exhaustiveness Checks",
    question: "How can you ensure all cases in a union are handled?",
    answer:
      "Use a `never` type in the `default` or `else` branch to trigger an error when a case is unhandled.",
  },
  {
    id: "195",
    type: "flashcard",
    topic: "Function Types",
    question: "How do you type a function that returns another function?",
    answer: "Use higher-order function types. Example: `() => () => number`.",
  },
  {
    id: "196",
    type: "flashcard",
    topic: "Tuple Types",
    question: "How to allow a tuple of fixed start and variable length?",
    answer:
      "Use rest in tuples. Example: `[string, ...number[]]` means starts with string, then any number of numbers.",
  },
  {
    id: "197",
    type: "flashcard",
    topic: "Mapped Types",
    question: "How to remove `readonly` from all properties of a type?",
    answer:
      "Use `-readonly` modifier. Example: `{ -readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "198",
    type: "flashcard",
    topic: "Symbols",
    question: "Can you use `symbol` as a key in a type?",
    answer:
      "Yes, but it's only accessible via `Object.getOwnPropertySymbols`, and not indexable like string keys.",
  },
  {
    id: "199",
    type: "flashcard",
    topic: "Classes",
    question: "What does `private` modifier do in a class?",
    answer:
      "It restricts access to the property/method to only inside the class it is defined in.",
  },
  {
    id: "200",
    type: "flashcard",
    topic: "Class Inheritance",
    question: "How do you call a method from the parent class in TypeScript?",
    answer:
      "Use `super.methodName()`. Example: `super.sayHello()` inside a subclass.",
  },
  {
    id: "201",
    type: "flashcard",
    topic: "Mapped Types",
    question:
      "How do you create a mapped type that makes all properties of T readonly?",
    answer:
      "`{ readonly [K in keyof T]: T[K] }` creates a type where all properties of T are readonly.",
  },
  {
    id: "202",
    type: "flashcard",
    topic: "Type Compatibility",
    question: "What is structural typing in TypeScript?",
    answer:
      "Structural typing means that types are compatible if their structures match, regardless of their names.",
  },
  {
    id: "203",
    type: "flashcard",
    topic: "Function Types",
    question: "Can function types be assigned if they have fewer parameters?",
    answer:
      "Yes. A function with fewer parameters can be assigned to one expecting more (if extra parameters are unused).",
  },
  {
    id: "204",
    type: "flashcard",
    topic: "Conditional Types",
    question: "What does `T extends U ? X : Y` mean in TypeScript?",
    answer:
      "It's a conditional type that evaluates to X if T extends U, otherwise to Y.",
  },
  {
    id: "205",
    type: "flashcard",
    topic: "Generic Defaults",
    question: "How do you set a default type for a generic?",
    answer:
      "You can specify a default with `T = DefaultType`, like `function f<T = string>() {}`.",
  },
  {
    id: "206",
    type: "flashcard",
    topic: "Template Literal Types",
    question: "What is a template literal type in TypeScript?",
    answer:
      "It's a type formed using backticks and placeholders, like `` `hello ${string}` ``.",
  },
  {
    id: "207",
    type: "flashcard",
    topic: "Enums",
    question: "Are TypeScript enums available at runtime?",
    answer:
      "Yes, numeric enums are compiled to actual JavaScript objects and available at runtime.",
  },
  {
    id: "208",
    type: "flashcard",
    topic: "Tuple Types",
    question:
      "How can you represent a tuple with a variable number of elements?",
    answer: "You can use rest elements like `[string, ...number[]]`.",
  },
  {
    id: "209",
    type: "flashcard",
    topic: "Readonly Arrays",
    question:
      "What is the difference between `readonly string[]` and `ReadonlyArray<string>`?",
    answer: "They are equivalent; both define a read-only array of strings.",
  },
  {
    id: "210",
    type: "flashcard",
    topic: "Assertion Functions",
    question: "What is an assertion function in TypeScript?",
    answer:
      "A function that narrows types using `asserts` keyword, e.g., `function assert(condition: unknown): asserts condition is boolean`.",
  },
  {
    id: "211",
    type: "flashcard",
    topic: "Function Types",
    question: "How can you specify that a function returns `void`?",
    answer:
      "Use `(): void => { ... }` to indicate the function doesn’t return a value.",
  },
  {
    id: "212",
    type: "flashcard",
    topic: "Union Types",
    question: "How do union types work in TypeScript?",
    answer:
      "They allow a value to be one of several types: `type A = string | number`.",
  },
  {
    id: "213",
    type: "flashcard",
    topic: "Intersection Types",
    question: "What happens when you intersect incompatible types?",
    answer: "The result may be `never` if no value can satisfy both types.",
  },
  {
    id: "214",
    type: "flashcard",
    topic: "Conditional Types",
    question: "What does `Exclude<T, U>` do?",
    answer: "Removes from `T` all types that are assignable to `U`.",
  },
  {
    id: "215",
    type: "flashcard",
    topic: "Literal Inference",
    question: "What does `as const` do?",
    answer:
      "It narrows objects and arrays to their most specific literal types and makes properties readonly.",
  },
  {
    id: "216",
    type: "flashcard",
    topic: "Tuple Types",
    question: "How can you make a tuple of exactly 3 strings?",
    answer:
      "`[string, string, string]` defines a fixed-length tuple with 3 string elements.",
  },
  {
    id: "217",
    type: "flashcard",
    topic: "Type Aliases",
    question: "Can a type alias reference itself?",
    answer:
      "Yes, using recursion with interfaces or aliases: `type Node = { children: Node[] }`.",
  },
  {
    id: "218",
    type: "flashcard",
    topic: "Type Widening",
    question: "What is type widening?",
    answer:
      "It's the process where literal types are widened to more general types (e.g., `'hello'` to `string`).",
  },
  {
    id: "219",
    type: "flashcard",
    topic: "Readonly Utility",
    question: "What does `Readonly<T>` do?",
    answer: "It makes all properties of `T` immutable.",
  },
  {
    id: "220",
    type: "flashcard",
    topic: "Void vs. Undefined",
    question: "Is `void` the same as `undefined`?",
    answer:
      "`void` indicates the absence of a return value, usually used in function types. `undefined` is a value.",
  },
  {
    id: "221",
    type: "flashcard",
    topic: "Type Guards",
    question: "What is a user-defined type guard?",
    answer:
      "It's a function with a return type of `arg is Type`, used to narrow types manually.",
  },
  {
    id: "222",
    type: "flashcard",
    topic: "Mapped Types",
    question:
      "How do you create a mapped type that makes all properties optional?",
    answer:
      "`{ [K in keyof T]?: T[K] }` creates a mapped type with optional properties.",
  },
  {
    id: "223",
    type: "flashcard",
    topic: "Typeof Operator",
    question: "How is the `typeof` operator used in type queries?",
    answer:
      "You can extract the type of a value using `typeof value` in type annotations.",
  },
  {
    id: "224",
    type: "flashcard",
    topic: "Enums",
    question: "What is a const enum?",
    answer:
      "`const enum` allows complete inlining of enum values, reducing runtime code size.",
  },
  {
    id: "225",
    type: "flashcard",
    topic: "Optional Chaining",
    question: "What does `?.` do in TypeScript?",
    answer:
      "It safely accesses nested properties, returning `undefined` if any level is `null` or `undefined`.",
  },
  {
    id: "226",
    type: "flashcard",
    topic: "Nullish Coalescing",
    question: "What does `??` do?",
    answer:
      "Returns the right-hand side if the left-hand side is `null` or `undefined`.",
  },
  {
    id: "227",
    type: "flashcard",
    topic: "Index Signatures",
    question: "How do you define an object with dynamic string keys?",
    answer: "Use an index signature: `{ [key: string]: number }`.",
  },
  {
    id: "228",
    type: "flashcard",
    topic: "never Type",
    question: "What does the `never` type represent?",
    answer:
      "A value that never occurs — used for functions that throw or never return.",
  },
  {
    id: "229",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminant property?",
    answer:
      "A common property in union types (e.g., `kind`) used for narrowing via switch/case.",
  },
  {
    id: "230",
    type: "flashcard",
    topic: "Template Literal Types",
    question: "What are template literal types?",
    answer:
      "They allow building string types from other types: `` `Hello, ${string}` ``.",
  },
  {
    id: "231",
    type: "flashcard",
    topic: "Readonly Utility",
    question: "What does `Readonly<T>` do in TypeScript?",
    answer:
      "It makes all properties of type T immutable — `{ readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "232",
    type: "flashcard",
    topic: "Tuple Types",
    question: "How do tuple types differ from arrays in TypeScript?",
    answer:
      "Tuples define fixed-length, ordered types like `[string, number]`, while arrays are homogenous.",
  },
  {
    id: "233",
    type: "flashcard",
    topic: "Record Utility Type",
    question: "What does `Record<K, T>` represent?",
    answer: "An object type with keys of type K and values of type T.",
  },
  {
    id: "234",
    type: "flashcard",
    topic: "Pick Utility Type",
    question: "What does `Pick<T, K>` do?",
    answer:
      "Constructs a type by picking a subset of properties K from type T.",
  },
  {
    id: "235",
    type: "flashcard",
    topic: "Omit Utility Type",
    question: "What does `Omit<T, K>` do?",
    answer: "Creates a new type by excluding property keys K from T.",
  },
  {
    id: "236",
    type: "flashcard",
    topic: "ThisType Utility",
    question: "What is the purpose of `ThisType<T>`?",
    answer:
      "It provides a way to specify the type of `this` in an object literal or context.",
  },
  {
    id: "237",
    type: "flashcard",
    topic: "JSX and TSX",
    question: "What is the difference between `.tsx` and `.ts`?",
    answer: "`.tsx` allows JSX syntax (used in React), while `.ts` does not.",
  },
  {
    id: "238",
    type: "flashcard",
    topic: "Strict Mode",
    question: "What does `strict` mode enable in TypeScript?",
    answer:
      "It turns on all strict type-checking options like `noImplicitAny`, `strictNullChecks`, etc.",
  },
  {
    id: "239",
    type: "flashcard",
    topic: "any vs unknown",
    question: "What is the difference between `any` and `unknown`?",
    answer:
      "`unknown` is safer — you must narrow it before usage, while `any` disables type checking.",
  },
  {
    id: "240",
    type: "flashcard",
    topic: "keyof typeof",
    question: "What does `keyof typeof someObject` give you?",
    answer:
      "It gives you a union of the keys of the object, useful for dynamic key inference.",
  },
  {
    id: "241",
    type: "flashcard",
    topic: "Conditional Types",
    question: "How does conditional type distribution over unions work?",
    answer:
      "`T extends U ? X : Y` distributes over union types if `T` is a union. This is called distributive conditional types.",
  },
  {
    id: "242",
    type: "flashcard",
    topic: "Mapped Types",
    question: "What does `{ [K in keyof T]: T[K] }` mean?",
    answer:
      "It creates a new type with the same keys as `T` and values of corresponding types.",
  },
  {
    id: "243",
    type: "flashcard",
    topic: "Infer",
    question: "Can `infer` be used outside of a conditional type?",
    answer:
      "No. `infer` can only be used within conditional types, like `T extends infer U ? U : never`.",
  },
  {
    id: "244",
    type: "flashcard",
    topic: "Function Types",
    question: "How to type a function with a variable number of arguments?",
    answer:
      "Use rest parameters, e.g. `(…args: any[]) => void` or more specific like `(…args: [string, number]) => void`.",
  },
  {
    id: "245",
    type: "flashcard",
    topic: "Type Assertions",
    question: "What does the `as` keyword do in TypeScript?",
    answer:
      "It lets you assert the type of a value. For example: `const str = value as string`.",
  },
  {
    id: "246",
    type: "flashcard",
    topic: "Readonly Types",
    question: "How to make all properties in an object readonly?",
    answer: "Use `Readonly<T>`, e.g. `Readonly<{ name: string }>`.",
  },
  {
    id: "247",
    type: "flashcard",
    topic: "Key Remapping",
    question: "How do you rename keys in a mapped type?",
    answer: "By using the syntax `[K in keyof T as NewKey<K>]: …`.",
  },
  {
    id: "248",
    type: "flashcard",
    topic: "Void vs Undefined",
    question: "What is the difference between `void` and `undefined`?",
    answer:
      "`void` means a function returns nothing. `undefined` is a value. `void` is a broader type than `undefined`.",
  },
  {
    id: "249",
    type: "flashcard",
    topic: "any vs unknown",
    question: "What is the difference between `any` and `unknown`?",
    answer:
      "`any` disables all type checking. `unknown` requires type checking before usage.",
  },
  {
    id: "250",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminated union?",
    answer:
      "A union of objects that share a common literal property (the discriminant), e.g. `type = 'circle' | 'square'`, useful for narrowing.",
  },
  {
    id: "251",
    type: "flashcard",
    topic: "Type Predicates",
    question: "What is a type predicate in TypeScript?",
    answer:
      "It's a return type like `arg is SomeType` used in user-defined type guards to help the compiler narrow types.",
  },
  {
    id: "252",
    type: "flashcard",
    topic: "Literal Types",
    question: "What are literal types in TypeScript?",
    answer:
      "They are types that represent exact values, like `'success'`, `true`, or `42`.",
  },
  {
    id: "253",
    type: "flashcard",
    topic: "Tuple Types",
    question: "How do tuple types differ from arrays in TypeScript?",
    answer:
      "Tuples have fixed lengths and specific types at each index, while arrays are homogeneous.",
  },
  {
    id: "254",
    type: "flashcard",
    topic: "Default Type Parameters",
    question: "How do you set default generic types?",
    answer: "With `=`, e.g. `type Maybe<T = string> = T | null`.",
  },
  {
    id: "255",
    type: "flashcard",
    topic: "Optional Properties",
    question: "What does `?` mean on a property in an interface?",
    answer:
      "It marks the property as optional, meaning it may be `undefined` or not present.",
  },
  {
    id: "256",
    type: "flashcard",
    topic: "Interfaces vs Types",
    question: "What is a key difference between `interface` and `type`?",
    answer:
      "`interface` supports declaration merging; `type` does not, but it supports unions and intersections more broadly.",
  },
  {
    id: "257",
    type: "flashcard",
    topic: "Global Types",
    question: "How do you declare a global type in a TypeScript project?",
    answer:
      "Create a `.d.ts` file (e.g., `global.d.ts`) and declare types in the global scope.",
  },
  {
    id: "258",
    type: "flashcard",
    topic: "Mapped Types",
    question: "What does `-?` do in a mapped type?",
    answer:
      "It removes optionality: `{ [K in keyof T]-?: T[K] }` makes all props required.",
  },
  {
    id: "259",
    type: "flashcard",
    topic: "Exhaustive Checks",
    question: "How can TypeScript help enforce exhaustive switch cases?",
    answer:
      "Use a `never` type in the default case to ensure all variants are covered. If not, TypeScript will throw an error.",
  },
  {
    id: "260",
    type: "flashcard",
    topic: "Type Compatibility",
    question: "What is structural typing in TypeScript?",
    answer:
      "It means types are compatible if their shape matches, not their name.",
  },
  {
    id: "261",
    type: "flashcard",
    topic: "Readonly Arrays",
    question: "How do you declare a readonly array in TypeScript?",
    answer:
      "Use `readonly` modifier: `readonly number[]` or `ReadonlyArray<number>`.",
  },
  {
    id: "262",
    type: "flashcard",
    topic: "Overloads",
    question: "What are function overloads in TypeScript?",
    answer:
      "They allow multiple function type signatures for a single implementation to support different input types.",
  },
  {
    id: "263",
    type: "flashcard",
    topic: "This Parameters",
    question: "What is a `this` parameter in a function type?",
    answer:
      "It lets you specify the type of `this` explicitly in functions using `this: SomeType` as the first parameter.",
  },
  {
    id: "264",
    type: "flashcard",
    topic: "Literal Inference",
    question: "How does `as const` affect a variable's type?",
    answer:
      "`as const` makes the type as narrow as possible, turning objects/arrays into deeply readonly literal types.",
  },
  {
    id: "265",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "How do discriminated unions work in TypeScript?",
    answer:
      "They use a common `tag` field (e.g., `type`) to help the compiler narrow the correct type in a union.",
  },
  {
    id: "266",
    type: "flashcard",
    topic: "Conditional Types",
    question:
      "How do you check if a type is assignable to another in TypeScript?",
    answer: "Using conditional types like `T extends U ? A : B`.",
  },
  {
    id: "267",
    type: "flashcard",
    topic: "TSConfig",
    question: "What does the `strict` flag do in `tsconfig.json`?",
    answer:
      "It enables all strict type-checking options (`strictNullChecks`, `noImplicitAny`, etc.).",
  },
  {
    id: "268",
    type: "flashcard",
    topic: "Function Return Types",
    question: "Why would you explicitly type a function's return?",
    answer:
      "To prevent unintended inferences and improve readability, safety, and maintainability.",
  },
  {
    id: "269",
    type: "flashcard",
    topic: "Void vs Undefined",
    question:
      "What's the difference between `void` and `undefined` in TypeScript?",
    answer:
      "`void` means no value is expected to be returned; `undefined` is an actual value that can be returned.",
  },
  {
    id: "270",
    type: "flashcard",
    topic: "Ambient Declarations",
    question: "What are ambient declarations in TypeScript?",
    answer:
      "They declare types or values that exist elsewhere (e.g., in a JS file or globally), using `declare` keyword.",
  },
  {
    id: "271",
    type: "flashcard",
    topic: "Symbol",
    question: "What is `symbol` in TypeScript and when would you use it?",
    answer:
      "`symbol` is a primitive and unique value often used as object keys to avoid name collisions.",
  },
  {
    id: "272",
    type: "flashcard",
    topic: "Unique Symbol",
    question: "What does `unique symbol` mean in TypeScript?",
    answer:
      "It's a subtype of `symbol` that ensures a symbol is treated as a literal type and not just any symbol.",
  },
  {
    id: "273",
    type: "flashcard",
    topic: "String Literal Types",
    question: "What are string literal types used for?",
    answer:
      "They allow specific strings as valid values, helpful in unions: e.g., `'start' | 'stop' | 'pause'`.",
  },
  {
    id: "274",
    type: "flashcard",
    topic: "Type Compatibility",
    question: "What is structural typing in TypeScript?",
    answer:
      "Types are compatible if they have the same shape, regardless of explicit declarations (duck typing).",
  },
  {
    id: "275",
    type: "flashcard",
    topic: "Type Aliases vs Interfaces",
    question: "When should you use a type alias over an interface?",
    answer:
      "Use type aliases for unions, primitives, or tuples; interfaces for object shapes with extensions/implements.",
  },
  {
    id: "276",
    type: "flashcard",
    topic: "Omit vs Pick",
    question: "What is the difference between `Omit<T, K>` and `Pick<T, K>`?",
    answer:
      "`Omit` removes keys from a type, `Pick` selects only those keys to keep.",
  },
  {
    id: "277",
    type: "flashcard",
    topic: "Declaration Merging",
    question: "What is declaration merging in TypeScript?",
    answer:
      "When multiple declarations with the same name are automatically combined (e.g., interfaces, namespaces).",
  },
  {
    id: "278",
    type: "flashcard",
    topic: "Optional Parameters",
    question:
      "How do optional parameters differ from parameters with default values?",
    answer:
      "Optional parameters may be `undefined`, while default values assign a fallback even if `undefined` is passed.",
  },
  {
    id: "279",
    type: "flashcard",
    topic: "Exhaustive Checking",
    question: "How do you perform exhaustive checks with discriminated unions?",
    answer:
      "Use a `never` fallback in `switch`/`if` statements to ensure all union variants are handled.",
  },
  {
    id: "280",
    type: "flashcard",
    topic: "JS Doc",
    question: "How can JSDoc comments improve TypeScript code?",
    answer:
      "They provide metadata for tooling and improve type inference when using `@param`, `@returns`, and `@type`.",
  },
  {
    id: "281",
    type: "flashcard",
    topic: "Function Overloads",
    question: "What are function overloads in TypeScript?",
    answer:
      "They allow multiple function type signatures, enabling different parameter and return type combinations.",
  },
  {
    id: "282",
    type: "flashcard",
    topic: "Literal Inference",
    question: "What happens when you use `as const` in TypeScript?",
    answer:
      "It infers the narrowest possible types, turning values into readonly literals instead of general types.",
  },
  {
    id: "283",
    type: "flashcard",
    topic: "Readonly Tuple",
    question: "How do you define a readonly tuple in TypeScript?",
    answer:
      "Use `readonly` before the tuple type: `readonly [number, string]`.",
  },
  {
    id: "284",
    type: "flashcard",
    topic: "Recursive Types",
    question: "How do you define recursive types in TypeScript?",
    answer:
      "By referring to the type within itself, e.g., `type Tree<T> = T | { left: Tree<T>, right: Tree<T> }`.",
  },
  {
    id: "285",
    type: "flashcard",
    topic: "Mapped Types + Template Literals",
    question: "How can template literals be used with mapped types?",
    answer:
      "They can generate key names dynamically: `{ [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }`.",
  },
  {
    id: "286",
    type: "flashcard",
    topic: "Tuple Labels",
    question: "What are tuple labels and why are they useful?",
    answer:
      "Tuple labels improve readability: `[x: number, y: number]` still behaves like a regular tuple but is easier to understand.",
  },
  {
    id: "287",
    type: "flashcard",
    topic: "Type Predicates",
    question: "How does `x is Foo` help with type narrowing?",
    answer:
      "It tells the compiler that if the function returns `true`, then `x` must be of type `Foo`.",
  },
  {
    id: "288",
    type: "flashcard",
    topic: "Distributive Conditional Types",
    question: "When are conditional types distributive?",
    answer:
      "When the checked type is a naked type parameter: `T extends U ? X : Y` applies to each union member of `T`.",
  },
  {
    id: "289",
    type: "flashcard",
    topic: "Mapped Types with Modifiers",
    question: "How do you remove `readonly` from properties in a mapped type?",
    answer: "Use `-readonly` modifier: `{ -readonly [K in keyof T]: T[K] }`.",
  },
  {
    id: "290",
    type: "flashcard",
    topic: "Constructor Parameters",
    question: "How do you extract constructor parameter types from a class?",
    answer:
      "Use `ConstructorParameters<typeof MyClass>` to get a tuple of argument types.",
  },
  {
    id: "291",
    type: "flashcard",
    topic: "Mapped Types",
    question:
      "What does the following mapped type do? `{ [K in keyof T]: T[K] | null }`",
    answer:
      "It creates a new type where each property from T can also be null.",
  },
  {
    id: "292",
    type: "flashcard",
    topic: "Typeof Operator",
    question: "How is the `typeof` operator used in TypeScript type system?",
    answer:
      "It allows creating a type based on the type of a variable. Example: `type T = typeof someVar`.",
  },
  {
    id: "293",
    type: "flashcard",
    topic: "Indexed Access Types",
    question: "How do you get the type of a property `name` from type `User`?",
    answer: "Use `User['name']` to extract the type of the property.",
  },
  {
    id: "294",
    type: "flashcard",
    topic: "Discriminated Unions",
    question: "What is a discriminant in a discriminated union?",
    answer:
      "It's a shared literal property that distinguishes between union members, commonly a string literal field like `kind` or `type`.",
  },
  {
    id: "295",
    type: "flashcard",
    topic: "Function Types",
    question:
      "How do you define a function type with parameters and return type?",
    answer: "Example: `type Greet = (name: string) => string;`.",
  },
  {
    id: "296",
    type: "flashcard",
    topic: "Tuple Types",
    question:
      "How can you type a tuple with exactly two values: a string and a number?",
    answer: "`[string, number]`",
  },
  {
    id: "297",
    type: "flashcard",
    topic: "Readonly Arrays",
    question: "How do you define a readonly array of numbers?",
    answer: "Use `readonly number[]` or `ReadonlyArray<number>`.",
  },
  {
    id: "298",
    type: "flashcard",
    topic: "Void vs Undefined",
    question:
      "What’s the difference between `void` and `undefined` in return types?",
    answer:
      "`void` means a function returns nothing. `undefined` means it explicitly returns the value `undefined`.",
  },
  {
    id: "299",
    type: "flashcard",
    topic: "Conditional Types",
    question: "How can you create a type that excludes `null` from a type?",
    answer: "Use conditional type: `T extends null ? never : T`.",
  },
  {
    id: "300",
    type: "flashcard",
    topic: "Practice",
    question:
      "Why is it useful to master utility types, conditionals, and inference in TypeScript?",
    answer:
      "Because they allow creating highly flexible, safe, and expressive type definitions, especially for large codebases and libraries.",
  },
];
