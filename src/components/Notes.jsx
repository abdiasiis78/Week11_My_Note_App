import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  const { deleteNote, notes } = props;

  

  return (
    <div className="mt-7 flex flex-row gap-x-2">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-yellow-400 p-4 rounded-md shadow-md justify-between items-center mb-4 max-w-xs"
        >
          <div>      
            <div className="flex flex-col">
              <h4 className="text-2xl text-black font-bold">{note.title}</h4>
              <p className="text-black  text-justify p-1/2 text-1xl font-normal">{note.content} </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => deleteNote(note.id)}
                className="text-black hover:text-red-700 mr-2 "
              >
                <FaTrash />
              </button>
              <button
              
                className="text-black hover:text-blue-700"
              >
                <FaEdit />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
