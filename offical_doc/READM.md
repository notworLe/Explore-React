# React

## Component

A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

Start a upppercase letter

## Installation

```bash
npx create-vite@latest src --template react
cd src
npm install
npm run dev
```

## JSX tag

Java Scripts XML

Your component also can’t return multiple JSX tags. Must to wrap by <div> or empty <>

## Display

```jsx
const game = {
  name: "Dragon ball legend",
  rate: 4.5,
  content: "Game which the main is fuking bad",
};

return (
    <p>{game.name}<p/>
)
```

## object

### map

```jsx
const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const listItems = products.map(pro =>
    <li key={pro.id}>
        {pro.title}
    <li/>
)
return (
    <ul>{listItems}<ul/>
)
```

## state

**Import**: `import { useState } from 'react'`

```jsx
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
```

- `count` variable is showed for current count
- `setCount`: is a method to set value of count

## Hook

- Can write
- Call on top of inside a components
