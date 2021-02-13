import Icon from "@material-ui/core/Icon";
import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "../../theme/ThemeProvider";
import {
  Header,
  Sidebar,
  AppContainer,
  HeaderTitle,
  SideButton,
  MenuButton
} from "../../styles/Application";
import TabController from "../../components/TabController";

export default function App() {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const [session, setSession] = useState();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const temp = sessionStorage.getItem("session");
    setSession(JSON.parse(temp));
  }, []);

  function logOut() {
    sessionStorage.clear();
    router.push('/');
  }

  if (!session) {
    return <p>Você não está logado...</p>;
  }

  function toggleMenu() {
    const sidebar = document.querySelector("#sidebar")
    console.log("entrei")

    sidebar.classList.toggle("show");
  }

  return (
    <AppContainer>
      <Head>
        <title>Finance App</title>
      </Head>
      <Header theme={theme}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <MenuButton onClick={toggleMenu} >
            <Icon style={{fontSize: 28}}>menu</Icon>
          </MenuButton>
          <HeaderTitle>Finance-app $</HeaderTitle>
        </div>
        <HeaderTitle size="18pt">{session.user.name}</HeaderTitle>
      </Header>

      <Sidebar theme={theme} id="sidebar">
        <SideButton
          theme={theme}
          active={activeTab === 1}
          onClick={() => setActiveTab(1)}
        >
          <Icon style={{fontSize: 30}}>home</Icon>
          <p>Dashboard</p>
        </SideButton>
        <SideButton
          theme={theme}
          active={activeTab === 2}
          onClick={() => setActiveTab(2)}
        >
          <Icon style={{fontSize: 30}}>date_range</Icon>
          <p>Gráfico Mensal</p>
        </SideButton>
        <SideButton
          theme={theme}
          active={activeTab === 3}
          onClick={() => setActiveTab(3)}
        >
          <Icon style={{fontSize: 30}}>account_circle</Icon>
          <p>Conta</p>
        </SideButton>
        <SideButton theme={theme} active={activeTab === 4} onClick={logOut}>
          <Icon style={{fontSize: 30}}>power_settings_new</Icon>
          <p>Sair</p>
        </SideButton>
      </Sidebar>

      <TabController theme={theme} tab={activeTab} />
    </AppContainer>
  );
}
