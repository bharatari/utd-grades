import React from 'react';
import { List, Spin, Popover as AntPopover } from 'antd';
import Icon, { FrownTwoTone } from '@ant-design/icons';
import general from '../../../../utils/general';
import styled, { css } from 'styled-components';

const Item = styled.div`
  padding: 25px;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  transition: all 300ms ease-out;
  font-family: var(--font-family);

  &:hover {
    background-color: #fcfcfc;
  }

  &:first-child {
    border-top-left-radius: 5px;
  }

  & .ant-list-item-meta-title a {
    font-weight: 600;
    font-family: var(--font-family);
  }

  & .ant-list-item-meta {
    margin-bottom: 0px;
  }

  ${props => props.selected ? selectedStyles : ''}
`;

const selectedStyles = css`
  border-right: 6px solid rgb(0, 116, 224) !important;
  box-shadow: inset -5px 0px 10px rgba(0, 0, 0, 0.05);
  background-color: #fcfcfc;
`;

const Hint = styled(AntPopover)`
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-family: var(--font-family);
  color: #95989A;
`;

const Popover = styled.div`
  font-family: var(--font-family);
  width: 200px;
`;

const EmptyContainer = styled.div`
  padding: 30px;
`;

const Pagination = styled.div`
  margin-right: 10px !important;
`;

const Error = styled.p`
  font-family: var(--font-family);
  font-size: 22px;
  text-align: center;
  color: #a4a4a4;
  font-weight: 300;
`;

const StyledIcon = styled(FrownTwoTone)`
  font-size: 42px;
  width: 43px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  display: block !important;
`;

const LoadingItem = styled(List.Item)`
  padding-left: 20px;
  padding-top: 20px;
  border: none !important;
`;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default function ResultsList({ loading, id, data, onClick }) {
  const popover = (
    <Popover>
      <p>Because of FERPA restrictions, grade data for certain classes — in particular, classes with a small number of students — is unavailable.</p>
    </Popover>
  );

  const empty = (
    <EmptyContainer>
      <StyledIcon />
      <Error>We weren't able to find that. Try searching for something else!</Error>
      <Hint content={popover} placement="bottom">
        <span style={{ textAlign: 'center' }}>
          Still can't find what you're looking for? <span style={{ textDecoration: 'underline' }}>Learn more.</span>
        </span>
      </Hint>
    </EmptyContainer>
  );

  if (data) {
    if (data.length < 1) {
      return empty;
    } else {
      return (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: 8,
            style: {
              marginRight: '10px'
            },
          }}
          dataSource={data}
          renderItem={item => {  
            const { keys, values } = general.splitData(general.convertAssociatedArrayToObjectArray(item.grades));
            const total = _.sum(values);
            
            return (
              <Item
                key={item.id}
                selected={item.id == id}
                actions={[<IconText type="user" text={total} />]}
                onClick={() => onClick(item.id)}>
                <List.Item.Meta
                  title={<a href="#">{item.course.prefix} {item.course.number}.{item.number}</a>}
                  description={`${item.professor.lastName}, ${item.professor.firstName} - ${item.course.semester.name}`}
                />
              </Item>
            );
          }}
        />
      );
    }
  } else if (loading) {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 8,
        }}>
        <LoadingItem>
          <Spin />
        </LoadingItem>
      </List>
    );
  } else {
    return (
      <div>
        <p>Search for something!</p>
      </div>
    );
  }
}
