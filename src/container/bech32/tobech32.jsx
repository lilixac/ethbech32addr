import { toBech32 } from "@harmony-js/crypto";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Web3 from "web3";
const web3 = new Web3();

class ToBech32 extends Component {
	state = {
		address: "",
		addressOne: "",
		check: false,
		buttonPressed: false
	};

	handleChange = (e) => {
		e.preventDefault();
		this.setState({ address: e.target.value });
		if (web3.utils.isAddress(e.target.value)) {
			this.setState({ check: true });
			console.log(this.state.check);
		} else {
			this.setState({ check: false });
		}
	};

	convertToHarmony = () => {
		console.log(this.state.address);
		const addressOne = toBech32(`${this.state.address}`);
		this.setState({ addressOne: addressOne, buttonPressed:true });
	};

	render() {
		return (
			<Form>
				<h3> To Bech32: </h3>
				<Form.Control
					type="text"
					name="address"
					value={this.state.address}
					placeholder="Enter ETH Address"
					onChange={this.handleChange}
				/>
				<br />
				<Button disabled={!this.state.check} onClick={this.convertToHarmony}>
					{" "}
					CONVERT{" "}
				</Button>
				{this.state.buttonPressed ? (
					<p> The equivalent Bech32 address is : {this.state.addressOne} </p>
				) : null}
			</Form>
		);
	}
}

export default ToBech32;
