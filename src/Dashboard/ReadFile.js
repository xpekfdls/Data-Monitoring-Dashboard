import React, {Component} from 'react';


export default class ReadFile extends Component {
  handleChange(e){
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = () => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(file);

    this.props.onDataChange("Heelo");
  }

  render(){
    return (
      <div>
        <input type="file" onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
