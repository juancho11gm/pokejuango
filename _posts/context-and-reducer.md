---
title: 'UseContext and UseReducer together'
excerpt: 'React Context API and useReducer implemented'
coverImage: '/assets/blog/context-reducer/cover.jpg'
orientation: landscape
date: '2023-02-10'
author:
  name: Juan G
  picture: '/assets/me/profilepic.png'
ogImage:
  url: '/assets/blog/context-reducer/cover.jpg'
---

If you are a JavaScript developer probably you've heard about Redux. Managing the state is a frequent use case where JavaScript developers tend to use a library to make it easier.
Redux is a good alternative when your application becomes much more larger and complex. Meanwhile, according to the project requirements and constraints, if it stays small and less complex, you can group **useContext** and **useReducer** React Hooks together.

## What is Context

The React team introduced the Context API for accessing the state from a general context in your components, without passing props down manually.
Is recommended to use the Context API when your components, at different nesting levels, need to use a global state.

The scenario when the props are passed down through multiple components is usually known as Drop Drilling. It can be solved by using Component Composition (Breaking down Components into smaller and independent pieces) or by adding the Context API.

```jsx
// Create the context with a Default Value
const MyContext = React.createContext(null);

export const useCustomContext = () => {
	const contextValue = useContext(MyContext);
	if (contextValue === null) {
		throw Error('Context has not been Provided!');
	}
	return contextValue;
};

function App() {
	const [count, setCount] = useState(0);

	return (
		<MyContext.Provider value={{ state: { count }, setCount }}>
			<Counter />
			<MyTextComponent />
		</MyContext.Provider>
	);
}

function Counter() {
	const { state, setCount } = useCustomContext();
	return (
		<div>
			<button onClick={() => setCount(state.count + 1)}>+</button>
			<button onClick={() => setCount(state.count - 1)}>-</button>
		</div>
	);
}

function MyTextComponent() {
	return <Text />;
}

function Text() {
	// Use the context in inner componets
	const { state } = useCustomContext();
	return <h1>{state.count}</h1>;
}
```

## What is useReducer

The **useReducer** was introduced by the React team to manage state changes through predefined actions. It can handle complex state updates through predictable operations.

Your application data flow will be easier to understand, and you only need to use React hooks.

```jsx
// The actions become more predictable, and immutability is the key
// for avoiding side state updates.
function reducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + 1 };
		case 'DECREMENT':
			return { count: state.count - 1 };
		default:
			return state;
	}
}

export function ReducerComponent() {
	// Through the dispatch function the action types are triggered.
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
		</>
	);
}
```

## Use them together

Let's implement a solution with both hooks for a React Application that needs to share the state management through different components.
Example with Typescript:

```tsx
export interface AppStateI {
	count: number;
}
interface ContextProps {
	state: AppStateI;
	dispatch: Dispatch<ActionI>;
}

const MyContext = createContext<ContextProps | null>(null);

export const useCustomContext = (): ContextProps => {
	const contextValue = useContext(MyContext);
	if (contextValue === null) {
		throw Error('Context has not been Provided!');
	}
	return contextValue;
};

function App() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<MyContext.Provider value={{ state, dispatch }}>
			<Counter />
		</MyContext.Provider>
	);
}

export function Counter() {
	const { state, dispatch } = useCustomContext();
	return (
		<>
			Count: {state.count}
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
		</>
	);
}
```

## Conclusion

By using Reducer and Context API together you will have advantages for managing the app state:

- Easier to understand, maintain and debug.
- Centralized state management.
- Reusability and decoupling.
- Avoid unnecessary renders.

[GitHub Code](https://github.com/juancho11gm/context-reducer).
