const fetchData = (setLocalData, setShownData, localData, pageNumber = 0) => {
  fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNumber}`)
    .then(response => response.json())
    .then(data => {
      setLocalData(localData => [...localData, ...data.hits]);
      setShownData(localData => [...localData, ...data.hits]);
    });

  return null;
};

export default fetchData;