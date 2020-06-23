import { fromBech32 } from "@harmony-js/crypto";
import { isBech32Address } from "@harmony-js/utils";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Web3 from "web3";
// const web3 = new Web3();

class FromBech32 extends Component {
	state = {
		address: "",
		addressEth: "",
		check: false,
		buttonPressed: false,
	};

	handleChange = (e) => {
		e.preventDefault();
		this.setState({ address: e.target.value });
		if (isBech32Address(e.target.value)) {
			this.setState({ check: true });
		}
	};

	convertToHarmony = () => {
		console.log(this.state.address);
		const addressEth = fromBech32(`${this.state.address}`);
		this.setState({ addressEth: addressEth, buttonPressed: true });
	};

	render() {
		return (
			<Form>
				<h3> To ETH: </h3>
				<Form.Control
					type="text"
					name="address"
					value={this.state.address}
					placeholder="Enter Bech32 Address"
					onChange={this.handleChange}
				/>
				<br />
				<Button disabled={!this.state.check} onClick={this.convertToHarmony}>
					{" "}
					CONVERT{" "}
				</Button>
				{this.state.buttonPressed ? (
					<p> The equivalent ETH address is : {this.state.addressEth} </p>
				) : null}
			</Form>
		);
	}
}

export default FromBech32;