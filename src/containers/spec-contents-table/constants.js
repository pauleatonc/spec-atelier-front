import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const dataConstants = () => {
    const { blocks } = useSelector((state) => state.specDocument);
    const array = [];
    for (let i = 0; i < blocks.length; i++) {
        array.push({id:blocks[i].element.id});
        
    }
    return array;
    // blocks.map((item) => ({
    //     id: item.element.id,
    //     desc: item.element.name,
    //     unidad: item?.unidad,
    //     cnt: item?.cantidad,
    //     subtotal: item.subtotal,
    //     type: item.type,
    //     subRows: row?.original?.type === 'Item' && {

    //     }
    // }))
}
export default dataConstants;
