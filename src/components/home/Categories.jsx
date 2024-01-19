import React from 'react'
import styled from 'styled-components'
import dataStore from "../../data/dataStore.json"
import { countCategories } from '../../utilities/dataActions';

const CategoriesContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
`;
const CategoriesHeader = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-evenly;
    
    font-size: 30px;
    font-weight: 700;
    
`;
const CategoriesContent = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;
const CategoryItem = styled.div`
    background-color: var(--gray-dark);
    width: 200px;
    height: 145px;
    border-radius: 5px;
    margin-top: 5px;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 400;
    color:var(--white);
    text-transform: capitalize;
`;
const CategoryItemContainer = styled.div`
    width: 200px;
    height: 150px;
    &:hover > div{
        margin-top: 0px;
    }
`;

const Categories = () => {
    const resultCount = countCategories(dataStore,6);
    console.log("Categories Count:", resultCount);

    return (
        <>
            <CategoriesContainer>
                <CategoriesHeader>browse categories</CategoriesHeader>
                <CategoriesContent>
                    {/* desde aqui
                    <CategoryItemContainer>
                        <CategoryItem>
                            Prueba
                        </CategoryItem>
                    </CategoryItemContainer> */}
                    {Object.keys(resultCount).map(category => (
                        <CategoryItemContainer key={category}>
                            <CategoryItem>
                                {category}
                            </CategoryItem>
                        </CategoryItemContainer>
                    ))}
                    
                </CategoriesContent>
            </CategoriesContainer>
        </>
    )
}

export default Categories