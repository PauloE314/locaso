import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: red;
`;

export const PageContent = styled.main`
  flex-grow: 1;
`;

export default PageContainer;
