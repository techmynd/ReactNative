// in case you are using styled components

import styled from 'styled-components/native';
import Colors from './Colors';

/**
 * Just the container + safe view / full height column with safe view
*/

export const SafeView = styled.SafeAreaView`
  backgroundColor: ${Colors.White};
  flex: 1;
`;

/**
 * Just the container / full height column
*/

export const ContainerView = styled.View`
  backgroundColor: ${Colors.White};
  flex: 1;
`;

/**
 * This will scroll inner content on overflow
*/

export const ScrollAble = styled.ScrollView`
  flex: 1;
`;

/** 
 * This just adds space to left and right 
*/

export const InnerContent = styled.View`
  padding: 0 20px;
`;

/**
 * keep text blocks inside this to use inline text blocks
*/

// takes a margin property
export const TextInlineWrap = styled.Text`
  flexDirection: row;
  flexWrap: wrap;
  ${({ margin }) => margin ? 'margin: ' + margin : null};
`;

/** 
 * Two Buttons
 * ButtonFilled
 * ButtonEmpty
*/

export const ButtonFilled = styled.TouchableOpacity`
  background: ${Colors.primary};
  width: 100%;
  height: 40px;
  border: 1px solid ${Colors.primary};
  alignItems: center;
  justifyContent: center;
  ${({ margin }) => margin ? 'margin: ' + margin : '0px'};
`;

export const ButtonEmpty = styled.TouchableOpacity`
    background: ${Colors.White};
    width: 100%;
    height: 40px;
    border: 1px solid ${Colors.primary};
    alignItems: center;
    justifyContent: center;
    ${({ margin }) => margin ? 'margin: ' + margin : '0px'};
`;

/** 
 * Takes direction left or right
 * @props
 * direction=''   // left or right, default is right
*/
export const CloseIconWrap = styled.TouchableOpacity`
  position: absolute;
  ${({ closeDirection }) => closeDirection=='left' ? 'left: 20px;' : 'right: 20px;'};
  top: 20;
`;

/** 
 * TopBar for components
 * TopNavControl > takes height in px
 * NavLeft > takes width of column in px
 * NavRight > takes width of column in px
 * NavCenter > centered contents for this column - 
 *           > thats why we give widths in left and right columns above
 * ViewRowCentered
 * ViewRowRightAligned
 * ViewRowLeftAligned
*/

export const TopNavControl = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: space-between;
  padding: 0px 20px 0 20px;
  ${({ height }) => height ? 'height: ' + height : null};
  ${({ borderBottomWidth }) => borderBottomWidth ? 'borderBottomWidth: ' + borderBottomWidth : null};
  ${({ borderColor }) => borderColor ? 'borderColor: ' + borderColor : null};
`;

export const NavLeft = styled.View`
  ${({ width }) => width ? 'width: ' + width : null};
`;

export const NavRight = styled.View`
  ${({ width }) => width ? 'width: ' + width : null};
`;

export const NavCenter = styled.View`
  flex: 1;
`;

export const ViewRowCentered = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
`;

export const ViewRowRightAligned = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: flex-end;
`;

export const ViewRowLeftAligned = styled.View`
  flexDirection: row;
  alignItems: center;
  justifyContent: flex-start;
`;

