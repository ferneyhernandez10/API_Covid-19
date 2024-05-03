import React from 'react'
import styled from 'styled-components'
import GetDataCovid19History from './GetDataCovid19History';

const TabContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    background: red;
`;

const selectedColor = 'rgb(30,190,230)';

const defaultColor = 'black';

const TabItem = styled.div`
  background-color: white;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 1px solid ${(props) => (props.selected ? selectedColor : defaultColor)};
`;

const Tabs = () => {
  return (
    <>
    <TabContainer>
    <TabItem>COVID-19 History</TabItem>
    <TabItem>COVID-19 Worldwide</TabItem>
    <TabItem>COVID-19 USA</TabItem>
    <TabItem>COVID-19 Vaccines Worldwide</TabItem>
    </TabContainer>
    <GetDataCovid19History/>
    </>

  )
}

export default Tabs