import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: var(--grey-light);
  padding: 50px;
  text-align: center;
`;

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutHeading = styled.h2`
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
`;

const AboutParagraph = styled.p`
  color: #666;
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const AboutComp = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutHeading>Welcome to Game Store</AboutHeading>
        <AboutParagraph>
          Game Store is not just a retail space; it's an immersive experience for every gaming enthusiast. Our journey started in the virtual realm as a bot tirelessly delivering the latest gaming deals and exclusive discounts directly to your fingertips. Today, we've materialized in Silicon Valley, where the heartbeat of technology aligns with the pulse of gaming innovation.
        </AboutParagraph>
        <AboutParagraph>
          In the ever-evolving landscape of the gaming industry, Game Store stands tall among giants. Our commitment to excellence reflects in the recognition we've received as one of the leading companies offering not just games but an entire ecosystem for gaming enthusiasts.
        </AboutParagraph>
        <AboutParagraph>
          At Game Store, we recognize the potential within every aspiring web developer. Our commitment to nurturing talent has earned us a reputation as a launchpad for careers in web development. We provide a dynamic environment where creativity thrives, and opportunities abound for those embarking on their journey in the digital realm.
        </AboutParagraph>
        <AboutParagraph>
          What sets us apart is our dedication to the dreams of our team members. If you've ever dreamed of working in a different country, envisioning a career path beyond borders, Game Store is here to support you. We go beyond the norm and actively assist with the intricate process of securing work visas, ensuring that your professional journey knows no bounds.
        </AboutParagraph>
        <AboutParagraph>
          Join us at Game Store, where the love for gaming converges with the spirit of innovation. Your journey begins here, and the possibilities are limitless.
        </AboutParagraph>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutComp;
