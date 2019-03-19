* [Mozilla Developer Network](https://developer.mozilla.org/en-US/search?q=sort&topic=api&topic=css&topic=canvas&topic=html&topic=http&topic=js&topic=mobile&topic=apps&topic=svg&topic=webdev&topic=standards&topic=webext&topic=webgl) is an excellent reference website to **search** for Javascript features, like in this link, you search `sort`, and the first answer is `Array.prototype.sort`, which is what you use for sorting lists alphabetically, by size or length, or using more complex logic.

* [FreeCodeCamp.Org](https://guide.freecodecamp.org/miscellaneous/capitalize-the-first-letter-of-a-string/) is an excellent website to **browse** for Javascript features. Or, [search it using google](first letter site:freecodecamp.org).


## How to loop over Arrays  
```javascript  
    /*  "forEach" is preferred because of this option to skip the loop item */  
    arr.forEach(function(item, i){  
        if (!item) {  
            return;  
        }  
        console.log(item);  
    });  
```  
```javascript  
    /* "for" works well, but is verbose */  
    for (let i = 0; i < arr.length; i++) {  
        const item = arr[i];  
        console.log(item, i);  
    }  
```  
```javascript  
    /* "for of" works fine, but is annoying because I have to manage all my own variables */  
    let i = 0;  
    for (let item of arr) {  
        console.log(item, i);  
        i++;  
    }  
```  
```javascript  
    /* "while" is not recommended because you have to remember to increment the index */  
    let i = 0;  
    while (i<arr.length) {  
        const item = arr[i];  
        console.log(item, i);  
        i++;  
    }  
```  
```javascript  
    /* "for in" is not recommended. It iterates indexed items, as well as named properties! */  
    /* yes, btw, Arrays can have named properties, just like Objects */  
    for (const i in arr) {  
        const item = arr[i];  
        console.log(item, i);  
    }  
```  
##  
# How to loop over Objects  
```javascript  
    /* "for in" */  
    for (const key in obj) {  
        const value = obj[key];  
        console.log(value, key);  
    }  
```  
##  
# How to loop over Strings  
```javascript  
    /*  "forEach" */  
    "some word".forEach(function(letter, i){  
        if (letter===" ") {  
            return;  
        }  
        console.log(letter);  
    });  
```  
##  
# How to loop over Numbers (well, you can't, but...)  
```javascript  
    const loop_min = 0;  
    const loop_max = 100;  
    const loop_inc = 1;  
```  
```javascript  
    /* "while" */  
    let num = loop_min;  
    while (num<loop_max) {  
        /* do something with num */  
        num += loop_inc;  
    }  
```  
```javascript  
    /* "for" */  
    for (let i = loop_min; i < loop_max; i++) {  
        /* do something with num */  
        num += loop_inc;  
    }  
```