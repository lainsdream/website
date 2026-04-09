import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import photo from "./photo.jpg";

// ─── Global ────────────────────────────────────────────────────────────────

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0d0d0d;
    color: #e8e8e8;
    font-family: 'Inter', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a { color: inherit; text-decoration: none; }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
`;

// ─── Tokens ────────────────────────────────────────────────────────────────

const accent = "#7c6af7";
const muted = "#888";
const border = "#1e1e1e";

// ─── Animations ────────────────────────────────────────────────────────────

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Layout ────────────────────────────────────────────────────────────────

const Page = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Section = styled.section`
  padding: 80px 0;
  border-bottom: 1px solid ${border};
  animation: ${fadeUp} 0.5s ease both;
  animation-delay: ${({ delay }) => delay || "0s"};

  &:last-of-type {
    border-bottom: none;
  }
`;

// ─── Nav ───────────────────────────────────────────────────────────────────

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(13, 13, 13, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${border};
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 28px;
`;

const NavLink = styled.a`
  font-size: 13px;
  color: ${muted};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s;

  &:hover {
    color: #e8e8e8;
  }
`;

const Logo = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${accent};
`;

function Nav() {
  return (
    <NavBar>
      <Logo>
        <img
          src={photo}
          alt="Maksim Ermolaev"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #7c6af7",
          }}
        />
      </Logo>
      <NavLinks>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#stack">Stack</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </NavBar>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────

const HeroSection = styled(Section)`
  padding-top: 100px;
`;

const Eyebrow = styled.p`
  font-size: 13px;
  color: ${accent};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
`;

const Tagline = styled.p`
  font-size: 18px;
  color: ${muted};
  max-width: 520px;
  margin-bottom: 36px;
  line-height: 1.7;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${({ primary }) =>
    primary
      ? `background: ${accent}; color: #fff; &:hover { background: #6a59e0; }`
      : `background: transparent; color: ${muted}; border: 1px solid ${border}; &:hover { border-color: #444; color: #e8e8e8; }`}
`;

function Hero() {
  return (
    <HeroSection id="about" delay="0.1s">
      <Eyebrow>Full-Stack Engineer</Eyebrow>
      <Name>Maksim Ermolaev</Name>
      <Tagline>
        10 years in software, 5 in JS/TS. I build microservices, APIs, and
        interfaces — from event-driven backends with RabbitMQ to polished React
        frontends. Currently looking for a team where I can grow and ship
        products that reach real users.
      </Tagline>
      <ButtonRow>
        <Button
          primary="true"
          href="https://github.com/lainsdream"
          target="_blank"
        >
          GitHub →
        </Button>
        <Button href="mailto:m.ermolaev@protonmail.com">Get in touch</Button>
      </ButtonRow>
    </HeroSection>
  );
}

// ─── Stack ─────────────────────────────────────────────────────────────────

const SectionTitle = styled.h2`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${muted};
  margin-bottom: 32px;
`;

const TagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid ${border};
  font-size: 13px;
  color: #ccc;
  transition: all 0.2s;
  cursor: default;

  &:hover {
    border-color: ${accent};
    color: #fff;
  }
`;

const stack = [
  "Node.js",
  "NestJS",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "RabbitMQ",
  "Docker",
  "REST API",
  "Microservices",
  "PM2",
  "SSH",
  "Git",
  "Styled Components",
];

function Stack() {
  return (
    <Section id="stack" delay="0.2s">
      <SectionTitle>Tech Stack</SectionTitle>
      <TagGrid>
        {stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </TagGrid>
    </Section>
  );
}

// ─── Experience ────────────────────────────────────────────────────────────

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Job = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 24px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

const JobMeta = styled.div`
  padding-top: 3px;
`;

const JobYear = styled.p`
  font-size: 12px;
  color: ${muted};
  letter-spacing: 0.05em;
`;

const JobTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const JobCompany = styled.p`
  font-size: 13px;
  color: ${accent};
  margin-bottom: 10px;
`;

const JobDesc = styled.p`
  font-size: 14px;
  color: #999;
  line-height: 1.7;
`;

const jobs = [
  {
    year: "2024–2025",
    title: "Full stack Node.js / React",
    company: "ChillBase",
    desc: "Built NestJS microservices consuming events from RabbitMQ. Designed data pipelines for an admin panel and web store.",
  },
];

function Experience() {
  return (
    <Section id="experience" delay="0.3s">
      <SectionTitle>Experience</SectionTitle>
      <Timeline>
        {jobs.map((job) => (
          <Job key={job.title}>
            <JobMeta>
              <JobYear>{job.year}</JobYear>
            </JobMeta>
            <div>
              <JobTitle>{job.title}</JobTitle>
              <JobCompany>{job.company}</JobCompany>
              <JobDesc>{job.desc}</JobDesc>
            </div>
          </Job>
        ))}
      </Timeline>
    </Section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────

const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactRow = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 1px solid ${border};
  border-radius: 10px;
  font-size: 14px;
  color: ${muted};
  transition: all 0.2s;

  &:hover {
    border-color: ${accent};
    color: #e8e8e8;
  }
`;

const ContactLabel = styled.span`
  color: #e8e8e8;
  font-weight: 500;
`;

const contacts = [
  {
    label: "GitHub",
    value: "lainsdream",
    href: "https://github.com/lainsdream",
  },
  {
    label: "Email",
    value: "m.ermolaev@protonmail.com",
    href: "mailto:m.ermolaev@protonmail.com",
  },
];

function Contact() {
  return (
    <Section id="contact" delay="0.4s">
      <SectionTitle>Contact</SectionTitle>
      <ContactGrid>
        {contacts.map((c) => (
          <ContactRow key={c.label} href={c.href} target="_blank">
            <ContactLabel>{c.label}</ContactLabel>
            <span>{c.value} →</span>
          </ContactRow>
        ))}
      </ContactGrid>
    </Section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

const FooterEl = styled.footer`
  padding: 32px 24px;
  text-align: center;
  font-size: 12px;
  color: #444;
`;

function Footer() {
  return <FooterEl>© {new Date().getFullYear()} Maksim Ermolaev</FooterEl>;
}

// ─── App ───────────────────────────────────────────────────────────────────

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Page>
        <Hero />
        <Stack />
        <Experience />
        <Contact />
      </Page>
      <Footer />
    </>
  );
}

// ─── Mount ─────────────────────────────────────────────────────────────────

const rootElement = document.createElement("div");
rootElement.setAttribute("id", "app");
document.body.appendChild(rootElement);
createRoot(rootElement).render(<App />);
