import React from "react";
import { Card, Col } from "react-bootstrap";
import styles from "../../../../assets/css/Single.module.css";

const Single = ({ popular }) => {
  const { title, price, subtitle, img } = popular;
  return (
    <Col xs={12} sm={12} md={3} lg={4}>
      <Card className={styles.productCard}>
        <Card.Img width="100%" className="img-fluid mx-auto" src={img} />
        <Card.Body>
          <div className="text-start mb-5">
            <Card.Title
              className="mb-3"
              style={{
                color: "#000",
                fontFamily: "Raleway",
                fontSize: "18px",
                fontWeight: "800",
              }}
            >
              {title}
            </Card.Title>
            <Card.Subtitle
              style={{ fontSize: "12px" }}
              className="mb-3 text-muted"
            >
              {subtitle}
            </Card.Subtitle>
            <Card.Subtitle style={{ fontSize: "12px" }}>{price}</Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Single;
