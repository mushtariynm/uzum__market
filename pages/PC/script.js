import { ProductCard } from "../../components/productCard";
import { getData } from "../../libs/http";
import { reload } from "../../libs/utils";

getData('goods')
.then(res => {
    let category = res.data.filter(item => item.type == 'PC')
    reload(category, 'PC', ProductCard)
})
.catch(error => console.error(error)
)