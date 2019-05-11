import './App.css';
import React , {useState, useEffect} from 'react';
import Catagory from "./Json/categories.json"

const App = () => {
  const [state , setState] = useState({
    categories : []
  })
  const [state2 , setState2] = useState({
    categoriesSub : []
  })
  const [search , setSearch] = useState({
    search : ""
  })
  
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      categories : Catagory
    }))
    setState2((prevState) => ({
      ...prevState,
      categoriesSub : Catagory
    }))
    }, [])
    
  const handleChange = (e) => {
    const {name , value} = e.target;
    setSearch((prevS) => ({
      [name] : value
    }))
  }
  
  // Level 1 Sub Categories
  const filterFood = state.categories.filter((items) => items.ParentCategoryId === 2 && items.Name.indexOf(search.search) !== -1);
  const filterOP = state.categories.filter((items) => items.ParentCategoryId === 3 && items.Name.indexOf(search.search) !== -1);
  const filterHC = state.categories.filter((items) => items.ParentCategoryId === 81 && items.Name.indexOf(search.search) !== -1);
  const filterBH = state.categories.filter((items) => items.ParentCategoryId === 224 && items.Name.indexOf(search.search) !== -1);
  const filterPC = state.categories.filter((items) => items.ParentCategoryId === 229 && items.Name.indexOf(search.search) !== -1);
  const filterBC = state.categories.filter((items) => items.ParentCategoryId === 209 && items.Name.indexOf(search.search) !== -1);
  
  // Level 2 Sub Categories
  // Food
  const filterFoodSub = state2.categoriesSub.filter((items) => items.ParentCategoryId === 7 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub2 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 14 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub3 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 17 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub4 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 23 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub5 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 49 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub6 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 58 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub7 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 65 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub8 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 72 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub9 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 100 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub10 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 104 && items.Name.indexOf(search.search) !== -1);
  
  // Office Products
  const filterFoodSub11 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 113 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub12 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 201 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub13 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 206 && items.Name.indexOf(search.search) !== -1);
  
  // Beauty & Health
  const filterFoodSub14 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 42 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub15 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 30 && items.Name.indexOf(search.search) !== -1);

  // Baby Care
  const filterFoodSub16 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 210 && items.Name.indexOf(search.search) !== -1);
  const filterFoodSub17 = state2.categoriesSub.filter((items) => items.ParentCategoryId === 216 && items.Name.indexOf(search.search) !== -1);

  // New Sorted List
  const sortFoodItems = [{name : "Fruits & Vegetables", data : [...filterFoodSub] }, {name : "Breakfast", data : [...filterFoodSub2] },{name : "Beverages", data : [...filterFoodSub3] },{name : "Meat & Fish", data : [...filterFoodSub4] },{name : "Snacks", data : [...filterFoodSub5] },{name : "Dairy", data : [...filterFoodSub6] },{name : "Frozen & Canned", data : [...filterFoodSub7] },{name : "Bread & Bakery", data : [...filterFoodSub8] },{name : "Baking Needs", data : [...filterFoodSub9] },{name : "Cooking", data : [...filterFoodSub10] }]

  const sortOPItems = [{name : "Writing & Drawing", data : [...filterFoodSub11] },{name : "Organizing", data : [...filterFoodSub12] },{name : "Printing", data : [...filterFoodSub13] }]
  const sortBHItems = [{name : "Health Care", data : [...filterFoodSub14] },{name : "Personal Care", data : [...filterFoodSub15] }]
  const sortBCItems = [{name : "Diapering", data : [...filterFoodSub16] },{name : "Fooding", data : [...filterFoodSub17] }]

  // Sort Display
  const sortFoodDisplay = sortFoodItems.map(items => {return(
    <div>
      <ul>
      {items.data.length > 0 ? <li>{items.name}</li> : null}
        <ul>
          {items.data && items.data.map(items => <li>{items.Name}</li>)}
        </ul>
      </ul>
    </div>
  )})

  const sortOPDisplay = sortOPItems.map(items => {return(
    <div>
      <ul>
      {items.data.length > 0 ? <li>{items.name}</li> : null}
        <ul>
          {items.data && items.data.map(items => <li>{items.Name}</li>)}
        </ul>
      </ul>
    </div>
  )})

  const sortBHDisplay = sortBHItems.map(items => {return(
    <div>
      <ul>
      {items.data.length > 0 ? <li>{items.name}</li> : null}
        <ul>
          {items.data && items.data.map(items => <li>{items.Name}</li>)}
        </ul>
      </ul>
    </div>
  )})
  const sortBCDisplay = sortBCItems.map(items => {return(
    <div>
      <ul>
      {items.data.length > 0 ? <li>{items.name}</li> : null}
        <ul>
          {items.data && items.data.map(items => <li>{items.Name}</li>)}
        </ul>
      </ul>
    </div>
  )})

  // Level 2 Display
  // Foods
  const FaV = filterFoodSub.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const Breakfast = filterFoodSub2.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const Beverages = filterFoodSub3.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const MeatFish = filterFoodSub4.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const Snacks = filterFoodSub5.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const Dairy = filterFoodSub6.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const FrozenCanned = filterFoodSub7.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const BreadBakery = filterFoodSub8.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const BakingNeeds = filterFoodSub9.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const Cooking = filterFoodSub10.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})

  // Office Products
  const WritingDrawing = filterFoodSub11.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const Organizing = filterFoodSub12.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const Printing = filterFoodSub13.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})

  // Beauty & Health
  const HealthCare = filterFoodSub14.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const PersonalCare = filterFoodSub15.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})

  // Baby Care
  const Diapering = filterFoodSub16.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const Fooding = filterFoodSub17.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})



  // Level 1 Display
  const food = filterFood.length > 0? (filterFood.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
        {items.Name === "Fruits & Vegetables"? FaV : null}
        {items.Name === "Breakfast"? Breakfast : null}
        {items.Name === "Beverages"? Beverages : null}
        {items.Name === "Meat & Fish"? MeatFish : null}
        {items.Name === "Snacks"? Snacks : null}
        {items.Name === "Dairy"? Dairy : null}
        {items.Name === "Frozen & Canned"? FrozenCanned : null}
        {items.Name === "Bread & Bakery"? BreadBakery : null}
        {items.Name === "Baking Needs"? BakingNeeds : null}
        {items.Name === "Cooking"? Cooking : null}
      </ul>
    </div>
  )})) : sortFoodDisplay
  const HC = filterHC.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )}) 
  const OP = filterOP.length > 0 ? filterOP.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
        {items.Name === "Writing & Drawing"? WritingDrawing : null}
        {items.Name === "Organizing"? Organizing : null}
        {items.Name === "Printing"? Printing : null}
      </ul>
    </div>
  )}) : sortOPDisplay
  const BH = filterBH.length > 0 ? filterBH.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
        {items.Name === "Health Care"? HealthCare : null}
        {items.Name === "Personal Care"? PersonalCare : null}
      </ul>
    </div>
  )}) : sortBHDisplay 
  const PC = filterPC.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
      </ul>
    </div>
  )})
  const BC = filterBC.length > 0 ? filterBC.map(items => {return(
    <div>
      <ul>
        <li>{items.Name}</li>
        {items.Name === "Diapering"? Diapering : null}
        {items.Name === "Fooding"? Fooding : null}
      </ul>
    </div>
  )}) : sortBCDisplay


  const cata = state.categories.map(items => {
    return(
      items.ParentCategoryId === 0 &&
      <div>
        <ul>
          <li>{items.Name}</li>
          {items.Name === "Food"? food : null}
          {items.Name === "Home & Cleaning"? HC : null}
          {items.Name === "Office Products"? OP : null}
          {items.Name === "Beauty & Health"? BH : null}
          {items.Name === "Pet Care"? PC : null}
          {items.Name === "Baby Care"? BC : null}
        </ul>
      </div>
    )
  })


  return (
    <div className="App">
      <div className="search">
        <input 
          type="text" 
          name="search" 
          value={state.search} 
          onChange={handleChange} 
          placeholder="Search for products. (e.g. eggs, milk, potato)"/>
        </div>
        <br />
        <br />
        {cata}
    </div>
  );
}

export default App;
