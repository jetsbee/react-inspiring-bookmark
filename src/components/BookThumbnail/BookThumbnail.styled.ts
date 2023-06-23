"use client";

import styled from "@emotion/styled";
import Image from "next/image";

export const ImageContainer = styled.div`
  position: relative;
  height: 11rem;
  width: 11rem;
`;

export const BookImage = styled(Image)`
  object-fit: cover;
`;

export const NoImageBox = styled.div`
  height: 11rem;
  width: 11rem;
  border: 1px solid #dadce0;
  color: #70757a;
  display: flex;
  justify-content: center;
  align-items: center;
`;
