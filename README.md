# Sobre

estudo do uso de server side rendering (SSR) em aplicações feitas com o vite


## JSX se torna JS. como?
### Exemplo básico
```js
// transpilador
const babel = require("@babel/core");
const presetReact = require("@babel/preset-react");

const jsxCode = `
    const App = () => (
        <div>
            <h1>Hello</h1>
            <p>SolidJS</p>
        </div>
    )
`;

const output = babel.transformSync(jsxCode, {
  presets: [presetReact],
});

console.log(output.code);
```

### Output
```js
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
//import { jsxs } from "solid-js/h";

const App = () => (
    jsxs("div", {
        children: [
            jsx("h1", { children: "Hello" }),
            jsx("p", { children: "SolidJS" }),
        ],
    });
)
```