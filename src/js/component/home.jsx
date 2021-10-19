import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div>
			<div className="col-1 mx-auto bg-black" id="trafficTop"></div>
			<div id="container">
				<div className="col-1 mx-auto bg-black rounded p-2">
					<div
						className={
							color == "red"
								? "light bg-danger mx-auto m-2 rounded-circle selected"
								: "light bg-danger mx-auto m-2 rounded-circle"
						}
						onClick={() => setColor("red")}></div>
					<div
						className={
							color == "orange"
								? "light bg-warning mx-auto m-2 rounded-circle selected"
								: "light bg-warning mx-auto m-2 rounded-circle"
						}
						onClick={() => setColor("orange")}></div>
					<div
						className={
							color == "green"
								? "light bg-success mx-auto m-2 rounded-circle selected"
								: "light bg-success mx-auto m-2 rounded-circle"
						}
						onClick={() => setColor("green")}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
