import React, { useEffect, useState } from 'react';
import { Form as AntForm, Popover as AntPopover, Input } from 'antd';
import styled from 'styled-components';

const StyledSearch = styled(Input.Search)`
  &&& {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) !important;
    border-radius: 20px !important;
    outline: none;
    font-family: var(--font-family);
  }
`;

const Hint = styled(AntPopover)`
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-family: var(--font-family);
  color: #95989a;
`;

const Popover = styled.div`
  font-family: var(--font-family);
  width: 375px;
`;

export default function Form({
  onSubmit,
  initialValues: { search } = { search: '' },
}) {
  const searchHintContent = (
    <Popover>
      <p>You can search for:</p>
      <ul>
        <li>A specific section: CS 1337.501</li>
        <li>A whole course: CS 1337</li>
        <li>A professor's name (last name or full): Jason Smith</li>
        <li>A specific semester: CS 1337 fall 2017</li>
        <li>Everything together: CS 1337.1 fall 2017 jason smith</li>
      </ul>
    </Popover>
  );

  const fall20HintContent = (
    <Popover>
      <p>
        The university has not yet released grade data for Fall 2020, because
        students still have the option to opt in to Credit/No Credit grading.
        Check back after Spring 2021.
      </p>
    </Popover>
  )

  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  function handleSubmit(value) {
    onSubmit({ search: value });
  }

  const [searchValue, setSearchValue] = useState();

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <AntForm>
      <StyledSearch
        name="search"
        size="large"
        placeholder="ex. CS 1337 Fall 2017 Smith"
        onSearch={handleSubmit}
        onChange={handleChange}
        value={searchValue}
      />
      <Hint content={searchHintContent} placement="bottom">
        <span style={{ textAlign: 'center' }}>
          Need to know what you can enter?{' '}
          <span style={{ textDecoration: 'underline' }}>
            Pretty much anything.
          </span>
        </span>
      </Hint>
      <Hint content={fall20HintContent} placement="bottom">
        <span style={{ textAlign: 'center' }}>
          <span style={{ textDecoration: 'underline' }}>
            Looking for Fall 2020 grades?
          </span>
        </span>
      </Hint>
    </AntForm>
  );
}
