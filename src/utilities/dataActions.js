import directoryGamesImages from "../assets/images/games/directoryGamesImages";
import directoryImages from "../assets/images/directoryImages";
import dataStore from "../data/dataStore.json"
// categories
export function countCategories(games,quantity) {
    const countedCategories = {};

    games.forEach(game => {
        if (game.category) {
            game.category.forEach(category => {
                countedCategories[category] = (countedCategories[category] || 0) + 1;
            });
        }
    });

    const sortedCategories = Object.entries(countedCategories).sort((a, b) => b[1] - a[1]);

    const topCategories = sortedCategories.slice(0, quantity);

    const result = topCategories.reduce((acc, [category, count]) => {
        acc[category] = count;
        return acc;
    }, {});

    return result;
}


// cards
export const getSystemClassName = (systems) => {
    const SYSTEMS = ["windows", "apple", "android"];
    const validSystems = systems.filter(system => SYSTEMS.includes(system));
    return validSystems.join(' ');
};

export const buildBackgroundImage = (game) => {
    return game.imageID && directoryGamesImages[game.imageID]
        ? `url(${directoryGamesImages[game.imageID]})`
        : `url(${directoryImages.noImage})`;
};

const DISCOUNTS = [30, 50, 60, 90];

// Función para aplicar descuentos
export const applyDiscount = (price, discountPercentage) => {
    const discountedPrice = price - (price * (discountPercentage / 100));
    return {
        discountedPrice,
        discountPercentage,
    };
};

// Función para obtener un descuento aleatorio de la lista
export const getRandomDiscount = (gameID) => {
    const lastDigit = gameID % 10;

    if (lastDigit === 0 || lastDigit === 3 || lastDigit === 8) {
        return 30;
    } else if (lastDigit === 1 || lastDigit === 4 || lastDigit === 9) {
        return 50;
    } else if (lastDigit === 5 || lastDigit === 6) {
        return 60;
    } else {
        return 90;
    }
};





//store game
export const removeDuplicatesByName = (games) => {
    const uniqueNames = new Set();
    const uniqueGames = [];
    
    for (const game of games) {
        const lowercaseName = game.name.toLowerCase();

        if (!uniqueNames.has(lowercaseName)) {
            uniqueNames.add(lowercaseName);
            uniqueGames.push(game);
        }
    }

    return uniqueGames;
}




export const groupByCategory =(games) => {
    const groupedGames = {};

    games.forEach((game) => {
        if (game.category && game.category.length > 0) {
            game.category.forEach((category) => {
                if (!groupedGames[category]) {
                    groupedGames[category] = [];
                }
                groupedGames[category].push(game);
            });
        }
    });

    return groupedGames;
}

export function hasEnoughGames(category) {
    return category.games.length >= 5;
}


export function categoryPagePacker(categoryName){
    const dataFilter = removeDuplicatesByName(dataStore);
    const filteredGames = dataFilter.filter((game) =>
        game.category && game.category.includes(categoryName)
    );
    return filteredGames;

}