import React from 'react';
import styled from 'styled-components/native';
import { TextProps, TextStyle } from 'react-native';

interface AppTextProps extends TextProps {
  style?: TextStyle | TextStyle[];
}

const StyledText = styled.Text<{ fontFamily: string }>`
  font-family: ${props => props.fontFamily};
`;

const AppText: React.FC<AppTextProps> = ({ style, children, ...rest }) => {
  // Detecta fontWeight mesmo se for array
  let fontWeight: string | undefined;

  if (Array.isArray(style)) {
    style.forEach(s => {
      if (s?.fontWeight) fontWeight = s.fontWeight.toString();
    });
  } else if (style?.fontWeight) {
    fontWeight = style.fontWeight.toString();
  }

  // Decide qual fonte usar
  let fontFamily = 'Nexa-Regular';
  if (fontWeight === 'bold' || (fontWeight && parseInt(fontWeight) >= 600)) {
    fontFamily = 'Nexa-Bold';
  }

  return (
    <StyledText fontFamily={fontFamily} style={style} {...rest}>
      {children}
    </StyledText>
  );
};

export default AppText;