import React, {useState, useEffect} from 'react';
import './style.css'; 

// to stop image at intro --> useEffect --> set function and stop point (y-offset), 
// scroll handler (within the useEffect) --> window.pageyoffset 

export default function Home(props) {

  const [isScrolling, setIsScrolling] = useState(null); 

  useEffect(() => {

    function scrollHandler () {
      const frame = document.getElementById('hello');
      const target = document.getElementById('intro');

      frame.scrollTo(0, target)
    }

    if(!isScrolling === null) {
      scrollHandler();
    }
  })

  return (
    <div className='home'>
<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300&family=League+Script&family=Playfair+Display:wght@900&display=swap');
</style>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<div className='name-plate'>
      <h1>hello</h1>
      </div>
    </div>
  );
}
