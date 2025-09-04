import React from "react";
import styles from "./HelpSupport.module.scss";

type SupportCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const supportOptions: SupportCard[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17h11A2.5 2.5 0 0 1 20 19.5V20H4v-.5z" />
        <path d="M6 3h12v14H6z" />
      </svg>
    ),
    title: "Documentation",
    description: "Comprehensive guides and API references",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Live Chat Support",
    description: "Get instant help from our support team",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    title: "Getting Started Tour",
    description: "Take a guided tour of your dashboard",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svgIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Send Feedback",
    description: "Help us improve your experience",
  },
];

const HelpSupport = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Help & Support</div>

      <div className={styles.cards}>
        {supportOptions.map((option, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.icon}>{option.icon}</div>
            <div className={styles.title}>{option.title}</div>
            <div className={styles.description}>{option.description}</div>
          </div>
        ))}
      </div>

      <div className={styles.assistBox}>
        <div className={styles.assistContent}>
          <div className={styles.assistIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svgIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12" y2="17" />
            </svg>
          </div>
          </div>
          <div className={styles.assistCon}>
            <div className={styles.assistTitle}>Need Immediate Assistance?</div>
            <div className={styles.assistText}>
              Our sustainability experts are available 24/7 to help you navigate
              compliance requirements and optimize your environmental impact
              reporting.
            </div>
          
        
        <div className={styles.assistActions}>
          <button className={styles.primaryBtn}>Contact Expert</button>
          <button className={styles.secondaryBtn}>Schedule Call</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
