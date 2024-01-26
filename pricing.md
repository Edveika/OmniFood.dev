# 💰 Pricing

![image](https://github.com/Edveika/OmniFood.dev/assets/113787144/c279efbe-96c5-403a-9abd-36da74ee1db1)

* Pricing plans are displayed using CSS Grid

```css
.grid {
  display: grid;
  gap: 6.4rem;
}

.grid--2-cols {
  grid-template-columns: repeat(2, 1fr);
}
```

* Description cards are also built using CSS Grid

```css
.grid {`
  display: grid;
  gap: 6.4rem;
}

.grid--4-cols {
  grid-template-columns: repeat(4, 1fr);
}
```

* Best value component is a pseudo element that uses absolute positioning

```css
.pricing-plan--complete::after {
  position: absolute;
  content: "BEST VALUE";
  font-size: 1.8rem;
  font-weight: bold;
  right: -10%;
  top: 6%;
  background-color: #ffd43b;
  color: #333;
  padding: 0.8rem 3.2rem;
  transform: rotate(45deg);
}
```

`transform: rotate(45deg);` rotates the element to achieve this clean look.
