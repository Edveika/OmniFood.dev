# ✍️ Register

![image](https://github.com/Edveika/OmniFood.dev/assets/113787144/5d754ce6-3a6f-46e4-9515-66cc08ef8f26)

* Layout is built using CSS Grid

```css
.cta {
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* background-color: #e67e22; */
  /* height: 50rem; */
  box-shadow: 0 2.4rem 4.8rem rgba(30, 30, 30, 0.15);
  border-radius: 11px;
  background-image: linear-gradient(to right bottom, #eb984e, #e67e22);
  overflow: hidden;
}
```

* Background color is gradient

```css
background-image: linear-gradient(to right bottom, #eb984e, #e67e22);
```

* Image has orange overlay on top of it to better blend in with the background, attract less attention

```css
.cta-support-img {
  background-image: linear-gradient(to right bottom, #eb974e5c, #e67d225c),
    url(/img/eating.jpg);

  background-size: cover;
  background-position: center;
}
```
