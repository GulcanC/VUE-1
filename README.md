# VUE PROJECT 1 | Monster Slayer Game

### Go to the Project Page
https://gulcanc.github.io/VUE-1/

### The Purpose of the Project

The purpose of this project is taking over control over some HTML code with Vue.js and practicing with data binding, interpolation, v-bind, event binding with v-on, output lists of data with v-for, conditional content with v-if and v-else.

### About the Project
This is my first VUE.js project as a part of the projects of the bestselling course “UDEMY - Vue - The Complete Guide (w/ Router, Vuex, Composition API)”. 
This project is called “monster slayer game” that I dived deep into Vue JS. 
There are various options for fighting against a monster, there are health bars to be reduced and there is a battle log where we can see what happened. When we click monster attack button or player attack button, the bars will be reduced. We can use special attack button for every three round. And there is a heal button for player to heal itself. 

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
  
For "special attack button" we have to restrict the round number , this means we can only use "special attack button" every three rounds. To achive this we use ***disabled attribute***, we access data property and use modulus operator to divide it by 3 find out what the remainder of this division is. If remainder is not 0, this is not dividable by three and therefore we know we are not in the third, sixth or ninth round. So we will disabled it if the divison of three does not leave a remainderof 0. 

:droplet: **:disabled = "currentRound % 3 !==0"**

The heal button is just for the player to heal itself. To calculate a heal value we use again the same get random value function. Here we check player health when we add the heal value to it. If total value exceed 100, we set the player health to 100, so we can not go higher than that value. If our current health plus the calculated heal value does not exceed 100, we add the heal value to the player health but again we can not go above 100. 

To check who won or lost the game we control the health values, for this reason we use ***watch property*** in our object. Here we use conditional content. First condition is draw, if player health is smaller than or equal to 0 and the monster health also is smaller than or equal to 0, the result is draw. Second condition is  the player health is smaller than or equal to 0, the monster win the game. The third condition is that if the monster health is maller than or equal to 0 the player win the game. 

When the game over, we will see the message who won or lost, for doing this we add a data property winner which initially equals to "null". By using this keyword in watch property we set winner message as draw or player or monster. In our HTML template there is a container that show these messages. Here we use thruty and falsy values; at the beginning winner is null so it is a falsy value. 



### Technologies & Techniques Used:
VUE 3 :round_pushpin: CSS3 :round_pushpin: HTML5 :round_pushpin:  Git :round_pushpin: GitHub-pages 

data binding :round_pushpin: interpolation :round_pushpin: v-bind :round_pushpin: event binding with v-on :round_pushpin: output lists of data with v-for :round_pushpin: conditional content with v-if, v-else :round_pushpin: click listener @click
