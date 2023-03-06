import { Link } from "@remix-run/react";
import NewNote , {links as NewNoteLinks} from "~/components/notes/NewNote";


export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export function links() {
  return [...NewNoteLinks()];
}