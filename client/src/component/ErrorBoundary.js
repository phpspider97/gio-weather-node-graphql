import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => {
      setHasError(true);
    };

    window.addEventListener('error', handleError);

    // return () => {
    //   window.removeEventListener('error', handleError);
    // }
  }, [])

  const errorResolved = () => {
    setHasError(false)
  }

  if (hasError) {
    return(
        <div className="flex-container"> 
            <div className="flex-box">
                <div className="first-div" style={{fontSize:'34px'}}> 
                    <span className="image-container"> 
                        <img src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png" className="weatherImage" />
                    </span><br /><br /><br /><br /><br /><br />
                    <button className="btn fill-button" onClick={errorResolved}> Go Back</button>
                </div>
            </div>
        </div> 
    ) 
  }

  return children;
};

export default ErrorBoundary