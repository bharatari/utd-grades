import React from 'react';
import styled from 'styled-components';
import { SlideUp } from '../../../Animations';
import Router from 'next/router';

const Card = styled.div`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  border: none;
  padding: 20px;
  min-width: 180px;
  line-height: 1.5;
  list-style: none;
  border-radius: 2px;
  position: relative;
  transition: all 0.3s;
  margin-right: 20px;
  margin-bottom: 20px;
  flex-basis: 200px;
  flex-grow: 1;
  flex-shrink: 1;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.46);
  }

  @media (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

const Dummy = styled(Card)`
  visibility: hidden;
  
  @media (min-width: 2133px) {
    & {
      /*display: none;*/
    }
  }

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

const Professor = styled.p`
  color: white;
  font-family: var(--font-family);
  font-size: 16px;
  margin-top: -15px;
`;

const Name = styled.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  color: white;
`;

export default function SectionCard({ section, dummy, backgroundColor, currentSectionId }) {
  function handleClick(e) {
    e.preventDefault();

    Router.push('/results', {
      query: {
        search: `${section.course.prefix} ${section.course.number}`,
        sectionId: section.id
      }
    });
  }

  if (dummy) {
    return (
      <Dummy />
    );
  }

  if (currentSectionId === section.id) {
    return null;
  }

  return (
    <SlideUp startAt={100}>
      <Card style={{ backgroundColor }} onClick={handleClick}>
        <Name>{section.course.prefix} {section.course.number}.{section.number}</Name>
        <Professor>{section.professor.firstName} {section.professor.lastName} - {section.course.semester.name}</Professor>
      </Card>
    </SlideUp>
  );
}
