import directoryGamesImages from "../assets/images/games/directoryGamesImages";
import directoryImages from "../assets/images/directoryImages";

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
export const getRandomDiscount = () => {
    const randomIndex = Math.floor(Math.random() * DISCOUNTS.length);
    return DISCOUNTS[randomIndex];
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
        } else {
            console.log(`Duplicate found: ${game.name}`);
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

