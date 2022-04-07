import React, { Component } from 'react'
import styled from 'styled-components'
import { BaseDiv, FireDiv, MainHeading } from '../styles'
import CoolText from './CoolText'

const FireSpan = styled.span`
  position: absolute;

  /* top: 0; */
  width: 100%;
  height: 90%;
  display: flex;
  align-items: end; /** Y-axis align **/
  justify-content: center; /** X-axis align **/
  color: white;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
  font-size: larger;
`

class HelloWorld extends Component {
  render() {
    return (
      <>
        <title>What&apos;s goin</title>
        <MainHeading>Hello World</MainHeading>
        <BaseDiv>I&apos;m a generic component definition</BaseDiv>
        <FireDiv>
          <FireSpan>CSS sux</FireSpan>
        </FireDiv>
        <div>
          <CoolText />
        </div>
      </>
    )
  }
}

export default HelloWorld
