# ⚡ Header

![20240126_175625](https://github.com/Edveika/OmniFood.dev/assets/113787144/beea07e0-a293-4100-b811-5fac05ecbd53)

* Built using flexbox

```css
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf2e9;
  padding: 0 4.8rem;
  height: 9.6rem;
  position: relative;
}
```

* Mobile navigation is hidden by default

```html
<button class="btn-mobile-nav">
  <ion-icon name="menu-outline" class="icon-mobile-nav"></ion-icon>
  <ion-icon name="close-outline" class="icon-mobile-nav"></ion-icon>
</button>
```

```css
.btn-mobile-nav {
  border: none;
  background-color: none;
  cursor: pointer;
  display: none;
}
```

* Media queries used to show mobile nav on smaller screens

```css
@media (max-width: 60em) {
  .btn-mobile-nav {
    display: block;
    z-index: 1337;
    background-color: rgba(255, 255, 255, 0);
  }
}
```

* Sections have id attribute, thats how the navigation works(anchor to id)
