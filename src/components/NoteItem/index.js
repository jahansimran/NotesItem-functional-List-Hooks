import {ListItem, ListHeading, ListPara} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {userInput, textInput} = noteDetails
  return (
    <ListItem>
      <ListHeading>{userInput}</ListHeading>
      <ListPara>{textInput}</ListPara>
    </ListItem>
  )
}

export default NoteItem
