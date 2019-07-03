class DataRetriever {
 
  Retrieve(callbackMethod){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then( response => {
        return response.json();
      })
      .then( responseJson => callbackMethod(responseJson.title));
  }
};

export default DataRetriever;