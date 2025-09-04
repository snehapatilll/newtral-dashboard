import { useState } from "react";
import styles from "./ModuleManagement.module.scss";

type ModuleStatus = "Available" | "Trial" | "Request Access";
type ModuleAction =
  | "Open"
  | "Settings"
  | "Continue"
  | "Upgrade"
  | "Request Access"
  | "Learn More"
  | "Join Beta";

interface Module {
  title: string;
  description: string;
  status: ModuleStatus;
  actions: ModuleAction[];
  icon?: React.ReactNode; // optional icon support
}

type TabKey = "Newtral Core" | "Newtral Edge" | "Newtral Labs";

const tabs: TabKey[] = ["Newtral Core", "Newtral Edge", "Newtral Labs"];

const modulesData: Record<TabKey, Module[]> = {
  "Newtral Core": [
    {
      title: "Carbon Accounting - Scope 1&2",
      description: "Direct emissions from owned or controlled sources",
      status: "Available",
      actions: ["Open", "Settings"],
    },
    {
      title: "Carbon Accounting - Scope 3",
      description: "Indirect emissions from value chain activities",
      status: "Trial",
      actions: ["Continue", "Upgrade"],
    },
    {
      title: "Supply Chain Sustainability",
      description: "Monitor and improve supplier sustainability performance",
      status: "Available",
      actions: ["Open", "Settings"],
    },
    {
      title: "ESG Disclosure - Essential",
      description: "Basic ESG reporting and compliance framework",
      status: "Available",
      actions: ["Open", "Settings"],
    },
        {
      title: "Supply Chain Sustainability",
      description: "Monitor and improve supplier sustainability performance",
      status: "Available",
      actions: ["Open", "Settings"],
    },
    {
      title: "ESG Disclosure - Essential",
      description: "Basic ESG reporting and compliance framework",
      status: "Available",
      actions: ["Open", "Settings"],
    },
        {
      title: "Supply Chain Sustainability",
      description: "Monitor and improve supplier sustainability performance",
      status: "Available",
      actions: ["Open", "Settings"],
    },
    {
      title: "ESG Disclosure - Essential",
      description: "Basic ESG reporting and compliance framework",
      status: "Available",
      actions: ["Open", "Settings"],
    },
  ],
  "Newtral Edge": [
    {
      title: "Newtral Edge",
      description: "Implementation services and enterprise integrations",
      status: "Request Access",
      actions: ["Request Access", "Learn More"],
    },
  ],
  "Newtral Labs": [
    {
      title: "Newtral Labs",
      description: "Join co-building cohorts and training programs",
      status: "Available",
      actions: ["Join Beta"],
    },
    {
      title: "Emission Agent",
      description: "AI-powered emission factor calculations",
      status: "Trial",
      actions: ["Join Beta"],
    },
    {
      title: "Newtral Edge",
      description: "Implementation services and enterprise integrations",
      status: "Request Access",
      actions: ["Join Beta"],
    },
  ],
};

export default function ModuleManagement() {
  const [activeTab, setActiveTab] = useState<TabKey>("Newtral Core");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <div className={styles.title}>Module Management</div>
          <div className={styles.subtitle}>
            Manage and access your sustainability modules
          </div>
      </div>

      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tab} ${
              activeTab === tab ? styles.activeTab : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.moduleList}>
        {modulesData[activeTab].map((mod, idx) => (
          <div key={idx} className={styles.moduleCard}>
            <div className={styles.moduleInfo}>
              <div className={styles.icon}></div>
              <div>
                <div>{mod.title}</div>
                <div>{mod.description}</div>
              </div>
            </div>

            <div className={styles.moduleActions}>
              <span
                className={`${styles.status} ${
                  mod.status === "Available"
                    ? styles.available
                    : mod.status === "Trial"
                    ? styles.trial
                    : styles.request
                }`}
              >
                {mod.status}
              </span>

              {mod.actions.map((action, i) => (
                <button
                  key={i}
                  className={`${styles.actionBtn} ${
                    action === "Open" || action === "Continue"
                      ? styles.primaryBtn
                      : styles.secondaryBtn
                  }`}
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
