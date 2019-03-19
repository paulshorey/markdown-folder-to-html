### Bootstrap  
  
People only use Bootstrap because "everyone" uses Bootstrap, and because it has a great name, not because of the merits of that framework.  
  
Unfortunately, Bootstrap is poorely written, buggy, not aligned (sloppy), looks cheap, and most importantly, it badly clutters your global namespace. So, when you create a new class name like `.map` or `.error`, it may or may not be taken over by one of Bootstrap's hundreds of class names on the global namespace.  
  
If you must use Bootstrap, try this:  
https://www.google.com/search?q=bootstrap+namespace+conflict&oq=bootstrap+namespace&aqs=chrome.2.69i57j0l5.4104j1j7&sourceid=chrome&ie=UTF-8  
  
  
### Consider these alternatives:  
  
**Static sites (with jQuery):**  
* [Bulma](https://bulma.io/alternative-to-bootstrap/)  
* [several alternatives](https://www.agriya.com/blog/15-alternatives-bootstrap-foundation-skeleton/)  
  
**React app:**  
* [Material UI](https://material-ui.com/​) (standard)  
* [Blueprint](https://blueprintjs.com/) (Powerful and customizable! Unfortunately, their documentation/examples are difficult)  
* [Ant design](https://ant.design/docs/react/introduce)  
  
**Angular app:**  
* Angular Material (standard)  
* [Ant design](https://ng.ant.design/docs/introduce/en​) (alternative, minimal outlined look without so much solid color)  
  
**Worth considering:**  
* [AUI (Atlassian UI)](https://docs.atlassian.com/aui)  
<br />Two ways to use:  
    * **CSS + Javascript** - perfect for static sites. Alternative to jQueryUI.  
    * **CSS only** - can be used with React or Angular or anything, not for dynamic components like a datepicker, but just to give the page layout (like header, nav, menus, buttons) that polished "enterprise" feel.