import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import { getInitialData } from "../utils";

function AppBody({ notes, addNewNote, onDelete, onArchive }) {
  return (
    <div className="note-app__body">
      <NotesInput addNewNote={addNewNote} />
      <h2>Active Notes</h2>
      <NotesList
        notes={notes.filter((note) => !note.archived)}
        caption={"active"}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <h2>Archived Notes</h2>
      <NotesList
        notes={notes.filter((note) => note.archived)}
        caption={"archive"}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default AppBody;
