import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ReadFile extends Component {
  constructor(props){
    super(props);
  }


  handleChange(files){
    console.log(this);
    let file = files.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let data = fileReader.result;
      console.log(data);
      //this.props.handleReaddata(data); 

      var time = [];
      let parsing = data.split("\n");
      var i =0;
      var j =0;
      var datarr = new Array(parsing.length);

      for (i=0;i<parsing.length;i++){
        if(parsing[i].split("|").length>3){
            datarr[i] = new Array(parsing[i].split("|").length-1);
        }
      }
      console.log(datarr);

      for (i=0;i<parsing.length;i++){  

        if(parsing[i].split("|").length>3){

          time[i] = (parseInt(parsing[i].split("|")[0].split(":")[1])*60+
          parseInt(parsing[i].split("|")[0].split(":")[2].split(",")[0])+
          parseInt(parsing[i].split("|")[0].split(":")[2].split(",")[1])/1000);
          for (j=0;j<parsing[i].split("|").length-1;j++){
              datarr[i][j] = parsing[i].split("|")[j+1];
          }
        }
      }
      console.log(datarr);
      this.props.handleParsedata(datarr);
    };
    fileReader.readAsText(file);

  }

  render(){
    return (
      <div>
        <input type="file" onChange={event => this.handleChange(event)} onClick={this.props.handleIncrement} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        number: state.fileFormatter.number,
        data: state.fileFormatter.data,
    };
};

const mapDispatchProps = (dispatch) => {
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleReaddata: (data) => { dispatch(actions.readdata(data))},
        handleParsedata: (data) => {dispatch(actions.parsedata(data))},
    };
};

export default connect(mapStateToProps, mapDispatchProps)(ReadFile);