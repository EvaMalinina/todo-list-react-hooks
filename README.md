# Create React App easy 

This recreate the project in your IDE run 
### `npx create-react-app <name of your app>`

Then to start the project:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Delete all default markup.

For components create folder #components in #src folder and place there your react components.
In my project you can see: Form.jsx, FormInput.jsx, List.jsx.
You can create as many components as you want and name it how you like.

In this project Material-UI is used.
To install run:
### `npm install @material-ui/core`

Material-UI was developed based on the Roboto font.
The Roboto font will not be automatically loaded into Material-UI.
*So be sure to install it.*

To install run:
### `npm install fontsource-roboto`

Then import it in "index.js". To do so write in "index.js":
### `import 'fontsource-roboto'`;

To use icons run:
### `npm install @material-ui/icons`

Button example:
`
import  React from 'react';
import Button from "@material-ui/core/Button";

   <Button
        type="submit"
        alt="add-note"
        className={classes.root}
        onKeyPress={preventSubmit}
    >
        Add task
    </Button>
`

Then you can see the result - button "ADD TASK" look like:

![Button example](https://github.com/EvaMalinina/todo-list-react-hooks/blob/main/src/demo/button%20git.gif)

That was easy, right :)



