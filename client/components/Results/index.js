import React, { useEffect, useState } from 'react';
import { List, Header, Content } from './components';
import { Core, Form } from '../';
import { Button, Row, Col, Spin } from 'antd';
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

  const [sections, setSections] = useState();
  const [loadingSections, setLoadingSections] = useState(false);

  const [relatedSections, setRelatedSections] = useState();

  const [section, setSection] = useState();
  const [loadingSection, setLoadingSection] = useState(false);

  useEffect(() => (
    (async () => {
      setSections([]);
      setSection([]);
  
      if (search) {
        setLoadingSection(true);
  
        const response = await sectionModule.fetchSections(search);
  
        setSections(response);
      }
    })()
  ), [search]);

  useEffect(() => (
    (async () => {
      if (sectionId != null) {
        setRelatedSections([]);
  
        const response = await sectionModule.fetchSection(sectionId);
  
        setSection(response);
      } else {
        Router.push('/results', {
          query: {}
        });
      }
    })()
  ), [sectionId]);

  useEffect(() => (
    (async () => {
      if (section) {
        const response = await sectionModule.fetchSections({
          number: section.course.number,
          prefix: section.course.prefix,
        });

        setRelatedSections(response);
      }
    })()
  ), [section]);

  function goHome() {
    history.push('/');
  }

  function handleSubmit({ search }) {
    Router.push('/results', {
      query: { search }
    });
  }

  function handleClick(id) {
    Router.push('/results', {
      query: { sectionId: id }
    });

    scroll.scrollTo(graphRef.current.offsetTop);
  }

  return (
    <Core>
      <Header />
      
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 8 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
            <Form onSubmit={handleSubmit} initialValues={{
              search
            }} />
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
    </Core>
  );
}
