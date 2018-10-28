## My React MD Page
#### React Markdown Application

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Description

* HTML, CSS, SCSS
* Marked library: [Marked.js] (https://cdnjs.com/libraries/marked)
**React components features:**
* Create React App
* Parent-Children relations between Editor and Previewer components;
* Initial state loads data from file with const string;
* Button to clear preloaded (or existing) text;
* Button to show example text;

### User story
#1: User can see a textarea input element.
#2: User can see a preview output element.
#3: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
#4: When the App first loads, the markdown placeholder in the Editor's field  contains valid markdown that represents following elements:
    * a header (H1 size);
    * a sub header (H2 size);
    * a link;
    * inline code;
    * a code block;
    * a list item;
    * a blockquote;
    * an image;
    * bolded text;
    * italic text;
    * crossing text.    
#5: When the App first loads, the default markdown placeholder in the Editor's field renders as HTML in the Previewer.
#6: When User enter markdown text into the Editor, the text is rendered as HTML in the Previewer as User types.
#7: When User clicks a link rendered by the App, the link is opened up in a new tab.
#8: The App interprets carriage returns and renders them as br (line break) elements.

![Jest watch mode](https://raw.githubusercontent.com/vickochetkov/my-md-page/master/img/11.gif)
