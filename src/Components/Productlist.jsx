import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const Productlist = () => {
  let [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <ol>
        {items.map((ele) => {
          return (
            <Card
              key={ele.id}
              style={{ width: "100%", height: "450px" }}
              className="product"
            >
              <center>
                <Card.Img
                  variant="top"
                  src={ele.image}
                  style={{
                    width: "9rem",
                    height: "12rem",
                    objectFit: "contain",
                  }}
                />
              </center>
              <Card.Body style={{ height: "150px", overflow: "hidden" }}>
                <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {ele.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "14px", overflow: "hidden" }}>
                  {ele.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Card.Text style={{ marginTop: "15px" }}>
                  ${ele.price}
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Footer>
            </Card>
          );
        })}
      </ol>
    </div>
  );
};

export default Productlist;
