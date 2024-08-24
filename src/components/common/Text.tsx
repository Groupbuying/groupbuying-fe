import styled from 'styled-components'

export const BaseText = styled.span`
  font-size: ${(p) => p.theme.fontSize.default};
  font-weight: ${(p) => p.theme.fontWeight.regular};
  color: ${(p) => p.theme.color.black1};
  line-height: normal;
  white-space: pre-wrap;
`

export const SmallText = styled(BaseText)`
  font-size: ${(p) => p.theme.fontSize.small};
`

export const H1Text = styled(BaseText)`
  font-size: ${(p) => p.theme.fontSize.h1};
`

export const H2Text = styled(BaseText)`
  font-size: ${(p) => p.theme.fontSize.h2};
`

export const H3Text = styled(BaseText)`
  font-size: ${(p) => p.theme.fontSize.h3};
`

export const H4Text = styled(BaseText)`
  font-size: ${(p) => p.theme.fontSize.h4};
`

export const H5Text = styled(BaseText)`
  font-size: ${(p) => p.theme.fontSize.h5};
`

export const MediumText = styled(BaseText)`
  font-weight: ${(p) => p.theme.fontWeight.medium};
`

export const SemiBoldText = styled(BaseText)`
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
`

export const BoldText = styled(BaseText)`
  font-weight: ${(p) => p.theme.fontWeight.bold};
`

export const DescText = styled(BaseText)`
  font-size: ${(p) => p.theme.fontSize.desc};
  line-height: 1.6;
`
