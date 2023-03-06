import NewNote , {links as newNoteLinks} from "~/components/notes/NewNote";
import type { ActionFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import NoteList, {links as noteListLinks} from "~/components/notes/NoteList";
import { getStoredNotes, storeNotes } from "~/data/notes";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export default function NotesPage() {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export const  action: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  // const noteDate = {
  //   title: formData.get("title"),
  //   content: formData.get("content")
  // }
  const noteData = Object.fromEntries(formData);
  // add validation
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes);
  return redirect('/notes')
}

export const loader: LoaderFunction = async () => {
  const notes = await getStoredNotes();
  // return json(notes)
  return notes;
  }
export const links: LinksFunction = () => {
  return [...newNoteLinks(), ...noteListLinks()];
}