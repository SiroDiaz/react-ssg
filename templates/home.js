import htm from "htm";
import React from "react";
const html = htm.bind(React.createElement);

export const title = "Home!";

export const page = html`
	<div>
		<h1>Hello World!</h1>
		<p>A simple SSG Site</p>
	</div>
`;