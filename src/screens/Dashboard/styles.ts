import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  font-size: 24px;
  color: ${props => props.theme.colors.title};
`;