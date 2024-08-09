---
title: Semantic commas
---
# Semantic commas
2024/08/08

**Problem:** I come to a page with a styled inline list of items - tags, bookmarks, whatever - and I need to copy them. I do my `Ctr+C` and `Ctrl+V` and I get this:

```
My tagSome other tagThis is not funActuallyI hate this 
```

Yikes.

The usual reason is that it's styled with `span`s or inlined `li`s and `.someClass::after`. Makes sense, usually? You don't want your fancy em-dashes to be read by a screen reader.

But I still want to copy that stuff, dammit. And I sure as hell don't want this mess on my own sites. Now what?

Semantic commas to the rescue!

```html
<p><strong>Tags!</strong><span class="tag">My tag</span><span class="comma">, </span><span class="tag">Some other tag</span><span class="comma">, </span><!-- and so on --></p>
```

```css
.tag::after {
    content: "—"
}

.tag:last-of-type::after {
    content: ""
}

.comma {
    /* hide it without removing it from the page */
    opacity: 0;
    display: inline-block;
    width: 0;
}
```

Invisible comma that shows up when text is copy-pasted. 