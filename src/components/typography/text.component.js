import styled from "styled-components/native";

const defualtTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.fontWeights.regular};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};   
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
    font-family: ${theme.fonts.heading};
`;

const title = (theme) => `
    font-size: ${theme.fontSizes.title};
    color: ${theme.colors.text.inverse};
    margin-left: ${theme.space[2]};
    margin-bottom: ${theme.space[2]};
`;
const variants = {
  body,
  hint,
  label,
  caption,
  error,
  title,
};

export const Text = styled.Text`
  ${({ theme }) => defualtTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
