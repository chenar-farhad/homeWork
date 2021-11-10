import Axios from "axios";
import React,{useEffect, useState} from "react";
import { Card,Button } from "react-bootstrap";

export default function DogApi() {
  const [dog, setDog] = useState({});

useEffect(() => {
    DogFuc();

}, [])


  function DogFuc() {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      console.log(res.data);
      setDog(res.data)
    });
  }

  return <div className="iCardMain">
    <div className="iCard">

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={dog.message} />
  <Card.Body>
    <Card.Title>{dog.title}</Card.Title>
    <Card.Text>{dog.quote}
    </Card.Text>
    <Button onClick={DogFuc} variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
  </div>;
}
