import React from 'react';
import styles from './UserCard.module.scss';

const UserCard = () => {
  return (
    <div className={styles.userCon }>
        <div className={styles.profile}>SC</div>
        <div className={styles.detailsCon}>
            <div className={styles.title}>Good afternoon, Sarah Chen</div>
            <div className={styles.subTitle}>Manage client portfolios and track sustainability performance</div>
            <div className={styles.tabs}>
                <div className={styles.admin}>admin • sales partner</div>
                <div className={styles.multiCompany}>Multi-Company</div>
            </div>
        </div>
    </div>
  )
}

export default UserCard;