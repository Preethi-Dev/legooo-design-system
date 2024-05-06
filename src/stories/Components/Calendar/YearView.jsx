import React from "react";
import { months } from "./Calendar.helpers";
import { DataCell } from "./DataCell";
import styled from "styled-components";
import { nanoid } from "nanoid";

const YearViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0rem 0.5rem;
`;

export const YearView = (props) => {
  const currentMonth = months[props.day.getMonth()];
  return (
    <YearViewContainer>
      {months.map((month) => (
        <DataCell
          $day={month}
          mode={"year"}
          key={nanoid()}
          $today={month === months[new Date().getMonth()]}
          $inView={true}
          onClick={() => props.changeCurrentMonth(month)}
          $selected={month === currentMonth}
        />
      ))}
    </YearViewContainer>
  );
};
