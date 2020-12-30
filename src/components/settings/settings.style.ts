import styled from "styled-components"

export const SettingPanel = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    159.43deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.432) 100%
  );
  backdrop-filter: blur(21px);
  width: 40%;
  height: 600px;
  align-items: center;
  border-radius: 20px;
  max-width: 800px;
  min-width: 400px;
  justify-content: center;
`

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
`

export const Option = styled.div`
  display: flex;
  align-items: center;
`

export const OptionSlider = styled.input`
  width: 70%;
`

export const OptionTitle = styled.h1`
  font-size: 24px;
  padding-right: 20px;
`

export const code = styled.div`
  background: #263238;
  color: #f8f8f8;
  padding: 20px;
  font-family: monospace;
  margin-top: 50px;
  font-size: 16px;
  border-radius: 7px;
  width: 300px;
`

export const Value = styled.p`
  font-size: 24px;
  padding-left: 10px;
`

export const Copy = styled.button`
  background: #0070f3;
  outline: none;
  border: none;
  padding: 10px;
  color: white;
  width: 70px;
  margin-top: 20px;
  font-size: 18px;
  border-radius: 7px;
  box-shadow: 1px 1px 20px #0070f3;
`
