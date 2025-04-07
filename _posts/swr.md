---
title: 'Stale While Revalidate'
excerpt: 'HTTP cache strategy at your fingertips'
coverImage: '/assets/blog/swr/cover.jpg'
orientation: square
date: '2023-01-13'
author:
  name: Juan G
  picture: '/assets/me/profilepic.png'
ogImage:
  url: '/assets/blog/swr/cover.jpg'
---

## Stale While Revalidate (SWR)

Stale While Revalidate was created to improve the performance of the websites when fetching data. It is a cache strategy that loads a stale version of the resources and you can use it as a library of React Hooks.

SWR works thanks to the [HTTP RFC 5861](https://www.rfc-editor.org/rfc/rfc5861) caching extension because it allows developers to set the time a cache should use a stale response while simultaneously revalidating the fresh data with the origin server. It helps the website's performance because the client does not wait for the server's response. This configuration is specified in the Cache-Control header of the HTTP response.

In a nutshell, SWR:

1. Get the **stale** data from the cache.
2. **Revalidates** the data.
3. Comes with up-to-date data.

SWR was created by the team behind Vercel and NextJS.

### How to use it

I'll use the SWR with [REST Countries API](https://restcountries.com/) in a React Component.

```jsx
import useSWR from 'swr';
import './App.css';

// In charge of returning the data. Native fetch or Axios can be used.
const fetcher = (...args) => fetch(...args).then((data) => data.json());

function App() {
	// Destructure the resources, the error and isLoading state.
	// We pass the API endpoint as the key and the fetcher function as parameters.
	// useSWR is a React Hook.
	const {
		data: countries,
		error,
		isLoading,
	} = useSWR('https://restcountries.com/v3.1/all', fetcher);

	if (error) return <div>Failed to load...</div>;
	if (isLoading) return <div>Loading...</div>;

	return (
		<div className='App'>
			<h1 className='countries-title'>Countries API</h1>
			<Countries countries={countries} />
		</div>
	);
}
```

One of the features of SWR is the **Revalidation on focus**. If the user blurs the window and comes back, it will fetch the data again. You can test it by inspecting the network tab in the browser dev tools, clicking outside the window and clicking within the project again.

![SWR first request](/assets/blog/swr/swr-network-1.gif)
_The data is fetched once the user comes back._

You can remove this option by sending additional configurations:

```js
const {
	data: countries,
	error,
	isLoading,
} = useSWR('https://restcountries.com/v3.1/all', fetcher, {
	revalidateOnFocus: false,
});
```

### Mutation

You can mutate any key by using the **mutate** API.

```jsx
import { mutate } from 'swr';

function App() {
	// You can call mutate to revalidate new data in any key
	mutate(key, data, options);
}
```

### Pagination

We can create a custom Page that will use the **useSWR** hook and will display the data.

```jsx
// In charge of returning the data. Native fetch or Axios can be used.
const fetcher = (...args) => fetch(...args).then((data) => data.json());

function StarWarsPage({ index }) {
	const { data, error, isLoading } = useSWR(
		`https://swapi.dev/api/people/?page=${index}`,
		fetcher
	);

	if (error) return <div className='centered'>Failed to load...</div>;
	if (isLoading) return <div className='centered'>Loading...</div>;

	return (
		<ul className='characters'>
			{data.results.map((item) => (
				<li key={item.name} className='character'>
					{item.name}
				</li>
			))}
		</ul>
	);
}
```

The magic happens in the following abstraction, where we preload the data on the previous page.

```jsx
function App() {
	return <StarWars Page={StarWarsPage} />;
}

function StarWars({ Page }) {
	const [pageIndex, setPageIndex] = useState(1);
	return (
		<div>
			{/* We could use whatever paginated component */}
			<Page index={pageIndex} />
			{/* Because of SWR's cache, we get the benefit to preload the next page */}
			<div style={{ display: 'none' }}>
				<Page index={pageIndex + 1} />
			</div>
			<div className='button-container'>
				<button
					className='button'
					onClick={() => setPageIndex(pageIndex - 1)}
					disabled={pageIndex === 1}
				>
					Previous
				</button>
				<button className='button' onClick={() => setPageIndex(pageIndex + 1)}>
					Next
				</button>
			</div>
		</div>
	);
}
```

![SWR pagination](/assets/blog/swr/swr-pagination.gif)
_The next page's data is pre-fetched._

### Conclusion

SWR hook is a powerful tool for performance issues when working with React Data Fetching.
It provides a lot of alternatives when working with cache, pagination, prefetching, SSG & SSR, mutation & revalidation, among others.

### Resources

- [SWR npm](https://www.npmjs.com/package/swr)
- [SWR API](https://swr.vercel.app/docs/api)
