import React, { useRef, useState } from 'react'
import styled from 'styled-components'

interface InputProps {
  readonly inputColor?: string
}

const Input = styled.input<InputProps>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.theme.colors.tertiary || 'green'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

const SpinDiv = styled.div`
  /* top: 0; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; /** Y-axis align **/
  justify-content: center; /** X-axis align **/
  color: white;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
  font-size: larger;
`

export default function CoolText() {
  const inputEl = useRef<HTMLInputElement>(null)
  const [text, setText] = useState('')
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current?.focus()
  }
  return (
    <>
      <Input
        ref={inputEl}
        type="text"
        value={text}
        onInput={(e) => setText(e.currentTarget.value)}
        placeholder="type here!"
      />
      <button onClick={onButtonClick}>Focus the input</button>
      <SpinDiv>{text}</SpinDiv>
    </>
  )
}
