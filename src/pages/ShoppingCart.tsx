import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import {
  BaseText,
  H4Text,
  H5Text,
  MediumText,
  SemiBoldText,
} from '../components/common/Text'
import { Column, Row } from '../components/common/Layout'
import { postRequest } from '../fetcher'

export const ShoppingCart: React.FC = () => {
  const [isCreated, setIsCreated] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0)
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
          <TabNameText
            isSelected={selectedTab === 1}
            onClick={() => setSelectedTab(1)}
          >
            일반구매(0)
          </TabNameText>
          <TabNameText
            isSelected={selectedTab === 2}
            onClick={() => setSelectedTab(2)}
          >
            자주산상품(0)
          </TabNameText>
          <TabNameText
            isSelected={selectedTab === 3}
            onClick={() => setSelectedTab(3)}
          >
            찜한상품(0)
          </TabNameText>
          <TabNameText
            isSelected={selectedTab === 4}
            onClick={() => setSelectedTab(4)}
          >
            그룹카트(0)
          </TabNameText>
        </Row>
      </Column>
      {selectedTab === 4 ? (
        <>
          {isCreated ? (
            <Column
              style={{
                gap: 5,
                padding: '10px 15px',
                backgroundColor: theme.color.background3,
                borderBottom: `5px solid ${theme.color.line}`,
              }}
            >
              <Row style={{ gap: 5 }}>
                <SemiBoldText style={{ fontSize: 20 }}>강릉 여행</SemiBoldText>
                <img src='/icons/bell.svg' alt='bell' width={24} style={{}} />
              </Row>
              <Row style={{ justifyContent: 'space-between' }}>
                <Row style={{ gap: 15 }}>
                  <BaseText>참여자</BaseText>
                  <Row style={{ gap: 5 }}>
                    <Chip>나</Chip>
                    <Chip>장민주</Chip>
                  </Row>
                </Row>
                <MediumText style={{ color: theme.color.secondary }}>
                  초대하기
                </MediumText>
              </Row>
            </Column>
          ) : (
            <Column
              style={{
                gap: 20,
                alignItems: 'center',
                justifyContent: 'center',
                height: 'calc(100vh - 185px)',
              }}
            >
              <Column style={{ gap: 10, alignItems: 'center' }}>
                <img
                  src='/icons/shopping-cart.svg'
                  alt='shopping-cart'
                  width={78}
                />
                <H5Text style={{ fontWeight: theme.fontWeight.medium }}>
                  그룹카트가 없습니다.
                </H5Text>
              </Column>
              <RoundBtn
                onClick={() => {
                  const name = prompt('그룹카트명을 입력해주세요')
                  if (!name) return
                  postRequest('/products/create-cart', { name })
                  setIsCreated(true)
                }}
              >
                그룹카트 만들기
              </RoundBtn>
            </Column>
          )}
        </>
      ) : null}
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
      ? `border-bottom: 3px solid ${p.theme.color.secondary}; line-height: 15px;`
      : ''}
  cursor: pointer;
`

const RoundBtn = styled.button`
  width: 220px;
  padding: 10px;
  border-radius: 100px;
  color: ${(p) => p.theme.color.secondary};
  font-size: ${(p) => p.theme.fontSize.desc};
  background-color: ${(p) => p.theme.color.white1};
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  border: 1px solid ${(p) => p.theme.color.secondary};
`

const Chip = styled(BaseText)`
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 16px;
  background-color: #efefef;
  color: ${(p) => p.theme.color.black2};
`
