# @accurat/event-utils

> High order functions to use in React's JSX when working with events

The objective of these functions is to reduce the boilerplate code when handling events in react, and to wire up the pure state setters directly to the component.


## Install

```
yarn add @accurat/event-utils
```


## Usage

Given a basic and functional state setter in react
```js
setName = (name) => {
  this.setState({ name })
}
```

or the equivalent in mobx-state-tree
```js
setName(name) {
  self.name = name
}
```

with `@accurat/event-utils` you can use the setter directly on the JSX component:


```js
import { eventValueExtractor } from '@accurat/event-utils'

// ...

<input value={name} onChange={eventValueExtractor(setName)} />
```

Another common use case is with links and custom routing:

```js
import { preventingDefault } from '@accurat/event-utils'

// ...

<a href={href} onClick={preventingDefault(gotoPage)} />
```

Those functions use the powers of **functional programming** 🌪, so you can combine them!

```js
import { preventingDefault, replaceArguments } from '@accurat/event-utils'

/// ...

<div>
  {options.map((option, i) =>
    <a
      href=""
      key={i}
      onClick={preventingDefault(replaceArguments(setName, option))}
    >
      {option}
    </a>
  )}
</div>

```


## API

The available functions are:
- **preventingDefault(fn)**
- **stoppingPropagation(fn)**
- **eventValueExtractor(fn)**
- **eventTargetExtractor(fn)**
- **addArguments(fn, ...args)**
- **replaceArguments(fn, ...args)** (similar to `lodash.partial`)

If the names aren't self-explanatory enough, you can check out [the source code](https://github.com/accurat/event-utils/blob/master/index.js), the functions are really simple and straightforward.


_Note that react also supports passing `null` to the event binding other than a function, so you will be also able to do_
```js
<a href="" onClick={preventingDefault(this.props.onClick)} />
```
_allowing the component to receive `null` as the `onClick` prop, thanks to the line_
```js
if (fn === null) return null
```
