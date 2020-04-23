import React, { useState } from 'react';
import styled from 'styled-components';
import { Graph } from '../../../';
import { Row, Spin } from 'antd';
import SectionCard from './SectionCard';
import _ from 'lodash';
import general from '../../../../utils/general';

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;

  @media (max-width: 992px) {
    & {
      padding-left: 25px;
      padding-right: 25px;
    }
  }

  @media (min-width: 992px) {
    & {
      padding-left: 50px;
      padding-right: 50px;
    }
  }
`;

const GraphContainer = styled.div`
  width: 100%;

  @media (max-width: 992px) {
    & {
      padding-top: 20px;
      margin-bottom: -20px;
    }
  }

  @media (min-width: 992px) {
    & {
      box-shadow: 0 15px 30px rgba(233, 233, 233, 0.7);
      border-radius: 5px;
      padding: 20px;
    }
  }
`;

const Header = styled.h3`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 48px;
  margin-bottom: 0px !important;
`;

const SubHeader = styled.h5`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 22px;
  color: rgb(117, 117, 117);
`;

const Total = styled.h5`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  color: rgb(117, 117, 117);
`;

const Section = styled.span`
  color: rgb(165, 165, 165);
`;

const OtherSectionsHeader = styled.p`
  font-family: var(--font-family);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
`

const OtherSectionsRow = styled(Row)`
  padding-top: 50px;
`;

const SectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-content: flex-start;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 10px;
  margin-left: -10px;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function SectionContent({ relatedSections, section }) {
  const [options, setOptions] = useState({ 
    legend: { display: false },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        },
      }],
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: (tooltipItems, data) => {
          const { keys, values } = general.splitData(general.convertAssociatedArrayToObjectArray(section.grades));
          const total = _.sum(values);

          let text = [`Students: ${tooltipItems.yLabel}`];
          const count = tooltipItems.yLabel;
          const percentage = (count / total) * 100;

          text.push(`Percentage: ${percentage.toFixed(2)}%`);
          
          return text;
        }
      }
    },
  });

  function transformData(grades) {
    const objectArray = general.convertAssociatedArrayToObjectArray(grades);
    const sortedGrades = general.sortByGrades(objectArray);
    const { keys, values } = general.splitData(sortedGrades);
    const colors = general.getColors(keys);

    return { keys, values, colors };
  }
  
  const renderRelatedSections = () => {
    if (relatedSections) {
      return relatedSections.filter(s => s.id != section.id).map(s => (
        <SectionCard key={s.id} section={s} />
      ))
    }
    
    return <Spin />;
  };

  const { keys, values, colors } = transformData(section.grades);

  return (
    <Container>
      <Stack>
        <Header>{section.course.prefix} {section.course.number}<Section>.{section.number}</Section></Header>
        <SubHeader>{section.professor.lastName}, {section.professor.firstName} - {section.course.semester.name}</SubHeader>
        <Total>Total Students <span style={{ color: '#333333' }}>{_.sum(values)}</span></Total>
      </Stack>

      <Row>
        <GraphContainer>
          <Graph type="bar" data={{ labels: keys, datasets: [{ backgroundColor: colors, data: values }]}} options={options} />
        </GraphContainer>
      </Row>

      <OtherSectionsRow>
        <OtherSectionsHeader>Other Sections</OtherSectionsHeader>
        <SectionsContainer>
          {renderRelatedSections()}
        </SectionsContainer>
      </OtherSectionsRow>
    </Container>
  );
}
