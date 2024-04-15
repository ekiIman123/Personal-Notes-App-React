import React from "react";

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <>
      {!archived ? (
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Archive
        </button>
      ) : (
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Unarchive
        </button>
      )}
    </>
  );
}

export default ArchiveButton;
