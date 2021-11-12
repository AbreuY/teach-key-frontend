import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

export const CustomDatePicker = ({ dobData }) => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<DatePicker
			selected={startDate}
			onChange={date => {
				setStartDate(date);
				dobData(date.toLocaleDateString());
			}}
			peekNextMonth
			showMonthDropdown
			showYearDropdown
			dropdownMode="select"
			dateFormat="dd/MM/yyyy"
		/>
	);
};
CustomDatePicker.propTypes = {
	dobData: PropTypes.func
};
