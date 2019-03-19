# Sorting Arrays:

Array has a built in prototype method **sort**. Use it: **`myArr.sort(mySortFunction)`**

* mySortFunction takes in a previous and current list item as its first two arguments(a, b)
* it should return a higher number (1) if the **new** item is to be put higher in the list
* return a lower number (-1) if the new item should be placed lower in the sorted list
* return zero (0) if undecided, and let the other items get positioned above/below it

```javascript
// simple sort, from longest to shortest string length:
var mySortFunction = function (a, b) {
    return a.length - b.length;
}
```

```javascript
// more complicated custom sort, getting a score for each item:
const mySortFunction = function (a, b) {
    // rating
    let rating_a = kw.dict[a].rating;
    let rating_b = kw.dict[b].rating;
    // sort by rating
    if (rating_a > rating_b) {
        return -1;
    } else if (rating_a < rating_b) {
        return 1;
    } else {
        // if same rating, prefer shorter strings
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return 0;
        }
        return 0;
    }
}
```

## To sort an Object, first convert it to Array:
```javascript
    var myArr_values = Object.values();
    var myArr_keys = Object.keys();
    var myArr_pairs = Object.entries();
```