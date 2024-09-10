
function searchItems(items, query) {
    const lowerCaseQuery = query.toLowerCase();

    return items.filter(item => 
        item.name.toLowerCase().includes(lowerCaseQuery) || 
        item.description.toLowerCase().includes(lowerCaseQuery) 
    );
}
export{searchItems}

