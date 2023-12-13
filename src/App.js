import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [hour] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(false)

  useEffect(() => {
    let Interval
    if (timer) {
      Interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          setTimer(false);
          clearInterval(Interval);
        } else {
          if (seconds === 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
    }

    return () => {
      clearInterval(Interval);
    };
  }, [timer, minutes, seconds]);


  const MinutesChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setMinutes(isNaN(value) ? 0 : value);
    if (e.target.value === '') {
      setSeconds(0);
    }
  };

  const StartTimer = () => {
    if (!timer) {
      setTimer(true);
    }
  };

  const ResetTimer = () => {
    setTimer(false);
    setMinutes(0);
    setSeconds(0);
  };

  const PauseTimer = () => {
    setTimer(false);
  };

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };
  return (
    <>
      <div className='App'>
        <p>Enter Minutes</p>
        <input type='text' name='name' onChange={MinutesChange} />
        <h1>Timer: {formatTime(hour)} : {formatTime(minutes)} : {formatTime(seconds)}</h1>
        <button onClick={StartTimer}>Start</button>
        <button onClick={PauseTimer}>Stop</button>
        <button onClick={ResetTimer}>Reset</button>
      </div>
    </>
  )
}
export default App











