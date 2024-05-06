import React, { useEffect, useState } from "react";
import { GlobalStyle, findTokenValue } from "../../../utility";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { CalendarDays } from "./CalendarDays";
import { generateYears, months, weekdays } from "./Calendar.helpers";
import { YearView } from "./YearView";

const CalendarContainer = styled.div`
  width: 910px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => findTokenValue(theme["Calendar-colorText"], theme)};
`;
const CalendarHeader = styled.div`
  display: flex;
  padding: 2rem 0rem;
  justify-content: end;
  gap: 0.5rem;
`;
const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const TableHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
const WeekDay = styled.div`
  width: 7.625rem;
  text-align: right;
`;
const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0rem 0.5rem;
`;
const ModeContainer = styled.div`
  display: flex;
`;
const Mode = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => findTokenValue(theme["Calendar-colorText"], theme)};
  padding: 0.3125rem 1rem;
  border: 1px solid #d9d9d9;
  cursor: pointer;
`;

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(
    months[currentDay.getMonth()]
  );
  const [selectedDate, setSelectedDate] = useState(currentDay.getDate());
  const [selectedYear, setSelectedYear] = useState(currentDay.getFullYear());
  const [isMonthView, setIsMonthView] = useState(true);

  useEffect(() => {
    // console.log(selectedYear);
    // console.log(selectedMonth);
    // console.log(selectedDate);

    setCurrentDay(
      new Date(selectedYear, months.indexOf(selectedMonth), selectedDate)
    );
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    setCurrentDay(new Date());
  }, []);

  const changeCurrentDay = (day) => {
    setSelectedMonth(months[day.month]);
    setSelectedYear(day.year);
    setSelectedDate(day.number);
    setCurrentDay(new Date(day.year, day.month, day.number));
  };
  const changeCurrentMonth = (month) => {
    setSelectedMonth(month);
  };

  const handleChangeMonth = (e) => {
    setSelectedMonth(e.target.value);
  };
  const handleChangeYear = (e) => {
    setSelectedYear(e.target.value);
  };
  const handleViewClick = () => {
    setIsMonthView(!isMonthView);
  };

  return (
    <CalendarContainer>
      <GlobalStyle />
      <CalendarHeader>
        <h2 style={{ marginRight: "auto" }}>
          {months[currentDay.getMonth()]} {currentDay.getFullYear()}
        </h2>
        <select
          name="choice"
          value={selectedMonth}
          onChange={handleChangeMonth}
        >
          {months.map((month) => (
            <option value={month} key={nanoid()}>
              {month}
            </option>
          ))}
        </select>
        <select name="choice" value={selectedYear} onChange={handleChangeYear}>
          {generateYears().map((year) => (
            <option value={year} key={nanoid()}>
              {year}
            </option>
          ))}
        </select>
        <ModeContainer>
          <Mode
            onClick={handleViewClick}
            style={{
              color: isMonthView && "rgba(24, 144, 255, 1)",
              borderColor: isMonthView && "rgba(24, 144, 255, 1)",
            }}
          >
            Month
          </Mode>
          <Mode
            onClick={handleViewClick}
            style={{
              color: !isMonthView && "rgba(24, 144, 255, 1)",
              borderColor: !isMonthView && "rgba(24, 144, 255, 1)",
            }}
          >
            Year
          </Mode>
        </ModeContainer>
      </CalendarHeader>
      <CalendarBody>
        {isMonthView ? (
          <>
            <TableHeader>
              {weekdays.map((weekday) => (
                <WeekDay key={nanoid()}>{weekday}</WeekDay>
              ))}
            </TableHeader>
            <Table>
              <CalendarDays
                day={currentDay}
                changeCurrentDay={changeCurrentDay}
              />
            </Table>
          </>
        ) : (
          <YearView day={currentDay} changeCurrentMonth={changeCurrentMonth} />
        )}
      </CalendarBody>
    </CalendarContainer>
  );
};

export default Calendar;
