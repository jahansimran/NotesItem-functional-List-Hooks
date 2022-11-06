import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 40px;
  color: #4c63b6;
`
export const FormContainer = styled.form`
  width: 80%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 9px #475569;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 40px;
`
export const Input = styled.input`
  color: #334155;
  padding: 12px;
  width: 100%;
  border: none;
  background: transparent;
`
export const TextInput = styled.textarea`
  color: #475569;
  padding: 12px;
  width: 100%;
  border: none;
  background: transparent;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #4c63b6;
  padding: 10px;
  width: 50px;
  border: none;
  border-radius: 2px;
  margin-top: 20px;
`
export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const NoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NoImage = styled.img`
  height: 100px;
  width: 100px;
`
export const NoNotesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #475569;
`
export const NoNotesPara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #475569;
`
