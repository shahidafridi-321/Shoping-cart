import React from "react";
import { Link } from "react-router-dom";

export const NavBarItem = ({ links, classes, itemsStyles }) => {
	return (
		<ul className={classes}>
			{links.map((link) => (
				<li key={link}>
					<Link to={link.link} className={itemsStyles}>
						{link.title}
					</Link>
				</li>
			))}
		</ul>
	);
};
