import Head from "next/head";
import Image from "next/image";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.logo}>Next Js</p>
        <button>CV</button>
      </div>

      <div className={styles.main}>
        <h1>John Wick</h1>
        <h2>Actor And Artist</h2>
        <p>
          NounEdit · (uncountable) That which is contained. · Subject matter;
          semantic information (or a portion or body thereof); that which is
          contained in writin
        </p>
      </div>
      <div className={styles.icon}>
        <ContactPhoneIcon />
        <AddLocationAltIcon />
        <AirplanemodeActiveIcon />
      </div>

      <div className={styles.image}>
        <img src="offer01.jpg" alt="" />
      </div>

      <div>
        <hr></hr>
      </div>
      <div className={styles.para}>
        <h5>Service offer</h5>
        <p>
          Here in this video, you will learn how to make this website design
          using HTML, CSS, and JavaScript. At the top, there is a navigation bar
          with a logo and navigation menu. The website's background looks very
          nice because of the angle shape and gradient color.
        </p>
      </div>
      <div className={styles.cardmain}>
        <div className={styles.card}>
          <AddLocationAltIcon />
          <p>facebook</p>
          <p>Here in thript. At the top, there is a navigation bar
          with a logo and navigation menu. The website's background looks very
          nice because of the angle shape and g</p>
          <p>read more</p>
        </div>
        <div className={styles.card}>
          <AddLocationAltIcon />
          <p>facebook</p>
          <p>Here in thript. At the top, there is a navigation bar
          with a logo and navigation menu. The website's background looks very
          nice because of the angle shape and g</p>
          <p>read more</p>
        </div>
        <div className={styles.card}>
          <AddLocationAltIcon />
          <p>facebook</p>
          <p>Here in thript. At the top, there is a navigation bar
          with a logo and navigation menu. The website's background looks very
          nice because of the angle shape and g</p>
          <p>read more</p>
        </div>
      </div>

      <div className={styles.para}>
        <h5>Service offer</h5>
        <p>
          Here in this video, you will learn how to make this website design
          using HTML, CSS, and JavaScript. At the top, there is a navigation bar
          with a logo and navigation menu. The website's background looks very
          nice because of the angle shape and gradient color.
        </p>
        <div className={styles.imag2}>
          <img src="offer01.jpg" alt="" />
          <img src="offer01.jpg" alt="" />
        </div>
        <div>
          <hr></hr>
        </div>
        <div className={styles.imag2}>
          <img src="offer01.jpg" alt="" />
          <img src="offer01.jpg" alt="" />
        </div>
        <div>
          <hr></hr>
        </div>
        <div className={styles.imag2}>
          <img src="offer01.jpg" alt="" />
          <img src="offer01.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
