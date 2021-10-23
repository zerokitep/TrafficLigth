//create your first component
import React, { useState } from "react";

//create your first component
const Traffic = () => {
	const [toggle, setToggle] = useState("off");
	const Red = "bg-danger";
	const Green = "bg-success";
	const Yellow = "bg-warning";
	const off = "bg-dark";
	let styles = "";

	return (
		<div className="text-center mt-5">
			<button onClick={() => setToggle("Green")}>
				{toggle == "Green" ? (
					<div className={Green}>On</div>
				) : (
					<div className={off}>Off</div>
				)}
			</button>

			<div className="text-center mt-5">
				<button onClick={() => setToggle("Yellow")}>
					{toggle == "Green" || toggle == "Red" ? (
						<div className={off}>Off</div>
					) : (
						<div className={Yellow}>On</div>
					)}
				</button>

				<div className="text-center mt-5">
					<button onClick={() => setToggle("Red")}>
						{toggle == "Yellow" || toggle == "Green" ? (
							<div className={off}>Off</div>
						) : (
							<div className={Red}>on</div>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Traffic;
