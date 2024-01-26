# 🦸 Hero section

![20240126_180647](https://github.com/Edveika/OmniFood.dev/assets/113787144/3d36572d-2b52-4cfe-8e8a-33dc23d04bab)

* Layout is made using CSS Grid

```css
.hero {
  max-width: 130rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 4.8rem;
  gap: 9.6rem;
}
```

* Customer photos are displayed using flexbox

```css
.delivered-img {
  display: flex;
}
```

* Images are made round and given a border to achieve this nice effect

```css
.delivered-img img {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  margin-right: -1.6rem;
  border: 3px solid #fdf2e9;
}
```
