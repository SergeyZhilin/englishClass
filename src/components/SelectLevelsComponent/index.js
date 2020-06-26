import React, {useEffect} from "react";
import {Col, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getAllLevelsRequest} from "../../redux/actions/actions";
import {levelName} from "../../helpers/helpers";

const SelectLevelsComponent = ({label, handleChange}) => {
    const levels = useSelector(state => state.questions.levels)
    const dispatch = useDispatch()
    const level = []
    const levelSet = new Set(levels);

    levelSet.forEach((value) => level.push(value));

    useEffect(() => {
        dispatch(getAllLevelsRequest())
    },[levels !== null])

    return (
        <Form.Group as={Col} className="mb-lg-4">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as="select"
                defaultValue="Choose..."
                name="level"
                onChange={handleChange}
            >
                <option disabled>Choose...</option>
                {
                    level.map((lvl) => {
                        return <option
                            key={lvl}
                            value={lvl}>
                            {levelName(lvl)}
                        </option>
                    })
                }
            </Form.Control>
        </Form.Group>
    );
}

export default SelectLevelsComponent