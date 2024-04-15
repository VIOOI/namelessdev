## Beta version, not intended for production

Library for controlling the flow of displaying page elements.

## For

A component for drawing arrays. This component will add for you
element key, you can pass a function to define kye to props keys,
if you don't, it will take the index of the element.
It is also possible to pass an item that will be displayed if the
the array you passed to items is empty.

```tsx
type ForProps<T> = {
  items: T[];
  children: (item: T, index: number) => ReactNode;
  keys?: (item: T, index: number) => React.Key;
  empty?: ReactNode | (() => ReactNode) | React.FC;
};

<For
  items={[1, 2, 3, 4, 5]}
  keys={(item, index) => item * index}
  empty={<div>Array is Empty</div>}
>
  {(item) => <div>Element: {item}</div>}
</For>;
```

## Repeat

A simple component that repeats count once, it is also possible to display an item if count === 0

```tsx
type RepeatProps = {
  count: number;
  children: ReactNode | ((index: number) => ReactNode);
  empty?: ReactNode | (() => ReactNode);
};

<Repeat count={5}>
  {(index) => <p>Element {index}</p>}
</Repeat>

<Repeat count={0} empty={<p>There are no elements</p>}/>

```

## Show

Component for conditional drawing of children. It takes a condition in props when and draws children if it is true. If you need to draw another element if the condition is false, you can pass it to the props fallback, but for such cases it is better to use the If component.

```tsx
type ShowProps = {
  when: boolean;
  fallback?: ReactNode;
  children: ReactNode;
};

<Show when={isShow}>
  <h1>Hello User</h1>
</Show>;
```

## If

Also a conditional drawing component, but more designed to draw either one element or the other. It is based on the slots system from the [@namelessdev/slots](https://www.npmjs.com/package/@namelessdev/slots) library. It takes a condition in props when and two child elements that are slots true and false. it also comes with components that are these slots True and False or you can give a slot="true" attribute to the element or wrap it in a `<slot name="true">` tag. components that are not slots will not be rendered.

```tsx
type IfProps = {
  when: boolean;
  children: ReactElement | ReactElement[];
};

<If when={isAutorizate}>
	<True>You're logged in</True>
	<False>Please log in to your account</False>
</If>
<If when={isAutorizate}>
	<h1 slot="true">You're logged in</h1>
	<h1 slot="false">Please log in to your account</h1>
</If>
<If when={isAutorizate}>
	<slot name="true">You're logged in</slot>
	<slot name="false">Please log in to your account</slot>
</If>

```

## Switch / Match

This is analogous to switch/case from JS, but for drawing elements.
The Switch component is a wrapper that accepts Match components as children and an optional fallback attribute, which is an element if no element will be rendered. All Match with when === true will be rendered.
The Match component accepts the when attribute which is a condition and child elements.

```tsx
type SwitchProps = {
  children: ReactElement | ReactElement[];
  fallback: ReactElement;
};

type MatchProps = {
  when: boolean;
  children: ReactNode;
};

<Switch fallback={"You are not authorised"}>
  <Match when={user.role === "user"}>Your role as User</Match>
  <Match when={user.role === "creator"}>Your role as Creator</Match>
  <Match when={user.role === "admin"}>Your role as Admin</Match>
</Switch>;
```

## Deferred

A component that displays child elements after a timeout of milliseconds and can display placeholder until then

```tsx
type DeferredProps = {
  timeout: number;
  children: ReactNode;
  placeholder?: ReactNode;
};

<Deferred timeout={2500} placeholder={"Wait 2.5 seconds."}>
  It's been 2.5 seconds
</Deferred>;
```

## Dynamic

A component that can dynamically modify the tag or component it is. It accepts the tag or component to use and the props of that element

```tsx
const RedThing = () => <strong>Red Thing</strong>;
const GreenThing = () => <strong>Green Thing</strong>;
const BlueThing = () => <strong>Blue Thing</strong>;

const options = {
	red: RedThing,
	green: GreenThing,
	blue: BlueThing
}

<Dynamic component={options[selected]} />
<Dynamic component={options[selected]} props={{ className: "active" }} />
```
