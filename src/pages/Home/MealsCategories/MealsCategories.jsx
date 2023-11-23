import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const MealsCategories = () => {
    const [tabIndex,setTsbIndex]=useState(0)
    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTsbIndex(index)}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default MealsCategories;