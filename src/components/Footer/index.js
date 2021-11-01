import config from "../../config";
import {
  Container,
  Logo,
  Location,
  Contact,
  ContactItem,
  ContactLink,
} from "./styles";
import { AiFillPhone, AiFillMail, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  const { location, email, instagram, phone } = config.contact;
  const [rawPhone, displayPhone] = phone;

  return (
    <Container>
      <Logo>Locaso</Logo>
      <Location>{location}</Location>
      <Contact>
        <ContactItem>
          <AiFillPhone />
          <ContactLink href={`tel:${rawPhone}`}>{displayPhone}</ContactLink>
        </ContactItem>
        <ContactItem>
          <AiFillMail />
          <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
        </ContactItem>
        <ContactItem>
          <AiFillInstagram />
          <ContactLink
            target="_blank"
            href={`https://www.instagram.com/${instagram}`}
          >
            @{instagram}
          </ContactLink>
        </ContactItem>
      </Contact>
    </Container>
  );
}
