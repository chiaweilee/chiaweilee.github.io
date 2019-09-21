## BigInt

*ECMAScript `stage 3`, not support under IE/EDGE*

represent whole numbers larger than 253 - 1

```js
BigInt(value);
```

*BigInt() is not used with the new operator.*

```js
9999999999999999 - 1 === 9999999999999998 // false, 10000000000000000
9999999999999999n - 1n === 9999999999999998n // true
BigInt(9999999999999999) - BigInt(1) === BigInt(9999999999999998) // true
```
