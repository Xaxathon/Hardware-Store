import styled from "styled-components";

const MoreSection = styled.section`
  text-align: center;
  margin-top: 6rem;
  & h4 {
    font-size: 2.6rem;
    text-transform: uppercase;
  }
  & p {
    max-width: 60rem;
    margin: 0 auto;
    font-size: 1.5rem;
    line-height: 3rem;
  }
`;

const MoreInfo = () => {
  return (
    <MoreSection>
        Подробная информация
    </MoreSection>
  );
};

export default MoreInfo;
