# 🍴 Meals

![20240126_183811](https://github.com/Edveika/OmniFood.dev/assets/113787144/965b5e8b-d537-43d9-a874-4adfd8e7046d)

* Layout is built using CSS Grid

```css
.grid {
  display: grid;
  gap: 6.4rem;
}

.grid--3-cols {
  grid-template-columns: repeat(3, 1fr);
}

```

* Default list decorations are disabled and ionicons are used

```html
<li class="meal-attribute">
  <ion-icon name="star-outline" class="meal-icon"></ion-icon>
</li>
```
