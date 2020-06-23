import React,{Fragment} from "react";
import ToBech32 from "./tobech32";
import FromBech32 from "./frombech32";
import Container from "react-bootstrap/Container";

const Bech32 = () => (
	<Fragment>
		<Container>
			<ToBech32 />
			<hr/>
			<FromBech32 />
		</Container>
	</Fragment>
);

export default Bech32;
