# Stop learning JavaScript frameworks (& libraries)

**_Face it, learning JavaScript is a waste of time. DOM manipulation: Who's Dom? Event handling: React added that like 10 years ago._**
## Issue № 1. Frameworks aren't made for you.

JavaScript frameworks are designed *by corporations for corporations*. React is the perfect framework for Facebook because it was designed specifically for Facebook. Your website has different needs and while React may be powerful, you are essentially using a tool made to address highly specific needs and circumstances for general use.

Most baked goods can be made with just an oven, bowl, whisk, pan, rolling pin, utensils, and measuring cups. Using a library is like stepping into a kitchen full of (inhale) six sizes of cannoli forms, a tart tamper, a lattice pie cutter, a ten-piece fondant sculpturing set, a bread lame that looks like a switchblade, and a cutting board hanging on the wall with `LICENSE` branded on it.

If you're building a complex project that truly needs the capabilities of a framework, you may be better off creating your own framework from scratch. It takes less time than you think, you'll have a better understanding of its purpose than any other framework, and its functionalities will perfectly suit your needs.
## Issue № 2. Bandwidth costs are waaaay higher.

A while ago I needed to scale a `div` like an SVG. The best implementation I found was this one by Chris Coyier: https://codepen.io/chriscoyier/pen/VvRoWy

The only problem with this code is that the page is \~75x larger than it needs to be. jQuery is loaded in for DOM, adding `84 KB` to the page. jQuery UI is also used, adding another `239 KB` to the page. And let's throw in a normalize css for standardization, adding another `2 KB`. Add in the actual code and the grand total is `329 KB`.

Now here's my implementation: https://web.archive.org/web/20231022161843/https://raw.githubusercontent.com/LiamSwayne/liamswayne.github.io/main/resources/scaling.html

It's almost an exact copy but devoid of dependencies. As a result, it loads much faster and doesn't incur unnecessary bandwidth costs. In this case the costs were offloaded to The jQuery Foundation, but it's best to have no costs whatsoever. The size of the page has gone from `329 KB` to less than `4 KB` without any minification. That's a `98.7%` decrease, and makes the file smaller a plain text version of this blog post. The CSS normalization is too small to matter and good practice in general, but the use of jQuery in what takes 20 lines of JavaScript is needless bloat that has no affect on the user experience other than making the page load slower. Web pages with multiple libraries or frameworks will never load as fast as vanilla JS. If you want to make a scalable website, an off-the-shelf framework is probably not your best option.

If you want to execute behaviors that are non-essential to the look of the page (analytics, tracking, etc...), the `defer` attribute can be used to load large libraries and scripts without affecting the page's loading speed from the user's point of view.
## Issue № 3. Vanilla JavaScript is a more transferable skill than any framework.

My criticism of Chris Coyier's Codepen project not to say that he is untalented, far from it, as I had to copy his code just to get what I was looking for to work. However, it highlights a growing problem with front-end development. When your "blank slate" html document contains a framework or library, your front-end's default state is mediocre loading, and it can only get worse from there.

If you understand how to do something using only JavaScript, you can easily figure out how to replicate the behavior in any framework. However, you'll have a hard time converting a behavior from a framework to vanilla JS, or harder yet, another framework. Once you get something working with vanilla JS, you can reuse that code anywhere. Very few frameworks have painless conversion to other frameworks.

And let's not forget about libraries, which are often used purely for convenience. If a page gets use out of numerous functions of Prototype.js, it makes sense to keep using the library. But if it's only used for Ajax requests and simple DOM manipulation tasks, you're better off coding a few basic functions yourself.

---
If you enjoyed this article, consider following me on Friendster & MySpace.

Written by [Liam Swayne](https://github.com/LiamSwayne)
> _"Cease writing tests, cease failing cases."_
