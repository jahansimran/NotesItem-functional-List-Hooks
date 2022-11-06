import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  Heading,
  FormContainer,
  Input,
  TextInput,
  Button,
  ButtonContainer,
  UnOrderList,
  NoItemContainer,
  NoNotesHeading,
  NoNotesPara,
  NoImage,
} from './styledComponents'

const Notes = () => {
  const [userInput, setUserInput] = useState('')
  const [textInput, setTextInput] = useState('')
  const [noteItemList, setNoteItemList] = useState([])

  const onChangeUserInput = event => {
    setUserInput(event.target.value)
  }

  const onChangeTextArea = event => {
    setTextInput(event.target.value)
  }

  const renderEmptyView = () => (
    <NoItemContainer>
      <NoImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesHeading>No Notes Yet</NoNotesHeading>
      <NoNotesPara>Notes you add will appear here</NoNotesPara>
    </NoItemContainer>
  )

  const renderListView = () => (
    <UnOrderList>
      {noteItemList.map(each => (
        <NoteItem noteDetails={each} key={each.id} />
      ))}
    </UnOrderList>
  )

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {
      id: v4(),
      userInput,
      textInput,
    }
    setNoteItemList(prevState => [...prevState, newNote])
    setUserInput('')
    setTextInput('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onSubmitForm}>
        <Input
          type="text"
          placeholder="Title"
          value={userInput}
          onChange={onChangeUserInput}
        />
        <TextInput
          rows="5"
          placeholder="Take a Note..."
          value={textInput}
          onChange={onChangeTextArea}
        />
        <ButtonContainer>
          <Button type="submit">Add</Button>
        </ButtonContainer>
      </FormContainer>
      {noteItemList.length === 0 ? renderEmptyView() : renderListView()}
    </MainContainer>
  )
}
export default Notes
