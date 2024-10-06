// import { useEffect } from 'react';

// const useOutsideClick = (ref, handler) => {
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (ref.current && !ref.current.contains(event.target)) {
//         handler();
//       }
//     };
    
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [ref, handler]);
// };

// export default useOutsideClick;
import { useEffect } from 'react';

const useOutsideClick = (ref, buttonRef, isVisible, setIsVisible) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the ref and not on the button itself
      if (
        ref.current && 
        !ref.current.contains(event.target) && 
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        setIsVisible(false); // Hide the component
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, buttonRef, isVisible, setIsVisible]);
};

export default useOutsideClick;
