import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import stdfourdot from "../../../../../../Assets/Icons/stdfourdot.png";
import downarrow from "../../../../../../Assets/Icons/downarrow.png";
import backarrow from "../../../../../../Assets/Icons/pinkarrow.png";

const initialData = [
  { id: "1", title: "Portfolio" },
  { id: "2", title: "Skills" },
  { id: "3", title: "Work Experience" },
  { id: "4", title: "Projects" },
  { id: "5", title: "Certifications" },
  { id: "6", title: "Extra-Curricular Activities" },
  { id: "7", title: "Position of Responsibility (POR)" },
  { id: "8", title: "Honor & Awards" },
  { id: "9", title: "Education" },
  { id: "10", title: "Interests" },
  { id: "11", title: "Languages" },
];

const Resume = () => {
  const [data, setData] = useState(initialData);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setData(items);
  };

  return (
    <div className='std_profile_resume_border mt-4 me-2 ms-2 rounded-4'>
      <div className='position-relative mt-4'>
        <span>
          <img
            className='position-absolute ms-3 std_resume_back_pinkarrow'
            src={backarrow}
            alt="Back Arrow"
          />
        </span>
        <h4 className='d-flex justify-content-center std_build_resume_titile mb-0'>
          Sections available in Resume 1
        </h4>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((value, index) => (
                <Draggable key={value.id} draggableId={value.id} index={index}>
                  {(provided) => (
                    <div
                      className='mt-5'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className='justify-content-center d-flex mb-5'>
                        <span>
                          <img
                            src={stdfourdot}
                            className='mt-2 ms-lg-0 me-3 me-lg-0'
                            alt="Drag Icon"
                          />
                        </span>
                        <p className='text-center mb-0 std_profile_build_resume_items ms-lg-5 col-lg-3 col-8 py-2 rounded-2'>
                          {value.title}
                        </p>
                        <i className='fa-regular fa-square-check fa-2xl mt-4 mb-0 ms-3 std_profile_icon_checkbox'></i>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className="d-flex gap-3">
          <h4 className='text-center std_build_resume_titile'>Export to pdf </h4>
          <span><img src={downarrow} alt="Down Arrow" /></span>
        </div>
        <button
          type="button"
          className="btn px-4 mt-3 mb-5 rounded-5 std_profile_btn_large"
        >
          Enlarge & Edit All Sections
        </button>
      </div>
    </div>
  );
};

export default Resume;
