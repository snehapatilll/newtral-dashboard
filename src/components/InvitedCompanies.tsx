import React from "react";
import styles from "./InvitedCompanies.module.scss";

type CompanyStatus = "Active" | "Onboarding" | "Trial";

type Company = {
  logo: string;
  name: string;
  status: CompanyStatus;
  joined: string;
  users: number;
  invitedBy: string;
};

const companies: Company[] = [
  {
    logo: "/profile-pic.jpg",
    name: "GreenTech Corp",
    status: "Active",
    joined: "Mar 2024",
    users: 24,
    invitedBy: "EcoConsulting Partners",
  },
  {
    logo: "/profile-pic.jpg",
    name: "EcoSolutions Inc",
    status: "Onboarding",
    joined: "Dec 2024",
    users: 8,
    invitedBy: "EcoConsulting Partners",
  },
  {
    logo: "/profile-pic.jpg",
    name: "Sustainable Co",
    status: "Trial",
    joined: "Jan 2025",
    users: 12,
    invitedBy: "EcoConsulting Partners",
  },
  {
    logo: "/profile-pic.jpg",
    name: "CleanEnergy Ltd",
    status: "Active",
    joined: "Nov 2023",
    users: 45,
    invitedBy: "EcoConsulting Partners",
  },
    {
    logo: "/profile-pic.jpg",
    name: "CleanEnergy Ltd",
    status: "Active",
    joined: "Nov 2023",
    users: 45,
    invitedBy: "EcoConsulting Partners",
  },
    {
    logo: "/profile-pic.jpg",
    name: "CleanEnergy Ltd",
    status: "Active",
    joined: "Nov 2023",
    users: 45,
    invitedBy: "EcoConsulting Partners",
  },
    {
    logo: "/profile-pic.jpg",
    name: "CleanEnergy Ltd",
    status: "Active",
    joined: "Nov 2023",
    users: 45,
    invitedBy: "EcoConsulting Partners",
  },
];

const InvitedCompanies = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionHeading}>
        EcoConsulting Partners - Partner Dashboard
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>6</div>
          <div className={styles.statLabel}>Total Companies</div>
        </div>
        <div className={`${styles.statCard} ${styles.purple}`}>
          <div className={styles.statValue}>156</div>
          <div className={styles.statLabel}>Active Users</div>
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.heading}>Invited Companies</div>
        <button className={styles.inviteBtn}>+ Invite Company</button>
      </div>

      <div className={styles.list}>
        {companies.map((company, i) => (
          <div key={i} className={styles.row}>
            <img src={company.logo} alt={company.name} className={styles.logo} />

            <div className={styles.info}>
              <div className={styles.top}>
                <span className={styles.name}>{company.name}</span>
                <span
                  className={`${styles.badge} ${styles[company.status.toLowerCase()]}`}
                >
                  {company.status}
                </span>
              </div>
              <div className={styles.meta}>
                Joined {company.joined} • {company.users} active users • Invited
                by {company.invitedBy}
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.iconBtn}>👁</button>
              <button className={styles.iconBtn}>⋮</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.partnerHeading}>Partner Resources</div>
      <div className={styles.resources}>
        <div className={styles.resourceCard}>📂 Sales Kit</div>
        <div className={styles.resourceCard}>🎓 Academy</div>
      </div>
    </div>
  );
};

export default InvitedCompanies;
