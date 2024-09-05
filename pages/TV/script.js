import { footer } from "../../components/footer";
import { header } from "../../components/header";
import { ProductCard } from "../../components/productCard";
import { getData } from "../../libs/http";
import { reload } from "../../libs/utils";
header()
footer()
getData('goods')
.then(res => {
    let category = res.data.filter(item => item.type == 'TV')
    reload(category, 'TV', ProductCard)
})
.catch(error => console.error(error)
)