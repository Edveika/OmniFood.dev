# ❓ How it works

![image](https://github.com/Edveika/OmniFood.dev/assets/113787144/e36f4562-600c-4096-ae37-7e8775f133c4)

* The layout is built using CSS Grid. Z pattern is used when there is enough screen space.

```css
.grid {
  display: grid;
  gap: 6.4rem;
}

.grid--2-cols {
  grid-template-columns: repeat(2, 1fr);
}

```

* The round background under image is a pseudo element

```css
.step-img-box::before,
.step-img-box::after {
  content: "";
  display: block;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.step-img-box::before {
  width: 60%;
  /* height: 60%; */
  /* 60% of PARENT width */
  padding-bottom: 60%;
  background-color: #fdf2e9;
  /* 
  Determines which element is going to ne on top.
  HIgher value = higher position
  */
  z-index: -2;
}

.step-img-box::after {
  width: 50%;
  padding-bottom: 50%;
  background-color: #fae5d3;
  /* 
  Determines which element is going to ne on top.
  HIgher value = higher position
  */
  z-index: -1;
}
```
