"use client";

import styled from "@emotion/styled";

export const StyledDialog = styled.dialog`
  margin: 0 auto;
  top: 20rem;
  border: 0;
  animation: smoothAppear 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;

  @keyframes smoothAppear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledForm = styled.form`
  width: 20rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledP = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  padding-top: 3.2rem;
`;

export const StyledMenu = styled.menu`
  margin-top: auto;
  padding-bottom: 2rem;
  display: flex;
  gap: 1.8rem;
`;

export const StyledButton = styled.button`
  font-size: 1.7rem;
  font-weight: 500;
  background-color: transparent;
  border: 0;
  color: #1976d2;
  cursor: pointer;

  &:hover {
    background-color: rgba(25, 118, 210, 0.04);
  }
`;
