import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark-blue);
  margin: 9rem 0 0;
  padding: 2rem 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  color: var(--light-grey);

  & a {
    color: var(--light-blue);
  }

  & a:hover {
    color: #fff;
  }

  & p {
    margin: 0;
  }
`;

const LeftDiv = styled.div`
  & h3 {
    margin: 0.5rem 0;
    font-size: 1.6rem;
  }

  & h3 a {
    color: #fff ;
  }

  & p {
    color: #ddd;
  }
`;

const Pixel40P = styled.p`
  text-align: right;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterSection>
      <LeftDiv>
        <h3>
          <Link to={"/"}>Магазин бытовой техники</Link>
        </h3>
      </LeftDiv>
      <Pixel40P>
        <a href="/" target="_blank" rel="noreferrer">
          Pixel40®
        </a>
        {" " + year}
      </Pixel40P>
    </FooterSection>
  );
};

export default Footer;
