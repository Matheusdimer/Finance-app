import Account from './Account/Account';
import Dashboard from './Dashboard/Dashboard';
import MensalView from './Mensal/MensalView';

export default function TabController({ tab, theme }) {
  switch (tab) {
    case 1:
      return <Dashboard theme={theme} />
    case 2:
      return <MensalView theme={theme} />
    case 3:
      return <Account theme={theme} />
  }
}