import { useState } from "react";
import Icon from "@material-ui/core/Icon";
import { MonthCard, Mask, Selected, ButtonMonth, Months } from "./style";

export default function MonthSelector({ data, month, setMonth, theme }) {
  const [expanded, setExpanded] = useState(false);

  function expand() {
    const element = document.querySelector("#month-selector")
    if (expanded) {
      element.style.height = "2.5rem";
    } else {
      element.style.height = "25rem";
    }

    setExpanded(!expanded);
  }
  
  function MonthsGenerator() {
    console.log('generator', data)
    return data.map((item, index) => (
      <ButtonMonth theme={theme} key={index} onClick={() => setMonth(index)} >
        {item.name} - {item.year}
      </ButtonMonth>
    ))
  }

  return (
    <>
      {expanded && <Mask />}
      <MonthCard 
        id="month-selector"
        onClick={expand}
        theme={theme}
      >
        <Selected active={expanded}>
          {data[month].name} - {data[month].year}
          <Icon>arrow_drop_down</Icon>
        </Selected>
        {expanded && (
          <Months>
            <MonthsGenerator />
          </Months>
        )}
      </MonthCard>
    </>
  )
}