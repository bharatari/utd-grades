import React, { useEffect, useState, useRef } from 'react';
import { List, Content } from './components';
import { Form } from '../';
import { Row, Col } from 'antd';
import * as sectionModule from '../../modules/section';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

const Container = styled.div`
  display: block;
  position: relative;
`;

const ResultsContainer = styled(Col)`
  padding-bottom: 20px;
  margin-top: 35px;
  border-radius: 5px;

  & .ant-list-pagination {
    padding-left: 10px;
  }

  & .ant-list-pagination li {
    margin-bottom: 10px;
    font-family: var(--font-family);
  }

  @media (max-width: 992px) {
    & {
      box-shadow: none;
    }
  }

  @media (min-width: 992px) {
    & {
      box-shadow: 0 15px 50px rgba(233, 233, 233, 0.7);
    }
  }
`;

export default function Results() {
  const scrollRef = useRef();

  const router = useRouter();
  const { search, sectionId } = router.query;

  const [sections, setSections] = useState(null);
  const [loadingSections, setLoadingSections] = useState(true);

  const [relatedSections, setRelatedSections] = useState(null);

  const [section, setSection] = useState(null);
  const [loadingSection, setLoadingSection] = useState(false);

  
  useEffect(() => {
    async function fetchSections() {
      setSections(null);
      setSection(null);
  
      if (search) {
        setLoadingSections(true);
  
        const response = await sectionModule.fetchSections({ search });
  
        setSections(response);
        setLoadingSections(false);
      }
    }

    fetchSections();
  }, [search]);

  useEffect(() => {
    async function fetchSection() {
      if (sectionId != null) {
        setSection(null);
        setLoadingSection(true);
  
        const response = await sectionModule.fetchSection(sectionId);
  
        setSection(response);
        setLoadingSection(false);
      }
    }

    fetchSection();
  }, [sectionId]);

  useEffect(() => {
    async function fetchRelatedSections() {
      if (section) {
        setRelatedSections(null);

        const response = await sectionModule.fetchSections({
          courseNumber: section.course.number,
          coursePrefix: section.course.prefix,
        });

        setRelatedSections(response);
      }
    }

    fetchRelatedSections();
  }, [section]);

  function handleSubmit({ search }) {
    router.push({
      pathname: '/results',
      query: { search }
    });
  }

  function handleClick(id) {
    router.push({
      pathname: '/results',
      query: { search, sectionId: id }
    });

    const scrollDistance = window.pageYOffset + scrollRef.current.getBoundingClientRect().top

    scroll.scrollTo(scrollDistance);
  }

  function handleRelatedSectionClick(search, id) {
    router.push({
      pathname: '/results',
      query: { search, sectionId: id }
    });

    const scrollDistance = window.pageYOffset + scrollRef.current.getBoundingClientRect().top

    scroll.scrollTo(scrollDistance);
  }

  return (      
    <Container>
      <Row>
        <Col lg={{ span: 8, offset: 8 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
          <Form onSubmit={handleSubmit} initialValues={{ search }} />
        </Col>
      </Row>
      
      <Row>
        <ResultsContainer lg={{ span: 20, offset: 2 }} xs={{ span: 24, offset: 0 }}>
          <Row>
            <Col lg={6} sm={24}>
              <List data={sections} onClick={handleClick} loading={loadingSections}
                id={sectionId} />
            </Col>

         
            <Col lg={18} sm={24}>
              <div style={{ width: '100%', height: '100%' }} ref={scrollRef}>
                <Content section={section} relatedSections={relatedSections} loadingSection={loadingSection} handleRelatedSectionClick={handleRelatedSectionClick} />
              </div>
            </Col>
          </Row>
        </ResultsContainer>
      </Row>
    </Container>
  );
}
