import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";
import { DataCell } from "./DataCell";

const CalendarDay = styled.div`
  cursor: pointer;
`;

export const CalendarDays = (props) => {
  let firstDayOfMonth = new Date(
    props.day.getFullYear(),
    props.day.getMonth(),
    1
  );
  let weekDayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];

  // console.log("initial date: " + firstDayOfMonth);

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekDayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekDayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }
    // console.log("final date: " + firstDayOfMonth);

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === props.day.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === props.day.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  return currentDays.map((currentDay) => (
    <CalendarDay
      key={nanoid()}
      onClick={() => props.changeCurrentDay(currentDay)}
    >
      <DataCell
        $day={currentDay.number}
        $inView={currentDay.currentMonth}
        $today={new Date().toDateString() === currentDay.date.toDateString()}
        $selected={currentDay.selected}
      />
    </CalendarDay>
  ));
};
