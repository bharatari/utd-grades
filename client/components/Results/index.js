import React, { useEffect } from 'react';
import classes from './styles.scss';
import { Core, Form } from 'components/';
import { Content, List } from './components';
import { Button, Row, Col, Spin } from 'antd';
import { animateScroll as scroll } from 'react-scroll';
import sectionModule from 'modules/section';
import Router from 'next/router';

export default function Section({ query }) {
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

  const content = () => {
    if (section) {
      return <Content section={section} otherSections={otherSections} history={history} location={location} />;
    } else if (loadingSection) {
      return(
        <div className={classes.loadingContainer}>
          <Spin className={classes.spinner} />
        </div>
      );
    } else {
      return (
        <div className={classes.emptyContainer}>
          <h2 className={classes.empty}>Nothing to see here, select a section!</h2>
        </div>
      );
    }
  };

  return (
    <Core>
      <Row className={classes.menu}>
        <Button className={classes.back} onClick={goHome} type="ghost" shape="circle" icon="home" size="large" />
        <a href="javascript:void(0)" onClick={goHome}><h2 className={classes.header}><span className={classes.headerBold}>UTD</span> Grades</h2></a>
      </Row>
      
      <div className={classes.content}>
        <Row>
          <Col lg={{ span: 8, offset: 8 }} sm={{ span: 18, offset: 3 }} xs={{ span: 20, offset: 2 }}>
            <Form onSubmit={handleSubmit} initialValues={{
              search
            }} />
          </Col>
        </Row>
        
        <div id="results">
          <Row>
            <Col lg={{ span: 20, offset: 2 }} xs={{ span: 24, offset: 0 }} className={classes.results}>         
              <Col lg={{ span: 6 }} sm={{ span: 24 }}>
                <List data={sections} onClick={handleClick} loading={loadingSections}
                  id={sectionId} />
              </Col>

              <div ref={graphRef}>
                <Col lg={{ span: 18 }} sm={{ span: 24 }}>
                  {content()}
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Core>
  );
}
