# JavaScript Coverage Profiler

This is a homework assignment, and the goal of this assignment is to create a
simple **JavaScript coverage profiler** that measures the function, statement,
and branch coverage of a given JavaScript code.

It utilizes the [`acorn`](https://github.com/acornjs/acorn) library to parse the
JavaScript code and the [`astring`](https://github.com/davidbonnet/astring)
library to generate the instrumented JavaScript code.

We recommend you to use [`acorn-walk`](https://www.npmjs.com/package/acorn-walk)
to traverse the AST (Abstract Syntax Tree) of the JavaScript code generated by
the `acorn` library.

Please refer to the following documents for more information:
* [Type Definitions for `acorn`](https://github.com/acornjs/acorn/blob/master/acorn/src/acorn.d.ts)
* [Documentation for `acorn-walk` documentation](https://github.com/acornjs/acorn/tree/master/acorn-walk)
* [AST Explorer](https://astexplorer.net/)

> [!NOTE]
> While we recommend you use this template to implement the coverage profiler,
> you can implement your own coverage profiler in any programming language, such
> as Python, Java, or C++, from scratch without using it. However, you need to
> provide instructions on how to build and execute your coverage profiler, and
> it should produce the same coverage results as the expected output of this
> template.

**Table of Contents**
* [Setup](#setup)
  + [Requirements](#requirements)
  + [Installation](#installation)
  + [Building](#building)
  + [Running](#running)
* [Implementation](#implementation)
  + [Function Coverage](#function-coverage)
  + [Statement Coverage:](#statement-coverage-)
  + [Branch Coverage](#branch-coverage)
* [Testing](#testing)
  + [Examples](#examples)


## Setup

### Requirements

| #   | Tool    | Version    |
| --- | ------- | ---------- |
| 1   | Node.js | >= 18.15.0 |
| 2   | npm     | >= 9.8.1   |


### Installation

```bash
npm install && npm run build
```


### Building

When you implement the missing parts, you can **build the project** using the
following command in the terminal:

```bash
npm run build
```

For **watching the changes**, you can use the following command to build the
project automatically:

```bash
npm run build:watch
```


### Running

**After building the project**, you can **run the project** using the
[`./js-cov`](./js-cov) executable in the project root directory.
```bash
./js-cov
```
The `./js-cov` executable provides the following help message:
```bash
Usage: ./js-cov <command> [options]

Commands:
  ./js-cov instrument  Instrument the target JS file
  ./js-cov coverage    Calculate the coverage

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]

Examples:
  ./js-cov instrument target.js           Instrument the target JS file
  ./js-cov coverage target.js input.json  Calculate the coverage
```

In addition, you can directly **run the project without building** it as follows:
```bash
npm run start
```

Similarly, for **watching the changes**, you can use the following command to
run the project automatically without building it:

```bash
npm run start:watch
```

For example, you can calculate the coverage of the
[`example/sort.js`](./example/sort.js) JavaScript file with the
[`example/sort.json`](./example/sort.json) input file:

```bash
npm run start coverage example/sort.js example/sort.json
```
Then, it should produce the following output:

```bash
> js-cov@1.0.0 start
> ts-node src coverage example/sort.js example/sort.json

[INFO ] Calculating the coverage...
[INFO ] The target file is `example/sort.js`.
[INFO ] The input file is `example/sort.json`.
Modified: function sort(array) {
    __cov__.func.add(0);
    __cov__.stmt.add(0);
    for (let i = (__cov__.stmt.add(1), 0); i < array.length; i++) {
        let min = (__cov__.stmt.add(2), i);
        __cov__.stmt.add(3);
        for (let j = (__cov__.stmt.add(4), i + 1); j < array.length; j++) {
            __cov__.stmt.add(5);
            if (array[min] > array[j]) {
                __cov__.branch.add(0);
                __cov__.stmt.add(6);
                min = j;
            } else {
                __cov__.branch.add(1);
            }
        }
        __cov__.stmt.add(7);
        if (min !== i) {
            __cov__.branch.add(2);
            let tmp = (__cov__.stmt.add(8), array[i]);
            __cov__.stmt.add(9);
            array[i] = array[min];
            __cov__.stmt.add(10);
            array[min] = tmp;
        } else {
            __cov__.branch.add(3);
        }
    }
    __cov__.stmt.add(11);
    return array;
}
Coverage:
- func: 1/1 (100.00%)
      * 0: 1:0-16:2
- stmt: 8/12 (66.67%)
      * 0: 2:3-14:4
      * 1: 2:16-2:17
      * 2: 3:15-3:16
      * 3: 4:5-8:6
      * 4: 4:18-4:23
      * 5: 5:7-7:8
        6: 6:9-6:17
      * 7: 9:5-13:6
        8: 10:17-10:25
        9: 11:7-11:29
        10: 12:7-12:24
      * 11: 15:3-15:16
- branch: 2/4 (50.00%)
        0: 5:34-7:8
      * 1: 7:8-7:8
        2: 9:20-13:6
      * 3: 13:6-13:6
```

> [!WARNING]
> Please note that it does not produce the above expected output since the
> implementation is missing. You need to implement the missing parts to get the
> expected output.


## Implementation

**Please implement the missing parts** (denoted by `todo()` functions) in the
[`src/coverage.ts`](./src/coverage.ts) file, which contains the `Coverage`
class, which is responsible for calculating the function, statement, and branch
coverage of a given JavaScript code.

The **goal** of this project to **instrument** the given JavaScript code and
measure the function, statement, and branch coverage of the given JavaScript
code by considering the following elements:


### Function Coverage

1. `Function`

   > For example,
   > ```javascript
   > function add(a, b) { ... }
   > ```
   > should be instrumented as
   > ```javascript
   > function add(a, b) { __cov__.func.add(0); ... }
   > ```


### Statement Coverage:

1. `Statement` but not `Declaration`

   > For example,
   > ```javascript
   > return a + b;
   > ```
   > should be instrumented as
   > ```javascript
   > __cov__.stmt.add(0);
   > return a + b;
   > ```

1. `Expression` in the `body` field of the `Function`

   > For example,
   > ```javascript
   > (a, b) => a + b;
   > ```
   > should be instrumented as
   > ```javascript
   > (a, b) => { __cov__.stmt.add(0); return a + b; };
   > ```

1. `Expression` in the `init` field of the `VariableDeclarator`

   > For example,
   > ```javascript
   > let a = 1;
   > ```
   > should be instrumented as
   > ```javascript
   > let a = (__cov__.stmt.add(0), 1);
   > ```

1. `Expression` in the `right` field of the `AssignmentPattern`

   > For example,
   > ```javascript
   > var { x = 1, y, z } = ...;
   > ```
   > should be instrumented as
   > ```javascript
   > var { x = (__cov__.stmt.add(0), 1), y, z } = ...;
   > ```


### Branch Coverage

1. `IfStatement`

   > For example,
   > ```javascript
   > if (a > b) { ... }
   > else { ... }
   > ```
   > should be instrumented as
   > ```javascript
   > if (a > b) { __cov__.branch.add(0); ... }
   > else { __cov__.branch.add(1); ... }
   > ```

1. `ConditionalExpression`

   > For example,
   > ```javascript
   > a > b ? c : d
   > ```
   > should be instrumented as
   > ```javascript
   > a > b ? (__cov__.branch.add(0), c) : (__cov__.branch.add(1), d)
   > ```

1. `SwitchCase` in `SwitchStatement`

   > For example,
   > ```javascript
   > switch (a) {
   >   case 1: ...
   >   case 2: ...
   >   default: ...
   > }
   > ```
   > should be instrumented as
   > ```javascript
   > switch (a) {
   >   case 1: __cov__.branch.add(0); ...
   >   case 2: __cov__.branch.add(1); ...
   >   default: __cov__.branch.add(2); ...
   > }
   > ```

1. **Each Clause** in `LogicalExpression`

   > For example,
   > ```javascript
   > (
   >    (b || b) ||
   >    (b && b) &&
   >    (b ?? b)
   > ) ?? !b
   > ```
   > should be instrumented as
   > ```javascript
   > (
   >   ((__cov__.branch.add(0), b) || (__cov__.branch.add(1), b)) ||
   >   (((__cov__.branch.add(2), b) && (__cov__.branch.add(3), b)) &&
   >   ((__cov__.branch.add(4), b) ?? (__cov__.branch.add(5), b)))
   > ) ?? (__cov__.branch.add(6), !b);
   > ```


## Testing

You can **test the project** using the following command in the terminal:

```bash
npm run test
```

For **watching the changes**, you can use the following command to test the
project automatically:

```bash
npm run test:watch
```

It contains **27 different tests**, including tests for the correctness of the
three different types of coverage (function, statement, and branch) for **9
JavaScript files**.

```bash
$ npm run test
  coverage
    branch.js
      ✔ should return the correct function coverage
      ✔ should return the correct statement coverage
      ✔ should return the correct branch coverage
    class.js
      ✔ should return the correct function coverage
      ✔ should return the correct statement coverage
      ✔ should return the correct branch coverage
    computed.js
      ✔ should return the correct function coverage
      ✔ should return the correct statement coverage
      ✔ should return the correct branch coverage
    func.js
      ✔ should return the correct function coverage
      ✔ should return the correct statement coverage
      ✔ should return the correct branch coverage
    label.js
      ✔ should return the correct function coverage
      ✔ should return the correct statement coverage
      ✔ should return the correct branch coverage
    loop.js
      ✔ should return the correct function coverage
      ✔ should return the correct statement coverage
      ✔ should return the correct branch coverage
    sort.js
      ✔ should return the correct function coverage
      ✔ should return the correct statement coverage
      ✔ should return the correct branch coverage
    switch.js
      ✔ should return the correct function coverage
      ✔ should return the correct statement coverage
      ✔ should return the correct branch coverage
    underscore.js
      ✔ should return the correct function coverage
      ✔ should return the correct statement coverage
      ✔ should return the correct branch coverage

  27 passing (7ms)
```


### Examples

The `example` directory contains three different files for each example:

1. `*.js`: the target JavaScript file to be **instrumented**
2. `*.json`: the **input file** for the target JavaScript file
3. `*.out.js`: the **expected output** of the instrumentation process

Please refer to the following directory structure for the examples:
```bash
example
├── branch.js
├── branch.json
├── branch.out.js
├── class.js
├── class.json
├── class.out.js
├── computed.js
├── computed.json
├── computed.out.js
├── func.js
├── func.json
├── func.out.js
├── label.js
├── label.json
├── label.out.js
├── loop.js
├── loop.json
├── loop.out.js
├── sort.js
├── sort.json
├── sort.out.js
├── switch.js
├── switch.json
├── switch.out.js
├── underscore.js
├── underscore.json
└── underscore.out.js
```

For example, there are three files for the test case of the
[`example/sort.js`](./example/sort.js) file as follows:
1. [`example/sort.js`](./example/sort.js): the target JavaScript file to be
   instrumented
   ```javascript
   function sort(array) {
     for (let i = 0; i < array.length; i++) {
       let min = i;
       for (let j = i + 1; j < array.length; j++) {
         if (array[min] > array[j]) {
           min = j;
         }
       }
       if (min !== i) {
         let tmp = array[i];
         array[i] = array[min];
         array[min] = tmp;
       }
     }
     return array;
   }
   ```
2. [`example/sort.json`](./example/sort.json): the input file for the target
   JavaScript file
   ```json
   [
     [],
     [[]],
     [[1, 2, 3]],
     [[3, 2, 1]],
     [[1, 2, 2, 3, 3]],
     [[5, 5, 5, 6, 8, 9, 10]]
   ]
   ```
3. [`example/sort.out.js`](./example/sort.out.js): the **expected output** of
   the instrumentation process
   ```javascript
   function sort(array) {
     __cov__.func.add(0);
     __cov__.stmt.add(0);
     for (let i = (__cov__.stmt.add(1), 0); i < array.length; i++) {
       let min = (__cov__.stmt.add(2), i);
       __cov__.stmt.add(3);
       for (let j = (__cov__.stmt.add(4), i + 1); j < array.length; j++) {
         __cov__.stmt.add(5);
         if (array[min] > array[j]) {
           __cov__.branch.add(0);
           __cov__.stmt.add(6);
           min = j;
         } else {
           __cov__.branch.add(1);
         }
       }
       __cov__.stmt.add(7);
       if (min !== i) {
         __cov__.branch.add(2);
         let tmp = (__cov__.stmt.add(8), array[i]);
         __cov__.stmt.add(9);
         array[i] = array[min];
         __cov__.stmt.add(10);
         array[min] = tmp;
       } else {
         __cov__.branch.add(3);
       }
     }
     __cov__.stmt.add(11);
     return array;
   }
   ```

In addition, please refer to the `expectedMap` object in the
[`test/test.ts`](./test/test.ts) file for the expected coverage results for each
example JavaScript file.

For example, the expected coverage results for the
[`example/sort.js`](./example/sort.js) file are as follows:
* **Function Coverage**:
  * Total Functions: `1`
  * Covered Functions: `[0]`
* **Statement Coverage**:
  * Total Statements: `12`
  * Covered Statements: `[0, 1, 2, 3, 4, 5, 7, 11]`
* **Branch Coverage**:
  * Total Branches: `4`
  * Covered Branches: `[1, 3]`
