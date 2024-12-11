import React from 'react';
import styles from "./SCSS.module.scss";

function SCSS() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>SCSS 스타일 적용</h2>
      <p className={styles.desc}> CSS pre-processor(전처리기)</p>
      <ul className={`${styles.box} ${styles.lightblue}`}>
        <li className={styles.list}>파일명.scss</li>
        <li>파일명.module.scss</li>
        <li>react, vue는 개발 환경에 웹팩을 가지고 있기 때문에 그대로 사용 가능</li>
      </ul>
    </section>
  );
}

export default SCSS;