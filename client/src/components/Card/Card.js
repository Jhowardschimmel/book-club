import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Card {...props}>
        <CardHeader>{props.title}</CardHeader>
        <CardBody>
          <CardTitle>
            <img src={props.thumbnail} />
          </CardTitle>
          <CardText>{props.description}</CardText>
          <Button>By: {props.authors}</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

export default Example;
