'use client'

import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

// Constants for DnD types
const ItemTypes = {
    ROW: 'row',
};

const DraggableRow = ({ id, index, moveRow, children }) => {
    const ref = React.useRef(null);

    // Use the drag hook
    const [, drag] = useDrag({
        type: ItemTypes.ROW,
        item: { id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    // Use the drop hook
    const [, drop] = useDrop({
        accept: ItemTypes.ROW,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveRow(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    // Attach drag and drop functionality to the row
    drag(drop(ref));

    return (
        <tr ref={ref}>
            {children}
        </tr>
    );
};

export default DraggableRow;

