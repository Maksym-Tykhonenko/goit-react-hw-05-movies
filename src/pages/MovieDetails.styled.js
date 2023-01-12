import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid tomato;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom: 5px;
  margin-right: 5px;
  &.active {
    color: white;
    background-color: orangered;
  }
`
export const FilmInfo = styled.div`
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const Img = styled.img`
  
  `