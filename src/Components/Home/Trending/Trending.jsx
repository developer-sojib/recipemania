import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import useTrending from "../../../hooks/useTrending";
import styles from "../../../assets/css/Trending.module.css";
import { Link } from "react-router-dom";
import SingleTrending from "./Single/SingleTrending";

const Trending = () => {
  const [trending] = useTrending();
  console.log(trending);
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <div className={styles.sectionTitle}>
            <h1
              className={styles.trending}
              style={{
                color: "#000",
                fontFamily: "Raleway",

                fontWeight: "700",
              }}
            >
              Popular Ingredients
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
            {trending.map((trending) => (
              <SingleTrending key={trending.id} trending={trending} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Trending;
