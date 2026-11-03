import { Col, Container, Row } from 'react-bootstrap';
//import StuffItemAdmin from '@/components/StuffItemAdmin';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import { auth } from '@/lib/auth';
import ContactCardAdmin from '@/components/ContactCardAdmin';

const AdminPage = async () => {
  const session = await auth();
  adminProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );
  //const stuff = await prisma.stuff.findMany({});
  //const users = await prisma.user.findMany({});
  const contacts = await prisma.contact.findMany({});
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <h2 className='d-flex justify-content-center'>List Contacts (Admin)</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {contacts.map((contact, index) => (
            <Col key={index}>
              <ContactCardAdmin {...contact} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;
