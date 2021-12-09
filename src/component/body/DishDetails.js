import React from "react";
import { Card, CardTitle, CardBody, CardImg, CardText } from "reactstrap";
const DishDetails = props =>
    <div>
        <Card className="mt-3">
            <CardImg top src={props.dish.image} alt={props.dish.name} />
            <CardBody className="text-left">
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
            </CardBody>
        </Card>
    </div>
export default DishDetails;