import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardImgOverlay } from "reactstrap";

const MenuItem = (props) => {
    return (
        <div className="col-lg-4">
            <Card>
                <CardBody>
                    <CardImg style={{ opacity: '.8' }} max-width="100%" alt={props.dish.name} src={props.dish.image} />
                    <CardImgOverlay>
                        <CardTitle>{props.dish.name} </CardTitle>

                    </CardImgOverlay>
                    {props.dish.description}
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;