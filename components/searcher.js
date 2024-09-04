// searcher.js

/**
 * Функция для поиска продуктов по ключевому слову.
 * @param {Array} items - Массив объектов, в котором выполняется поиск.
 * @param {string} query - Ключевое слово для поиска.
 * @returns {Array} - Массив найденных объектов.
 */
function searchItems(items, query) {
    // Приводим запрос к нижнему регистру для нечувствительности к регистру
    const lowerCaseQuery = query.toLowerCase();

    // Фильтруем массив объектов, оставляя только те, которые содержат ключевое слово
    return items.filter(item => 
        item.name.toLowerCase().includes(lowerCaseQuery) || // Поиск по имени
        item.description.toLowerCase().includes(lowerCaseQuery) // Поиск по описанию
    );
}
export{searchItems}

