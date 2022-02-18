import styles from './PostList.module.css';

export const PostListPlaceholder = () => {
  return (
    <>
      <div className={styles.ph_h2}></div>
      <div className={styles.ph_ul}>
        <div className={styles.ph_li}>
          <svg
            className={styles.ph_karma}
            width='36'
            height='69'
            viewBox='0 0 36 69'
            fill='var(--grey93)'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.893 0.870393C17.0535 -0.290131 18.9467 -0.290131 20.1072 0.870393L26.6272 7.39039C27.0177 7.78092 27.0177 8.41408 26.6272 8.80461C26.2367 9.19513 25.6035 9.19513 25.213 8.80461L18.693 2.28461C18.3135 1.90513 17.6867 1.90513 17.3072 2.28461L10.7872 8.80461C10.3967 9.19513 9.7635 9.19513 9.37297 8.80461C8.98245 8.41408 8.98245 7.78092 9.37297 7.39039L15.893 0.870393Z'
            />
            <rect y='25.0977' width='36' height='18' rx='4' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.37297 59.3905C9.7635 59 10.3967 59 10.7872 59.3905L17.3072 65.9106C17.6867 66.29 18.3135 66.29 18.693 65.9106L25.213 59.3905C25.6035 59 26.2367 59 26.6272 59.3905C27.0177 59.7811 27.0177 60.4142 26.6272 60.8048L20.1072 67.3248C18.9467 68.4853 17.0535 68.4853 15.893 67.3248L9.37297 60.8048C8.98245 60.4142 8.98245 59.7811 9.37297 59.3905Z'
            />
          </svg>

          <div className={styles.ph_title}>
            <div className={styles.ph_h3}></div>
            <div className={styles.ph_h4}></div>
          </div>
        </div>
      </div>
    </>
  );
};
