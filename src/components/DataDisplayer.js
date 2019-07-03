import React from 'react';
import DataRetriever from './DataRetriever';

class DataDisplayer extends React.Component {

  state = {dataAvailable: false, data:null};

  componentDidMount(){

    new DataRetriever().Retrieve(title => {
      this.setState({ dataAvailable: true, data: title});
    })

  }

  render(){
    if (!this.state.dataAvailable) return <div>Data not Available</div>;

    return (
      <div> Data Value: {this.state.data} </div>
    )
  }
};

export default DataDisplayer;