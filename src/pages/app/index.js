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
import { RowContent } from "../../styles/General";

export default function App() {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const [session, setSession] = useState();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const temp = sessionStorage.getItem("session");
    if (temp) {
      setSession(JSON.parse(temp));  
    } else {
      router.push("/login");
    }
    
  }, []);

  function logOut() {
    sessionStorage.clear();
    router.push('/');
  }

  function toggleMenu() {
    const sidebar = document.querySelector("#sidebar")

    sidebar.classList.toggle("show");
  }

  function switchTab(tabNumber) {
    setActiveTab(tabNumber);
    toggleMenu();
  }

  if (!session) return <div>Você não está logado...</div>

  return (
    <AppContainer>
      <Head>
        <title>Finance App</title>
      </Head>
      <Header theme={theme}>
        <RowContent>
          <MenuButton onClick={toggleMenu} >
            <Icon style={{fontSize: 28}}>menu</Icon>
          </MenuButton>
          <HeaderTitle>Finance-app $</HeaderTitle>
        </RowContent>
        <HeaderTitle size="18pt">{session.user.name}</HeaderTitle>
      </Header>

      <Sidebar theme={theme} id="sidebar">
        <SideButton
          theme={theme}
          active={activeTab === 1}
          onClick={() => switchTab(1)}
        >
          <Icon style={{fontSize: 30}}>home</Icon>
          <p>Dashboard</p>
        </SideButton>
        <SideButton
          theme={theme}
          active={activeTab === 2}
          onClick={() => switchTab(2)}
        >
          <Icon style={{fontSize: 30}}>date_range</Icon>
          <p>Gráfico Mensal</p>
        </SideButton>
        <SideButton
          theme={theme}
          active={activeTab === 3}
          onClick={() => switchTab(3)}
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
