# ES6  
Is simply EcmaScript version 6, or ES2015, or, the new web standards adopted in 2015.  
  
#### Spread Operator  
```javascript  
    // Arrays  
    var listAll = [...listDefault, ...listNew]  
    // vs ES5:  
    var listAll = listDefault.concat(listNew)  
  
    // Objects  
    var dictAll = {...dictDefault, ...dictNew}  
    // vs ES5:  
    var dictAll = Object.assign(dictDefault, dictNew)  
```  
  
#### Destructuring Assignment  
```javascript  
    function(first, second, ...theRest) {}  
    // vs ES6:  
    function(){  
        let first = arguments.shift();  
        let second = arguments.shift();  
        let theRest = arguments;  
    }  
```  
  
#### Functions  
```javascript  
    ()=>{};  
    /* is the same thing as... */  
    function(){}.bind(this);  
    /* maybe a good idea to use ES6 methods to show there IS a `this` context, */  
    /* and ES5 functions to show there is not, or that it's a `pure function` */  
```  
  
#### Classes  
```javascript  
    // With a constructor  
    function MyObjectA () {};  
    var myInstanceA = new MyObjectA(); // {}  
  
    // With a function  
    function MyObjectB () {  
      return {};  
    };  
    var myInstanceB = MyObjectB(); // {}  
  
    // ES6 class  
    class MyObjectC {}  
    var myInstanceC = new MyObjectC(); // {}  
```  
  
