import React from 'react'
import { theme } from '../theme'
import { BaseText, H4Text } from '../components/common/Text'
import { Column, Row } from '../components/common/Layout'
import styled from 'styled-components'

export const ShoppingCart: React.FC = () => {
  return (
    <Column>
      <Row style={{ padding: '20px 10px' }}>
        <img
          src='/icons/chevron-left.svg'
          alt='chevron-left'
          width={44}
          style={{ position: 'absolute' }}
        />
        <H4Text
          style={{
            width: '100%',
            textAlign: 'center',
            fontWeight: theme.fontWeight.bold,
          }}
        >
          장바구니
        </H4Text>
      </Row>
      <Column style={{ borderBottom: `1px solid ${theme.color.line}` }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <TabNameText isSelected={false}>일반구매(0)</TabNameText>
          <TabNameText isSelected={false}>자주산상품(0)</TabNameText>
          <TabNameText isSelected={false}>찜한상품(0)</TabNameText>
          <TabNameText isSelected={true}>그룹카트(0)</TabNameText>
        </Row>
      </Column>
    </Column>
  )
}

const TabNameText = styled(BaseText)<{ isSelected: boolean }>`
  padding: 5px 10px 15px;
  color: ${(p) =>
    p.isSelected ? p.theme.color.secondary : p.theme.color.black2};
  font-weight: ${(p) => (p.isSelected ? p.theme.fontWeight.bold : undefined)};
  ${(p) =>
    p.isSelected
      ? `border-bottom: 3px solid ${p.theme.color.secondary}; line-hight: 15px;`
      : ''}
  cursor: pointer;
`
