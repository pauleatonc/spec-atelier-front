import React, { Children, cloneElement, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { onShowAlertSuccess } from 'containers/alert/Alert.actions';
import { Root, GlobalDraggableItemStyles } from './DraggableList.styles';

/** The DraggableList's component */
const DraggableList = (props) => {
  const { children, onChange, blocks } = props;
  const dispatch = useDispatch();
  const [elements, setElements] = useState(Children.toArray(children));
  const handleDragEnd = (event) => {
    const selectedProduct = blocks.filter(
      (product) => product.id === event.draggableId,
    );
    const destination = blocks.filter(
      (item, index) => index === event.destination.index,
    );

    if (!event.destination || selectedProduct[0].item !== destination[0].item) {
      dispatch(
        onShowAlertSuccess({
          message: 'Los productos sólo se pueden mover dentro de su partida',
        }),
      );
      return;
    }

    const updatedElements = [].concat(elements);
    const [removedElement] = updatedElements.splice(event.source.index, 1);
    updatedElements.splice(event.destination.index, 0, removedElement);

    setElements(updatedElements);
    onChange(
      updatedElements.map((element) => element.props.id),
      selectedProduct[0].id,
    );
  };

  useEffect(() => setElements(Children.toArray(children)), [children]);

  return (
    <>
      <GlobalDraggableItemStyles />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="draggable-list">
          {(dropProvided) => (
            <Root {...dropProvided.droppableProps} ref={dropProvided.innerRef}>
              {elements.map((element, index) => {
                if (element?.props?.disabled) {
                  return element;
                }
                return (
                  <Draggable
                    draggableId={element?.props?.id}
                    index={index}
                    key={element?.props?.id}
                  >
                    {(dragProvided, dragSnapshot) =>
                      cloneElement(element, {
                        ...dragProvided.draggableProps,
                        ...dragProvided.dragHandleProps,
                        className: `DraggableList__DraggableItem${
                          dragSnapshot.isDragging ? '--dragging' : ''
                        }`,
                        ref: dragProvided.innerRef,
                      })
                    }
                  </Draggable>
                );
              })}
              {dropProvided.placeholder}
            </Root>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

DraggableList.defaultProps = {
  onChange: () => undefined,
};
DraggableList.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};

export default DraggableList;
