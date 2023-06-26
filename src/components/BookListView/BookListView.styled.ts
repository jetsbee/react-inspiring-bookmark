"use client";

import styled from "@emotion/styled";

export const StyledUl = styled.ul`
  max-width: 76.8rem;
  min-width: 48rem;
`;

export const StyledLi = styled.li`
  border: 1px solid #dadce0;
  padding: 1.2rem 0.8rem;
  margin-bottom: 1.2rem;

  &:after {
    content: "";
    display: table;
    clear: both;
  } // For parent of float elements
  // ref. https://css-tricks.com/snippets/css/clear-fix/
`;

export const RowDiv = styled.div`
  &:first-of-type {
    float: right;
    margin-left: 1rem;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
`;

export const StyledPForAuthors = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
`;

export const StyledPForDate = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
