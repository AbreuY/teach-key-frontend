import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from "../../store/appContext";
import { addDays } from "date-fns";

export const CustomDatePicker = () => {
	const [startDate, setStartDate] = useState(new Date());
	const { store, actions } = useContext(AppContext);
	let dob = store.dataForUser["dob"] == undefined ? new Date() : actions.convertToDate(store.dataForUser["dob"]);

	return (
		<DatePicker
			selected={dob}
			onChange={date => {
				actions.setDob(date.toLocaleDateString());
			}}
			peekNextMonth
			showMonthDropdown
			showYearDropdown
			dropdownMode="select"
			dateFormat="dd/MM/yyyy"
			maxDate={addDays(new Date(), 0)}
		/>
	);
};
