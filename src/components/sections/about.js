import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const StyledCertifications = styled.div`
  margin-top: 60px;

  h3 {
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    margin-bottom: 30px;
    font-weight: 500;

    &:before {
      content: '▹';
      margin-right: 10px;
      color: var(--green);
    }
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 768px) {
      gap: 40px;
      justify-content: center;
    }
  }

  .badge-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    transition: var(--transition);
    flex: 1;

    &:hover,
    &:focus {
      outline: 0;
      transform: translateY(-5px);

      .badge-hex {
        filter: drop-shadow(0 8px 20px rgba(100, 255, 218, 0.3));
      }

      .badge-name {
        color: var(--green);
      }
    }
  }

  .badge-hex {
    width: 220px;
    height: 220px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    overflow: hidden;
    transition: var(--transition);

    @media (max-width: 1080px) {
      width: 180px;
      height: 180px;
    }

    @media (max-width: 768px) {
      width: 160px;
      height: 160px;
    }

    @media (max-width: 480px) {
      width: 130px;
      height: 130px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .badge-name {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    text-align: center;
    max-width: 200px;
    line-height: 1.4;
    transition: var(--transition);
  }
`;

const certifications = [
  {
    name: 'AWS Certified AI Practitioner - Foundational',
    url: 'https://www.credly.com/badges/ed087278-5b33-40dc-8b7b-31fa7b5ee958/public_url',
    image: 'https://images.credly.com/size/340x340/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png',
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    url: 'https://www.credly.com/badges/2b15bf28-4a64-403b-b975-79407673a0a9/public_url',
    image: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
  },
  {
    name: 'AWS Certified Developer - Associate',
    url: 'https://www.credly.com/badges/c531c373-885a-4297-bc90-2459873d1857/public_url',
    image: 'https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png',
  },
];

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Python', 'Java' ,'TensorFlow/Pytorch', 'Machine Learning', 'Deep Learning','NLP','Computer Vision','Cloud Computing', 'AWS Services', 'JavaScript','React.js','Next.js','DBMS','MySQL/MongoDB'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            Hi, I’m Yesha — a software engineer building practical solutions.  
            <br/>  I completed my Btech in AI and ML from Thakur College of Engineering and Technology (May 2025) with a CGPA of 9.57/10.
            </p>

            <p>
            I led GATE-DehazNet, a model for satellite image dehazing combining GANs, attention, and transformers to outperform baselines.<a href="https://docs.google.com/document/d/1NyrNwC-maJONZ3Q0hyyngYKdnXzuvv3B/edit"> GATE-Dehaze: A GAN-Attention-Transformer Ensemble for Satellite Image Dehazing</a>has been accepted for publication in the SCOPUS indexed <a href="https://dergipark.org.tr/en/pub/tuzal"> Turkish Journal of Remote Sensing </a>
    
            </p>

            <p>
            Currently, I’m {''} <a href="https://www.credly.com/users/yesha-raval.446f6baf/badges#credly"> 3X AWS certified  </a> and working on cloud-native AI applications 
            using AWS Infrastructure. Projects like <a href="https://medical-portal-beta.vercel.app/">Medi-Portal</a> and <a href="https://formula-dash.info/">FormulaDash</a>  help me bring together 
            data-driven insights and scalable systems.
            </p>

            <p>My skills are not limited to this list!</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>

      <StyledCertifications>
        <h3>Certifications</h3>
        <div className="badges">
          {certifications.map(({ name, url, image }, i) => (
            <a
              key={i}
              className="badge-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${name} certification`}>
              <div className="badge-hex">
                <img src={image} alt={name} />
              </div>
              <span className="badge-name">{name}</span>
            </a>
          ))}
        </div>
      </StyledCertifications>
    </StyledAboutSection>
  );
};

export default About;
