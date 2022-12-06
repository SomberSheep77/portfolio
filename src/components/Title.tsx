import React from 'react'
import styled from 'styled-components'

type Props = {}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20vw;
  /* background-color: ${(props) => props.theme.bg}; */
  /* border: 1px solid red; */
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  /* width: 140%; */
  & > div:first-child {
    text-align: left;
  }
  & > div:last-child {
    text-align: right;
  }
`

const Text = styled.div`
  color: ${(props) => props.theme.primary};
  font: 400 6vw 'Bodoni Mona';
  width: 100%;
  /* border: 1px solid blue; */
`

export default function Title({}: Props) {
  return (
    <Container>
      <TextContainer>
        <Text>Somber Sheep</Text>
        <Text>Seventy-Seven</Text>
      </TextContainer>
    </Container>
  )
}
