import React, { useState, useEffect } from "react";
import { Segment, Grid } from "semantic-ui-react";

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const TimeInfos = () => {
    const [date, setTime] = useState(new Date());

    useEffect(() => {
        // Running side-effect when component mounted (componentDidMount)
        const myInterval = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
        // Clear side-effect when component unmount (componentWillUnmount)
        return () => {
          clearInterval(myInterval);
        }
    }, [])
        
    const pad = (num, digit) => {
        let zero = "";
        for (let i = 0; i < digit; ++i) zero += "0";
        return (zero + num).slice(-digit);
    }
    const h = pad(date.getHours(),2);
    const m = pad(date.getMinutes(),2);
    const s = pad(date.getSeconds(),2);
    const d = `${days[date.getDay()]}, ${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;    
    
    return (
        <Grid className="segmentdate" columns={4}>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <div>
                <p id="date">{d}</p>
                <h3 id="hours">{h}:</h3>
                <h3 id="minutes">{m}:</h3>
                <h3 id="seconds">{s}</h3>
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Segment compact></Segment>
      </Grid>
    );
}
  
export default TimeInfos;