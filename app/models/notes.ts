export interface Note {
  id: string,
  title: string,
  content: string
}

export interface NoteData {
  notes: Note[]
}