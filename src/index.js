import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import markl from './markl.png'; 
import img1 from './03440001.jpg';
import img2 from './DSCN6117.JPG';
import img3 from './DSCN6120.JPG';
import img4 from './IMG_2314.jpg';
import img5 from './IMG_2964.jpg';
import img6 from './IMG_4562.jpg';
import img7 from './IMG_4748.jpg';
import img8 from './IMG_4806.jpg';

// Functional Component using useState
function Counter() {
  // Declare a state variable 'count' and an updater function 'setCount'
  const [count, setCount] = useState(0); // Initial state is 0

  // Function to handle the button click and update the state
  const handleIncrement = () => {
    setCount(count + 1); // Calling setCount triggers a re-render
  };

  // Function to create heart burst animation
  const handleHeartBurst = (e) => {
    handleIncrement();

    if (count == 15) {
      alert("15 belly rubs is good but not enough!!! almost like spending 15 months together, but it still not being enough ;)");
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Create 8 hearts bursting outward
      for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.textContent = '❤️';
        heart.className = 'heart-burst';
        heart.setAttribute('data-angle', i * 45);
        // Position heart at exact click point, centered
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.margin = '-1rem 0 0 -1rem'; // Approximate emoji center offset
        
        document.body.appendChild(heart);
        
        // Remove the heart element after animation completes
        setTimeout(() => {
          heart.remove();
        }, 3000);
      }
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleHeartBurst}>
        <img src={markl} className="rotate-slow" alt="click markl to pet"/>
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="title-header text-center spacing-lg">    
        <h1>~ Presenting our 2nd Valentine's together ~</h1>
        <h3>to: jazzy dill</h3>
        <h3>from: your sabby</h3>
        <br></br>
        <p>the best shrimpster in my life</p>
      </div>

      <div className="accent-bg spacing-md">
        <h3>I LOVE YOU MORE THAN MARKL LOVES BELLY RUBS &lt;3</h3>
        <p>click Markl to give him belly rubs! make sure you give him enough...</p>
        <p>belly rubs:</p> <Counter />
      </div>

      <div className="spacing-md">
        <h4>Some of my fav pics of you and us:</h4>
        <div className="gallery">
          <img src={img1} alt="us1" />
          <img src={img2} alt="us2" />
          <img src={img3} alt="us3" />
          <img src={img4} alt="us4" />
          <img src={img5} alt="us5" />
          <img src={img6} alt="us6" />
          <img src={img7} alt="us7" />
          <img src={img8} alt="us8" />
        </div>
      </div>

    </div>

  </React.StrictMode>
);