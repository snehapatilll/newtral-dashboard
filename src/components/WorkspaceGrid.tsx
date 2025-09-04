import React from "react";
import WorkspaceCard from "./WorkspaceCard";
import styles from "./WorkspaceCard.module.scss";

type WorkspaceStatus = "active" | "pending";
type Workspace = {
  logo: string;
  title: string;
  access: string;
  modules: number;
  status: WorkspaceStatus;
  date: string;
  subTitle:string;
};

const data: Workspace[] = [
  {
    logo: "/profile-pic.jpg",
    title: "Enterprise Global Inc.",
    access: "Admin Access",
    modules: 4,
    status: "active",
    date: "1/15/2024",
    subTitle:'core, labs +2',
  },
  {
    logo: "/profile-pic.jpg",
    title: "Sustainable Ventures Ltd.",
    access: "Contributor Access",
    modules: 2,
    status: "active",
    date: "1/10/2024",
    subTitle:"core, assessment",
  },
  {
    logo: "/profile-pic.jpg",
    title: "Green Tech Solutions",
    access: "Reviewer Access",
    modules: 2,
    status: "pending",
    date: "1/5/2024",
    subTitle:"core, reporting",
  },
];
const WorkspaceGrid = () => {
  

  return (
    <div className={styles.WorkspaceCon}>
        
        <div className={styles.workWrapper}>
            <div className={styles.sectionHeading}>Your Workspaces</div>
            <div className={styles.WorkspaceTitle}>3 Workspace</div>
        </div>
      <div className={styles.grid}>
      {data.map((item, index) => (
        <WorkspaceCard key={index} {...item} />
      ))}
      </div>
    </div>
  );
};

export default WorkspaceGrid;
