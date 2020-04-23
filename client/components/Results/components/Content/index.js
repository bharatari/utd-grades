import React from 'react';
import styled from 'styled-components';
import SectionContent from './SectionContent';
import { Spin } from 'antd';

const LoadingContainer = styled.div`
  padding: 50px;
`

const EmptyContainer = styled.div`
  padding: 50px;
`;

const Empty = styled.h2`
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;;
  color: #a4a4a4;
  font-weight: 300;
  font-size: 26px;
`;

const Spinner = styled(Spin)`
  margin-left: auto;
  margin-right: auto;
  display: block !important;
`;

export default function Content({ section, relatedSections, loadingSection }) {
  if (section) {
    return <SectionContent section={section} relatedSections={relatedSections} />;
  } else if (loadingSection) {
    return(
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  } else {
    return (
      <EmptyContainer>
        <Empty>Nothing to see here, select a section!</Empty>
      </EmptyContainer>
    );
  }
};
