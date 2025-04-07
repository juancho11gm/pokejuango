---
title: 'What the heck is CSR, SSR, SSG and ISR?'
excerpt: 'Server Side Rendering, Client Side Rendering, Static Site Generation and Incremental Static Regeneration explained'
coverImage: '/assets/blog/ssr-csr-ssg-isr/cover.jpg'
orientation: square
date: '2023-01-12'
author:
  name: Juan G
  picture: '/assets/me/profilepic.png'
ogImage:
  url: '/assets/blog/ssr-csr-ssg-isr/cover.jpg'
---

I've been struggling with CSR, SSR, SSG and ISG for a while. I worked with [Create React App](https://create-react-app.dev) before, but I felt overwhelmed with all the available terms when working with frameworks such as **NextJS**.

Now, after playing around with these concepts, I think I get them.

First of all, we are talking about different ways to render our web application. So, we need to take into account what are the differences between them when generating and serving the HTML to the browser.

I encourage you to try them on your own. The best way to notice how these alternatives work is by doing it yourself.

## Client Side Rendering

When you create a web application with **Create React App** you are working with Client Side Rendering. But what does it mean?

**Client Side Rendering** allows us to render the websites entirely in the browser using JavaScript.

So, first, the page is rendered in the browser and then the content is injected with JavaScript.

You can inspect the source code of the website with right-click. If you can't see the website content in the HTML file, it is injected by JavaScript after loading the page.

![Juango Blog](/assets/blog/ssr-csr-ssg-isr/csr-ss.png)
_Inspect the website and search for the content._

When navigating between pages, the CSR pages will load very fast since we don't have to wait for the **initial** markup.
However, the load state will take longer when fetching data with CSR. We will have a loading state while the data is fetched.
So, we have to wait until the request is finished to render all the content.

That data is fetched on **every** page request, so we will get the most updated one.

Because you only get the bare-bones in the HTML document without all the information, **Search Engine Optimization will suffer**.

Search Engines will crawl the markup for indexing the content. So probably you will get a **lower SEO** when working with CSR.

If SEO is important for your business, you can use libraries like [react-helmet](https://github.com/nfl/react-helmet) to manage the head tag information (title, meta tags, link tags...) or you can work hand in hand with SSR or SSG for **pre-rendering** as much information as possible.

Fetch and render the data using Client Side Rendering like this:

```js
// pages/csr.js
import { useEffect, useState } from 'react';

export default function CSR() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	// Fetches data from an API on the first render
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await fetch(
				'https://worldtimeapi.org/api/timezone/America/Bogota'
			);
			const data = await response.json();
			setData(data);
			setLoading(false);
		};

		fetchData();
	}, []);

	return <>{/* use data */}</>;
}
```

## Server Side Rendering

In contrast to **Client Side Rendering**, **Server Side Rendering** happens when the client creates a request to the web server and it is in charge of rendering the web pages at **runtime**. The web server sends the already-filled HTML to the client browser so the website can be displayed.

If you can see the website content in the HTML source code, it is injected by JavaScript after loading the page. Server Side Rendering is always slower than serving static content.

Usually, you need Server Side Rendering in these scenarios:

- SEO: Server Side Rendering can be better for SEO because search engines can easily index the web pages.
- Performance: The User Experience is improved because the webpage is ready to show its content as soon as it reaches the client. There is no _loading_ state while fetching the data (as it is for the CSR); however, there is a delay before rendering the content while the HTML is returned.
- Fresh Data: It is useful for pulling the most recent data (instead of older static files) when depending on the user interactions.
- For security purposes when managing user authentication.

Fetch and render the data using Server Side Rendering like this:

```js
// pages/ssr.js
export default function SSR({ data }) {
	return <>{/* use data */}</>;
}

export async function getServerSideProps() {
	const response = await fetch(
		'https://worldtimeapi.org/api/timezone/America/Bogota'
	);
	const data = await response.json();
	return { props: { data } };
}
```

## Static Site Generation

Static site generation pages are generated at a build time. That means the website can reuse (and reload) the whole page on each request.

For example, the **Next.js** framework pre-renders pages using Static Generation by default without fetching data.

SEO and Performance are valuable key points when working with Static Site Generation:

- SEO: The content is pre-rendered, so it will help search engines index the page easily.
- Performance: A single HTML file is needed and it is generated at build time. That means it can serve requests very **fast** because nothing needs to be generated on the fly.
- Fresh data: On the other hand, any changes to data require a full rebuild of the application.

Some tools used for SSG are Jekyll, Hugo, and Gatsby. The pre-built HTML, CSS and JavaScript files can be served by a CDN or a web server.

Fetch and render the data using Static Site Generation like this:

```js
// pages/ssg.js
export default function SSG({ data }) {
	return <>{/* use data */}</>;
}

export async function getStaticProps() {
	const response = await fetch(
		'https://worldtimeapi.org/api/timezone/America/Bogota'
	);
	const data = await response.json();
	return { props: { data } };
}
```

## Incremental Static Regeneration

Incremental Static Regeneration will update a pre-generated static site without regenerating the entire site.

It is a mix between SSG and SSR. The content is served statically, but at a certain time, the pages will rebuild and fetch the data from the API again.

It works very similarly to SSG but with a revalidation state that is based on the cache control of the HTTP header request.
That means before a certain time, it will reuse the cache data. After that, the data becomes stale and in the first request it will trigger a page rebuild. The second request after the trigger happens will see the new page with the updated data.

However, if no one visits the page while the time finishes, the page will not rebuild. So the data pulled by the users won't be always the latest, some users will still get the stale one.

The web crawlers will index the static content as usual but to maintain good SEO performance the incremental static regeneration process needs to update the sitemap and URLs, and also the metadata in the regenerated pages. So the content will be up to date for the search engines.

Fetch and render the data using Static Site Regeneration like this:

```js
// pages/isr.js
export default function ISR({ data }) {
	return <>{/* use data */}</>;
}

export async function getStaticProps() {
	const response = await fetch(
		'https://worldtimeapi.org/api/timezone/America/Bogota'
	);
	const data = await response.json();
	// Next.js will attempt to re-generate the page
	// when a request comes in at most once every 60 seconds.
	return { props: { data }, revalidate: 15 };
}
```

## Demo

You can check this demo and the codebase using each one of the approaches described above.

![Demo](/assets/blog/ssr-csr-ssg-isr/demo.png)
_Check this demo running: https://csr-ssr-ssg-ssr.vercel.app._

## Conclusion

You can use whatever way you want, according to your app needs. You can even use them together, so you can have different rendering approaches between pages.

Just take into account:

- Do you need the data to be fresh and refreshed?
- Will the website be available for Search Engines Indexing?
- Website Performance.
- What pieces of code need to be executed on the client or the server?

## References

I highly recommend this article where you can use a cheat sheet to choose between them: [How to choose between Next.js CSR, SSR, SSG, and ISR](https://theodorusclarence.com/blog/nextjs-fetch-usecase#cheatsheet).

- [GitHub codebase with an example](https://github.com/juancho11gm/csr-ssr-ssg-isr).
- [NextJS - Rendering](https://nextjs.org/learn/foundations/how-nextjs-works/rendering).
