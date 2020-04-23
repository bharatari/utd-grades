import React from 'react';
import styled from 'styled-components';
import { SlideUp } from '../../../Animations';
import Router from 'next/router';

const Card = styled.div`
  box-shadow: var(--box-shadow-inactive);
  border: none;
  padding: 20px;
  min-width: 180px;
  border-radius: 6px;
  position: relative;
  transition: all 0.3s;
  margin-right: 20px;
  margin-bottom: 20px;
  flex-basis: 200px;
  flex: 1;
  cursor: pointer;
  background-color: white;

  &:hover {
    box-shadow: var(--box-shadow-active);
  }

  @media (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

const Name = styled.p`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.65);
`;

const Professor = styled.p`
  color: rgba(0, 0, 0, 0.45);
  font-family: var(--font-family);
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 0px;
`;

export default function SectionCard({ section }) {
  function handleClick(e) {
    e.preventDefault();

    Router.push('/results', {
      query: {
        search: `${section.course.prefix} ${section.course.number}`,
        sectionId: section.id
      }
    });
  }

  return (
    <SlideUp startAt={100}>
      <Card onClick={handleClick}>
        <Name>{section.course.prefix} {section.course.number}.{section.number}</Name>
        <Professor>{section.professor.firstName} {section.professor.lastName} - {section.course.semester.name}</Professor>
      </Card>
    </SlideUp>
  );
}
