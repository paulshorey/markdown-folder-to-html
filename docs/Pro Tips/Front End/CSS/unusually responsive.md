### A responsive case study, this very page...

On the phone or small device, all this content and nav column does not fit on the screen. However, the typical hamburger icon and dropdown menu is very cumbersome and forces the user to sit through several operations before seeing the desired content
> 1. find hamburger icon
> 2. click on it
> 3. wait for it to drop down
> 4. scroll the nav dropdown to the desired link   

Ideally, on a mobile site, I want to access the navigation and content seamlessly, quickly, without much clicking and waiting. The problem isn't time, but that the content of the screen changes - appears, dissapears. This is stressful, a lack of control. Scrolling is sometimes more intuitive. The hamburger icon is great, when you want to preserve your layout, and present your brand in a clean and well designed way. But this is just a documentation note taking site.

So, I decided to keep the vertical nav menu as is, only limit the screen from getting too small. Text will always be big enough to be legible with this meta tag:
```html
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
```

Now, to get to the content, all you have to do is scroll right. To get to the nav, scroll left. Quick and simple! Now the tricky part, to make the content legible on the small screen. Fortunately, that is very easy:
```css
.content {  max-width: 100vw;  } 
```

Unfortunately, this page/site has a bunch of `<pre>` and other elements which sometimes take up `1000px` or more of width. So this makes it more complicated. The above fix would work with simple text, like blog posts. But, we need:
```css
/* mobile scrolling */
.content {
    max-width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
}
.content pre,
 .content code {
    max-width: 100vw;
    overflow-x: auto;
    position: relative;
}
@media (max-width: 720px) {
    .content {
        min-width: 100vw;
    }
}
``` 


## The rest of the text, and even images, divs, padding, etc...
See the main index.html/README.md for this section.