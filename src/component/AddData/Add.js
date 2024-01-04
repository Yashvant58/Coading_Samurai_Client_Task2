import React, { useState } from 'react';
const Add = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [work, setWork] = useState('');
  const [level, setLevel] = useState('');
  const [position, setPosition] = useState('');
  const handleInputChange = (e, setterFunction) => {
    setterFunction(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `https://coding-samurai-server.onrender.com/todo`;
    const formData = {
      startTime,
      endTime,
      work,
      level,
      position,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      await response.json();
      alert("Data saved successfully...");
      setStartTime('');
      setEndTime('');
      setWork('');
      setLevel('');
      setPosition('');
    } catch (error) {
      console.error('Error saving data:', error);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <table className="table">
        <thead>
          <tr>
           <th scope="col">Sr. No</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Work</th>
            <th scope="col">Level</th>
            <th scope="col">Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>

     
          <th scope="row">1</th>
            <td>
            <input type="time" value={startTime} onChange={(e) => handleInputChange(e, setStartTime)} required/>
            </td>
            <td>
          <input type="time" value={endTime} onChange={(e) => handleInputChange(e, setEndTime)}required />
            </td>
    <td>
    <input type="text" value={work} onChange={(e) => handleInputChange(e, setWork)} required/>
    </td>
    <td>
    <input type="Number" min={0} max={10} value={level} onChange={(e) => handleInputChange(e, setLevel)} required/>
    </td>
    <td>
    <select value={position} onChange={(e) => handleInputChange(e, setPosition)} required>
          <option value="pending">select</option>
          <option value="pending">pending</option>
          <option vlaue="completed">completed</option>
          <option value="failed">failed</option>
          <option value="live">live</option>
        </select>
    </td>
    </tr>
        </tbody>
      </table>
      <br />

      <button type="submit">schedule</button>
    </form>
  );
};

export default Add;
