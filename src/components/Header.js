import React from 'react';
import TextField from '@material-ui/core/TextField';

const Header = ({localData, setShownData}) => {


  const handleFilter = (value) => {
    const findedRows = [...localData].filter((row) => {
      return (
        row?.title.toLowerCase().includes(value.toLowerCase())
        || row?.author.toLowerCase().includes(value.toLowerCase())
        || row?.url.toLowerCase().includes(value.toLowerCase())
      )
    });

    setShownData([...findedRows]);
  };

    return (
        <div className="header">
            <TextField
              id="outlined-basic"
              label="Try to find"
              variant="outlined"
              onChange={(e) => handleFilter(e.target.value)}
            />

          <select
            id="filterByTitle"
            onChange={e => handleFilter(e.target.value)}
          >
            {localData.map((el, index) => (
              <option key={index} value={el.title}>{el.title}</option>
            ))}
          </select>

          <select
            id="filterByCreatedAt"
            onChange={e => handleFilter(e.target.value)}
          >
            {localData.map((el, index) => (
              <option key={index} value={el.created_at}>{el.created_at}</option>
            ))}
          </select>
        </div>
    );
};

export default Header;