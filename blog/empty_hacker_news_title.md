# Submitting an empty link title to Hacker News

The [post](https://news.ycombinator.com/item?id=39493837) and [permalink](https://web.archive.org/web/20240225012301/https://news.ycombinator.com/item?id=39493837).

There are many, _many_ whitespace characters. Arguably too many, as seen on [Namecheap's page](https://www.namecheap.com/visual/font-generator/whitespace/) dedicated to them:
<img width="503" alt="Screenshot 2024-02-24 at 12 34 09 PM" src="https://github.com/LiamSwayne/liamswayne.github.io/assets/108629034/88d9c114-cb67-4ff8-9b00-6ea61bc4b994">

However, none of these spaces actually register as valid characters for meeting the title requirements on Hacker News. There are some hidden processes in place to improve the quality of titles. One of these processes removes the word "really" from submitted titles unless it's the first word (a pretty great idea in my opinion). Other processes make sure you have at least a few letters in your title...or do they? Hacker News seems to have quite the collection of whitespace characters they filter through, or perhaps it is the automatic conversion of unusual whitespace characters to plain-old spaces, as done by some text editors and browsers. But you can't catch everything. In particular, you can't catch the "left-to-right mark" character, aka `0x200E`, aka `&lrm;`, which is the only character used in my post's title.

Even though it may seem trivial to prevent whitespace only titles, there are dozens of unique whitespaces in UTF-8, for better or for worse, but mostly just for worse. Auto-conversion to plain spaces is the right thing to do, but even editors get tripped up by certain characters. Although special characters and emoji can be quite useful, most of the time it's worth dodging this whole mess by restricting to ASCII.
