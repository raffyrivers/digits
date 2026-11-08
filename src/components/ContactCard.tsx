'use client';
import Link from 'next/link';
import { Contact, Note } from '@prisma/client';
import { Image, Card, ListGroup } from 'react-bootstrap';
import NoteItem from '@/components/NoteItem';
import AddNoteForm from '@/components/AddNoteForm';
/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact, notes }: { contact: Contact; notes: Note[] }) => (
  <Card className='h-100'>
    <Image className='mx-2 my-2' src={contact.image} alt={`${contact.firstName} ${contact.lastName}`} height={75} width={75} />
    <Card.Title className='mx-2'>{contact.firstName} {contact.lastName}</Card.Title>
    <Card.Text className='mx-2'>{contact.address}</Card.Text>
    <Card.Body className='border-top'>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
        <ListGroup variant="flush">
          {notes.map((note) => <NoteItem key={note.id} note={note}/>)}
        </ListGroup>
        <AddNoteForm contact={contact} />
      <Link href={`/edit/${contact.id}`}>Edit</Link>
</Card.Footer>
  </Card>
);

export default ContactCard;
