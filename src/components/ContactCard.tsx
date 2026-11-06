'use client';
import Link from 'next/link';
import { EditContact } from '@/lib/validationSchemas';
import { Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ id, firstName, lastName, address, image, description }: EditContact) => (
  <Card className='h-100'>
    <Image className='mx-2 my-2' src={image} alt={`${firstName} ${lastName}`} height={75} width={75} />
    <Card.Title className='mx-2'>{firstName} {lastName}</Card.Title>
    <Card.Text className='mx-2'>{address}</Card.Text>
    <Card.Body className='border-top'>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link href={`/edit/${id}`}>Edit</Link>
</Card.Footer>
  </Card>
);

export default ContactCard;
