'use client';
import { Contact } from '@/lib/validationSchemas';
import { Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ firstName, lastName, address, image, description }: Contact) => (
  <Card className='h-100'>
    <Image className='mx-2 my-2' src={image} alt={`${firstName} ${lastName}`} height={75} width={75} />
    <Card.Title className='mx-2'>{firstName} {lastName}</Card.Title>
    <Card.Text className='mx-2'>{address}</Card.Text>
    <Card.Body className='border-top'>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default ContactCard;
