import React from 'react';

import createPlotlyComponent from 'react-plotly.js/factory';

const Plotly = window.Plotly;
const Plot = createPlotlyComponent(Plotly);

class App extends React.Component {
  render() {
    return (
      <main>
      <div>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 800, height: 600, title: 'A Fancy Plot'} }
      />
      </div>

      <div>
     <Plot
       data={[
         {
           x: [1, 2, 3],
           y: [2, 6, 3],
           type: 'scatter',
           mode: 'lines+markers',
           marker: {color: 'red'},
         },
         {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
       ]}
       layout={ {width: 500, height: 300, title: 'A Fancy Plot'} }
     />
    </div>
    </main>
    );
  }
}

export default App;