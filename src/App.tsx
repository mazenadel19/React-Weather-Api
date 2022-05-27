import React, { useState, useEffect } from 'react';

// component
import Table from './components/Table';

// static data
import Response  from "./response.json";

function App() {

	const [State, setState] = useState<any>({});

	const { ClimateAverages, current_condition, weather } = State;

	const Months = ClimateAverages && ClimateAverages[0].month;
	const ClimateAveragesHeads: string[] = Months && Object.keys(Months[0]);

	const CurrentConditions = current_condition && current_condition;
	const CurrentConditionHeads: string[] = CurrentConditions && Object.keys(CurrentConditions[0]);

	const Weather = weather && weather;
	const WeatherHeads: string[] = Weather && Object.keys(Weather[0]);

	useEffect(() => {
		setState(Response.data);
	}, []);

	return (
		<React.Fragment>
			<Table headers={ClimateAveragesHeads} body={Months} caption='Climate Averages' color="blue" />
			<Table headers={CurrentConditionHeads} body={CurrentConditions} caption='Current Condition' color="green" />
			<Table headers={WeatherHeads} body={Weather} caption='Weather' color="red" />
		</React.Fragment>
	);
}
export default App;
