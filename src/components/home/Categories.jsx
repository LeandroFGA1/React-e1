import React from 'react'
import styled from 'styled-components'
import dataStore from "../../data/dataStore.json"

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

    function countCategories(games) {
        const countedCategories = {};
    
        games.forEach(game => {
            if (game.category) {
                game.category.forEach(category => {
                    countedCategories[category] = (countedCategories[category] || 0) + 1;
                });
            }
        });
        
        const sortedCategories = Object.entries(countedCategories).sort((a, b) => b[1] - a[1]);

        const topCategories = sortedCategories.slice(0, 5);

        const result = topCategories.reduce((acc, [category, count]) => {
            acc[category] = count;
            return acc;
        }, {});
    
        return result;
    }
    
    const resultCount = countCategories(dataStore);
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