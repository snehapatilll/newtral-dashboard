import React from "react";
import styles from "./WorkspaceCard.module.scss";

type WorkspaceStatus = "active" | "pending";

type WorkspaceCardProps= {
  logo: string;
  title: string;
  access: string;
  modules: number;
  status: WorkspaceStatus;
  date: string;
  subTitle:string;
}

const WorkspaceCard = ({ logo, title, access, modules, status, date ,subTitle}:WorkspaceCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={logo} alt={title} className={styles.logo} />
        <span className={`${styles.badge} ${styles[status]}`}>{status}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.access}>{access}</div>
        <div className={styles.modulesCon}>
            <div className={styles.modules}>{modules} modules enabled</div>
        <div className={styles.date}>{date}</div>
        </div>
      </div>

      <div className={styles.footer}>
            <div className={styles.workspaceLink}>Enter Workspace</div>
        
        
        <div className={styles.subTitle}>{subTitle}</div>
      </div>
    </div>
  );
};

export default WorkspaceCard;
