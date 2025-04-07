---
title: 'Use this awesome custom hook'
excerpt: 'This custom hook will help you when fetching data'
coverImage: '/assets/blog/fetch-custom-hook/cover.jpg'
orientation: square
date: '2023-01-17'
author:
  name: Juan G
  picture: '/assets/me/profilepic.png'
ogImage:
  url: '/assets/blog/fetch-custom-hook/cover.jpg'
---

In the last article, I talked about an alternative that can help when fetching data in React projects: [SWR](https://www.juango.dev/). It is very helpful for using the cache validation strategy for performance reasons.

Today I'll share a custom hook that I found useful for fetching data, managing the request status and handling errors in a very simple way. This approach may need to be refactored according to the project's needs.

First, an abstraction for fetching the data is needed. The error handling may vary, for example, if you want to grab the message or the details returned by the API.

```tsx
async function fetchData(url: string, options: RequestInit = {}) {
	const response = await fetch(url, options);
	const data = await response.json();
	if (response.ok) return data;
	else throw new Error(`${response.statusText}. ${data.detail || ''}`);
}
```

Second, when fetching data the component will have the following states:

```tsx
export enum FETCH_STATUS {
	LOADING = 'loading',
	ERROR = 'error',
	SUCCESS = 'success',
	IDLE = 'idle', // inactive,
}
```

Third, let's create the custom hook. It needs the endpoint and the options that will be passed to the fetch function.
Here we will grab the data, the status based on the request phase and the errors if there are troubles when interacting with the API. It will pull the data the first time the component renders.

```tsx
const useData = <T,>(endpoint: string, options: RequestInit = {}) => {
	const [data, setData] = React.useState({} as T);
	const [error, setError] = React.useState('');
	const [status, setStatus] = React.useState(FETCH_STATUS.IDLE);

	const fetchAPI = async () => {
		try {
			setStatus(FETCH_STATUS.LOADING);
			const data = await fetchData(endpoint, options);
			setData(data);
			setStatus(FETCH_STATUS.SUCCESS);
		} catch (error) {
			setError((error as Error).message);
			setStatus(FETCH_STATUS.ERROR);
		}
	};

	React.useEffect(() => {
		fetchAPI();
	}, []);

	return {
		data,
		error,
		status,
	};
};
```

Last but not least, the component needs to use the hook.

- If there is no data, the component won't be rendered.
- If there are errors, the app will display the response status message.
- If the request is loading a Spinner or a Loading message can be rendered.
- Finally, the data is pulled and rendered within the component.

```tsx
const MyApp = () => {
	const { data, status, error } = useData<PokemonResponseI>(
		`https://pokeapi.co/api/v2/pokemon`
	);

	if (status === FETCH_STATUS.IDLE) return null;
	if (status === FETCH_STATUS.LOADING) return <p>Loading...</p>;
	if (error) return <p>Error... {error}</p>;

	return (
		<ul>
			{data.results.map((pokemon) => (
				<li key={pokemon.name}>{pokemon.name}</li>
			))}
		</ul>
	);
};
```

Please adapt this abstraction according to your needs. I suggest creating a boundary for grabbing the errors when thrown. So the details can be presented, not only the HTTP error status.

[Check out the complete example](https://gist.github.com/juancho11gm/33eebc1c1d5e845712e4e6748120350d).
