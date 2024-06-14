# Flexile working project

This is an exploration of what Flexile could feel like with more intention into fluidity.

Specifically of note:

- The `PillTabs` component animates a puck between the active tab
- Layout elements that have expected size changes due to conditional content, are wrapped in an `ExpandableSection` component that cleanly animates between states.
- In the sidebar is a callout of an action we'd like to emphasize in Flexile — collaborating with others whether that be hiring a contractor or working for a company. This empty state is meant to exist if there is only one company in the sidebar, and has a subtle svg animation with a bit of humor.

![Screenshot of the exploration](https://github.com/KenzoBenzo/flexile-working-project/assets/32865577/28df461e-c207-4709-b5d2-aada2a109c20)


## Commands

This project uses a [nuxt.js](https://nuxt.com/) starter, and [tailwind-css](https://tailwindcss.com/).

Install the dependencies:

```bash
pnpm install
```

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```
