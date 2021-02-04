import { useState, useEffect } from "react";
import formatNumber from "../../utils/formatNumber";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import {
  MainContainer,
  BalanceGrid,
  InCard,
  OutCard,
  BalanceCard,
  InOutCard,
  Money,
  Item,
  AddButton,
  TransactionMoney,
  DeleteButton,
  AddCard,
  Mask,
  Input,
  CancelButton,
  SaveButton,
  TabHeader,
  TabsContainer,
  TabButton,
  ScrollButton,
} from "./style";
import { Icon } from "@material-ui/core";

export default function Dashboard({ theme }) {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState(() => {
    let date = new Date();
    return date.getMonth() + 1;
  });
  const [balance, setBalance] = useState({
    income: "0,00",
    expenses: "0,00",
    balance: "0,00",
  });
  const [showAddCard, setShowAddCard] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  function calcBalance() {
    let income = 0;
    let expenses = 0;
    let balance = 0;

    for (let i = 0; i < data.length; i++) {
      const element = data[i];

      if (element.type === "input") {
        income += element.value;
      } else if (element.type === "output") {
        expenses += element.value;
      }
    }

    balance = income - expenses;
    balance = formatNumber(balance);
    income = formatNumber(income);
    expenses = formatNumber(expenses);

    setBalance({
      income,
      expenses,
      balance,
    });
  }

  useEffect(calcBalance, [data]);

  function AddTransaction() {
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");

    function saveTransaction(name, value, type, date) {
      if (
        name.length === 0 ||
        value.length === 0 ||
        type.length === 0 ||
        date.length === 0
      ) {
        return;
      }

      let temp_type;
      if (type === "Entrada") {
        temp_type = "input";
      } else if (type === "Despesa") {
        temp_type = "output";
      } else {
        return;
      }

      let temp_data = data;
      let temp_value = parseFloat(value);
      let temp_date = new Date(date);

      temp_date = temp_date.toLocaleDateString("pt-BR");

      temp_data.push({
        name,
        value: temp_value,
        type: temp_type,
        date: temp_date,
      });

      setData(temp_data);
      calcBalance();
      setShowAddCard(false);
    }

    return (
      <Mask>
        <AddCard theme={theme}>
          <h2>Nova Transação</h2>
          <Input
            placeholder="Descrição"
            type="text"
            onChange={({ target }) => setName(target.value)}
          />
          <div style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
            <Input
              placeholder="R$ 0,00"
              type="number"
              step="0.01"
              onChange={({ target }) => setValue(target.value)}
            />
            <Input
              placeholder="Tipo"
              list="type"
              onChange={({ target }) => setType(target.value)}
            />
            <datalist id="type">
              <option value="Entrada" />
              <option value="Despesa" />
            </datalist>
          </div>
          <Input
            placeholder="dd/mm/yyyy"
            type="date"
            onChange={({ target }) => setDate(target.value)}
          />
          <div style={{ display: "flex", flexDirection: "row", columnGap: 10 }}>
            <CancelButton onClick={() => setShowAddCard(false)}>
              Cancelar
            </CancelButton>
            <SaveButton
              onClick={() => saveTransaction(name, value, type, date)}
            >
              Salvar
            </SaveButton>
          </div>
        </AddCard>
      </Mask>
    );
  }

  function deleteItem(index) {
    let temp_data = data;

    if (temp_data.length === 1) {
      temp_data = [];
    } else {
      temp_data.splice(index, 1);
    }

    setData(temp_data);
    calcBalance();
  }

  return (
    <MainContainer theme={theme}>
      {showAddCard && <AddTransaction />}
      
      <BalanceGrid theme={theme}>
        <InCard>
          <h3>Entradas:</h3>
          <Money>R$ {balance.income}</Money>
        </InCard>

        <OutCard>
          <h3>Despesas:</h3>
          <Money>R$ {balance.expenses}</Money>
        </OutCard>

        <BalanceCard>
          <h3>$ Balanço:</h3>
          <Money>R$ {balance.balance}</Money>
        </BalanceCard>
      </BalanceGrid>

      <InOutCard theme={theme}>
        <AddButton theme={theme} onClick={() => setShowAddCard(!showAddCard)}>
          + Nova transação
        </AddButton>
        <Items data={data} theme={theme} deleteItem={deleteItem} />
      </InOutCard>
    </MainContainer>
  );
}

function Items({ data, theme, deleteItem }) {
  const Rows = data.map((item, index) => (
    <Item key={item.name} theme={theme}>
      <p>{item.name}</p>
      <TransactionMoney neg={item.type === "output"}>
        {item.type === "output" ? "- " : "+ "}R$ {formatNumber(item.value)}
      </TransactionMoney>
      <p>{item.date}</p>

      <DeleteButton onClick={() => deleteItem(index)}>
        highlight_off
      </DeleteButton>
    </Item>
  ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: 8,
      }}
    >
      <Item theme={theme}>
        <strong>Descrição</strong>
        <strong>Valor</strong>
        <strong>Data</strong>
      </Item>
      {Rows}
      {data.length === 0 && (
        <p style={{ alignSelf: "center" }}>Nenhuma transação</p>
      )}
    </div>
  );
}
