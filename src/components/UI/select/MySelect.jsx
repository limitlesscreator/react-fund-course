import React from 'react';
import {v1} from "uuid";

export const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select name="" id="" value={value}
                onChange={e => onChange(e.currentTarget.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(el => <option key={v1()} value={el.value}>{el.name}</option>)}
        </select>
    );
};
