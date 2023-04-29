import * as React from 'react'
import styled from 'styled-components'

const ToggleContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 190px;
  height: 24px;
  border-radius: 12px;
  margin-right: 1rem;
`

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span:before {
    transform: translateX(76px);
  }
`

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 12px;
  transition: 0.3s;

  &:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 60%;
    left: 0;
    bottom: 0;
    background-color: white;
    border-radius: 12px;
    transition: 0.3s;
  }
`

const ToggleText = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #888;
  transition: 0.3s;

  &.on {
    right: 30px;
  }

  &.off {
    left: 40px;
  }
`

type ToggleProps = {
  onChange?: (checked: boolean) => void
}

export const Toggle: React.FC<ToggleProps> = ({ onChange }) => {
  const [checked, setChecked] = React.useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    setChecked(isChecked)
    onChange && onChange(isChecked)
  }

  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={checked} onChange={handleChange} />
      <ToggleSlider className={checked ? 'on' : 'off'} />
      <ToggleText className={checked ? 'on' : 'off'}>
        {checked ? 'Global' : 'NYC'}
      </ToggleText>
    </ToggleContainer>
  )
}
