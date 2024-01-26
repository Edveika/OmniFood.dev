# 👋 Footer

![image](https://github.com/Edveika/OmniFood.dev/assets/113787144/bcd3eea4-e561-465a-9481-1bc8c37f9326)

* Layout is built using CSS Grid 5 columns

```css
.gird--footer {
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;
}
```

* Direct links to mail and call

```html
<p>
  <a class="footer-link" href="tel:415-201-6370">415-201-6370</a>
  <br />
  <a class="footer-link" href="mailto:hello@omnifood.com"
  >hello@omnifood.com</a
  >
</p>
```

* Social links are unordered list elements, displayed in a single line using Flexbox

```css
.social-links {
  display: flex;
  gap: 2.4rem;
  list-style: none;
}
```
