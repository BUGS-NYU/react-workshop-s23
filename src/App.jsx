// Imports that are required for this app to work
// Feel free to replace avatar with any other image
// If you decide to use your own image, make sure to upload it to src/assets
import { useState } from 'react';
import avatarPic from './assets/avatar.png';
import './App.css';

// String constants that define the theme of the website
const LIGHT = 'LIGHT';
const DARK = 'DARK';

// Step 1
//
const LINKS = [
  { title: 'Website', url: 'https://www.bugsnyu.com' }
  // Extend this array with your desired links
  // { title: string, url: string }
];

// Requires two props: `imageSrc` and `name`
// `imageSrc` - avatar image import from the assets
// `name` - the desired name that will be displayed below the avatar
const Avatar = ({ imageSrc, name }) => (
  <>
    <img src={imageSrc} alt='' className='avatar' />
    <h1>{name}</h1>
  </>
);

// Requires two props: `title` and `url`
// `title` - link button title
// `url` - the url that the link button links to
const LinkButton = ({ title, url }) => (
  <a target='_blank' href={url} className='link'>
    {title}
  </a>
);

// Require a single prop: `toggleTheme`
// `toggleTheme` - reference to a function that will toggle the state of the theme
const ThemeTogglerButton = ({ toggleTheme }) => (
  <button className='theme-toggler' onClick={toggleTheme}>
    Toggle theme
  </button>
);

const App = () => {
  // State hook that is responsible for holding the information about website's current theme
  // `currentTheme` variable is where you access the data about the current theme
  // `setCurrentTheme` is a function that allows you to change the state
  // On initial render of the component, the theme will be set to `DARK`
  const [currentTheme, setCurrentTheme] = useState(DARK);

  // Step 2
  //
  // Constant var that maps all of the links
  // Hint: use <LinkButton /> component and `.map` method for `LINKS` array
  // Docs reference: https://react.dev/learn/conditional-rendering
  const mapLinks = null; // TODO: remove `null` and complete this constant

  // Step 4
  //
  // Constant var that holds the appropriate className string based on the theme state
  // If the currentTheme is `DARK` then the className string should be `container`
  // If the currentTheme is `LIGHT` then the className string should be `container light`
  // Hint: use ternary operator and check the `currentTheme` value
  // Docs reference: https://react.dev/learn/conditional-rendering
  const containerClassName = null; // TODO: remove `null` and complete this constant

  // Step 5
  //
  // Function that toggles the state of the current theme
  // If the current theme is `DARK` then toggle to `LIGHT`, else toggle to `DARK`
  // Hint: use `setCurrentTheme` to toggle the state
  // Docs reference: https://react.dev/learn/state-a-components-memory
  const toggleTheme = () => {}; // TODO: complete this function

  // Step 3
  //
  // Complete the App component return statement below:
  // - Add <ThemeTogglerButton /> component with required props
  // - Add <Avatar /> component with required props
  // - Remove the comment in curly brackets (including the curly brackets)
  // Hint: dont forget to pass the props (you will find required props near the component definitions above)
  // Docs reference: https://react.dev/learn/passing-props-to-a-component
  return (
    <div className={containerClassName}>
      {/* Complete the component in Step 3 and remove this comment */}
      {mapLinks}
    </div>
  );
};

export default App;
