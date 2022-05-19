import { styled } from '@linaria/react';
import { withTheme, Theme } from 'theme';

export const Header = withTheme(styled.header<Theme>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.primary};
`);

export const Title = styled.div`
  color: white;
`;
