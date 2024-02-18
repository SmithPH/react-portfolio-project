import React from "react";
import styles from "./Portfolio.module.css";
import Tilt from 'react-parallax-tilt'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </Tilt>
          <p>Project Title1</p>
        </div>
        <div className={styles.port_items}>
        <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
            alt=""
          />
          </Tilt>
          <p>Project Title2</p>
        </div>
        <div className={styles.port_items}>
        <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
          <img
            src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
            alt=""
          />
          </Tilt>
          <p>Project Title3</p>
        </div>
        <div className={styles.port_items}>
        <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
            alt=""
          />
          </Tilt>
          <p>Project Title4</p>
        </div>
        <div className={styles.port_items}>
        <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
          <img
            src="https://images.unsplash.com/3/doctype-hi-res.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
            alt=""
          />
          </Tilt>
          <p>Project Title5</p>
        </div>
        <div className={styles.port_items}>
        <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
          <img
            src="https://images.unsplash.com/photo-1532043772213-09a6cec77cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
            alt=""
          />
          </Tilt>
          <p>Project Title6</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
