import React from "react";
import styled from "styled-components";

const PRIMARY_COLOR = "#00FFB9";
const ACTIVE_COLOR = "#B900FF";
const SECONDARY_COLOR = "#FFB900";

// const dark_primary_color = '#5E79A1'
// const dark_secondary_color = '#A15E79'
// const dark_active_color = '#79A15E'

const NavBar = styled.nav`
  background-color: ${PRIMARY_COLOR};
  left: 0;
  position: sticky;
  right: 0;
  top: 0;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
`;

export const NavBarContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0.5rem;
`;

export const Hero = styled.article`
  background-color: ${PRIMARY_COLOR};
  box-sizing: border-box;
  padding: 4rem 1rem;
`;

export const HeroTitle = styled.h1`
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  margin: 1rem 0 0 0;
`;

export const HeroHeader = styled.header`
  text-align: center;
`;

export const HeroSubTitle = styled.p`
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 2rem;
`;

export const EnrollButton = styled(Button)`
  border: 2px solid #000;
  border-radius: 0.25rem;
  font-weight: bold;
  padding: 0.75rem 1.25rem;
`;

export const ReactLogo = styled.img`
  width: 8rem;
`;

export const CoursesList = styled.section`
  padding: 4rem 1rem;
`;

export const CoursesTitle = styled.h2`
  color: black;
  font-family: Arial;
  margin: 0 0 4rem 0;
  text-align: center;
`;

export const CourseBlock = styled.article`
  margin-bottom: 4rem;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CourseName = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
`;

export const CourseDescription = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
`;

export const MailingList = styled.section`
  background-color: ${ACTIVE_COLOR};
  box-sizing: border-box;
  border-radius: 0.25rem;
  margin: 1rem;
  padding: 2rem 1rem;
`;

export const Separator = styled.span`
  background-color: ${PRIMARY_COLOR};
  display: block;
  height: 0.75rem;
  margin-top: 2rem;
  width: 100%;
`;

const MailingListTitle = styled.h2`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 0 1rem 0;
  text-align: center;
`;

const Label = styled.label`
  color: white;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  border: none;
  border-radius: 0.25rem;
  box-sizing: border-box;
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.25rem;
  width: 100%;
`;

export const LearnMoreButton = styled.button`
  background-color: transparent;
  border: 3px solid;
  border-radius: 0.25rem;
  color: ${SECONDARY_COLOR};
  font-family: arial;
  font-weight: bold;
  padding: 0.75rem 1.25rem;
`;

export const SubscribeButton = styled.button`
  background-color: transparent;
  border: 3px solid;
  border-radius: 0.25rem;
  color: white;
  font-family: arial;
  font-weight: bold;
  padding: 0.75rem 1.25rem;
  width: 100%;
`;

function App() {
  return (
    <>
      <NavBar>
        <NavBarContainer>
          <Button>Home</Button>
          <Button>Dark Mode</Button>
        </NavBarContainer>
      </NavBar>
      <Hero>
        <HeroHeader>
          <ReactLogo src="/react-icon.svg" alt="React Logo" />
          <HeroTitle>React Dev School</HeroTitle>
          <HeroSubTitle>The best place to learn react!</HeroSubTitle>
          <EnrollButton>Enroll Now!</EnrollButton>
        </HeroHeader>
      </Hero>

      <CoursesList>
        <CoursesTitle>Courses</CoursesTitle>

        <CourseBlock>
          <img
            style={{ width: "5rem" }}
            src="/react-router-logo.png"
            alt="React Router Logo"
          />
          <CourseName>React Router</CourseName>
          <CourseDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CourseDescription>
          <LearnMoreButton>Learn More</LearnMoreButton>
        </CourseBlock>

        <CourseBlock>
          <span
            role="img"
            aria-label="styled components logo"
            style={{ fontSize: "4rem" }}
          >
            💅🏾
          </span>
          <CourseName>Styled Components</CourseName>
          <CourseDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CourseDescription>
          <LearnMoreButton>Learn More</LearnMoreButton>
        </CourseBlock>

        <CourseBlock>
          <img
            style={{ width: "5rem" }}
            src="/redux-logo.png"
            alt="React Router Logo"
          />
          <CourseName>Redux</CourseName>
          <CourseDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CourseDescription>
          <LearnMoreButton>Learn More</LearnMoreButton>
        </CourseBlock>
      </CoursesList>

      <MailingList>
        <MailingListTitle>Subscribe to the mailing list</MailingListTitle>
        <form>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" placeholder="John Doe" />

          <Label>Email</Label>
          <Input
            type="email"
            name="name"
            id="name"
            placeholder="email@example.com"
          />

          <SubscribeButton>Subscribe!</SubscribeButton>
        </form>
      </MailingList>

      <Separator />
    </>
  );
}

export default App;
