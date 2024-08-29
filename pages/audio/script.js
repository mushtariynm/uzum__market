import { ProductCard } from "../../components/productCard";
import { getData } from "../../libs/http";
import { reload } from "../../libs/utils";


getData('goods')
.then(res => {
    let category = res.data.filter(item => item.type === 'audio')
    reload(category, 'audio', ProductCard)
})
.catch(error => console.error(error)
)