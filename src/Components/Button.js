import React from 'react'
import { Link } from 'react-router-dom';

function Button() {
    return (
		<>
			<div>
				<button className="ui">
					<Link to="/about" className="ui">
						Browse the entire list by category
					</Link>
				</button>
			</div>,,,
		</>
	);
}

export default Button
