import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/Popular.module.css";
import usePopular from "../../../hooks/usePopular";
import Single from "./Single/Single";

const Popular = () => {
  const [popular] = usePopular();
  // console.log(popular);
  return (
    <div
      className="mt-2"
      style={{
        backgroundColor: "#FFF2F2",
        paddingTop: "24px",
      }}
    >
      <Container>
        <Row>
          <div className={styles.sectionTitle}>
            <h1
              className={styles.popular}
              style={{
                color: "#000",
                fontFamily: "Raleway",

                fontWeight: "700",
              }}
            >
              Popular Drinks
            </h1>
            <div className="text-end">
              <Link to="" className={styles.seeallLink}>
                <Button
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "#892667",
                    fontFamily: "Raleway",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  View More{" "}
                </Button>
              </Link>
            </div>
          </div>
        </Row>
        <div className="py-5">
          <Row className="g-4">
            {popular.map((popular) => (
              <Single key={popular.id} popular={popular} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Popular;
