import styles from './StyleModule.module.css';

function StyleModule() {
  return (
    <section className={styles.wrapper}>
      <h2 className={`${styles.bg} ${styles.fontSize} ${styles.fontBold}`}>style module</h2>
      <p>css 모듈로 각 컴포넌트의 스타일 충돌 방지</p>
      <ul>
        <li className={[styles.listStyle, styles.underline].join(" ")}>.css의 경우 전역 스타일</li>
        <li className={styles.listStyle}>.module.css의 경우 지역 스타일로 해당 컴포넌트에서만 사용</li>
        <li className={styles.listStyle}>스타일의 공유가 어려움</li>
        <li className={styles.listStyle}>:global을 이용해 전역 스타일 적용 가능</li>
      </ul>
      {/* 일반 css 문서 적용방법처럼 사용. 렌더링된 변수명도 동일 */}
      <button className="btnStyle">버튼</button>
    </section>
  );
}

export default StyleModule;