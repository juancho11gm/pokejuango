---
title: 'AdventJS'
excerpt: 'Practice programming logic with JavaScript and TypeScript'
coverImage: '/assets/blog/adventjs/adventjs.jpg'
orientation: landscape
date: '2022-12-15'
author:
  name: Juan G
  picture: '/assets/me/profilepic.png'
ogImage:
  url: '/assets/blog/adventjs/adventjs.jpg'
---

AdventJS is a code challenge hosted by [adventjs](https://adventjs.dev/es). In the online platform, you will solve daily programming challenges that can be solved using JavaScript and TypeScript.

Each day in December, a new challenge is released. Each one of the challenges has a score based on cognitive complexity and execution speed.

This initiative is led by [MiduDev](https://midu.dev/).

## Example

**Challenge #8**

Some electric sleds have broken down and the elves are looking for spare parts to fix them, but they are not sure if the parts they have are valid.

The spare parts are strings and the mechanic Elfon Masc has said that a spare part is valid if the part can be a palindrome after removing, at most, one character.

A palindrome is a word or phrase that reads the same from left to right as it does from right to left.

Our function should return a boolean that indicates whether the spare part is valid or not with that rule:

```js
checkPart('uwu'); // true
// "uwu" is a palindrome without removing any character

checkPart('miidim'); // true
// "miidim" can be a palindrome after removing the first "i"

checkPart('midu'); // false
// "midu" cannot be a palindrome after removing a character
```

### Solution

```ts
import assert from 'assert';

function checkPart(part: string) {
	// 1. Convert the string into an array.
	// 2. Use some for validating the palindrome for any cropped string.
	return [...part].some((_, i, arr) => {
		// 3. Remove one letter by filtering its index.
		let croppedPart = arr.filter((_, j) => i != j);
		// 4. Check if it is a palindrome.
		return croppedPart.join('') == croppedPart.reverse().join('');
	});
}

try {
	assert.equal(checkPart('uwu'), true);
	assert.equal(checkPart('miidim'), true);
	assert.equal(checkPart('midu'), false);
} catch (error) {
	console.log(error);
}
```

Score: 200 points.

## Follow my solutions

In the following [GitHub repository](https://github.com/juancho11gm/adventjs) you will find the solutions to the 2021 and 2022 challenges I've worked on.

I encourage you to complete the challenge.

Merry Christmas 🎄
