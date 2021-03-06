var React = require('react');

var CountdownForm = React.createClass({
	onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    console.log("Input count: ", $('input').length);

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    } else {
    	alert('Please enter a valid countdown time');
    	this.refs.seconds.value = '';
    }
  },
	render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start Countdown</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;