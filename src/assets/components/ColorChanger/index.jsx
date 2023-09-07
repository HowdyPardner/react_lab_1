/*
2. Create a component that changes its background color when a button is clicked.
    • Create a new functional component called ColorChanger
    • Add a state property called backgroundColor to the component using the (usestate hook and set it to an initial color.
    • Add a button to the component that, when clicked, generates a random color and sets the backgroundColor state property to that color.
    • Use the backgroundColor state property to set the background color of the component.
*/
import { useState } from 'react'

function ColorChanger() {
    const [backgroundColor, setBackgroundColor] = useState('aqua');

    // create a function that will return a random color
    const generateRandomColor = () => {
        const r = Math.floor(Math.random() *256);
        const g = Math.floor(Math.random() *256);
        const b = Math.floor(Math.random() *256);
        
        return `rgb(${r}, ${g}, ${b})`
    }

    // create a function to handle the button event listener
    const handleButtonClick = () => {
        const newRandomColor = generateRandomColor();
        setBackgroundColor(newRandomColor);
    }

  return (
    <div>
        <button style={{backgroundColor: backgroundColor}} onClick={handleButtonClick}>Click me to change the  color!</button>
    </div>
  );
}

export default ColorChanger