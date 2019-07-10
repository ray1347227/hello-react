import { useState, useEffect } from 'react';

function useDateTime() {
  const [myTime, setMyTime] = useState(null);
  useEffect(() => {
    setMyTime(new Date().toLocaleString());
  });
  return myTime;
}

export default useDateTime;