# Advent of Code Node Project Template

## Usage

1. Clone/fork this maf:
    ```sh
    git clone https://gitlab.com/mattcan/aoc-node-template
    cd aoc-node-template
    ```
2. Install dependencies:
    ```sh
    npm i
    ```
3. Set session cookie value (use a browser to login to the site):
    ```sh
    export AOC_SESSION=somevalue
    ```

### Add a day

Copy the day and day test template

```sh
cp days/.day.template.js days/01.js
cp days/.day.test.template.js days/01.test.js
```

You can then run tests or get the results of the day:

```sh
# testing
npm test

# get day 1 results
npm start -- 1
```
