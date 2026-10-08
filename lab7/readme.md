# Frontend - Backend
1. create project folder (lab7)
2. create frontend , backend folder within project folder
3. open terminal and split into two
4. open frontend to the left side terminal
5. open backend to the right side terminal
6. in backend
   a. initialize backend by `npm init -y`
   b. install nodemon by 1npm i nodemon`
   c. open package.json from backend , update `type to module` and script
7. in frontend
   a. npm create vite@latest
   b. enter . as project name
   c. select framework as react from aarrow key
   d. select variant as javascript from arrow key
   e. select Eslint for linking from arrow key
   f. select install and start the frontend

## Components
1. simple js functions return html directory
2. it must start with Cap letter
3. it should be treated as html tag
4. it must be closed

## Object Destructure


`const{rating, bname, price, quantity,picUrl} = props.book;`

does not depend on order, if property is not available then it intialize with null
Any components include styles:
1. External CSS = create class in index.css and use in components
2. Internal CSS = create property as object 

```const qtystyle={
  fontSize:"1rem",
  color:"blue",
  textAlign:"center",
  backgroundColor:"lightgray",
  padding:"0.5rem",
 };```
Apply with preview and pass the object

3. Inline CSS= in this method we use two curly braces with style attributes
All the CSS property must be single word.
For example:text-Align becomes textAlign

rafce= arrow function
rfce= simple function

# App.jsx should be minimum code.

#  By Default Button in html is Submit button.

## add tailwind to existing react project
1. open terminal and goto project frontend folder
2. install tailwind by
`npm install tailwindcss @tailwindcss/vite`
3. open vite.config.js
4. add `import tailwindcss from '@tailwindcss/vite'` in first line
5. add 'tailwindcss()' after react()
6. the file should look like

```
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

7. open src/index.css and remove all contents, then add below line
   `@import "tailwindcss";`