import React from "react";
import styled from "styled-components";
import Tag from "./Tag";
import PropTypes from "prop-types";

export default function Category({ onClickSegment }) {
  return (
    <CategoryContainer>
      <Tag text="전체" onClickSegment={onClickSegment} />
      <Tag text="대형" onClickSegment={onClickSegment} />
      <Tag text="중형" onClickSegment={onClickSegment} />
      <Tag text="소형" onClickSegment={onClickSegment} />
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 6px 12px;
`;

Category.propTypes = {
  onClickSegment: PropTypes.func.isRequired
};
