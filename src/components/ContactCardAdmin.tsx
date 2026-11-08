'use client';
import { Contact, Note } from '@/prisma/client';
import { Image } from 'react-bootstrap';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-bootstrap-icons';
import NoteItem from '@/components/NoteItem';
/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCardAdmin = ({ contact, notes }: {contact: Contact; notes: Note[]}) => (
  <Card className='h-100'>
    <Image className='mx-2 my-2' src={contact.image} alt={`${contact.firstName} ${contact.lastName}`} height={75} width={75} />
    <Card.Title className='mx-2'>{contact.firstName} {contact.lastName}</Card.Title>
    <Card.Text className='mx-2'>{contact.address}</Card.Text>
    <Card.Body className='border-top'>
      <Card.Text>{contact.description}</Card.Text>
      <p className='blockquote-footer'>{contact.owner}</p>
    </Card.Body>
    <ListGroup variant="flush">
          {notes.map((note) => <NoteItem key={note.id} note={note}/>)}
    </ListGroup>
    <Link href={`/edit/${contact.id}`}>Edit</Link>
  </Card>
);

export default ContactCardAdmin;
