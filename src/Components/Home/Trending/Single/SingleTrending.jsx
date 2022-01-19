import React from "react";
import { Card, Col } from "react-bootstrap";
import styles from "../../../../assets/css/TrendingSingle.module.css";

const SingleTrending = ({ trending }) => {
  const { title, subtitle, img } = trending;
  return (
    <Col xs={12} sm={12} md={3} lg={3}>
      <Card className={styles.productCard}>
        <Card.Img width="100%" className="img-fluid mx-auto" src={img} />
        <Card.Body>
          <div className="mb-5">
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
              className="text-muted"
              style={{
                color: "#000",
                fontFamily: "Raleway",
                fontSize: "12px",
              }}
            >
              {subtitle}
            </Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleTrending;
