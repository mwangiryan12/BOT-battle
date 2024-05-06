
import React from "react";
import Botcard from "./BotCard";
function BotCollection({ bots, selectBot }) {
	return (
		<div className="ui four column grid">
			<div className="row">
				{bots.map((bot) => (
					<Botcard key={bot.id} bot={bot} onSelectBot={selectBot} />
				))}
			</div>
		</div>
	);
}

export default BotCollection;
