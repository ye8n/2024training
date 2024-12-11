import BusinessItem from "./BusinessItem";
import styles from "./BusinessList.module.css"


function BusinessList({data}){//구조분해
  // console.log(data); function BusinessList(data) -> {[{...},{...},{...}]}
  console.log(data) //구조분해 후, [{...}, {...}, {...}, {...}]
  return(
    <ul className={styles.businessList}>
      {
        data.map(item=>( //배열에 들어가는 item이 순차적으로 들어간다?
          <BusinessItem key={item.id} item={item} />    
        ))
      }
  </ul>
  );
}

export default BusinessList;