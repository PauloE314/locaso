import styled from "styled-components";
import { breakPoints } from "../../config";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.75fr auto 1fr auto 0.8fr;
  padding: 2rem 3rem;
  grid-template-areas:
    ". footer-logo . footer-contact ."
    ". footer-location . footer-contact .";
  background-color: var(--secondary-color);
  color: var(--bg-color);

  @media screen and (max-width: ${breakPoints.small}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "footer-logo footer-contact"
      "footer-location footer-contact";
  }
`;

export const Logo = styled.h2`
  grid-area: footer-logo;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
`;

export const Location = styled.small`
  grid-area: footer-location;
`;

export const Contact = styled.ul`
  grid-area: footer-contact;
`;

export const ContactItem = styled.li`
  margin: 0.4rem 0rem;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 1rem;
  }

  @media screen and (max-width: ${breakPoints.small}) {
    margin: 0.7rem 0rem;
    font-size: 0.9rem;
  }
`;

export const ContactItemLabel = styled.span`
  margin-left: 1rem;
`;

export const ContactLink = styled.a`
  color: inherit;
`;
