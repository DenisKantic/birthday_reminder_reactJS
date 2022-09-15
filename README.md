# Simple react app demonstrating useState hook

This project contains one main file "App.js" and one "Components" folder.

In Components folder, you have three files. 

- data.js
- style.css
- Contact.js


# data.js 
This is simple javascript file, containing just javascript objects which are exported with export default so we can use all of it's data in useState. 

# style.css 
basic css file for styling all HTML elements in Contact.js

# Contact.js 

File which contains the picture, name and age of each person. 
In this file props are passed with the name "person". After passing the prop, I iterated it with map function. After looping with map function I defined the elements from prop "const {id, age, name, image } = person and called it "person". 
I did this mainly to avoid repetitive typing "person." and after that the element id,age... With this you just type {name} or {age}. 
