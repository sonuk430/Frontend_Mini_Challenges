import styles from "./Img.module.css";

const Img = ({ img, onClickOnImg }) => {
  return (
    <>
      <div className={styles.img__box}>
        {img.map((item, index) => (
          <img onClick={onClickOnImg(index)} key={item.id} src={item.label} />
        ))}
      </div>
    </>
  );
};

export default Img;
