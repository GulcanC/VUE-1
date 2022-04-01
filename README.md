# VUE PROJECT 1 | Monster Slayer Game

### Go to the Project Page
https://gulcanc.github.io/VUE-1/

### The Purpose of the Project

The purpose of this project is taking over control over some HTML code with Vue.js and practicing with data binding, interpolation, v-bind, event binding with v-on, output lists of data with v-for, conditional content with v-if and v-else.

### About the Project
This is my first VUE.js project as a part of the projects of the bestselling course “UDEMY - Vue - The Complete Guide (w/ Router, Vuex, Composition API)”. 
This project is called “monster slayer game” that I dived deep into Vue JS. 
There are various options for fighting against a monster, there are health bars to be reduced and there is a battle log where we can see what happened. 

We start creating this Vue app by calling ***Vue.app()*** function and we store it as a constant, then we ***mount*** that app to the div element with an "id" name ***Data*** is core concept of Vue apps that we can thinks them as a variables in the regular JavaScript. In this game we manage some data like player's health and monster's health. We need this data option in our Vue app configuration object and we return the object that holds our data. 

Another important feature in Vue app is ***methods***. For example, when we click "attack" button, we trigger a method that reduces the monster health. For this purpose we use randam value. To calculate a random value, we us ***Math.random() function which gives us a random number between 0 and 1. In this project we want to get an integer random number between minimum and maximum value. For doing this we use ***Math.floor()*** method that rounds down a decimal number to get an integer number. (For exemple, 5.87 is 5, -5.98 is -6)

<details><summary> 	:point_up_2:!Click Me! :point_up_2: The formula to calculate an integer random number between 5 and 12</summary>
  
Math.floor(Math.random() * (12 - 5)) + 5;
  
</details>

We need to connect our methods to our HTML file, for example for "attack button" we have to add "click listener" to it. We can do that by using ***v-on:click*** or ***@click*** and as a value we have to add our method name like ***monsterHealth*** or ***monsterHealth()***.

When we click the buttons our health bars will be reduced, to achive this we use ***inline style attribute*** and set it dynamically, this means we use ***v-bind:style*** or ***:style***. Then we pass an object to our style binding, in this object we define which CSS property we want to change and we give that property a potentialy dynamic value. In our project we change ***width*** property and we set it a value which will be dynamic. For example for monsterHealth the first way is :

:droplet: **:style = "{monsterHealth + '%'}"**

Instead of this first way, we can create ***the computed property*** in our view instance config object. We use computed property because putting too much logic in our templates can make them bloated and hard to maintain.

:droplet: **computed : { monsterBarStyles() {
  return { width: this.monsterHealth + '%' }; }**
  


### Technologies & Techniques Used:
VUE 3 | CSS3, HTML5 | data binding | interpolation | v-bind | event binding with v-on | output lists of data with v-for | conditional content with v-if, v-else | Git | GitHub-pages
