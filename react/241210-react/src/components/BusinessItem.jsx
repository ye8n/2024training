import styles from "./BusinessItem.module.css"

function BusinessItem({item}) {
  // console.log(item); {키: 값(데이터)} -> {item:{...}} {item:{...}} {item:{...}} {item:{...}} 
  // console.log(item); {id:... , title: ...} * 4
  const {imgUrl, title, subTitle, desc} = item;
  const path = process.env.PUBLIC_URL;


  return (
    <li className={styles.businessItem}>
    <a href="#">
      <div className={styles.businessImg}>
        <img src={path+imgUrl} alt="img" />
      </div>
      <h3 className={styles.title}>
        <strong>{title}</strong>{subTitle}</h3>
      <p className={styles.desc}>{desc}</p>
    </a>
  </li>
  );
}

export default BusinessItem;