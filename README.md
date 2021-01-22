![Random Number Banner](https://media.istockphoto.com/photos/green-binary-code-matrix-background-wide-banner-picture-id898346256?k=6&m=898346256&s=170667a&w=0&h=Ta11wMZRI1X4IJeXAamhKRj-UrvH3pEMku7oEKWActQ=)

# **RandomNumber**

Half Module 2 project of the Adalab Digital Frontend Development Bootcamp.

This is an app to guess a random number developed with [<img src = "https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white">](https://html.spec.whatwg.org/) [<img src = "https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white">](https://www.w3.org/Style/CSS/) and [<img src = "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black">](https://www.ecma-international.org/ecma-262/)

## **Installation**

Clone repository and open project on a browser with VSCode live server plugin.

Project **[URL](https://anaguerraabaroa.github.io/RandomNumber/)** is also available on GitHub Pages.

## **Project features**

- Generate a random number with methods Math.random and Math.ceil when app runs
- Input to enter a random number manually
- Button to send manual random number to app
- Inputs for clues and attemps to guess random number. Clues help user to find if manual random number matchs with generated random number

## **Folder Structure**

```
RandomNumber
├── images
│   └── app.jpg
├── styles
│   └── main.css
├── index.html
├── LICENSE
├── main.js
└── README.md
```

## **Listeners and functions**

### **Get random number**

- **Get initial random number:** function getRandomNumber(max)

### **Get user random number**

- **Event listener:** buttonElement.addEventListener("click", getFinalNumber)
- **Handle user random number and paint clues and attempts:** function getFinalNumber()

### **Get attempts to guess random number**

- **Handle attempts to guess random number:** function getAttemptsNumber()

## **Updating**

```
git add -A
git commit -m "Message commit"
git push
```

## **Project captures**

![Random Number App](./images/app.jpg)

## **License**

This project is licensed under [**MIT License**](https://spdx.org/licenses/MIT.html).
