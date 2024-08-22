import React, { useState } from 'react';

// Mock data mapping countries to their states
const countryToStatesMap = {
  USA: ['California', 'Texas', 'New York', 'Florida'],
  India: ['Karnataka', 'Maharashtra', 'Tamil Nadu', 'Gujarat'],
  Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
  // Add more countries and states as needed
};

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState('View All');
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (selectedFilter === 'View All') {
      if (inputValue === '') {
        // Display all countries and their states
        const allResults = Object.entries(countryToStatesMap).flatMap(
          ([country, states]) => states.map((state) => ({ country, state }))
        );
        setSearchResults(allResults);
      } else {
        // Search for the specific country
        const states = countryToStatesMap[inputValue];
        if (states) {
          const results = states.map((state) => ({ country: inputValue, state }));
          setSearchResults(results);
        } else {
          alert('No states found for the entered country.');
          setSearchResults([]);
        }
      }
    } else {
      // Implement other search logic here if necessary
      console.log(`Searching for ${inputValue} in ${selectedFilter}`);
    }
  };

  
  const handleClear = () => {
    setInputValue('');
    setSearchResults([]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Account Management</h2>
      <div style={{ marginBottom: '10px' }}>
        <select value={selectedFilter} onChange={handleFilterChange}>
          <option value="View All">View All</option>
          <option value="Transmitted Account #">Transmitted Account #</option>
          <option value="TIN">TIN</option>
          <option value="Rep Code">Rep Code</option>
          <option value="Fund Family">Fund Family</option>
          <option value="GDC">GDC</option>
          <option value="Received Date">Received Date</option>
          <option value="Forfeit Date">Forfeit Date</option>
          <option value="Transaction Source">Transaction Source</option>
          <option value="CUSIP">CUSIP</option>
          <option value="Notes">Notes</option>
          <option value="Participant ID">Participant ID</option>
        </select>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder={selectedFilter === 'View All' ? 'Enter Country Name' : `${selectedFilter} Required`} 
          style={{ marginLeft: '10px' }}
        />
        <button onClick={handleSearch} style={{ marginLeft: '10px' }}>Search</button>
        <button onClick={handleClear} style={{ marginLeft: '10px' }}>Clear</button>
      </div>
      <div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Country</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.country}</td>
                  <td>{result.state}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
