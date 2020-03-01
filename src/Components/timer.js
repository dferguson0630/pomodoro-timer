import React, { Component } from 'react';


//TODO:
//1. Add a counter so that every 4 work sessions provides a 30 minute break session
//2. Extract particleOptions from App.js and minify



class Timer extends Component {
	state = {
		workTime: 25,
		breakTime: 5,
		player: "play",
		status: "work",
		clock: "25:00",
		timer: 1500
	}

	onFormSubmit = (event) => {
		event.preventDefault();
	}

	inputHandler = (event) => {
		event.preventDefault();
	}

	countdown = () => {
		let minutes;
		let seconds;
		let secondHand = setInterval(() => {
			minutes = Math.floor(this.state.timer / 60);
			seconds = this.state.timer - minutes * 60;
			seconds = seconds < 10 ? '0' + seconds: seconds;
			minutes = minutes < 10 ? '0' + minutes: minutes;
			this.setState({clock: minutes + ":" + seconds});

			if(this.state.timer > 0){
				if(this.state.player === "pause"){
					this.setState({timer: this.state.timer - 1});
				} else clearInterval(secondHand)
			}else if(this.state.timer === 0){
				clearInterval(secondHand);
				if(this.state.status === "work"){
					this.setState({status: "break"});
					this.setState({timer: this.state.breakTime * 60});
					this.togglePlayer();
				}else if(this.state.status === "break"){
					this.setState({status: "work"});
					this.setState({timer: this.state.workTime * 60});
					this.togglePlayer();
				}
			}
		}, 1000)
	}

	togglePlayer = (event) => {
		if(this.state.player === "play"){
			if(this.state.status === "work"){
				if(this.state.timer < this.state.workTime * 60){
					this.countdown()
				} else{
					this.setState({timer: this.state.workTime * 60});
					this.countdown();
				}

			}else if(this.state.status === "break"){
				if(this.state.timer < this.state.breakTime * 60){
					this.countdown();
				}else{
					this.setState({timer: this.state.breakTime * 60});
					this.countdown();
				}
			}
			this.setState({player: "pause"});
		}else if(this.state.player === "pause"){
			this.setState({player: "play"});
		}
	}

	increment = (event) => {
		if(event.target.name === "incrementWork"){
			this.setState({workTime: this.state.workTime + 1});
		} else if(event.target.name === "incrementBreak"){
			this.setState({breakTime: this.state.breakTime + 1});
		}
	}

	decrement = (event) => {
		if(event.target.name === "decrementWork"){
			this.setState({workTime: this.state.workTime - 1});
		} else if(event.target.name === "decrementBreak"){
			this.setState({breakTime: this.state.breakTime - 1});
		}
	}

	render(){
		let displayStatus = this.state.status;
		displayStatus = displayStatus.replace(displayStatus[0], displayStatus[0].toUpperCase());
		let displayPlayer = this.state.player;
		displayPlayer = displayPlayer.replace(displayPlayer[0], displayPlayer[0].toUpperCase());
		return(
			<div>
				<h1>{this.state.clock}</h1>
				<h3>{displayStatus}</h3>
				<form onSubmit={this.onFormSubmit}>
					<div className="form-container">
						<h4 className="label">Work Time</h4>
						<div className="form">
							<button name="incrementWork" onClick={this.increment} className="fa">&#xf0d8;</button>
							<h4>{this.state.workTime}</h4>
							<button name="decrementWork" onClick={this.decrement} className="fa">&#xf0d7;</button>
						</div>
						<h4 className="label">Break Time</h4>
						<div className="form">
							<button name="incrementBreak" onClick={this.increment} className="fa">&#xf0d8;</button>
							<h4>{this.state.breakTime}</h4>
							<button name="decrementBreak" onClick={this.decrement} className="fa">&#xf0d7;</button>
						</div>
					</div>
					<div className="player">
						<button className="play" onClick={this.togglePlayer}>{displayPlayer}</button>
					</div>

				</form>
			</div>
		);
	}


}
export default Timer;