### CSS is not hard. Just review the properties at the bottom of this page, and know these gotchas/oddities:  

#### Aligning vs. Centering  
* To **"vertically-align"** something, we mean to align some text or image, or icon relative to its siblings. To make text or a link look good next to a button or icon. To accomplish this, simply put **`vertical-align:middle`** on every **SIBLING**. The container doesn't matter.  
* To **"vertically-center"** something is to actually place a small element visibly in the middle of a larger element. You may think to off-set the child from the top with `padding` or `margin-top` or just `top`, but that would require you to know the exact height of the parent and child, and any other contents which could shove the child out of center. Instead, use  **`display:flex;align-items:center`** on the **PARENT**, and the web browser will take care of the sizing.  
* To **"horizontally align"** or **"horizontally center"** something is usually the same thing, but is done differently for "inline" vs "block" level elements.  
    * To center some text or an image in a line, you would add **`text-align:center`** to its **PARENT**.  
    * To center some block (like a div) on the page, add **`margin-left:auto;margin-right:auto;`** on **ITSELF**, the **CHILD**. For this block centering to work, the child must have some width, and the parent must also be a block element, with a greater width.  
#### Negative Margin-Top vs. Negative Top  
* **`margin-left: -10px`** or **`margin-top: -10px`** is totally allowed, and can make your UI pixel perfect by nudging your element slightly to the side. But **BEWARE**. It is a hack. It will shift the element you're nudging in unpredictable ways, and thus shift all its children and parents. **INSTEAD**, you may use **`position:relative; top:-10px`** to accomplish the same thing. This will nudge the element just as well, but will not affect any other elements. To the sibling and parent elements, it will be as if the child was never nudged at all.  
#### Box-Sizing, and Width Surprises  
* You make a button of **`width:100px`**. It fits nicely into your UI. But then you add a **`padding: 20px`**, and it no longer fits. In fact, it looks now more like **`140px`**. **Why?** The padding was added to the element's width. If you now add a border of **`2px`**, now the total width grows again to **`144px`**. This is because your container element has property **`box-sizing: content-box;`**. To make the **padding** and **border** widths fit **INSIDE** the specified element width (and height), change the parent (or entire page) to use **`box-sizing: border-box;`**.  
  
##  
# Basic Properties:  
* position:  
    * **static** ~ default value, makes element think it has NO position property.  
    * **relative** ~ relative to its surroundings. Lets you to add **top, left, bottom, right**, to shift it a bit to any direction  
    * **fixed** ~ relative to the window - use **top, left, bottom, right** to position the element any number of units from the top/left/bottom/right of the screen boundaries.  
    * **absolute** ~ same as fixed, but relative to the parent element (well, the closest parent which has a specified positon property)  
* display:  
    * **block** ~ wrap to their own line, and take up 100% available width! Used to layout visual blocks on the page, with height, padding, border, etc. (**div, blockquote, header, article, main** have this by default)  
    * **inline** ~ for text elements which do not have height or width or margin or vertical padding (**span, b, i, u, img, code** have this by default)  
    * **inline-block** ~ best of both worlds. Can have vertical height and padding, but do not wrap to their own line! So, can style a padded button or highlight in the middle of a paragraph.  
    * **flex** ~ read about it. It will change your life. **Note:** it affects the children, not itself! Simple example: Lets you have a fixed-width left column, and a main article section which takes up the remaining page width, no matter how wide or narrow the screen is.  
    * **inline-flex** ~ flex content inline! Like a pill-button, with left/right sections.  
    * **grid** ~ new hotness. Not like "masonry", but still very useful.  
* margin:  
    * **0 0 0 10px** add 10px margin outside of the element to the left  
    * **0 10px** add 10px margin to left and right. Zero to top/bottom  
    * **10px** add to all sides  
    * **10px 0 0 0** same as margin-top:10px  
    * Margin adds space **outside** of the element's boundaries. So, **outside** of the element's width/height, padding, border, background.  
* padding:  
    * like margin, but adds space **inside** the element's boundarids. So, **inside** the border. Increases width/height, and is covered by background.  
* float:  
    * never copy from some answer on some website. Only use if you know its gotchas and glitches  
* top, left, right, bottom:  
    * move the element some distance in any direction, used with the `position` prop  
* text-align  
    * horizontal-align **text** or images, or any **`display:inline`**  or **`display:inline-block`** element - **left/center/right**  
    * put this on the **parent** element!  
* vertical-align  
    * **vertically** align any inline or inline-block element, relative to its siblings  
    * put this on the element itself!!! unlike text-align, which you put on the parent  
    * this does not, unfortunately, vertically center text inside a larger container  
* box-sizing  
    * see in the top gotchas/oddities  
  
#### Also, read about "flexbox", or "css display flex"  
And learn about its related properties, which can be used to build dynamic, responsive, flexible layouts, and center content on the page - horizontally and vertically: `flex-direction`, `flex-grow`, `align-items`, `justify-content`, etc.