import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.75fr auto 1fr auto 0.8fr;
  padding: 2rem 3rem;
  grid-template-areas:
    ". logo . contact ."
    ". location . contact .";
  background-color: var(--secondary-color);
  color: var(--bg-color);

  font-size: 1.1rem;
`;

export const Logo = styled.h2`
  grid-area: logo;
  margin-bottom: 0.5rem;
`;

export const Location = styled.div`
  grid-area: location;
`;

export const Contact = styled.ul`
  grid-area: contact;
`;

export const ContactItem = styled.li`
  margin: 0.4rem 0rem;
  display: flex;
  align-items: center;

  & svg {
    margin-right: 1rem;
  }
`;

export const ContactItemLabel = styled.span`
  margin-left: 1rem;
`;

export const ContactLink = styled.a`
  color: inherit;
`;
