import React from "react";
import styles from "./QuickActions.module.scss";

type Action = {
  icon: React.ReactNode;
  label: string;
};

const actions: Action[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgIcon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    label: "Manage Clients",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgIcon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M9 21V3m6 18V3" />
      </svg>
    ),
    label: "Add New Company",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgIcon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m4 13V10m4 9V4M7 19v-4M3 19V9" />
      </svg>
    ),
    label: "Partner Metrics",
  },
];

const QuickActions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Quick Actions</div>
      <div className={styles.cards}>
        {actions.map((action, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.icon}>{action.icon}</div>
            <div className={styles.label}>{action.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
