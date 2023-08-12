import React, {useState, useEffect} from 'react';
import './style.css'; 
import headshot from '../images/Millie Vogel-934 copy.jpg' 

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

    <div className='name-plate'>
      <h1>Millie Vogel</h1>
        <div className='homeimg'>
            <img src= {headshot} />
        </div>
    </div>
    </div>
  );
}
