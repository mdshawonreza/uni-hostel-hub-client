import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMeals from '../../../hooks/useMeals';
import MealsTab from '../MealsTab/MealsTab';



const MealsCategories = () => {
    const [tabIndex, setTsbIndex] = useState(0)
    const [meals] = useMeals()

    const breakfast = meals.filter(item => item.mealCategory === 'Breakfast')
    const lunch = meals.filter(item => item.mealCategory === 'Lunch')
    const dinner = meals.filter(item => item.mealCategory === 'Dinner')
    
    return (
        <div className='max-w-[380px] md:max-w-3xl lg:max-w-6xl mx-auto my-12'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTsbIndex(index)}>
                <TabList className="bg-gray-300 border-2 p-6 rounded-md flex-col md:flex-row gap-5 max-w-[300px] md:max-w-3xl lg:max-w-5xl mx-auto flex justify-around ">
                    <Tab className="btn bg-white  btn-outline hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] text-xl font-semibold ">All Meals</Tab>
                    <Tab className="btn bg-white  btn-outline hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] text-xl font-semibold ">Breakfast</Tab>
                    <Tab className="btn bg-white  btn-outline hover:bg-gradient-to-tr from-[#121f4a] to-[#143192]  text-xl font-semibold">Lunch</Tab>
                    <Tab className="btn bg-white  btn-outline hover:bg-gradient-to-tr from-[#121f4a] to-[#143192] text-xl font-semibold ">Dinner</Tab>
                </TabList>
                <TabPanel className='mt-12'>
                   <MealsTab items={meals}></MealsTab>
                </TabPanel>
                <TabPanel className='mt-12'>
                   <MealsTab items={breakfast}></MealsTab>
                </TabPanel>
                <TabPanel> 
                <MealsTab items={lunch}></MealsTab>
                </TabPanel>
                <TabPanel>
                <MealsTab items={dinner}></MealsTab>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default MealsCategories;