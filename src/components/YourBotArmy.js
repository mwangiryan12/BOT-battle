
import React from "react";
import Botcard from "./BotCard";

function YourBotArmy({ army, removeBort, selectBort }) {
	const bots = army;
	return (
		<div className="ui segment inverted olive bot-army">
			<div className="ui five column grid">
				<div className="row bot-army-row">
					{bots.map((bot) => (
						<Botcard
							key={bot.id}
							bot={bot}
							onSelectBot={selectBort}
							removeBort={removeBort}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default YourBotArmy;