import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #161624;
  height: 100%;
  width: 100%;
`
export const Heading = styled.h1`
  font-size: 27px;
  font-family: 'Roboto';
  font-weight: bold;
  color: white;
`
export const ListContainer = styled.ul`
  border-radius: 10px;
  border: 1px solid #334155;
  min-height: 400px;
  max-height: 600px;
  overflow-y: auto;
  list-style-type: none;
  width: 90%;
`
export const ListItem = styled.li`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3px;
  padding: 10px;
  width: 100%;
  background-color: #334155;
`
export const HrLine = styled.hr`
  border: 1px solid #334155;
`
export const Title = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: normal;
  color: white;
`
export const ButtonElement = styled.button`
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 100px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto';
`
export const VisitedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`
export const VisitedListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  width: 100%;
`
export const ListItemVisited = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 5px;
  padding-left: 5px;
  padding-right: 5px;
`
export const ImageElement = styled.img`
  width: 100%;
`
export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  background-color: #334155;
  border: none;
`
export const ParaElement = styled.p`
  color: white;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto';
`
export const ButtonRemove = styled.button`
  border: 1px solid #334155;
  border-radius: 10px;
  height: 40px;
  width: 100px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto';
  background-color: #1f1f2f;
`
