---
title: 'Immutability in JavaScript'
excerpt: 'Why should we use immutability when coding'
coverImage: '/assets/blog/immutability/cover.jpg'
orientation: square
date: '2023-05-01'
author:
  name: Juan G
  picture: '/assets/me/profilepic.png'
ogImage:
  url: '/assets/blog/immutability/cover.jpg'
---

## What are Mutability and Immutability

In JavaScript, objects and arrays are mutable by default but the primitive values are immutable. But what does that mean?

Immutability refers to the object's properties that cannot be changed once it has been created. If you want to change its content, you should create an entirely new value. Let's check some code snippets.
Immutability allows us to ensure that the data remains consistent. The state changes of other modules should not affect unrelated data. When working with Arrays and Objects is our responsibility to avoid unexpected side effects.

## How to solve it

There are several ways to implement immutability in JavaScript, but you will have trade-offs when selecting each one of these options. That selection will depend on the use case.

**Object.freeze()**

Object.freeze prevents the modification of an object by making it immutable.
Once an object is frozen, you cannot add, remove, or modify its properties.

```js
const animal = Object.freeze({ name: 'Coco', age: 2 });
const animalCopy = animal;
animalCopy.name = 'Firulais';
console.log(animal); // { name: 'Coco', age: 2 }
console.log(animalCopy); // { name: 'Coco', age: 2 }
```

**Object.assign()**

Object.assign is a built-in method that is used to copy the values of all enumerable own properties from one or more source objects to a target object.

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }
```

Object.assign can be used to create a new object with updated properties while preserving the immutability of the original object. This is because Object.assign returns a new object, leaving the original object unchanged.

```js
const originalObject = { a: 1, b: 2 };
const newObject = Object.assign({}, originalObject, { b: 3 });
console.log(originalObject); // { a: 1, b: 2 }
console.log(newObject); // { a: 1, b: 3 }
```

Object.assign creates a shallow copy, which means that does not provide a deep copy of nested objects, so the changes made to the nested object will still be reflected in both the original and copied object.

**Spread Operator**

The spread operator `(...)` allows an iterable (such as an array or string) to be expanded into multiple elements or copied into a new data structure.

It can be used to create a shallow copy without modifying the original data structure.

```js
const originalObject = { a: 1, b: 2 };
const newObject = { ...originalObject, c: 3 };
console.log(originalObject); // { a: 1, b: 2 }
console.log(newObject); // { a: 1, b: 2, c: 3 }
```

**Structured Cloned**

The structuredClone() method creates a deep clone of a given value using the structured clone algorithm.

```js
const originalObject = {
	a: 1,
	b: {
		c: 2,
	},
};

const clonedObject = structuredClone(originalObject);

console.log(originalObject); // { a: 1, b: { c: 2 } }
console.log(clonedObject); // { a: 1, b: { c: 2 } }

clonedObject.b.c = 3;

console.log(originalObject); // { a: 1, b: { c: 2 } }
console.log(clonedObject); // { a: 1, b: { c: 3 } }
```

Structured clone creates a completely new object with the same properties and values as the original object.
Since the new object is a deep copy, any changes made to the new object will not affect the original object, and vice versa.

**External Libraries**

There are several external libraries that can be used for immutability in JavaScript, including:

- Immutable.js.
- Immer.js.
- Mori.

These libraries provide additional functionality for creating and manipulating immutable data structures in JavaScript. You should use them when you need to work with complex data structures that require frequent updates, and immutability. These libraries can also be useful in applications where performance is important, as they are optimized for working with immutable data structures efficiently.

However, it's important to note that using these libraries can add additional complexity and overhead to your code, so it's important to evaluate whether the benefits of immutability outweigh the costs in your specific use case.

## Conclusion

Immutability is an important concept in programming, particularly in JavaScript. Understanding mutability is critical for writing efficient and maintainable code, and can help prevent bugs and unintended consequences in your programs.

By default, objects in JavaScript are mutable, this mutability can lead to unexpected behavior and bugs in your code, particularly when working with complex objects or shared state.

By leveraging immutability in your programming, you can create more reliable and predictable code, leading to more stable and successful applications.

## References

- [Why Mutation Can Be Scary](https://alistapart.com/article/why-mutation-can-be-scary/)
