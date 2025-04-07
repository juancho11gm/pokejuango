---
title: 'How to switch theme mode with TailwindCSS & Storybook'
excerpt: 'The most straightforward way to switch between theme modes'
coverImage: '/assets/blog/dark-mode-tailwind-storybook/cover.jpg'
orientation: square
date: '2023-06-01'
author:
  name: Juan G
  picture: '/assets/me/profilepic.png'
ogImage:
  url: '/assets/blog/dark-mode-tailwind-storybook/cover.jpg'
---

When working on a web application with Tailwind and Storybook you may want to add stories with the toggle theme feature for your components. This is a simple way to add it in a Vite + React Application.

## Create the project

For this example, you can run the following command to scaffold the project.

`npm create vite@latest my-project -- --template react`

You will need to fill in the prompts with your project information.

## Install TailwindCSS

Run the following commands to install the dependencies and init the TailwindCSS:

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

Add the file extension TailwindCSS should look for

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
};
```

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
	body {
		@apply dark:bg-black dark:text-white min-h-screen relative;
	}
}
```

## Install Storybook

Use the Storybook CLI to install it in a single command.

`npx storybook@latest init`

Now we need to add Tailwind to the Storybook project.

Install the dependencies:

`npm i -D @storybook/addon-styling postcss autoprefixer`

Add the **@storybook/addon-styling** addon to your **.storybook/main.js** file.

Now you can import the tailwind.css file into your **.storybook/preview.js** file.

Now, use classes in your components used by the stories.

```ts
// Button.tsx
export const Button = () => {
	return (
		<button className='bg-blue-500 dark:bg-pink-600 text-white p-4 rounded-md shadow-2xl'>
			Click me
		</button>
	);
};
```

```ts
// Button.stories.tsx
import type { Story, Meta } from '@storybook/react';
import { Button } from './Button';

const Story: Meta = {
	component: Button,
	title: 'Components/Button',
};

export default Story;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
```

## Add the Dark Mode Switcher

First, add the **darkMode** option to the **tailwind.config.js** file

```js
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	darkMode: ['class', '[data-mode="dark"]'],
};
```

Then add the **withThemeByDataAttribute** decorator to your storybook from @storybook/addon-styling.

```ts
// .storybook/preview.js
import { withThemeByDataAttribute } from '@storybook/addon-styling';

export const decorators = [
	withThemeByDataAttribute({
		themes: {
			light: 'light',
			dark: 'dark',
		},
		defaultTheme: 'light',
		attributeName: 'data-mode',
	}),
];
```

Enjoy.

![TailwindCSS and Storybook theme toggler](/assets/blog/dark-mode-tailwind-storybook/dark-mode-tailwind-storybook.gif)

## Docs

- [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite).
- [Integrate Tailwind CSS and Storybook](https://storybook.js.org/recipes/tailwindcss).
