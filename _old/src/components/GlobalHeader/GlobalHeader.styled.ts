"use client";

import styled from "@emotion/styled";
import Image from "next/image";

export const StyledHeader = styled.header`
  max-width: 76.8rem;
  min-width: 48rem;
  margin: 0 auto;
  margin-top: 2.4rem;
  margin-bottom: 3.2rem;
  display: flex;
  justify-content: space-between;
`;

export const ColDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
`;

export const LogoImage = styled(Image)`
  object-fit: cover;
`;

export const StyledP = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: underline;
`;
