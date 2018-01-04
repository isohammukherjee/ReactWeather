var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return(
//       <div>
//         <h3>It is {temp}&#8451; in {location}...</h3>
//       </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;
  return(
    <div>
      <h3>It is {temp}&#8451; in {location}...</h3>
    </div>
  );
};

module.exports = WeatherMessage;
