import React, { useEffect, useState } from 'react';
import './App.css';

import Header from "./components/Header";
import DataTable from "./components/DataTable";
import fetchData from "./helpers/fetchData";

function App() {
  const [localData, setLocalData] = useState([]);
  const [shownData, setShownData] = useState([]);


  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setTimeout(function fetchAgain() {
      fetchData(setLocalData, setShownData, localData, pageNumber + 1);
      setPageNumber(pageNumber => pageNumber++);
      setTimeout(fetchAgain, 10000);
    }, 10);
  }, []);


  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };


  const trackScrolling = () => {
    const wrappedElement = document.getElementById('list');
    if (isBottom(wrappedElement)) {
      fetchData(setLocalData, setShownData, localData, pageNumber + 1);
      setPageNumber(pageNumber => pageNumber++);

      document.removeEventListener('scroll', trackScrolling);
      setTimeout(() => {
        document.addEventListener('scroll', trackScrolling);
      }, 250)
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', trackScrolling);
    return () => {
      document.removeEventListener('scroll', trackScrolling);
    }
  }, []);


  return (
    <div className="container" id="list">
      <Header
        localData={localData}
        setShownData={setShownData}
      />

      <DataTable
        shownData={shownData}
      />
    </div>
  );
}

export default App;
