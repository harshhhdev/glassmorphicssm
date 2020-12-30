import styled from "styled-components"

export const GlassText = styled.h1`
  position: absolute;
  font-size: 120px;
  color: white;
  user-select: none;
  z-index: -1;
`

export const GlassParent = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Glass = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  display: flex;
  width: 550px;
  height: 250px;
  z-index: 2;
`

export const GlassPiece2 = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  display: flex;
  margin: 0 auto;
  width: 90px;
  height: 90px;
  top: -30px;
  left: -80%;
  right: 0;
  z-index: 4;
`

export const GlassPiece3 = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  display: flex;
  margin: 0 auto;
  width: 100px;
  height: 60px;
  top: 220px;
  right: 30px;
  z-index: 3;
`

export const GlassPiece4 = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  display: flex;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: -90px;
  right: -80px;
`
