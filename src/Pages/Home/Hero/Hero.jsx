import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import grid from "../../../Assets/hero/grid.svg";
import top from "../../../Assets/hero/top.svg";
function Hero() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    let end = new Date("2/15/2022 3:00 PM");
    interval = setInterval(() => {
      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;
      let now = new Date();
      let nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      let distance = end - nowUTC;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (distance < 0) {
        clearInterval(interval.current);
        return;
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    const interval2 = interval.current;
    return () => {
      clearInterval(interval2);
    };
  });
  return (
    <div className="hero">
      <img src={grid} alt="" className="grid" />
      <img src={top} alt="" className="top-hero" />
      <h1 className="tactic">PRIVATE SALE STARTS IN</h1>
      <div className="timer-div">
        <div className="time-box">
          <h2 className="antikor">{timerDays}</h2>
          <p className="antikor">Days</p>
        </div>
        <div className="time-box">
          <h2 className="antikor">{timerHours}</h2>
          <p className="antikor">Hours</p>
        </div>
        <div className="time-box">
          <h2 className="antikor">{timerMinutes}</h2>
          <p className="antikor">Minutes</p>
        </div>
        <div className="time-box">
          <h2 className="antikor">{timerSeconds}</h2>
          <p className="antikor">Seconds</p>
        </div>
      </div>
      <button className="whitelist pop">Whitelist Now</button>
    </div>
  );
}

export default Hero;
