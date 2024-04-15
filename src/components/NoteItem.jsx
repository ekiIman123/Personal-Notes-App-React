import React from "react";
import ItemContent from "./ItemContent";
import ItemAction from "./ItemAction";

function NoteItem({ title, body, date, id, onDelete, archived, onArchive }) {
  return (
    <div className="note-item">
      <ItemContent title={title} body={body} date={date} />
      <ItemAction
        id={id}
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteItem;
