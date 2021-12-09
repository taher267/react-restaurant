import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";
import DishDetails from './DishDetails';

const MenuItem = props =>
    <div>
        <Card className="mt-3">
            <CardBody>
                <CardImg style={{ opacity: '.8' }} max-width="100%" alt={props.dish.name} src={props.dish.image} />
                <CardImgOverlay>
                    <CardTitle
                        onClick={props.DishSelect} style={{ cursor: 'pointer' }}>
                        {props.dish.name}
                    </CardTitle>
                </CardImgOverlay>
            </CardBody>
        </Card>
    </div>

export default MenuItem;