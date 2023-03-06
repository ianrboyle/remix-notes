import { Link } from "@remix-run/react";
import NewNote , {links as NewNoteLinks} from "~/components/notes/NewNote";
import type { LinksFunction } from "@remix-run/node";

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export const links: LinksFunction = () => {
  return [...NewNoteLinks()];
}