# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/result.png)

### Links

- Solution URL: [Go to Frontend mentor solution](https://www.frontendmentor.io/solutions/responsive-mobile-first-fylo-dark-theme-landing-page-A2gMNf2Yq)
- Live Site URL: [Go to live example](https://fylo-dark-theme-ml.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - For styles

### What I learned

It was a good refreser of flexbox and grid, and it was my first time using before and after to add a background
style.

backgrond

```css
.hero1::before {
  content: '';
  background-image: url('../images/bg-curvy-mobile.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;
  background-position-x: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: calc(257.844px - 257.844 * ((100vw - 375px) / 1065));

  @media screen and (min-width: 1200px) {
    background-image: url('../images/bg-curvy-desktop.svg');
  }
}
```

email validation

```js
window.addEventListener('load', () => {
  const input = document.querySelector('.call-to-action__input');
  const form = document.querySelector('.call-to-action');
  const error = document.querySelector('.call-to-action__error');

  form.addEventListener('submit', () => {
    let email = document.querySelector('.call-to-action__input').value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(pattern)) {
      error.style.display = 'block';
      input.style.border = 'solid 1px hsl(0, 100%, 63%)';
      setTimeout(() => {
        error.style.display = 'none';
        input.style.border = 'none';
      }, 3000);
    }
  });
});
```

### Continued development

In the near future i want to focus in keep practicing a few projects with just html and css to improve in the use of animation

### Useful resources

- [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) - freecodecamp is always very useful when it comes to remembering some concepts, in this case, it helped me with the regex

## Author

- Website - [Mairon Romero](https://mairon-romero.netlify.app/)
- Frontend Mentor - [@MaironL](https://www.frontendmentor.io/profile/MaironL)
- linkedin - [Mairon Romero](https://www.linkedin.com/in/maironromero)
