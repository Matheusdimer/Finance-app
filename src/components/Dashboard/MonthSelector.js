import { useState } from "react";
import Icon from "@material-ui/core/Icon";
import { MonthCard, Mask, Selected, ButtonMonth, Months } from "./style";

const monthsNames = [
  "",
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export default function MonthSelector({ data, month, setMonth, theme }) {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    const element = document.querySelector("#month-selector");
    if (expanded) {
      element.style.height = "2.5rem";
    } else {
      element.style.height = "25rem";
    }

    setExpanded(!expanded);
  }

  function MonthsGenerator() {
    return data.map((item, index) => (
      <ButtonMonth theme={theme} key={index} onClick={() => setMonth(index)}>
        {monthsNames[item.month]} - {item.year}
      </ButtonMonth>
    ));
  }

  return (
    <>
      {expanded && <Mask />}
      <MonthCard id="month-selector" onClick={expand} theme={theme}>
        {data.length !== 0 && (
          <Selected active={expanded}>
            {monthsNames[data[month]?.month]} - {data[month]?.year}
            <Icon>arrow_drop_down</Icon>
          </Selected>
        )}
        {expanded && (
          <Months>
            <MonthsGenerator />
          </Months>
        )}
      </MonthCard>
    </>
  );
}
