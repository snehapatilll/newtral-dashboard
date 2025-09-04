import styles from './App.module.scss';
import WorkspaceGrid from "./components/WorkspaceGrid";
import QuickActions from "./components/QuickActions";
import HelpSupport from "./components/HelpSupport";
import InvitedCompanies from "./components/InvitedCompanies";
import ModuleManagement from "./components/ModuleManagement";
import UserCard from './components/UserCard';
function App() {
  return (
    <div className={styles.App}>
      <UserCard/>
      <WorkspaceGrid/>
      <InvitedCompanies/>
      <QuickActions/>
      <ModuleManagement/>
      <HelpSupport/>

    </div>
  );
}

export default App;
