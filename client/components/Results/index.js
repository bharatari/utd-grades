import React, { useEffect, useState } from 'react';
import { List, Header, Content } from './components';
import { Core, Form } from '../';
import { Row, Col } from 'antd';
import { animateScroll as scroll } from 'react-scroll';
import * as sectionModule from '../../modules/section';
import Router from 'next/router';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  position: relative;
`;

const ResultsContainer = styled(Col)`
  padding-bottom: 20px;
  margin-top: 20px;
  border-radius: 5px;

  & .ant-list-pagination {
    padding-left: 10px;
  }

  & .ant-list-pagination li {
    margin-bottom: 10px;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
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


export default function Results({ query }) {
  const graphRef = React.useRef();

  const { search, sectionId } = query;

  const [sections, setSections] = useState([]);
  const [loadingSections, setLoadingSections] = useState(false);

  const [relatedSections, setRelatedSections] = useState([]);

  const [section, setSection] = useState(null);
  const [loadingSection, setLoadingSection] = useState(false);

  
  useEffect(() => {
    async function fetchSections() {
      setSections([]);
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
        setRelatedSections([]);
        setLoadingSection(true);
  
        const response = await sectionModule.fetchSection(sectionId);
  
        setSection(response);
        setLoadingSection(false);
      } else {
        Router.push('/results', {
          query: {}
        });
      }
    }

    fetchSection();
  }, [sectionId]);

  useEffect(() => {
    async function fetchRelatedSections() {
      if (section) {
        const response = await sectionModule.fetchSections({
          number: section.course.number,
          prefix: section.course.prefix,
        });

        setRelatedSections(response);
      }
    }

    fetchRelatedSections();
  }, [section]);

  function handleSubmit({ search }) {
    Router.push('/results', {
      query: { search }
    });
  }

  function handleClick(id) {
    Router.push('/results', {
      query: { search, sectionId: id }
    });

    scroll.scrollTo(graphRef.current.offsetTop);
  }

  return (      
    <Container>
      <Row>
        <Col lg={{ span: 8, offset: 8 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
          <Form onSubmit={handleSubmit} initialValues={{ search }} />
        </Col>
      </Row>
      
      <div id="results">
        <Row>
          <ResultsContainer lg={{ span: 20, offset: 2 }} xs={{ span: 24, offset: 0 }}>         
            <Col lg={{ span: 6 }} sm={{ span: 24 }}>
              <List data={sections} onClick={handleClick} loading={loadingSections}
                id={sectionId} />
            </Col>

            <div ref={graphRef}>
              <Col lg={{ span: 18 }} sm={{ span: 24 }}>
                <Content section={section} relatedSections={relatedSections} loadingSection={loadingSection} />
              </Col>
            </div>
          </ResultsContainer>
        </Row>
      </div>
    </Container>
  );
}
